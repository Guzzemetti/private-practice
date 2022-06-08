const db = require('../config/connection');
const { User, Category, SubCategory, Lesson, Review } = require('../models');

db.once('open', async () => {
    // await Category.deleteMany();
    // await SubCategory.deleteMany();
    // await User.deleteMany();
    // await Lesson.deleteMany();
    // await Review.deleteMany();
    await SubCategory.findOneAndUpdate({ name: 'RPGs' },
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
            _id: '12345678912345678912345a',
            name: 'Gaming'
        },
        {
            _id: '12345678912345678912323a',
            name: 'Home'
        },
        {
            _id: '12345678912345678912345b',
            name: 'Lifestyle'
        },
        {
            _id: '12345678912345678912342n',
            name: 'Tech'
        },
        {
            _id: '12345678912345678912342v',
            name: 'Misc'
        },
    ]);
    console.log('Categories seeded');

    await SubCategory.insertMany([
        {
            _id: '82349678912345678912345v',
            name: 'RPGs',
            category: '12345678912345678912345a',
        },
        {
            _id: '29349678912345678912345d',
            name: 'MOBAs',
            category: "12345678912345678912345a",
        },
        {
            _id: '30349678912345678912345s',
            name: 'MMOs',
            category: "12345678912345678912345a",
        },
        {
            _id: '31349678912345678912345v',
            name: 'FPS',
            category: "12345678912345678912345a",
        },
        {
            _id: '82888678912345678912345x',
            name: 'Other',
            category: "12345678912345678912345a",
        },
        {
            _id: '53349678912345678912345w',
            name: 'Cooking',
            category: "12345678912345678912323a",
        },
        {
            _id: '55559678912345678912345k',
            name: 'DIY Projects',
            category: "12345678912345678912323a",
        },
        {
            _id: '99349678912345678912345f',
            name: 'Gardening',
            category: "12345678912345678912323a",
        },
        {
            _id: '88349678912345678912345g',
            name: 'Maintenance',
            category: "12345678912345678912323a",
        },
        {
            _id: '88349678919945678912345g',
            name: 'Other',
            category: "12345678912345678912323a",
        },
        {
            _id: '02349678912345678912345p',
            name: 'Fitness',
            category: "12345678912345678912345b",
        },
        {
            _id: '90349678112345678912345f',
            name: 'Fashion',
            category: "12345678912345678912345b",
        },
        {
            _id: '45349678912345678912345b',
            name: 'Self Care',
            category: "12345678912345678912345b",
        },
        {
            _id: '08349678912345678912345h',
            name: 'Life Coaching',
            category: "12345678912345678912345b",
        },
        {
            _id: '88349678911045678912345e',
            name: 'Other',
            category: "12345678912345678912345b",
        },
        {
            _id: '88041678912345678912345t',
            name: 'Computer Learning',
            category: "12345678912345678912342n",
        },
        {
            _id: '88349678912445678912345u',
            name: 'Programming',
            category: "12345678912345678912342n",
        },
        {
            _id: '88349678919545678912345o',
            name: 'IT',
            category: "12345678912345678912342n",
        },
        {
            _id: '50349678916745678912345y',
            name: 'Streaming',
            category: "12345678912345678912342n",
        },
        {
            _id: '88349687012345678912345m',
            name: 'Other',
            category: "12345678912345678912342n",
        },
        {
            _id: '88319678912345678912345g',
            name: 'Misc.',
            category: "12345678912345678912342v",
        },
    ]);

    console.log('Sub-Categories seeded');

    await User.create({
        _id: '12345678912345678912233c',
        firstname: 'Luke',
        lastname: 'Pondop',
        email: 'pondop@hotmail.com',
        aboutMe: 'AboutMeTextHere',
        password: 'password12345',
    });

    await User.create({
        _id: '12345678912345678912233c',
        firstname: 'Bob',
        lastname: 'Pondop',
        email: 'ponbob@hotmail.com',
        aboutMe: 'AboutMeTextHere',
        password: 'password12345',
    });

    await User.create({
        _id: '92345678912349678919233c',
        firstname: 'Bobby',
        lastname: 'plow',
        email: 'bobby@hotmail.com',
        aboutMe: 'AboutMeTextHere',
        password: 'password12345',
    });

    await User.create({
        _id: '12345678912345678912733k',
        firstname: 'Johnny',
        lastname: 'loops',
        email: 'loops@hotmail.com',
        aboutMe: 'AboutMeTextHereTwo',
        password: 'password1',
    });

    console.log('Users seeded');

    await Lesson.create({
        _id: '12345678512345078912733z',
        title: "Intro to Leveling Up",
        description: "In this lesson, I'll go over the basics of leveling within most RPG style games!",
        price: 4500,
        coach: "12345678912345678912233c",
        review: ['12345672052345678912733k'],
        subcategory: "12345678912345678912345a",
    });

    await Lesson.create({
        _id: '16347612052345671912733a',
        title: "Breakfast Basics with Babish",
        description: "In this course, we'll go over the basics of preparing breakfast.",
        price: 4700,
        coach: "12345678912345678912733k",
        review: ['12345612052345671912733p'],
        subcategory: "12345678912345678912323a",
    });

    console.log('Lessons seeded');

    await Review.create({
        _id: '12345672052345678912733k',
        reviewText: "I loved the intro to leveling up course!",
        reviewRating: 5,
        user: "12345678912345678912233c",
        lesson: "12345678512345078912733z",
    });

    await Review.create({
        _id: '12345612052345671912733p',
        reviewText: "This course really showed me how fun cooking could be!",
        reviewRating: 5,
        user: "92345678912349678919233c",
        lesson: "16347612052345671912733a",
    });

    console.log('Reviews seeded');


    process.exit();
});