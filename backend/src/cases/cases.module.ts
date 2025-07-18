import { Module } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CasesController } from './cases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Case } from './entities/case.entity';
import { Evidence } from './entities/evidence.entity';
import { Personnel } from 'src/personnel/entities/personnel.entity';
import { CourtHearing } from './entities/court-hearing.entity';
import { InvestigationActivity } from './entities/investigation.entity';
import { People } from './entities/people.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Case, Evidence,Personnel , CourtHearing, InvestigationActivity, People])], //
  controllers: [CasesController],
  providers: [CasesService],
})
export class CasesModule { }
