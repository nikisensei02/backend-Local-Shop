import mongoose from 'mongoose';

const soldItemsSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,  
      default: Date.now 
    },
    items: [
      {
        itemId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'InventoryItem',
          required: true
        },
        quantity: {
          type: Number,
          default: 0
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

const SoldItems = mongoose.model('SoldItems', soldItemsSchema);
export default SoldItems;