import { ValidateBankAccountOwnershipService } from 'src/modules/bank-accounts/services/validate-bank-account-ownership.service';
import { TransactionsRepository } from 'src/shared/database/repositories/transactions.repositories';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { TransactionType } from '../entities/Transaction';
import { ValidateTransactionOwnershipService } from './validate-transaction-ownership.service';
import { ValidateCategoryOwnershipService } from 'src/modules/categories/services/validate-category-ownership.service';
export declare class TransactionsService {
    private readonly transactionsRepo;
    private readonly validateBankAccountOwnershipService;
    private readonly validateCategoryOwnershipService;
    private readonly validateTransactionOwnershipService;
    constructor(transactionsRepo: TransactionsRepository, validateBankAccountOwnershipService: ValidateBankAccountOwnershipService, validateCategoryOwnershipService: ValidateCategoryOwnershipService, validateTransactionOwnershipService: ValidateTransactionOwnershipService);
    create(userId: string, createTransactionDto: CreateTransactionDto): Promise<import(".prisma/client").Transaction>;
    findAllByUserId(userId: string, filters: {
        month: number;
        year: number;
        bankAccountId?: string;
        type?: TransactionType;
    }): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Transaction[]>;
    update(userId: string, transactionId: string, updateTransactionDto: UpdateTransactionDto): Promise<import(".prisma/client").Transaction>;
    remove(userId: string, transactionId: string): Promise<any>;
    private validateEntitiesOwnership;
}
