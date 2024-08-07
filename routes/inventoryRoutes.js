import express from 'express';
import { getInventory, addItem, getItemById, updateItem, deleteItem } from '../controllers/inventoryController.js';

const router = express.Router();

router.get('/', getInventory);
router.post('/', addItem);
router.get('/:id', getItemById);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;
