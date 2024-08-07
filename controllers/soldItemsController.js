import SoldItems from '../models/SoldItems.js'; // Adjust the path according to your folder structure

// Create a new sold item entry
export const createSoldItem = async (req, res) => {
  try {
    const newSoldItem = new SoldItems(req.body);
    await newSoldItem.save();
    res.status(201).json(newSoldItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all sold items
export const getSoldItems = async (req, res) => {
  try {
    const soldItems = await SoldItems.find();
    res.status(200).json(soldItems);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a sold item by ID
export const getSoldItemById = async (req, res) => {
  try {
    const soldItem = await SoldItems.findById(req.params.id);
    if (!soldItem) {
      return res.status(404).json({ message: 'Sold item not found' });
    }
    res.status(200).json(soldItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a sold item by ID
export const updateSoldItem = async (req, res) => {
  try {
    const soldItem = await SoldItems.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!soldItem) {
      return res.status(404).json({ message: 'Sold item not found' });
    }
    res.status(200).json(soldItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a sold item by ID
export const deleteSoldItem = async (req, res) => {
  try {
    const soldItem = await SoldItems.findByIdAndDelete(req.params.id);
    if (!soldItem) {
      return res.status(404).json({ message: 'Sold item not found' });
    }
    res.status(200).json({ message: 'Sold item deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSoldItemsForGraph = async (req, res) => {
  try {
    const soldItems = await SoldItems.find().populate('items.itemId'); // Populate to include item details if needed
    res.status(200).json(soldItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
