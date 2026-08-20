import { Module } from '@nestjs/common';
import { MaintenanceCallsController } from './maintenance-calls.controller';
import { MaintenanceCallsService } from './maintenance-calls.service';

@Module({
  controllers: [MaintenanceCallsController],
  providers: [MaintenanceCallsService]
})
export class MaintenanceCallsModule {}
