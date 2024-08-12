"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountsService = void 0;
const common_1 = require("@nestjs/common");
const bank_accounts_repositories_1 = require("../../../shared/database/repositories/bank-accounts.repositories");
const validate_bank_account_ownership_service_1 = require("./validate-bank-account-ownership.service");
let BankAccountsService = exports.BankAccountsService = class BankAccountsService {
    constructor(bankAccountsRepo, validateBankAccountOwnershipService) {
        this.bankAccountsRepo = bankAccountsRepo;
        this.validateBankAccountOwnershipService = validateBankAccountOwnershipService;
    }
    create(userId, createBankAccountDto) {
        const { color, initialBalance, name, type } = createBankAccountDto;
        return this.bankAccountsRepo.create({
            data: {
                userId,
                color,
                initialBalance,
                name,
                type,
            },
        });
    }
    async findAllByUserId(userId) {
        const bankAccounts = await this.bankAccountsRepo.findMany({
            where: { userId },
            include: {
                transactions: {
                    select: {
                        type: true,
                        value: true,
                    },
                },
            },
        });
        return bankAccounts.map((_a) => {
            var { transactions } = _a, bankAccount = __rest(_a, ["transactions"]);
            const totalTransactions = transactions.reduce((acc, transaction) => acc +
                (transaction.type === 'INCOME'
                    ? transaction.value
                    : -transaction.value), 0);
            const currentBalance = bankAccount.initialBalance + totalTransactions;
            return Object.assign(Object.assign({}, bankAccount), { currentBalance });
        });
    }
    async update(userId, bankAccountId, updateBankAccountDto) {
        await this.validateBankAccountOwnershipService.validate(userId, bankAccountId);
        const { color, initialBalance, name, type } = updateBankAccountDto;
        return this.bankAccountsRepo.update({
            where: { id: bankAccountId },
            data: {
                color,
                initialBalance,
                name,
                type,
            },
        });
    }
    async remove(userId, bankAccountId) {
        await this.validateBankAccountOwnershipService.validate(userId, bankAccountId);
        await this.bankAccountsRepo.delete({
            where: { id: bankAccountId },
        });
        return null;
    }
};
exports.BankAccountsService = BankAccountsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [bank_accounts_repositories_1.BankAccountsRepository,
        validate_bank_account_ownership_service_1.ValidateBankAccountOwnershipService])
], BankAccountsService);
//# sourceMappingURL=bank-accounts.service.js.map