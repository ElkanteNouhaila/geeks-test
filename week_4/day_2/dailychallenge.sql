db.users.insertOne({
  username: "CodeMaster",
  bio: "Full-stack dev and MongoDB enthusiast",
  socialLinks: {
    twitter: "@CodeMaster",
    github: "github.com/CodeMaster"
  }
});

db.users.find().pretty();


db.posts.insertOne({
  title: "Why I Love MongoDB",
  body: "Schema flexibility is a game changer...",
  authorId: ObjectId("PASTE_USER_ID_HERE"), // Reference to User
  tags: ["NoSQL", "Database", "Tech"],
  comments: [
    {
      user: "CodeMaster",
      text: "Great article! Very clear.",
      date: new Date()
    }
  ]
});

db.posts.find().pretty();