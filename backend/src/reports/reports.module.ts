import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FIR } from 'src/complaint/entities/fir.entity';

@Module({

  imports : [TypeOrmModule.forFeature([FIR])],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
