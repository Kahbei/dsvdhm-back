import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
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
  @Get('/heroes')
  getAllHeroes(): any {
    const getAllHeroes = this.entitiesService.getAllHeroes();

    if (!getAllHeroes) {
      throw new NotFoundException();
    }

    return getAllHeroes;
  }

  /* -- SELECT ONE -- */
  @Get('/heroes/:id')
  getOneHeroe(@Param() paramID: any) {
    const getOneHeroe = this.entitiesService.getOneHeroe(paramID.id);

    if (!getOneHeroe) {
      throw new NotFoundException();
    }

    return getOneHeroe;
  }

  /* -- POST -- */
  @Post('/heroes/new')
  createHeroe(@Body() newHeroe: CreateHeroeDto): any {
    const createHeroe = this.entitiesService.createHeroe(newHeroe);

    if (!createHeroe) {
      throw new NotFoundException();
    }

    return createHeroe;
  }

  /* -- UPDATE -- */
  @Put('/heroes/:id')
  updateHeroe(
    @Param() paramID: any,
    @Body() updatedHeroe: CreateHeroeDto,
  ): any {
    const updateHeroe = this.entitiesService.updateHeroe(
      paramID.id,
      updatedHeroe,
    );

    if (!updateHeroe) {
      throw new NotFoundException();
    }

    return updateHeroe;
  }

  /* -- DELETE -- */
  @Delete('/heroes/:id')
  deleteHeroe(@Param() paramID: any): any {
    const deleteHeroe = this.entitiesService.deleteHeroe(paramID.id);

    if (!deleteHeroe) {
      throw new NotFoundException();
    }

    return deleteHeroe;
  }

  /* -------------------------------------------------------- */
  /* -------------------- MONSTERS ROUTE -------------------- */
  /* -------------------------------------------------------- */

  /* -- SELECT ALL -- */
  @Get('/monsters')
  getAllMonsters(): any {
    const getAllMonsters = this.entitiesService.getAllMonsters();

    if (!getAllMonsters) {
      throw new NotFoundException();
    }

    return getAllMonsters;
  }

  /* -- SELECT ONE -- */
  @Get('/monsters/:id')
  getOneMonster(@Param() paramID: any) {
    const getOneMonster = this.entitiesService.getOneMonster(paramID.id);

    if (!getOneMonster) {
      throw new NotFoundException();
    }

    return getOneMonster;
  }

  /* -- POST -- */
  @Post('/monsters/new')
  createMonster(@Body() newMonster: CreateMonsterDto): any {
    const createMonster = this.entitiesService.createMonster(newMonster);

    if (!createMonster) {
      throw new NotFoundException();
    }

    return createMonster;
  }

  /* -- UPDATE -- */
  @Put('/monsters/:id')
  updateMonster(
    @Param() paramID: any,
    @Body() updatedMonster: CreateMonsterDto,
  ): any {
    const updateMonster = this.entitiesService.updateMonster(
      paramID.id,
      updatedMonster,
    );

    if (!updateMonster) {
      throw new NotFoundException();
    }

    return updateMonster;
  }

  /* -- DELETE -- */
  @Delete('/monsters/:id')
  deleteMonster(@Param() paramID: any): any {
    const deleteMonster = this.entitiesService.deleteMonster(paramID.id);

    if (!deleteMonster) {
      throw new NotFoundException();
    }

    return deleteMonster;
  }

  // /* ----------------------------------------------------------- */
  // /* -------------------- EQUIPEMENTS ROUTE -------------------- */
  // /* ----------------------------------------------------------- */

  /* -- SELECT ALL -- */
  @Get('/equipements')
  getAllEquipements(): any {
    const getAllEquipements = this.entitiesService.getAllEquipements();

    if (!getAllEquipements) {
      throw new NotFoundException();
    }

    return getAllEquipements;
  }

  /* -- SELECT ONE -- */
  @Get('/equipements/:id')
  getOneEquipement(@Param() paramID: any) {
    const getOneEquipement = this.entitiesService.getOneEquipement(paramID.id);

    if (!getOneEquipement) {
      throw new NotFoundException();
    }

    return getOneEquipement;
  }

  /* -- POST -- */
  @Post('/equipements/new')
  createEquipement(@Body() newEquipement: CreateEquipementDto): any {
    const createEquipement =
      this.entitiesService.createEquipement(newEquipement);

    if (!createEquipement) {
      throw new NotFoundException();
    }

    return createEquipement;
  }

  /* -- UPDATE -- */
  @Put('/equipements/:id')
  updateEquipement(
    @Param() paramID: any,
    @Body() updatedEquipement: CreateEquipementDto,
  ): any {
    const updateEquipement = this.entitiesService.updateEquipement(
      paramID.id,
      updatedEquipement,
    );

    if (!updateEquipement) {
      throw new NotFoundException();
    }

    return updateEquipement;
  }

  /* -- DELETE -- */
  @Delete('/equipements/:id')
  deleteEquipement(@Param() paramID: any): any {
    const deleteEquipement = this.entitiesService.deleteEquipement(paramID.id);

    if (!deleteEquipement) {
      throw new NotFoundException();
    }

    return deleteEquipement;
  }
}
