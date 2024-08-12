import { TransactionsRepository } from 'src/shared/database/repositories/transactions.repositories';
export declare class ValidateTransactionOwnershipService {
    private readonly transactionsRepo;
    constructor(transactionsRepo: TransactionsRepository);
    validate(userId: string, transactionId: string): Promise<void>;
}
