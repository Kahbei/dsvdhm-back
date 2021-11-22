import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { CreateEquipementDto } from './schemas/dto/createEquipement.dto';
import { CreateHeroeDto } from './schemas/dto/createHeroe.dto';
import { CreateMonsterDto } from './schemas/dto/createMonster.dto';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  /* ------------------------------------------------------ */
  /* -------------------- HEROES ROUTE -------------------- */
  /* ------------------------------------------------------ */

  /* -- SELECT ALL -- */
  @Get('/heros')
  getAllHeroes(): any {
    return this.entitiesService.getAllHeroes();
  }

  /* -- SELECT ONE -- */
  @Get('/heros/:id')
  getOneHeroe(@Param() paramID: any) {
    console.log(paramID);
    return this.entitiesService.getOneHeroe(paramID.id);
  }

  /* -- POST -- */
  @Post('/heros/new')
  createHeroe(@Body() newHeroe: CreateHeroeDto): any {
    return this.entitiesService.createHeroe(newHeroe);
  }

  /* -- UPDATE -- */
  @Put('/heros/:id')
  updateHeroe(
    @Param() paramID: any,
    @Body() updatedHeroe: CreateHeroeDto,
  ): any {
    return this.entitiesService.updateHeroe(paramID.id, updatedHeroe);
  }

  /* -- DELETE -- */
  @Delete('/heros/:id')
  deleteHeroe(@Param() paramID: any): any {
    return this.entitiesService.deleteHeroe(paramID.id);
  }

  /* -------------------------------------------------------- */
  /* -------------------- MONSTERS ROUTE -------------------- */
  /* -------------------------------------------------------- */

  /* -- SELECT ALL -- */
  // @Get('/monsters')
  // getAllMonsters(): any {
  //   return this.entitiesService.getAllMonsters();
  // }

  // /* -- POST -- */
  // @Post('/monsters/new')
  // createMonster(@Body() newMonster: CreateMonsterDto): any {
  //   return this.entitiesService.createMonster(newMonster);
  // }

  // /* -- UPDATE -- */
  // @Put('/monsters/:id')
  // updateMonster(
  //   @Param() paramID: any,
  //   @Body() updatedMonster: CreateMonsterDto,
  // ): any {
  //   return this.entitiesService.updateMonster(paramID.id, updatedMonster);
  // }

  // /* -- DELETE -- */
  // @Delete('/monsters/:id')
  // deleteMonster(@Param() paramID: any): any {
  //   return this.entitiesService.deleteMonster(paramID.id);
  // }

  // /* ----------------------------------------------------------- */
  // /* -------------------- EQUIPEMENTS ROUTE -------------------- */
  // /* ----------------------------------------------------------- */

  // /* -- SELECT ALL -- */
  // @Get('/equipements')
  // getAllEquipements(): any {
  //   return this.entitiesService.getAllEquipements();
  // }

  // /* -- POST -- */
  // @Post('/equipements/new')
  // createEquipement(@Body() newEquipement: CreateEquipementDto): any {
  //   return this.entitiesService.createEquipement(newEquipement);
  // }

  // /* -- UPDATE -- */
  // @Put('/equipements/:id')
  // updateEquipement(
  //   @Param() paramID: any,
  //   @Body() updatedEquipement: CreateEquipementDto,
  // ): any {
  //   return this.entitiesService.updateEquipement(paramID.id, updatedEquipement);
  // }

  // /* -- DELETE -- */
  // @Delete('/equipements/:id')
  // deleteEquipement(@Param() paramID: any): any {
  //   return this.entitiesService.deleteEquipement(paramID.id);
  // }
}
