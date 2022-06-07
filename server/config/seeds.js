const db = require('./connection');
const { User, Category, SubCategory, Lesson, Review } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Gaming' },
        { name: 'Home' },
        { name: 'Lifestyle' },
        { name: 'Tech' },
        { name: 'Misc.' },
    ]);

    console.log('Categories seeded');

    await SubCategory.deleteMany();

    await SubCategory.insertMany([
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

    console.log('Sub-Categories seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamela@testmail.com',
        aboutMe: 'AboutMeTextHere',
        password: 'password12345',
    });

    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        aboutMe: 'AboutMeTextHere',
        password: 'password12345',
    });

    await User.create({
        firstName: 'Billy',
        lastName: 'Joe',
        email: 'joe@testmail.com',
        aboutMe: 'AboutMeTextHere',
        password: 'password12345',
    });

    await User.create({
        firstName: 'Debbie',
        lastName: 'Downer',
        email: 'debbie@downer.com',
        aboutMe: 'AboutMeTextHere',
        password: 'password12345',
    });

    await User.create({
        firstName: 'Raggedy',
        lastName: 'Man',
        email: 'Dr@Who.com',
        aboutMe: 'AboutMeTextHere',
        password: 'password12345',
    });

    await User.create({
        firstName: 'Amy',
        lastName: 'Pond',
        email: 'raggedyGal@hotmail.com',
        aboutMe: 'AboutMeTextHere',
        password: 'password12345',
    });

    console.log('Users seeded');

    await Lesson.deleteMany();

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
    // The user and coach fields need to be an actual objID that 
    // isn't created until we seed the users
    await Lesson.create({
        title: "Intro to Leveling Up",
        Description: "In this lesson, I'll go over the basics of leveling within most RPG style games!",
        user: 'idk',
        price: 45,
        coach: 'idk',
        review: [],
        subcategory: "",
  });

  console.log('Lessons seeded');

  await Review.deleteMany();

  await Review.create({
    reviewText: "",
    reviewRating: 5,
    user: "",
    lesson: "",
});

  console.log('Reviews seeded');
    process.exit();
});