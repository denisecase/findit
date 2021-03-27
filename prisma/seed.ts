import { PrismaClient, Prisma } from '.prisma/client'

const prisma = new PrismaClient()

const locationData: Prisma.LocationCreateInput[] = [
  {
    name: 'Faustiana One',
    north: 40.344208,
    west: -94.891494,
    south: 40.343652,
    east: -94.8884,
  },
  {
    name: 'Faustiana Two',
    north: 40.343579,
    west: -94.89084,
    south: 40.343268,
    east: -94.8884,

  },
  {
    name: 'Faustiana Three',
    north: 40.342947,
    west: -94.8862633,
    south: 40.34275,
    east: -94.8884,

  },
  {
    name: 'Faustiana Four',
    north: 40.342533,
    west: -94.890749,
    south: 40.341902,
    east: -94.8884,

  },
  {
    name: '16th One',
    north: 40.360516,
    west: -94.888755,
    south: 40.360123,
    east: -94.88847,

  },
  {
    name: '16th Two',
    north: 40.360516,
    west: -94.888994,
    south: 40.360123,
    east: -94.88887,

  },
  {
    name: '16th Three',
    north: 40.360516,
    west: -94.889264,
    south: 40.360123,
    east: -94.8891,

  },
  {
    name: '16th Four',
    north: 40.360516,
    west: -94.889651,
    south: 40.360123,
    east: -94.889332,

  },
  {
    name: 'Judah Park One',
    north: 40.344085,
    west: -94.880743,
    south: 40.343735,
    east: -94.880552,

  },
  {
    name: 'Judah Park Two',
    north: 40.344303,
    west: -94.880513,
    south: 40.344055,
    east: -94.880272,

  },
  {
    name: 'Judah Park Three',
    north: 40.344258,
    west: -94.878851,
    south: 40.344037,
    east: -94.878598,

  },
  {
    name: 'Judah Park Four',
    north: 40.344699,
    west: -94.880021,
    south: 40.344527,
    east: -94.879821,

  },
  {
    name: 'Super Quest One',
    north: 40.340629,
    west: -94.882013,
    south: 40.340446,
    east: -94.881700,

  },
  {
    name: 'Super Quest Two',
    north: 40.352834,
    west: -94.674814,
    south: 40.351630,
    east: -94.671554,

  },
  {
    name: 'Colden Pond One, Baby',
    north: 40.351133,
    west: -94.882717,
    south: 40.351049,
    east: -94.882375,

  },
  {
    name: 'Colden Pond Two, Beautiful',
    north: 40.350438,
    west: -94.883363,
    south: 40.350296,
    east: -94.883180,

  },
  {
    name: 'Colden Pond Three, Radical',
    north: 40.349627,
    west: -94.883429,
    south: 40.349529,
    east: -94.883309,

  },
  {
    name: 'Colden Pond Four, Excellent Smithers',
    north: 40.350225,
    west: -94.882697,
    south: 40.350144,
    east: -94.882576,

  },
  {
    name: 'Badami Office, Excellent Smithers',
    north: 40.351187,
    west: -94.883172,
    south: 40.350864,
    east: -94.882831,

  },
]

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Denise Case',
    email: 'denisecase@nwmissouri.edu',

  },
  {
    name: 'Dr. Case',
    email: 'dcase@nwmissouri.edu',

  },
]

// A `main` function to enable async/await
async function main() {
  await seedUsers()
  await seedLocations()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

  /**
   * Function seedUsers() creates some sample users.
   */
async function seedUsers() {
  console.log(`Start seeding users...`)
  for (const d of userData) {
    try {
      const item = await prisma.user.create({ data: d, })
      console.log(`Created user with id: ${item.id}`)
    }
    catch (err) {
      console.log(`Already exists.`)
    }
  }
  console.log(`Seeding users finished.`)
}

/**
 * Function seedLocations() creates some sample locations.
 */
async function seedLocations() {
  console.log(`Start seeding locations...`)
  for (const d of locationData) {
    try {
      const item = await prisma.location.create({ data: d, })
      console.log(`Created location with id: ${item.id}`)
    }
    catch (err) {
      console.log(`Already exists.`)
    }
  }
  console.log(`Seeding locations finished.`)
}
