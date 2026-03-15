import express from 'express';
import routes from './routes/routes.js';
import errorMiddleware from './middleware/error.middleware.js';

const app = express();

app.use(express.json());
app.use('/', routes);
app.use(errorMiddleware);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});