import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { EntitiesService } from './entities.service';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Get('')
  getAll(): any {
    return this.entitiesService.getAll();
  }

  @Get('/hero/:heroID')
  getHeroByID(@Param() params): any {
    return this.entitiesService.getHero(params.heroID);
  }

  @Get('/monster/:monsterID')
  getMonsterByID(@Param() params): any {
    return this.entitiesService.getMonster(params.monsterID);
  }

  @Put('/:heroID')
  setHeroStat(@Param() params, @Body() body): any {
    return this.entitiesService.setHeroStat(params.heroID, body);
  }

  @Delete('/:monsterID')
  deleteMonster(@Param() params): any {
    return this.entitiesService.deleteMonster(params.monsterID);
  }
}
