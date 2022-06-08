const db = require('../config/connection');
const { User, Category, SubCategory, Lesson, Review } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();
    await SubCategory.deleteMany();
    await User.deleteMany();
    // await Lesson.deleteMany();
    // await Review.deleteMany();


    // Creates our main Categories
    await Category.create([
        {
            name: 'Gaming'
        },
        {
            name: 'Home'
        },
        {
            name: 'Lifestyle'
        },
        {
            name: 'Tech'
        },
        {
            name: 'Misc'
        },
    ]);

    console.log('Categories seeded');

    // Arrays for subcategories 
    const gamingCategories = [
        {
            name: 'RPGs',
        },
        {
            name: 'MOBAs',
        },
        {
            name: 'MMOs',
        },
        {
            name: 'FPS',
        },
        {
            name: 'Other',
        }
    ]

    const homeCategories = [
        {
            name: 'Cooking',
        },
        {
            name: 'DIY Projects',
        },
        {
            name: 'Gardening',
        },
        {
            name: 'Maintenance',
        },
        {
            name: 'Other',
        }
    ]

    const lifeCategories = [
        {
            name: 'Fitness',
        },
        {
            name: 'Fashion',
        },
        {
            name: 'Self Care',
        },
        {
            name: 'Life Coaching',
        },
        {
            name: 'Other',
        }
    ]
    
    const techCategories = [
        {
            name: 'Computer Learning',
        },
        {
            name: 'Programming',
        },
        {
            name: 'IT',
        },
        {
            name: 'Streaming',
        },
        {
            name: 'Other',
        }
    ]

    const miscCategories = [
        {
            name: 'Misc.',
        },
    ];

    // These for-loops loop over the subcategory arrays and then find a Category and update it to add the subcategory ID into it
    for (let i = 0; i < gamingCategories.length; i++) {
        const { _id } = await SubCategory.create(gamingCategories[i])
        await Category.findOneAndUpdate({ name: 'Gaming' }, { $addToSet: { subcategory: _id } })
    }

    for (let i = 0; i < homeCategories.length; i++) {
        const { _id } = await SubCategory.create(homeCategories[i])
        await Category.findOneAndUpdate({ name: 'Home' }, { $addToSet: { subcategory: _id } })
    }

    for (let i = 0; i < lifeCategories.length; i++) {
        const { _id } = await SubCategory.create(lifeCategories[i])
        await Category.findOneAndUpdate({ name: 'Lifestyle' }, { $addToSet: { subcategory: _id } })
    }

    for (let i = 0; i < techCategories.length; i++) {
        const { _id } = await SubCategory.create(techCategories[i])
        await Category.findOneAndUpdate({ name: 'Tech' }, { $addToSet: { subcategory: _id } })
    }

    for (let i = 0; i < miscCategories.length; i++) {
        const { _id } = await SubCategory.create(miscCategories[i])
        await Category.findOneAndUpdate({ name: 'Misc' }, { $addToSet: { subcategory: _id } })
    }


    console.log('Sub-Categories seeded');

    await User.create({
        firstname: 'Robert',
        lastname: 'Testing',
        email: 'test@test.com',
        aboutMe: 'AboutMeTextHere',
        password: 'testing',
    });

    console.log('Users seeded');



    // ---------------------------------------------------------------------------------
    // Might not need to seed the Review or Lesson
    // Should be able to use queries to create them
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