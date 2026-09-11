import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entities';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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

   findOne(id: number){
        const user = this.userRepository.findOneBy({
            id: id
        })

        return user;
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

    async removeUser(id: number){
        const user = await this.userRepository.findOne({where: {id}})

        if(!user){
            throw new NotFoundException('Usuario não encontrado')
        }

        try{
        return this.userRepository.remove(user)
        } catch {
            throw new ConflictException('Esse usuario tem registros vinculados a ele.')
        }
    }

    async updateUser (id : number, updateUserDto: UpdateUserDto) {
        const user = await this.userRepository.findOne({where: {id}})

        if (!user) {
            throw new NotFoundException('Usuario não encontrado')
        }

        const {nome, email, senha} = updateUserDto

        if (nome !== undefined) {
            user.nome = nome
        }

        if (email !== undefined) {
            user.email = email
        }

        if (senha !== undefined) {
            user.passwordHash = await bcrypt.hash(senha, 10)
        }

        return this.userRepository.save(user)
    }

}
