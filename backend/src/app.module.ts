import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CasesModule } from './cases/cases.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Case } from './cases/entities/case.entity';
import { ComplaintModule } from './complaint/complaint.module';
import { PersonnelModule } from './personnel/personnel.module';
import { KafkaModule } from './kafka/kafka.module';
import { AssetsModule } from './assets/assets.module';
import { ReportsModule } from './reports/reports.module';
import { GeminiModule } from './gemini/gemini.module';
import { FinanceModule } from './finance/finance.module';
import { CloudModule } from './cloud/cloud.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),




    CasesModule, DatabaseModule, ComplaintModule, PersonnelModule, KafkaModule, AssetsModule, ReportsModule, GeminiModule, FinanceModule, CloudModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
