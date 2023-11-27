import { Inject, Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './department.mysql.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @Inject('DEP_REPOSITORY')
    private depRepository: Repository<Department>,
  ) {}

  create(createDepartmentDto: CreateDepartmentDto) {
    return this.depRepository.save(createDepartmentDto);
  }

  findAll() {
    return this.depRepository.find({ relations: ['users'] });
  }

  findOne(id: number) {
    return this.depRepository.findOne({
      where: { id: id },
      relations: ['users'],
    });
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
