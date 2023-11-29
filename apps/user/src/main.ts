import { NestFactory } from '@nestjs/core';
import { UserCenterModule } from './app.module';
import { VersioningType, VERSION_NEUTRAL } from '@nestjs/common';
import { TransformInterceptor } from '@app/comm';
import { AllExceptionsFilter } from '@app/comm';
import { HttpExceptionFilter } from '@app/comm';
import { generateDocument } from './doc';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(UserCenterModule);

  // 接口版本化管理
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: [VERSION_NEUTRAL, '1', '2'],
  });

  // 全局前缀
  app.setGlobalPrefix('api');

  // // 统一响应体格式
  // app.useGlobalInterceptors(new TransformInterceptor());

  // 异常过滤器
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

  // 格式化cookies
  app.use(cookieParser());

  // 创建文档
  generateDocument(app);

  await app.listen(3000);
}
bootstrap();
