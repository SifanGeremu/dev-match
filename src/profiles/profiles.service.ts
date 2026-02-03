import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: 1,
      name: 'Alice Johnson',
      description:
        'Software engineer with a passion for AI and machine learning.',
    },
    {
      id: 2,
      name: 'David Kim',
      description:
        'Marketing specialist focused on digital campaigns and brand growth.',
    },
    {
      id: 3,
      name: 'Maria Lopez',
      description:
        'Graphic designer skilled in creating modern, user-friendly visuals.',
    },
    {
      id: 4,
      name: 'James Smith',
      description:
        'Project manager experienced in agile methodologies and team leadership.',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    return this.profiles.find((profile) => profile.id === Number(id));
  }
}
