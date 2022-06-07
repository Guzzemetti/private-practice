const db = require('./connection');
const { User, Category, SubCategory } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Gaming' },
    { name: 'Home' },
    { name: 'Lifestyle' },
    { name: 'Tech' },
    { name: 'Misc.' },
  ]);

  // console.log('categories seeded');

  // await SubCategory.deleteMany();

  const subCategories = await SubCategory.insertMany([
    {
      name: 'RPGs',
      category: categories[0]._id,
    },
    {
      name: 'MOBAs',
      category: categories[0]._id,
    },
    {
      name: 'MMOs',
      category: categories[0]._id,
    },
    {
      name: 'FPS',
      category: categories[0]._id,
    },
    {
      name: 'Other',
      category: categories[0]._id,
    },
    {
      name: 'Cooking',
      category: categories[1]._id,
    },
    {
      name: 'DIY Projects',
      category: categories[1]._id,
    },
    {
      name: 'Gardening',
      category: categories[1]._id,
    },
    {
      name: 'Maintenance',
      category: categories[1]._id,
    },
    {
      name: 'Other',
      category: categories[1]._id,
    },
    {
        name: 'Fitness',
        category: categories[2]._id,
    },
    {
        name: 'Fashion',
        category: categories[2]._id,
    },
    {
        name: 'Self Care',
        category: categories[2]._id,
    },
    {
        name: 'Life Coaching',
        category: categories[2]._id,
    },
    {
        name: 'Other',
        category: categories[2]._id,
    },
    {
        name: 'Computer Learning',
        category: categories[3]._id,
    },
    {
        name: 'Programming',
        category: categories[3]._id,
    },
    {
        name: 'IT',
        category: categories[3]._id,
    },
    {
        name: 'Streaming',
        category: categories[3]._id,
    },
    {
        name: 'Other',
        category: categories[3]._id,
    },
    {
        name: 'Misc.',
        category: categories[4]._id,
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
  });

  console.log('users seeded');

  process.exit();
});