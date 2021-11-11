import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntitiesController } from './entities/entities.controller';
import { EntitiesService } from './entities/entities.service';

@Module({
  imports: [],
  controllers: [AppController, EntitiesController],
  providers: [AppService, EntitiesService],
})
export class AppModule {}
