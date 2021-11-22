import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEquipementDto } from './schemas/dto/createEquipement.dto';
import { CreateHeroeDto } from './schemas/dto/createHeroe.dto';
import { CreateMonsterDto } from './schemas/dto/createMonster.dto';
import { Equipements, EquipementsDocument } from './schemas/equipement.schema';
import { Heroes, HeroesDocument } from './schemas/heroes.schema';
import { Monsters, MonstersDocument } from './schemas/monsters.schema';

@Injectable()
export class EntitiesService {
  constructor(
    @InjectModel(Heroes.name) private heroesModel: Model<HeroesDocument>,
    @InjectModel(Monsters.name) private monstersModel: Model<MonstersDocument>,
    @InjectModel(Equipements.name)
    private equipementsModel: Model<EquipementsDocument>,
  ) {}

  /* ------------------------------------------------------------ */
  /* -------------------- HEROES METHOD CRUD -------------------- */
  /* ------------------------------------------------------------ */

  // SELECT ALL
  async getAllHeroes(): Promise<Heroes[]> {
    return this.heroesModel.find().exec();
  }

  // SELECT ONE
  async getOneHeroe(id): Promise<Heroes> {
    return this.heroesModel.findOne({ _id: id }).exec();
  }

  // POST
  async createHeroe(createHeroeDto: CreateHeroeDto): Promise<Heroes> {
    const createdHeroe = new this.heroesModel(createHeroeDto);
    return createdHeroe.save();
  }

  // UPDATE
  async updateHeroe(id, body: CreateHeroeDto): Promise<Heroes> {
    const updatedHeroe = new this.heroesModel();
    return updatedHeroe.updateOne({ _id: id }, body);
  }

  // DELETE
  async deleteHeroe(id): Promise<any> {
    return this.heroesModel.deleteOne({ _id: id }).exec();
  }

  /* -------------------------------------------------------------- */
  /* -------------------- MONSTERS METHOD CRUD -------------------- */
  /* -------------------------------------------------------------- */

  // SELECT ALL
  async getAllMonsters(): Promise<Monsters[]> {
    return this.monstersModel.find().exec();
  }

  // SELECT ONE
  async getOneMonster(id): Promise<Monsters> {
    return this.monstersModel.findOne({ _id: id }).exec();
  }

  // POST
  async createMonster(createMonsterDto: CreateMonsterDto): Promise<Monsters> {
    const createdMonster = new this.monstersModel(createMonsterDto);
    return createdMonster.save();
  }

  // UPDATE
  // async updateMonster(id, body: CreateMonsterDto): Promise<Monsters> {
  //   return this.monstersModel.updateOne({ _id: id }, body);
  // }

  // DELETE
  async deleteMonster(id): Promise<any> {
    return this.monstersModel.deleteOne({ _id: id }).exec();
  }

  /* ----------------------------------------------------------------- */
  /* -------------------- EQUIPEMENTS METHOD CRUD -------------------- */
  /* ----------------------------------------------------------------- */

  // SELECT ALL
  async getAllEquipements(): Promise<Equipements[]> {
    return this.equipementsModel.find().exec();
  }

  // SELECT ONE
  async getOneEquipement(id): Promise<Equipements> {
    return this.equipementsModel.findOne({ _id: id }).exec();
  }

  // POST
  async createEquipement(
    createEquipementDto: CreateEquipementDto,
  ): Promise<Equipements> {
    const createdEquipement = new this.equipementsModel(createEquipementDto);
    return createdEquipement.save();
  }

  // UPDATE
  // async updateEquipement(id, body: CreateEquipementDto): Promise<Equipements> {
  //   return this.equipementsModel.updateOne({ _id: id }, body);
  // }

  // DELETE
  async deleteEquipement(id): Promise<any> {
    return this.equipementsModel.deleteOne({ _id: id }).exec();
  }
}
