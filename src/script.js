const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

async function main() {
  // const newLink = await prisma.link.create({
  //   data: {
  //     description: "description1",
  //     url: "url1",
  //   },
  // });
  const allLinks = await prisma.link.findMany();
  console.log(allLinks);  
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async ()=> {
    prisma.$disconnect;
  });
 