import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
export declare class CategoriesRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findMany(findManyDto: Prisma.CategoryFindManyArgs): Prisma.PrismaPromise<import(".prisma/client").Category[]>;
    findFirst(findFirstDto: Prisma.CategoryFindFirstArgs): Prisma.Prisma__CategoryClient<import(".prisma/client").Category, null>;
}
