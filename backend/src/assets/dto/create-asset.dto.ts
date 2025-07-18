import { IsNotEmpty, IsString, IsEnum, IsUUID, IsDateString, IsOptional, isNotEmpty, IsNumber } from 'class-validator';
import { AssetCategory } from '../entities/asset.entity';
export class CreateAssetDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(AssetCategory)
  category: AssetCategory;

  @IsNotEmpty()
  @IsString()
  serialNumber: string;

  @IsNotEmpty()
  @IsString()
  status: string;


  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsDateString()
  purchaseDate: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsUUID()
  @IsOptional()
  personnelId: string; // this will be used to link the asset to a Personnel
}
