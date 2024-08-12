import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
export declare class TransactionsRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findMany(findManyDto: Prisma.TransactionFindManyArgs): Prisma.PrismaPromise<import(".prisma/client").Transaction[]>;
    findFirst(findFirstDto: Prisma.TransactionFindFirstArgs): Prisma.Prisma__TransactionClient<import(".prisma/client").Transaction, null>;
    create(createDto: Prisma.TransactionCreateArgs): Prisma.Prisma__TransactionClient<import(".prisma/client").Transaction, never>;
    update(updateDto: Prisma.TransactionUpdateArgs): Prisma.Prisma__TransactionClient<import(".prisma/client").Transaction, never>;
    delete(deleteDto: Prisma.TransactionDeleteArgs): Prisma.Prisma__TransactionClient<import(".prisma/client").Transaction, never>;
}
