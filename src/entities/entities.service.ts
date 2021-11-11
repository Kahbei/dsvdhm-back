import { Injectable } from '@nestjs/common';
import * as heroes from '../dataJSON/hero.json';
import * as monsters from '../dataJSON/monstre.json';

@Injectable()
export class EntitiesService {
  getAll(): any {
    return heroes;
  }

  getHero(heroID): any {
    return heroes.HERO.filter((e) => e.id === heroID);
  }

  getMonster(monsterID): any {
    return monsters.MONSTRE.filter((e) => e.id === monsterID);
  }

  setHeroStat(heroID, { ...body }): any {
    const updateHero = {
      id: heroID,
      ...body,
    };
    return updateHero;
  }

  deleteMonster(monsterID): any {
    const defeatedMonster = this.getMonster(monsterID);
    return defeatedMonster;
  }
}
