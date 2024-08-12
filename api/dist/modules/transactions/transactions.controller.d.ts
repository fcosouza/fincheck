import { TransactionsService } from './services/transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionType } from './entities/Transaction';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    create(userId: string, createTransactionDto: CreateTransactionDto): Promise<import(".prisma/client").Transaction>;
    findAll(userId: string, month: number, year: number, bankAccountId?: string, type?: TransactionType): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Transaction[]>;
    update(userId: string, transactionId: string, updateTransactionDto: UpdateTransactionDto): Promise<import(".prisma/client").Transaction>;
    remove(userId: string, transactionId: string): Promise<any>;
}
