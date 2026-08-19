import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ClientsModule } from './clients/clients.module';
import { EquipmentsModule } from './equipments/equipments.module';

@Module({
  imports: [DbModule, ConfigModule.forRoot({isGlobal: true}), UserModule, ClientsModule, EquipmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
