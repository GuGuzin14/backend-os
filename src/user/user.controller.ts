import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('user')
export class UserController {

    constructor(
    private readonly userService: UserService,
    ) {}
    

    @Post()
    create(@Body() createUserDto: CreateUserDto){
       return this.userService.createUsers(createUserDto)
    }

    @Get()
    async findAll(@Query() paginationDto: PaginationDto){
        const users = await this.userService.findAll(paginationDto);
        return users;
    }

    @Get(':id')
     findOne(@Param('id') id: number ) {
         return this.userService.findOne(id);
    }

    @Patch(':id')
    updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(id, updateUserDto)
    }

    @Delete(':id')
    deleteUser( @Param('id') id: number){
        return this.userService.removeUser(id)
    }

}
