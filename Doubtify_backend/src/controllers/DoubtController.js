// src/controllers/DoubtController.js

// Define the controller function
const createDoubt = (req, res) => {
  const { title, description } = req.body;
  // Simulate saving the doubt (replace with DB logic)
  console.log(`New doubt created: ${title}`);
  res.status(201).json({ message: 'Doubt created successfully' });
};

// Export the function properly
module.exports = {
  createDoubt,
};