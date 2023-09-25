import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'src/config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from 'src/common/entity/author.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.get<'mysql'>('database.type'),
          port: configService.get<number>('database.port'),
          host: configService.get<string>('database.host'),
          username: configService.get<string>('database.username'),
          password: configService.get<string>('database.password'),
          charset: configService.get<string>('database.charset'),
          database: configService.get<string>('database.database'),
          timezone: configService.get<string>('database.timezone'),
          synchronize: configService.get<boolean>('database.syncronize'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
        };
      },
    }),
    AuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
