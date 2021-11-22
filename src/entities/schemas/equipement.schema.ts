import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EquipementsDocument = Equipements & Document;

@Schema({ _id: false })
export class StatsWeapon {
  @Prop()
  pv: number;

  @Prop()
  attaque: number;

  @Prop()
  defense: number;

  @Prop()
  chance: number;
}

@Schema()
export class Equipements {
  @Prop()
  name: string;

  @Prop()
  image: string;

  @Prop()
  type: string;

  @Prop()
  bonusstat: StatsWeapon;
}

export const EquipementsSchema = SchemaFactory.createForClass(Equipements);
