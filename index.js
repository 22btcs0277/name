const express = require('express');
const mongoose = require('mongoose');

const app = express();

// MongoDB connection URI (replace 'your_database' with your actual database name)
const MONGODB_URI = "mongodb://127.0.0.1:27017/great";

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useUnifiedTopology:true
})
.then(() => {
  console.log('Connected to MongoDB construlaete');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Define a schema
const { Schema } = mongoose;
const exampleSchema = new Schema({
  name: String,
  age: Number,
  email: String
});

// Create a model from the schema
const ExampleModel = mongoose.model('Examplesss', exampleSchema);
const ExampleMode2 = mongoose.model('private', exampleSchema);

 
    // Create a new example document
    const exampleDocument = new ExampleModel({
      name: 'golu maurya ',
      age: 30,
      email: 'john@example.com'
    });
    const exampleDocument1= new ExampleModel({
      name: 'golu maurya ',
      age: 30,
      email: 'john@example.com'
    });

    exampleDocument.save()
    // exampleDocument1.save()
 

// Start the server
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

