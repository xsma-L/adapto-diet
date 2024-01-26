const express = require('express');
const { PrismaClient } = require('@prisma/client/edge');

const prisma = new PrismaClient();
const app = express();

//use json
app.use(express.json());

//cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const authRoutes = require('./api/routes/authRoutes');
const dietProfileRoutes = require('./api/routes/dietProfileRoutes')

app.use('/api/auth', authRoutes);
app.use("/api/diet/profile", dietProfileRoutes)


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Adatop'diet's server running on port ${PORT}`));