import mongoose from 'mongoose';

const inventoryItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    subCategory: { type: String }
  },
  {
    timestamps: true
  }
);

// Create a model
const InventoryItem = mongoose.model('InventoryItem', inventoryItemSchema);
export default InventoryItem;
