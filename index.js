import express from 'express';
import recipeRouter from './routes/recipeRouter';


const app = express();
const port = process.env.PORT || 5000;

app.use('/recipes, recipeRouter');
app.listen(port, () =>   console.log(`Server listening at http://localhost:${port}`));