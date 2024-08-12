import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    me(userId: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, null>;
}
