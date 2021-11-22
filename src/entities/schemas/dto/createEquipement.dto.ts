import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEquipementDto {
  @IsNumber()
  @IsNotEmpty()
  pv: number;

  @IsNumber()
  @IsNotEmpty()
  attaque: number;

  @IsNumber()
  @IsNotEmpty()
  defense: number;

  @IsNumber()
  @IsNotEmpty()
  chance: number;
}
