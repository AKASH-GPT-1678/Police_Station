import { IsNotEmpty, IsString,  IsNumber} from 'class-validator';
import { AssetCategory } from '../entities/asset.entity';

export class AssignAssetDto {
    @IsString()
    @IsNotEmpty()
    adminSignature: string;

    @IsString()
    @IsNotEmpty()
    assetId: string;

    @IsString()
    @IsNotEmpty()
    personnelId: string;
}
