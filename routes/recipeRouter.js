import express from 'express';
import {getAll, getSingle, createOne, updateOne, deleteOne} from '../controllers/recipes';

const recipeRouter = express.Router();

recipeRouter.get('/', getAll);
recipeRouter.get('/:id', getSingle);
recipeRouter.post('/', createOne);
recipeRouter.put('/:id', updateOne);
recipeRouter.delete('/:id', deleteOne);

export default recipeRouter;

