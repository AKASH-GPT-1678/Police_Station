import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { In, Repository } from 'typeorm';
import { AssetNotFoundException } from 'src/exceptions/asset.not-found';
import { AssignAssetDto } from './dto/assign-asset';
import { AssetHistory } from './entities/assets.history';
import { Personnel } from 'src/personnel/entities/personnel.entity';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset) private assetRepository: Repository<Asset>,
    @InjectRepository(AssetHistory) private assetHistoryRepository: Repository<AssetHistory>,
    @InjectRepository(Personnel) private personnelRepository: Repository<Personnel>,
  ) {


  }



  async getAssetById(id: string) {

    const asset = await this.assetRepository.findOne({ where: { id: id } });
    if (!asset) {
      throw new AssetNotFoundException();
    }
    return asset;

  }



  async createAsset(createAssetDto: CreateAssetDto) {
    const asset = this.assetRepository.create(createAssetDto);
    return await this.assetRepository.save(asset);
  };



  async deleteAsset(id: string) {

    const asset = await this.assetRepository.findOne({ where: { id: id } });
    if (!asset) {
      throw new AssetNotFoundException();
    }
    return await this.assetRepository.remove(asset);
  }


  async assignAsset(assignAsset: AssignAssetDto) {

    if (assignAsset.adminSignature != process.env.ADMIN_SIGNATURE) {
      throw new Error('Unauthorized');


    };






    const asset = await this.assetRepository.findOne({ where: { id: assignAsset.assetId } });

    if (!asset) {
      throw new Error('Asset not found');
    };



    if (asset.status != 'newPurchase') {
      var existingPersonnel = await this.personnelRepository.findOne({ where: { id: asset.personnel.id } });

    }


    const newPersonnel = await this.personnelRepository.findOne({ where: { id: assignAsset.personnelId } });

    if (!newPersonnel) {
      throw new Error('Personnel not found');
    }

    const saveAsset = await this.assetRepository.save({ ...asset, personnel: newPersonnel, status: 'assigned' });

    if (asset.status != 'newPurchase') {
      await this.assetHistoryRepository.create({  movedFrom: "newPurchase", movedTo: newPersonnel.name, assetId: saveAsset.id, createdAt: new Date() })
    }
    else {
      await this.assetHistoryRepository.create({   movedFrom: asset.personnel.id, movedTo: newPersonnel.id, assetId: saveAsset.id, createdAt: new Date() })
    }




  };


  async getCompleteAssetHistory(assetId: string) {
    const asset = await this.assetRepository.findOne({ where: { id: assetId } });
    if (!asset) {
      throw new AssetNotFoundException();
    }
    const history = await this.assetHistoryRepository.find({ where: { assetId: assetId } });
    return history;
  };


  async updateStatus(assetId: string, status: string) {
    const asset = await this.assetRepository.findOne({ where: { id: assetId } });
    if (!asset) {
      throw new AssetNotFoundException();
    }
    asset.status = status;
    return await this.assetRepository.save(asset);
  };








}
