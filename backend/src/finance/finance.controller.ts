import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { CreateFinanceDto } from './dto/create-finance.dto';
import { UpdateFinanceDto } from './dto/update-finance.dto';
import { Transaction } from './entities/transaction.entity';
import { FinanceType } from './entities/finance.entity';
import { CloudService } from 'src/cloud/cloud.service';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService,
        private readonly cloudService: CloudService
    




  ) { }


  @Post()
  recordFinance(@Body() createFinanceDto: CreateFinanceDto) {
    return this.financeService.recordFinance(createFinanceDto);
  }

  // POST /finance/transaction
  @Post('transaction')
  createTransaction(@Body() createTransactionDto: Transaction) {
    return this.financeService.createTransaction(createTransactionDto);
  };


  @Post('upload')
  async uploadFile(@Body() file: { filePath: string; destination: string }) {
    const url = await this.cloudService.uploadFile(file.filePath, file.destination);
    return { url };
  }

  // GET /finance/:id/category/:category
  @Get(':id/category/:category')
  getFinanceByCategory(@Param('id') id: string, @Param('category') category: FinanceType) {
    return this.financeService.getFinanceByCategory(category, id);
  }

  // DELETE /finance/transaction/:id
  @Delete('transaction/:id')
  deleteTransaction(@Param('id') id: string) {
    return this.financeService.deleteTransaction(id);
  }

  // GET /finance/summary/:id
  @Get('summary/:id')
  getFinanceSummary(@Param('id') id: string) {
    return this.financeService.getFinanceSummary(id);
  }


}
