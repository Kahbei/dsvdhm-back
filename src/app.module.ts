import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntitiesModule } from './entities/entities.module';

@Module({
  imports: [
    EntitiesModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_DATABASE),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
