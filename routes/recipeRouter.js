import express from 'express';

const recipeRouter = express.Router();

recipeRouter.get((req, res) => res.send('All recipes'));
recipeRouter.post((req, res) => res.send('Create recipe'));
recipeRouter.put((req, res) => res.send('Update recipe'));
recipeRouter.delete((req, res) => res.send('Delete Recipe'));

export default recipeRouter;

