import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //NOTE check ถ้ามี process.env.PORT ก็จะใช้ค่านี้แต่ถ้าไม่มีจะ default 3000
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
