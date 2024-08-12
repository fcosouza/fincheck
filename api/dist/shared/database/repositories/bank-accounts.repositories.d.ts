import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
export declare class BankAccountsRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findMany<T extends Prisma.BankAccountFindManyArgs>(findManyDto: Prisma.SelectSubset<T, Prisma.BankAccountFindManyArgs>): Prisma.PrismaPromise<Prisma.BankAccountGetPayload<T>[]>;
    findFirst(findFirstDto: Prisma.BankAccountFindFirstArgs): Prisma.Prisma__BankAccountClient<import(".prisma/client").BankAccount, null>;
    create(createDto: Prisma.BankAccountCreateArgs): Prisma.Prisma__BankAccountClient<import(".prisma/client").BankAccount, never>;
    update(updateDto: Prisma.BankAccountUpdateArgs): Prisma.Prisma__BankAccountClient<import(".prisma/client").BankAccount, never>;
    delete(deleteDto: Prisma.BankAccountDeleteArgs): Prisma.Prisma__BankAccountClient<import(".prisma/client").BankAccount, never>;
}
