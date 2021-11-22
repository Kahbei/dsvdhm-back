import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type HeroesDocument = Heroes & Document;

@Schema({ _id: false })
export class StatsHeroe {
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
export class CapaciteHeroe {
  @Prop()
  attaque: number;

  @Prop()
  attaqueSpecial: number;

  @Prop()
  protection: number;
}

@Schema({ _id: false })
export class Equipements {
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Equipements' }],
  })
  arme: [Equipements];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Equipements' }],
  })
  armure: [Equipements];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Equipements' }],
  })
  bouclier: [Equipements];
}

@Schema()
export class Heroes {
  @Prop()
  name: string;

  @Prop()
  stats: StatsHeroe;

  @Prop()
  capacite: CapaciteHeroe;

  @Prop()
  equipements: Equipements;

  @Prop()
  image: string;
}

export const HeroesSchema = SchemaFactory.createForClass(Heroes);
