import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/comm/database/database.module';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepProviders } from './department.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DepartmentController],
  providers: [...DepProviders, DepartmentService],
  exports: [DepartmentService],
})
export class DepartmentModule {}
