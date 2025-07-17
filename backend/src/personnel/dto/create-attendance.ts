import { IsUUID, IsNotEmpty } from 'class-validator';

export class CreateAttendanceDto {
  @IsUUID()
  @IsNotEmpty()
  id: string; // This is likely referring to Personnel ID
}
