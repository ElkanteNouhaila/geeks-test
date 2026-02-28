db.students.insertMany([
  { name: "Yassine", age: 19, city: "Rabat", major: "AI" },
  { name: "Sophia", age: 26, city: "Paris", major: "Cybersecurity" },
  { name: "Kaito", age: 22, city: "Tokyo", major: "Web Dev" },
  { name: "Elena", age: 31, city: "Madrid", major: "Data Science" },
  { name: "Marcus", age: 24, city: "New York", major: "AI" }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('69a3660820a59b26d244032a'),
    '1': ObjectId('69a3660820a59b26d244032b'),
    '2': ObjectId('69a3660820a59b26d244032c'),
    '3': ObjectId('69a3660820a59b26d244032d'),
    '4': ObjectId('69a3660820a59b26d244032e')
  }
}
db.students.find().pretty()
{
  _id: ObjectId('69a3660820a59b26d244032a'),
  name: 'Yassine',
  age: 19,
  city: 'Rabat',
  major: 'AI'
}
{
  _id: ObjectId('69a3660820a59b26d244032b'),
  name: 'Sophia',
  age: 26,
  city: 'Paris',
  major: 'Cybersecurity'
}
{
  _id: ObjectId('69a3660820a59b26d244032c'),
  name: 'Kaito',
  age: 22,
  city: 'Tokyo',
  major: 'Web Dev'
}
{
  _id: ObjectId('69a3660820a59b26d244032d'),
  name: 'Elena',
  age: 31,
  city: 'Madrid',
  major: 'Data Science'
}
{
  _id: ObjectId('69a3660820a59b26d244032e'),
  name: 'Marcus',
  age: 24,
  city: 'New York',
  major: 'AI'
}
db.students.find().pretty()
{
  _id: ObjectId('69a3660820a59b26d244032a'),
  name: 'Yassine',
  age: 19,
  city: 'Rabat',
  major: 'AI'
}
{
  _id: ObjectId('69a3660820a59b26d244032b'),
  name: 'Sophia',
  age: 26,
  city: 'Paris',
  major: 'Cybersecurity'
}
{
  _id: ObjectId('69a3660820a59b26d244032c'),
  name: 'Kaito',
  age: 22,
  city: 'Tokyo',
  major: 'Web Dev'
}
{
  _id: ObjectId('69a3660820a59b26d244032d'),
  name: 'Elena',
  age: 31,
  city: 'Madrid',
  major: 'Data Science'
}
{
  _id: ObjectId('69a3660820a59b26d244032e'),
  name: 'Marcus',
  age: 24,
  city: 'New York',
  major: 'AI'
}
db.students.find({ age: { $gte: 18, $lte: 25 } }).pretty()
{
  _id: ObjectId('69a3660820a59b26d244032a'),
  name: 'Yassine',
  age: 19,
  city: 'Rabat',
  major: 'AI'
}
{
  _id: ObjectId('69a3660820a59b26d244032c'),
  name: 'Kaito',
  age: 22,
  city: 'Tokyo',
  major: 'Web Dev'
}
{
  _id: ObjectId('69a3660820a59b26d244032e'),
  name: 'Marcus',
  age: 24,
  city: 'New York',
  major: 'AI'
}
db.students.updateOne(
  { name: "Yassine" },
  { $set: { city: "Casablanca" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.students.find({ name: "Yassine" }).pretty()
{
  _id: ObjectId('69a3660820a59b26d244032a'),
  name: 'Yassine',
  age: 19,
  city: 'Casablanca',
  major: 'AI'
}
db.students.deleteOne({ name: "Sophia" })
{
  acknowledged: true,
  deletedCount: 1
}
db.students.find().pretty()
{
  _id: ObjectId('69a3660820a59b26d244032a'),
  name: 'Yassine',
  age: 19,
  city: 'Casablanca',
  major: 'AI'
}
{
  _id: ObjectId('69a3660820a59b26d244032c'),
  name: 'Kaito',
  age: 22,
  city: 'Tokyo',
  major: 'Web Dev'
}
{
  _id: ObjectId('69a3660820a59b26d244032d'),
  name: 'Elena',
  age: 31,
  city: 'Madrid',
  major: 'Data Science'
}
{
  _id: ObjectId('69a3660820a59b26d244032e'),
  name: 'Marcus',
  age: 24,
  city: 'New York',
  major: 'AI'
}
db.students.updateMany(
  { major: "AI" },
  { $set: { major: "Generative AI" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
db.students.find().pretty()
{
  _id: ObjectId('69a3660820a59b26d244032a'),
  name: 'Yassine',
  age: 19,
  city: 'Casablanca',
  major: 'Generative AI'
}




-- new data
[{
  "_id": {
    "$oid": "69a3660820a59b26d244032a"
  },
  "name": "Yassine",
  "age": 19,
  "city": "Casablanca",
  "major": "Generative AI"
},
{
  "_id": {
    "$oid": "69a3660820a59b26d244032c"
  },
  "name": "Kaito",
  "age": 22,
  "city": "Tokyo",
  "major": "Web Dev"
},
{
  "_id": {
    "$oid": "69a3660820a59b26d244032d"
  },
  "name": "Elena",
  "age": 31,
  "city": "Madrid",
  "major": "Data Science"
},
{
  "_id": {
    "$oid": "69a3660820a59b26d244032e"
  },
  "name": "Marcus",
  "age": 24,
  "city": "New York",
  "major": "Generative AI"
}]