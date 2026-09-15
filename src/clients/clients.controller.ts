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
import { ClientsService } from './clients.service';
import { CreateClientsDto } from './dto/create-clients.dto';
import { UpdateClientsDto } from './dto/update-clients.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('clients')
export class ClientsController {
	constructor(private readonly clientsService: ClientsService) {}

	@Post()
	create(@Body() createClientsDto: CreateClientsDto) {
		return this.clientsService.createClient(createClientsDto);
	}

	@Get()
	findAll(@Query() paginationDto: PaginationDto) {
		return this.clientsService.findAll(paginationDto);
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.clientsService.findOne(id);
	}

	@Patch(':id')
	update(
		@Param('id') id: number,
		@Body() updateClientsDto: UpdateClientsDto,
	) {
		return this.clientsService.updateClient(id, updateClientsDto);
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.clientsService.removeClient(id);
	}
}
