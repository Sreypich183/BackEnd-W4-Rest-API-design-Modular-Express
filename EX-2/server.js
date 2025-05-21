// server.js
import express from 'express';
import logger from './middleware/logger.js';

import articleRoutes from './routes/articleRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import journalistRoutes from './routes/journalistRoutes.js';
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(logger);

// Routes
app.use('/articles', articleRoutes);
app.use('/categories', categoryRoutes);
app.use('/journalists', journalistRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('📰 Welcome to the News API!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});