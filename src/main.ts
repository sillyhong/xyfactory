import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextModule } from './next/next.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .get(NextModule)
    .prepare()
    .then(() => {
      app.listen(3000);
    });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
