import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class StatsMonster {
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

  @IsNumber()
  @IsNotEmpty()
  pa: number;
}

class CapaciteMonster {
  @IsNumber()
  @IsNotEmpty()
  attaque: number;

  @IsNumber()
  @IsNotEmpty()
  attaqueSpecial: number;

  @IsNumber()
  @IsNotEmpty()
  protection: number;
}

export class CreateMonsterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => StatsMonster)
  stats: StatsMonster;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => CapaciteMonster)
  capacite: CapaciteMonster;
}
