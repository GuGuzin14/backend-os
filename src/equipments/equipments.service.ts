import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateEquipmentsDto } from './dto/create-equipments.dto';
import { UpdateEquipmentDto } from './dto/update-equipment;dto';
import { Equipment } from './entities/equipments.entites';

@Injectable()
export class EquipmentsService {
	constructor(
		@InjectRepository(Equipment)
		private readonly equipmentsRepository: Repository<Equipment>,
	) {}

	findAll(paginationDto?: PaginationDto) {
		const { limit = 10, offset = 0 } = paginationDto || {};

		return this.equipmentsRepository.find({
			take: limit,
			skip: offset,
			order: {
				id: 'desc',
			},
		});
	}

	findOne(id: number) {
		return this.equipmentsRepository.findOneBy({ id });
	}

	async createEquipment(
		createEquipmentsDto: CreateEquipmentsDto,
	): Promise<Equipment> {
		const equipment = this.equipmentsRepository.create(createEquipmentsDto);

		try {
			return await this.equipmentsRepository.save(equipment);
		} catch {
			throw new ConflictException('Não foi possível cadastrar o equipamento.');
		}
	}

	async updateEquipment(
		id: number,
		updateEquipmentDto: UpdateEquipmentDto,
	): Promise<Equipment> {
		const equipment = await this.equipmentsRepository.findOne({ where: { id } });

		if (!equipment) {
			throw new NotFoundException('Equipamento não encontrado');
		}

		Object.assign(equipment, updateEquipmentDto);

		try {
			return await this.equipmentsRepository.save(equipment);
		} catch {
			throw new ConflictException('Não foi possível atualizar o equipamento.');
		}
	}

	async removeEquipment(id: number) {
		const equipment = await this.equipmentsRepository.findOne({ where: { id } });

		if (!equipment) {
			throw new NotFoundException('Equipamento não encontrado');
		}

		try {
			return await this.equipmentsRepository.remove(equipment);
		} catch {
			throw new ConflictException(
				'Esse equipamento tem registros vinculados a ele.',
			);
		}
	}
}
