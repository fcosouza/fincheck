import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
export declare class UsersRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.UserCreateArgs): Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    findUnique(findUniqueDto: Prisma.UserFindUniqueArgs): Prisma.Prisma__UserClient<import(".prisma/client").User, null>;
}
