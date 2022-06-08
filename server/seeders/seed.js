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





    const categories = await Category.insertMany([
        {
            _id: '1',
            name: 'Gaming'
        },
        {
            _id: '2',
            name: 'Home'
        },
        {
            _id: '3',
            name: 'Lifestyle'
        },
        {
            _id: '4',
            name: 'Tech'
        },
        {
            _id: '5',
            name: 'Misc'
        },
    ]);
    console.log('Categories seeded');

    await SubCategory.insertMany([
        {
            _id: '01',
            name: 'RPGs',
            category: '1',
        },
        {
            _id: '02',
            name: 'MOBAs',
            category: "1",
        },
        {
            _id: '03',
            name: 'MMOs',
            category: "1",
        },
        {
            _id: '04',
            name: 'FPS',
            category: "1",
        },
        {
            _id: '05',
            name: 'Other',
            category: "1",
        },
        {
            _id: '06',
            name: 'Cooking',
            category: "2",
        },
        {
            _id: '07',
            name: 'DIY Projects',
            category: "2",
        },
        {
            _id: '08',
            name: 'Gardening',
            category: "2",
        },
        {
            _id: '09',
            name: 'Maintenance',
            category: "2",
        },
        {
            _id: '10',
            name: 'Other',
            category: "2",
        },
        {
            _id: '11',
            name: 'Fitness',
            category: "3",
        },
        {
            _id: '12',
            name: 'Fashion',
            category: "3",
        },
        {
            _id: '13',
            name: 'Self Care',
            category: "3",
        },
        {
            _id: '14',
            name: 'Life Coaching',
            category: "3",
        },
        {
            _id: '15',
            name: 'Other',
            category: "3",
        },
        {
            _id: '16',
            name: 'Computer Learning',
            category: "4",
        },
        {
            _id: '17',
            name: 'Programming',
            category: "4",
        },
        {
            _id: '18',
            name: 'IT',
            category: "4",
        },
        {
            _id: '19',
            name: 'Streaming',
            category: "4",
        },
        {
            _id: '20',
            name: 'Other',
            category: "4",
        },
        {
            _id: '21',
            name: 'Misc.',
            category: "5",
        },
    ]);

    console.log('Sub-Categories seeded');

    await User.create({
        _id: '1',
        firstname: 'Raggedy',
        lastname: 'Man',
        email: 'Dr@Who.com',
        aboutMe: 'AboutMeTextHere',
        password: 'password12345',
    });

    await User.create({
        _id: '2',
        firstname: 'Amy',
        lastname: 'Pond',
        email: 'raggedyGal@hotmail.com',
        aboutMe: 'AboutMeTextHere',
        password: 'password12345',
    });

    console.log('Users seeded');

    await Lesson.create({
            _id: '1',
            title: "Intro to Leveling Up",
            description: "In this lesson, I'll go over the basics of leveling within most RPG style games!",
            price: 4500,
            coach: "1",
            review: ['1'],
            subcategory: "1",
        });

        console.log('Lessons seeded');

        await Review.create({
            _id: '1',
            reviewText: "I loved the intro to leveling up course!",
            reviewRating: 5,
            user: "2",
            lesson: "1",
        });

        console.log('Reviews seeded');


    process.exit();
});