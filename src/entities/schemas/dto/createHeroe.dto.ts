import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';

class StatsHeroe {
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

class CapaciteHeroe {
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

class EquipementHeroe {
  @IsArray()
  arme;

  @IsArray()
  armure;

  @IsArray()
  bouclier;
}

export class CreateHeroeDto {
  name: string;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => StatsHeroe)
  stats: StatsHeroe;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => CapaciteHeroe)
  capacite: CapaciteHeroe;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => EquipementHeroe)
  equipement: EquipementHeroe;
}
