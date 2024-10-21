import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:example@mongo:27017/my-nest-starter-mongo-1?authSource=admin',
    ),
  ],
})
export class AppModule {}
