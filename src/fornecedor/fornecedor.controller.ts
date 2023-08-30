import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';
import { FornecedorService } from './fornecedor.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('fornecedor')
@ApiTags('Fornecedor')
export class FornecedorController {
  constructor(private readonly fornecedorService: FornecedorService) {}

  @Post('/create')
  async create(@Body() createFornecedorDto: CreateFornecedorDto) {
    return await this.fornecedorService.create(createFornecedorDto);
  }

  @Get('/all')
  async findAll() {
    return await this.fornecedorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.fornecedorService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateFornecedorDto: UpdateFornecedorDto,
  ) {
    return await this.fornecedorService.update(id, updateFornecedorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.fornecedorService.delete(id);
  }
}
