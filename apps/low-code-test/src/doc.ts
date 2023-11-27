import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as packageConfig from '../../user/package.json';

export const generateDocument = (app) => {
  const options = new DocumentBuilder()
    .setTitle(packageConfig.name)
    .setDescription(packageConfig.description)
    .setVersion(packageConfig.version)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  console.log(document);

  SwaggerModule.setup('/doc', app, document);
};
