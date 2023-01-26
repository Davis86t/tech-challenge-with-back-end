'use strict'

const {db, models: {Contact_Content, Home_Content} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Fetch Data for seeding from external API
  const res = await fetch('https://api.mwi.dev/content/contact');
  const allContactData = await res.json();
  const res2 = await fetch('https://api.mwi.dev/content/home');
  const allHomeData = await res2.json();
  
  // Creating Content
  const contactTitle = allContactData.data[0].title
  const contactContent = allContactData.data[0].content
  const card1 = allHomeData.data[0]
  const card2 = allHomeData.data[1]
  const card3 = allHomeData.data[2]

  const contactData = await Promise.all([
    Contact_Content.create({ title: `${contactTitle}`, content: `${contactContent}` }),
  ])

  const homeData = await Promise.all([
    Home_Content.create({ title: `${card1.title}`, content: `${card1.content}` }),
    Home_Content.create({ title: `${card2.title}`, content: `${card2.content}` }),
    Home_Content.create({ title: `${card3.title}`, content: `${card3.content}` }),
  ])

  console.log(`seeded ${homeData.length} home page contents`)
  console.log(`seeded ${contactData.length} contact page contents`)
  console.log(`seeded successfully`)
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

