import { Module } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { FinanceController } from './finance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Finance } from './entities/finance.entity';
import { Transaction } from './entities/transaction.entity';
import { CloudService } from 'src/cloud/cloud.service';

@Module({
  imports: [TypeOrmModule.forFeature([Finance, Transaction])],
  controllers: [FinanceController],
  providers: [FinanceService,CloudService],
})
export class FinanceModule {}
