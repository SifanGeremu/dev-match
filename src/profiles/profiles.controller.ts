import { Controller,Get,Query,Param,Post,Body,Put,HttpStatus,HttpCode,Delete} from '@nestjs/common';
import {CreateProfileDto}   from './dto/create-profile-dto';
import { UpdatePortfolioDto } from './dto/update-portfolio';
import { create } from 'domain';
@Controller('profiles')
export class ProfilesController {
//get all profiles
    @Get()
    findAll(@Query('location') location: string){
        return [{location}];
    }
    //get one proffile by id
    @Get(':id')
    findOne(@Param('id') id:string){
        return{id};
    }

    //post create a profile
    @Post()
    create(@Body() CreateProfileDto: CreateProfileDto){
        return {
            name:CreateProfileDto.name,
            description:CreateProfileDto.description
        }

    }
@Put(':id')
update(@Param('id') id:string,@Body() updateProfileDto: UpdatePortfolioDto){
    return {
        id,
        ...updateProfileDto
    }   }

    @Delete(':id')
@HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param(':id') id:string){
    
    }
}
