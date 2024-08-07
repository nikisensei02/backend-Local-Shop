import express from 'express';
import {
  createSoldItem,
  getSoldItems,
  getSoldItemById,
  updateSoldItem,
  deleteSoldItem,
  getSoldItemsForGraph
} from '../controllers/soldItemsController.js'; // Adjust the path according to your folder structure

const router = express.Router();

// Define routes
router.post('/', createSoldItem); // Create a new sold item
router.get('/', getSoldItems);
router.get('/graphs', getSoldItemsForGraph); // Get all sold items
router.get('/:id', getSoldItemById); // Get a sold item by ID
router.put('/:id', updateSoldItem); // Update a sold item by ID
router.delete('/:id', deleteSoldItem); // Delete a sold item by ID

export default router;
