import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Put, Query } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { UUID } from 'crypto';
import { AssignAssetDto } from './dto/assign-asset';

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
   
  };

    @Delete(':id')
  async deleteAsset(@Param('id') id: string) {
    return await this.assetsService.deleteAsset(id);
  }

  // ✅ ASSIGN ASSET
  @Post('assign')
  async assignAsset(@Body() assignAssetDto: AssignAssetDto) {
    return await this.assetsService.assignAsset(assignAssetDto);
  }

  // ✅ GET ASSET HISTORY
  @Get('history/:assetId')
  async getCompleteAssetHistory(@Param('assetId') assetId: string) {
    return await this.assetsService.getCompleteAssetHistory(assetId);
  }

  // ✅ UPDATE STATUS
  @Put('status/:assetId')
  async updateAssetStatus(
    @Param('assetId') assetId: string,
    @Query('status') status: string
  ) {
    return await this.assetsService.updateStatus(assetId, status);
  }



}
