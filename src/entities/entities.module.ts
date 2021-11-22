import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EntitiesController } from './entities.controller';
import { EntitiesService } from './entities.service';
import { Equipements, EquipementsSchema } from './schemas/equipement.schema';
import { Heroes, HeroesSchema } from './schemas/heroes.schema';
import { Monsters, MonstersSchema } from './schemas/monsters.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Heroes.name, schema: HeroesSchema },
      { name: Monsters.name, schema: MonstersSchema },
      { name: Equipements.name, schema: EquipementsSchema },
    ]),
  ],
  controllers: [EntitiesController],
  providers: [EntitiesService],
})
export class EntitiesModule {}
