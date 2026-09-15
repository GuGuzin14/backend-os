import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
} from '@nestjs/common';
import { MaintenanceCallsService } from './maintenance-calls.service';
import { CreateMaintenanceDto } from './dto/create-maintenance-calls.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance-calls.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('maintenance-calls')
export class MaintenanceCallsController {
	constructor(
		private readonly maintenanceCallsService: MaintenanceCallsService,
	) {}

	@Post()
	create(@Body() createMaintenanceDto: CreateMaintenanceDto) {
		return this.maintenanceCallsService.createMaintenance(
			createMaintenanceDto,
		);
	}

	@Get()
	findAll(@Query() paginationDto: PaginationDto) {
		return this.maintenanceCallsService.findAll(paginationDto);
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.maintenanceCallsService.findOne(id);
	}

	@Patch(':id')
	update(
		@Param('id') id: number,
		@Body() updateMaintenanceDto: UpdateMaintenanceDto,
	) {
		return this.maintenanceCallsService.updateMaintenance(
			id,
			updateMaintenanceDto,
		);
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.maintenanceCallsService.removeMaintenance(id);
	}
}
