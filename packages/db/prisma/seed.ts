import process from 'node:process';
import {PrismaClient} from '@prisma/client';
import {hashSync} from 'bcryptjs';

const prisma = new PrismaClient();
const saltRounds = 12;

await prisma.user.upsert({
  where: {email: 'admin@example.com'},
  update: {},
  create: {
    email: 'admin@example.com',
    passwordHash: hashSync('Admin@12345', saltRounds),
    role: 'ADMIN',
  },
});

await prisma.$disconnect();
process.exit(0);
