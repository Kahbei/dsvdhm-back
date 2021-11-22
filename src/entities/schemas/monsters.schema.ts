import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MonstersDocument = Monsters & Document;

@Schema({ _id: false })
export class StatsMonster {
  @Prop()
  pv: number;

  @Prop()
  attaque: number;

  @Prop()
  defense: number;

  @Prop()
  chance: number;

  @Prop()
  pa: number;
}

@Schema({ _id: false })
export class CapaciteMonster {
  @Prop()
  attaque: number;

  @Prop()
  attaqueSpecial: number;

  @Prop()
  protection: number;
}

@Schema()
export class Monsters {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  stats: StatsMonster;

  @Prop()
  capacite: CapaciteMonster;

  @Prop()
  image: string;
}

export const MonstersSchema = SchemaFactory.createForClass(Monsters);
