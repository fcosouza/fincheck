import { CategoriesService } from './services/categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Category[]>;
}
