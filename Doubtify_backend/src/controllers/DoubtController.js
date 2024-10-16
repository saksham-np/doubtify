const Doubt = require('../models/Doubt'); // Ensure this model exists and is correctly implemented

// Create a new doubt
exports.createDoubt = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newDoubt = new Doubt({ title, description });
    await newDoubt.save();
    res.status(201).json({ message: 'Doubt created successfully', doubt: newDoubt });
  } catch (error) {
    console.error('Error creating doubt:', error);
    res.status(500).json({ error: 'Failed to create doubt' });
  }
};

// Get all doubts
exports.getAllDoubts = async (req, res) => {
  try {
    const doubts = await Doubt.find();
    res.status(200).json(doubts);
  } catch (error) {
    console.error('Error fetching doubts:', error);
    res.status(500).json({ error: 'Failed to fetch doubts' });
  }
};

// Get a specific doubt by ID
exports.getDoubtById = async (req, res) => {
  try {
    const doubt = await Doubt.findById(req.params.id);
    if (!doubt) {
      return res.status(404).json({ error: 'Doubt not found' });
    }
    res.status(200).json(doubt);
  } catch (error) {
    console.error('Error fetching doubt:', error);
    res.status(500).json({ error: 'Failed to fetch doubt' });
  }
};

// Update a doubt by ID
exports.updateDoubt = async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedDoubt = await Doubt.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!updatedDoubt) {
      return res.status(404).json({ error: 'Doubt not found' });
    }
    res.status(200).json({ message: 'Doubt updated successfully', doubt: updatedDoubt });
  } catch (error) {
    console.error('Error updating doubt:', error);
    res.status(500).json({ error: 'Failed to update doubt' });
  }
};

// Delete a doubt by ID
exports.deleteDoubt = async (req, res) => {
  try {
    const deletedDoubt = await Doubt.findByIdAndDelete(req.params.id);
    if (!deletedDoubt) {
      return res.status(404).json({ error: 'Doubt not found' });
    }
    res.status(200).json({ message: 'Doubt deleted successfully' });
  } catch (error) {
    console.error('Error deleting doubt:', error);
    res.status(500).json({ error: 'Failed to delete doubt' });
  }
};
