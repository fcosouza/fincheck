import { CategoriesRepository } from 'src/shared/database/repositories/categories.repositories';
export declare class CategoriesService {
    private readonly categoriesRepo;
    constructor(categoriesRepo: CategoriesRepository);
    findAllByUserId(userId: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Category[]>;
}
