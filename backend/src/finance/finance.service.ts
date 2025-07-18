import { Injectable } from '@nestjs/common';
import { CreateFinanceDto } from './dto/create-finance.dto';
import { UpdateFinanceDto } from './dto/update-finance.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Finance, FinanceType } from './entities/finance.entity';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { CloudService } from 'src/cloud/cloud.service';

@Injectable()
export class FinanceService {

  constructor(@InjectRepository(Finance) private financeRepository: Repository<Finance>,

    @InjectRepository(Transaction) private transactionRepository: Repository<Transaction>,
    private readonly cloudService: CloudService




  ) { }




  async recordFinance(createFinanceDto: CreateFinanceDto) {
    return this.financeRepository.save(createFinanceDto);
  };



  async createTransaction(createTransactionDto: Transaction) {
    return this.transactionRepository.save(createTransactionDto);
  };


  async getFinanceByCategory(category: FinanceType , id : string) {
    return this.financeRepository.find({where : {id : id , transactions : { type : category } } });
  };


  async deleteTransaction(id: string) {
    return this.transactionRepository.delete(id);
  };

  async getFinanceSummary(id: string) {
    return this.financeRepository.find({ where: { id: id }, select : ['income' , 'expense' , 'fine', 'grant', 'balance'] });

  };





}
