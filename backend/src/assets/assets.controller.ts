import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { UUID } from 'crypto';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) { }


  @Get('get/:id')
  async getAssets(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.assetsService.getAssetById(id);
  }

  @Post('create')
  async create(@Body() createAssetDto: CreateAssetDto) {
    const savedAsset = await this.assetsService.createAsset(createAssetDto);
    return savedAsset;
   
  }


}
