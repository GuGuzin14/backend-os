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
import { EquipmentsService } from './equipments.service';
import { CreateEquipmentsDto } from './dto/create-equipments.dto';
import { UpdateEquipmentDto } from './dto/update-equipment;dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('equipments')
export class EquipmentsController {
	constructor(private readonly equipmentsService: EquipmentsService) {}

	@Post()
	create(@Body() createEquipmentsDto: CreateEquipmentsDto) {
		return this.equipmentsService.createEquipment(createEquipmentsDto);
	}

	@Get()
	findAll(@Query() paginationDto: PaginationDto) {
		return this.equipmentsService.findAll(paginationDto);
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.equipmentsService.findOne(id);
	}

	@Patch(':id')
	update(
		@Param('id') id: number,
		@Body() updateEquipmentDto: UpdateEquipmentDto,
	) {
		return this.equipmentsService.updateEquipment(id, updateEquipmentDto);
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.equipmentsService.removeEquipment(id);
	}
}
