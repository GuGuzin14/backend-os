import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceCallsController } from './maintenance-calls.controller';
import { MaintenanceCallsService } from './maintenance-calls.service';
import { MaintenanceCalls } from './entities/maintenance-calls.entities';

@Module({
  imports: [TypeOrmModule.forFeature([MaintenanceCalls])],
  controllers: [MaintenanceCallsController],
  providers: [MaintenanceCallsService],
})
export class MaintenanceCallsModule {}
