import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateMaintenanceDto } from './dto/create-maintenance-calls.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance-calls.dto';
import { MaintenanceCalls } from './entities/maintenance-calls.entities';

@Injectable()
export class MaintenanceCallsService {
	constructor(
		@InjectRepository(MaintenanceCalls)
		private readonly maintenanceCallsRepository: Repository<MaintenanceCalls>,
	) {}

	findAll(paginationDto?: PaginationDto) {
		const { limit = 10, offset = 0 } = paginationDto || {};

		return this.maintenanceCallsRepository.find({
			take: limit,
			skip: offset,
			order: {
				id: 'desc',
			},
		});
	}

	findOne(id: number) {
		return this.maintenanceCallsRepository.findOneBy({ id });
	}

	async createMaintenance(
		createMaintenanceDto: CreateMaintenanceDto,
	): Promise<MaintenanceCalls> {
		const { valor, ...maintenanceData } = createMaintenanceDto;
		const maintenanceCall = this.maintenanceCallsRepository.create({
			...maintenanceData,
			valor: String(valor),
		});

		try {
			return await this.maintenanceCallsRepository.save(maintenanceCall);
		} catch {
			throw new ConflictException('Não foi possível cadastrar o chamado.');
		}
	}

	async updateMaintenance(
		id: number,
		updateMaintenanceDto: UpdateMaintenanceDto,
	): Promise<MaintenanceCalls> {
		const maintenanceCall = await this.maintenanceCallsRepository.findOne({
			where: { id },
		});

		if (!maintenanceCall) {
			throw new NotFoundException('Chamado de manutenção não encontrado');
		}

		const { valor, ...maintenanceData } = updateMaintenanceDto;
		Object.assign(maintenanceCall, maintenanceData);

		if (valor !== undefined) {
			maintenanceCall.valor = String(valor);
		}

		try {
			return await this.maintenanceCallsRepository.save(maintenanceCall);
		} catch {
			throw new ConflictException('Não foi possível atualizar o chamado.');
		}
	}

	async removeMaintenance(id: number) {
		const maintenanceCall = await this.maintenanceCallsRepository.findOne({
			where: { id },
		});

		if (!maintenanceCall) {
			throw new NotFoundException('Chamado de manutenção não encontrado');
		}

		try {
			return await this.maintenanceCallsRepository.remove(maintenanceCall);
		} catch {
			throw new ConflictException(
				'Não foi possível remover o chamado de manutenção.',
			);
		}
	}
}
