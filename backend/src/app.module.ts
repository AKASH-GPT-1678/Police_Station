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


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),




    CasesModule, DatabaseModule, ComplaintModule, PersonnelModule, KafkaModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
