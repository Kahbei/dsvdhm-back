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
    const selectAllHeroes = await this.heroesModel.find();
    return selectAllHeroes;
  }

  // SELECT ONE
  async getOneHeroe(id): Promise<Heroes> {
    const selectedHeroe = await this.heroesModel.findOne({ _id: id });
    return selectedHeroe;
  }

  // POST
  async createHeroe(createHeroeDto: CreateHeroeDto): Promise<Heroes> {
    const createdHeroe = await new this.heroesModel(createHeroeDto);
    return createdHeroe.save();
  }

  // UPDATE
  async updateHeroe(id, body: CreateHeroeDto): Promise<Heroes> {
    return this.heroesModel.findByIdAndUpdate({ _id: id }, body);
  }

  // DELETE
  async deleteHeroe(id): Promise<any> {
    const deletedHeroe = await this.heroesModel.deleteOne({ _id: id });
    return deletedHeroe;
  }

  /* -------------------------------------------------------------- */
  /* -------------------- MONSTERS METHOD CRUD -------------------- */
  /* -------------------------------------------------------------- */

  // SELECT ALL
  async getAllMonsters(): Promise<Monsters[]> {
    const selectAllMonsters = await this.monstersModel.find();
    return selectAllMonsters;
  }

  // SELECT ONE
  async getOneMonster(id): Promise<Monsters> {
    const selectedMonster = this.monstersModel.findOne({ _id: id });
    return selectedMonster;
  }

  // POST
  async createMonster(createMonsterDto: CreateMonsterDto): Promise<Monsters> {
    const createdMonster = new this.monstersModel(createMonsterDto);
    return createdMonster.save();
  }

  // UPDATE
  async updateMonster(id, body: CreateMonsterDto): Promise<Monsters> {
    return this.monstersModel.findByIdAndUpdate({ _id: id }, body);
  }

  // DELETE
  async deleteMonster(id): Promise<any> {
    const deletedMonster = this.monstersModel.deleteOne({ _id: id });
    return deletedMonster;
  }

  /* ----------------------------------------------------------------- */
  /* -------------------- EQUIPEMENTS METHOD CRUD -------------------- */
  /* ----------------------------------------------------------------- */

  // SELECT ALL
  async getAllEquipements(): Promise<Equipements[]> {
    const selectAllEquipements = this.equipementsModel.find();
    return selectAllEquipements;
  }

  // SELECT ONE
  async getOneEquipement(id): Promise<Equipements> {
    const selectedEquipement = this.equipementsModel.findOne({ _id: id });
    return selectedEquipement;
  }

  // POST
  async createEquipement(
    createEquipementDto: CreateEquipementDto,
  ): Promise<Equipements> {
    const createdEquipement = new this.equipementsModel(createEquipementDto);
    return createdEquipement.save();
  }

  // UPDATE
  async updateEquipement(id, body: CreateEquipementDto): Promise<Equipements> {
    return this.equipementsModel.findByIdAndUpdate({ _id: id }, body);
  }

  // DELETE
  async deleteEquipement(id): Promise<any> {
    const deletedEquipement = this.equipementsModel.deleteOne({ _id: id });
    return deletedEquipement;
  }
}
