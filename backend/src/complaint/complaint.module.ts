import { Module } from '@nestjs/common';
import { ComplaintService } from './complaint.service';
import { ComplaintController } from './complaint.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Case } from 'src/cases/entities/case.entity';
import { FIR } from './entities/fir.entity';
import { Incident } from './entities/inciden.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FIR , Case, Incident])],
  controllers: [ComplaintController],
  providers: [ComplaintService],
})
export class ComplaintModule { }
