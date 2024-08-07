import InventoryItem from '../models/InventoryItem.js';

// Fetch all inventory items
export const getInventory = async (req, res) => {
  try {
    const items = await InventoryItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new inventory item
export const addItem = async (req, res) => {
  const { name, quantity, price, category, subCategory } = req.body;
  const item = new InventoryItem({ name, quantity, price, category, subCategory });
  try {
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await InventoryItem.findById(id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, quantity, price, category, subCategory, soldItems } = req.body;

  try {
    // Find the item by ID
    const item = await InventoryItem.findById(id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Update fields only if they are present in the request body
    if (name) item.name = name;
    if (quantity) item.quantity = quantity;
    if (price) item.price = price;
    if (category) item.category = category;
    if (subCategory) item.subCategory = subCategory;
    if (soldItems !== undefined) item.soldItems = soldItems; // Only update soldItems if it's provided

    // Save the updated item
    await item.save();
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await InventoryItem.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(204).send(); // No content to return after deletion
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
