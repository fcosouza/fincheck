import { CreateBankAccountDto } from '../dto/create-bank-account.dto';
import { UpdateBankAccountDto } from '../dto/update-bank-account.dto';
import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts.repositories';
import { ValidateBankAccountOwnershipService } from './validate-bank-account-ownership.service';
export declare class BankAccountsService {
    private readonly bankAccountsRepo;
    private readonly validateBankAccountOwnershipService;
    constructor(bankAccountsRepo: BankAccountsRepository, validateBankAccountOwnershipService: ValidateBankAccountOwnershipService);
    create(userId: string, createBankAccountDto: CreateBankAccountDto): import(".prisma/client").Prisma.Prisma__BankAccountClient<import(".prisma/client").BankAccount, never>;
    findAllByUserId(userId: string): Promise<{
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
