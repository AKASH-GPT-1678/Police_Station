import { Module } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CasesController } from './cases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Case } from './entities/case.entity';
import { Evidence } from './entities/evidence.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Case, Evidence])], //
  controllers: [CasesController],
  providers: [CasesService],
})
export class CasesModule { }
