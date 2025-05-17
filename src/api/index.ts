import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/ping', (req, res) => {
  res.json({ message: 'Bot API is running!' });
});

app.listen(3000, () => {
  console.log('API running on http://localhost:3000');
});
