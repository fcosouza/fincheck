import { BankAccountsService } from './services/bank-accounts.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
export declare class BankAccountsController {
    private readonly bankAccountsService;
    constructor(bankAccountsService: BankAccountsService);
    create(userId: string, createBankAccountDto: CreateBankAccountDto): import(".prisma/client").Prisma.Prisma__BankAccountClient<import(".prisma/client").BankAccount, never>;
    findAll(userId: string): Promise<{
        currentBalance: number;
        id: string;
        userId: string;
        name: string;
        initialBalance: number;
        type: import(".prisma/client").BankAccountType;
        color: string;
    }[]>;
    update(userId: string, bankAccountId: string, updateBankAccountDto: UpdateBankAccountDto): Promise<import(".prisma/client").BankAccount>;
    remove(userId: string, bankAccountId: string): Promise<any>;
}
