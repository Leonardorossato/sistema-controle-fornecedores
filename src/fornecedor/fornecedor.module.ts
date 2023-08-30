import { Module } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { FornecedorController } from './fornecedor.controller';

@Module({
  controllers: [FornecedorController],
  providers: [FornecedorService]
})
export class FornecedorModule {}
