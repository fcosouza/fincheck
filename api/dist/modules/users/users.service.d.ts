import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
export declare class UsersService {
    private readonly usersRepo;
    constructor(usersRepo: UsersRepository);
    getUserById(userId: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, null>;
}
