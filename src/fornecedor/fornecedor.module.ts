import { Module } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { FornecedorController } from './fornecedor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fornecedor } from './entities/fornecedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fornecedor])],
  controllers: [FornecedorController],
  providers: [FornecedorService],
})
export class FornecedorModule {}
