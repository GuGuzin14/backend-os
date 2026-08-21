import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entities';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>, 
    ) {

    }

    findAll(paginationDto?: PaginationDto){

        const {limit = 10, offset = 0} = paginationDto || {};
        const users = this.userRepository.find({
            take: limit,
            skip: offset,
            relations:['id'],
            order: {
                id: 'desc'
            }
        })

        return users;
    }

   async createUsers(users: CreateUserDto): Promise<User>{

        const {nome, email, senha} = users;

        const passwordHash = await bcrypt.hash(senha, 10)

        const user = this.userRepository.create({
            nome,
            email,
            passwordHash
        })

        return this.userRepository.save(user)
        
    }




}
