import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/advancedPatternsDB')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Connection Error:', err));

// Exercise 1

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference
});

const Post = mongoose.model('Post', postSchema);


// Exercise 2
const studentSchema = new mongoose.Schema({
  name: String,
  updatedAt: Date
});

studentSchema.pre('save', function() {
  this.updatedAt = Date.now();
});

const Student = mongoose.model('Student', studentSchema);

const runLab = async () => {
  try {
    console.log('\n📌 Exercise 1: Relationships');

    await User.deleteMany({});
    await Post.deleteMany({});

    const author = await User.create({ name: 'Lina', email: 'lina@example.com' });
    await Post.create({ title: 'Mongoose is Awesome', content: 'Let me explain why...', author: author._id });

    const postWithAuthor = await Post.findOne({ title: 'Mongoose is Awesome' }).populate('author');
    console.log(`Post Title: ${postWithAuthor.title}`);
    console.log(`Author Name: ${postWithAuthor.author.name}`);
    console.log(`Author Email: ${postWithAuthor.author.email}`);

    console.log('\n📌 Exercise 2: Pre-Save Middleware');

    await Student.deleteMany({});

    const student = new Student({ name: 'Omar' });
    await student.save();

    console.log('Student after save:', student);

    student.name = 'Omar Updated';
    await student.save();
    console.log('Student after update:', student);

    process.exit(0); 
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

runLab();