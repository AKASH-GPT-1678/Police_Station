import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { AssetHistory } from './entities/assets.history';
import { Personnel } from 'src/personnel/entities/personnel.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Asset, AssetHistory,Personnel])],
  controllers: [AssetsController],
  providers: [AssetsService],
})
export class AssetsModule {}
