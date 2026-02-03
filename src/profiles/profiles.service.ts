import { Injectable, Param } from '@nestjs/common';
import {randomUUID} from "crypto";
import { CreateProfileDto } from './dto/create-profile-dto';
import { UpdateProfileDto } from './dto/update-profile';
import { empty } from 'rxjs';
@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID,
      name: 'Alice Johnson',
      description:
        'Software engineer with a passion for AI and machine learning.',
    },
    {
      id: randomUUID(),
      name: 'David Kim',
      description:
        'Marketing specialist focused on digital campaigns and brand growth.',
    },
    {
      id: randomUUID(),
      name: 'Maria Lopez',
      description:
        'Graphic designer skilled in creating modern, user-friendly visuals.',
    },
    {
      id: randomUUID(),
      name: 'James Smith',
      description:
        'Project manager experienced in agile methodologies and team leadership.',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    return this.profiles.find((profile) => profile.id === id);
  }

  create(CreateProfileDto:CreateProfileDto){
    const newProfile = {
      id: randomUUID(),
      ...CreateProfileDto
  }
this.profiles.push(newProfile);
return newProfile;
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    const matchingProfile = this.profiles.find((existingProfile)=>existingProfile.id===id);
    if(!matchingProfile){
      return {}};
      matchingProfile.name = updateProfileDto.name;
      matchingProfile.description = updateProfileDto.description;
      return matchingProfile;
    }
    delete(id: string) {
      const index = this.profiles.findIndex((profile) => profile.id === id);  
      if (index === -1) {
        return;
      }}

}
