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
const dietProfileRoutes = require('./api/routes/detProfileRoutes')

app.use('/api/auth', authRoutes);
app.use("/api/diet", dietProfileRoutes)

//test api with error handling
app.get('/test', (req, res, next) => {
  try {
    res.status(200).json({ message: 'Success!' });
  } catch (err) {
    next(err);
  }
});

//get all users
app.get('/users', async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});


//update user
app.put('/users/:id', async (req, res, next) => {
  try {
    const user = await prisma.user.update({
      where: { id: Number(req.params.id) },
      data: { ...req.body },
    });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

//delete user
app.delete('/users/:id', async (req, res, next) => {
  try {
    const user = await prisma.user.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

//Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Adatop'diet's server running on port ${PORT}`));