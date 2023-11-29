import { NestFactory } from '@nestjs/core';
import { MaterialsModule } from './materials.module';
import { VersioningType, VERSION_NEUTRAL } from '@nestjs/common';
import { AllExceptionsFilter, HttpExceptionFilter } from '@app/comm';
import { generateDocument } from './doc';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(MaterialsModule);

  // 接口版本化管理
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: [VERSION_NEUTRAL, '1', '2'],
  });

  // 全局前缀
  app.setGlobalPrefix('api');

  // 异常过滤器
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

  // 格式化cookies
  app.use(cookieParser());

  // 创建文档
  generateDocument(app);

  await app.listen(4000);
}
bootstrap();
