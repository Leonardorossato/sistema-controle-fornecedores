import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresConnection } from './config/ormconfig';
import { ConfigModule } from '@nestjs/config';
import { FornecedorModule } from './fornecedor/fornecedor.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(postgresConnection),
    FornecedorModule,
  ],
})
export class AppModule {}
