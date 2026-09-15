import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateClientsDto } from './dto/create-clients.dto';
import { UpdateClientsDto } from './dto/update-clients.dto';
import { Client } from './entities/clients.entities';

@Injectable()
export class ClientsService {
	constructor(
		@InjectRepository(Client)
		private readonly clientsRepository: Repository<Client>,
	) {}

	findAll(paginationDto?: PaginationDto) {
		const { limit = 10, offset = 0 } = paginationDto || {};

		return this.clientsRepository.find({
			take: limit,
			skip: offset,
			order: {
				id: 'desc',
			},
		});
	}

	findOne(id: number) {
		return this.clientsRepository.findOneBy({ id });
	}

	async createClient(createClientsDto: CreateClientsDto): Promise<Client> {
		const client = this.clientsRepository.create(createClientsDto);

		try {
			return await this.clientsRepository.save(client);
		} catch {
			throw new ConflictException('CPF ou email já cadastrado.');
		}
	}

	async updateClient(
		id: number,
		updateClientsDto: UpdateClientsDto,
	): Promise<Client> {
		const client = await this.clientsRepository.findOne({ where: { id } });

		if (!client) {
			throw new NotFoundException('Cliente não encontrado');
		}

		Object.assign(client, updateClientsDto);

		try {
			return await this.clientsRepository.save(client);
		} catch {
			throw new ConflictException('CPF ou email já cadastrado.');
		}
	}

	async removeClient(id: number) {
		const client = await this.clientsRepository.findOne({ where: { id } });

		if (!client) {
			throw new NotFoundException('Cliente não encontrado');
		}

		try {
			return await this.clientsRepository.remove(client);
		} catch {
			throw new ConflictException(
				'Esse cliente tem registros vinculados a ele.',
			);
		}
	}
}
