const db = require('../config/connection');
const { User, Category, SubCategory, Lesson, Review } = require('../models');

db.once('open', async () => {
    // await Category.deleteMany();
    // await SubCategory.deleteMany();
    // await User.deleteMany();
    // await Lesson.deleteMany();
    // await Review.deleteMany();
    await SubCategory.findOneAndUpdate({name: 'RPGs'}, 
        {
            lessons: '629f96375fb5546c6987c2cd'
        }
    )

    // await Category.findOneAndUpdate({name: 'Misc.'}, 
    //     {
    //         subcategory: ['629f95f3f7376d4db3dd5179']
    //     }
    // )

    // const categories = await Category.insertMany([
    //     {
    //         name: 'Gaming',
    //         subcategory: '',
    //         subcategory: '',
    //         subcategory: '',
    //         subcategory: '',
    //         subcategory: ''
    //     },
    //     {
    //         name: 'Home',
    //         subcategory: '',
    //         subcategory: '',
    //         subcategory: '',
    //         subcategory: '',
    //         subcategory: ''
    //     },
    //     {
    //         name: 'Lifestyle',
    //         subcategory: '',
    //         subcategory: '',
    //         subcategory: '',
    //         subcategory: '',
    //         subcategory: ''
    //     },
    //     {
    //         name: 'Tech',
    //         subcategory: '',
    //         subcategory: '',
    //         subcategory: '',
    //         subcategory: '',
    //         subcategory: ''
    //     },
    //     {
    //         name: 'Misc.',
    //         subcategory: '',
    //         subcategory: '',
    //         subcategory: '',
    //         subcategory: '',
    //         subcategory: ''
    //     },
    // ]);
    // console.log('Categories seeded');

    // await SubCategory.insertMany([
    //     {
    //         name: 'RPGs',
    //         category: '629f8d81f2439d985d1c129d',
    //     },
    //     {
    //         name: 'MOBAs',
    //         category: "629f8d81f2439d985d1c129d",
    //     },
    //     {
    //         name: 'MMOs',
    //         category: "629f8d81f2439d985d1c129d",
    //     },
    //     {
    //         name: 'FPS',
    //         category: "629f8d81f2439d985d1c129d",
    //     },
    //     {
    //         name: 'Other',
    //         category: "629f8d81f2439d985d1c129d",
    //     },
    //     {
    //         name: 'Cooking',
    //         category: "629f8d81f2439d985d1c129e",
    //     },
    //     {
    //         name: 'DIY Projects',
    //         category: "629f8d81f2439d985d1c129e",
    //     },
    //     {
    //         name: 'Gardening',
    //         category: "629f8d81f2439d985d1c129e",
    //     },
    //     {
    //         name: 'Maintenance',
    //         category: "629f8d81f2439d985d1c129e",
    //     },
    //     {
    //         name: 'Other',
    //         category: "629f8d81f2439d985d1c129e",
    //     },
    //     {
    //         name: 'Fitness',
    //         category: "629f8d81f2439d985d1c129f",
    //     },
    //     {
    //         name: 'Fashion',
    //         category: "629f8d81f2439d985d1c129f",
    //     },
    //     {
    //         name: 'Self Care',
    //         category: "629f8d81f2439d985d1c129f",
    //     },
    //     {
    //         name: 'Life Coaching',
    //         category: "629f8d81f2439d985d1c129f",
    //     },
    //     {
    //         name: 'Other',
    //         category: "629f8d81f2439d985d1c129f",
    //     },
    //     {
    //         name: 'Computer Learning',
    //         category: "629f8d81f2439d985d1c12a0",
    //     },
    //     {
    //         name: 'Programming',
    //         category: "629f8d81f2439d985d1c12a0",
    //     },
    //     {
    //         name: 'IT',
    //         category: "629f8d81f2439d985d1c12a0",
    //     },
    //     {
    //         name: 'Streaming',
    //         category: "629f8d81f2439d985d1c12a0",
    //     },
    //     {
    //         name: 'Other',
    //         category: "629f8d81f2439d985d1c12a0",
    //     },
    //     {
    //         name: 'Misc.',
    //         category: "629f8d81f2439d985d1c12a1",
    //     },
    // ]);

    // console.log('Sub-Categories seeded');

    // await User.create({
    //     firstname: 'Pamela',
    //     lastname: 'Washington',
    //     email: 'pamela@testmail.com',
    //     aboutMe: 'AboutMeTextHere',
    //     password: 'password12345',
    // });

    // await User.create({
    //     firstname: 'Elijah',
    //     lastname: 'Holt',
    //     email: 'eholt@testmail.com',
    //     aboutMe: 'AboutMeTextHere',
    //     password: 'password12345',
    // });

    // await User.create({
    //     firstname: 'Billy',
    //     lastname: 'Joe',
    //     email: 'joe@testmail.com',
    //     aboutMe: 'AboutMeTextHere',
    //     password: 'password12345',
    // });

    // await User.create({
    //     firstname: 'Debbie',
    //     lastname: 'Downer',
    //     email: 'debbie@downer.com',
    //     aboutMe: 'AboutMeTextHere',
    //     password: 'password12345',
    // });

    // await User.create({
    //     firstname: 'Raggedy',
    //     lastname: 'Man',
    //     email: 'Dr@Who.com',
    //     aboutMe: 'AboutMeTextHere',
    //     password: 'password12345',
    // });

    // await User.create({
    //     firstname: 'Amy',
    //     lastname: 'Pond',
    //     email: 'raggedyGal@hotmail.com',
    //     aboutMe: 'AboutMeTextHere',
    //     password: 'password12345',
    // });

    // console.log('Users seeded');

    // ---------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------
    // The user and coach fields need to be an actual objID that 
    // isn't created until we seed the users
    // await Lesson.create({
    //     title: "Intro to Leveling Up",
    //     description: "In this lesson, I'll go over the basics of leveling within most RPG style games!",
    //     price: 4500,
    //     coach: "629f7b175d4b8615f731ba1c",
    //     review: [],
    //     subcategory: "629f95f3f7376d4db3dd5165",
    // });

    // console.log('Lessons seeded');

    // await Review.create({
    //     reviewText: "",
    //     reviewRating: 5,
    //     user: "",
    //     lesson: "",
    // });

    // console.log('Reviews seeded');
    process.exit();
});