import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fornecedor } from './entities/fornecedor.entity';
import { Repository } from 'typeorm';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';

@Injectable()
export class FornecedorService {
  constructor(
    @InjectRepository(Fornecedor)
    private readonly fornecedorRepository: Repository<Fornecedor>,
  ) {}

  async create(dto: CreateFornecedorDto) {
    try {
      const fornecedor = await this.fornecedorRepository.create(dto);
      if (
        (fornecedor.contatoNome && fornecedor.contatoEmail == null) ||
        (fornecedor.contatoNome && fornecedor.contatoEmail == '')
      ) {
        throw new HttpException(
          'Os campos de email e nome do fornecedor não podem esta vazios ou nullo',
          HttpStatus.BAD_REQUEST,
        );
      }
      await this.fornecedorRepository.save(fornecedor);
      return {
        razaoSocial: dto.razao_Social,
        endereco: dto.endereco,
        contatos: [dto.contatoNome, dto.contatoEmail],
      };
    } catch (error) {
      throw new HttpException(
        'Erro em algum campo para criar este fornecedor',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    try {
      const fornecedores = await this.fornecedorRepository.find();
      return fornecedores;
    } catch (error) {
      throw new HttpException(
        'Erro ao encontrar todos os fornecedores',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number) {
    try {
      const fornecedores = await this.fornecedorRepository.findOneBy({
        id: id,
      });
      if (!fornecedores) {
        throw new HttpException(
          `Fornecedor com este id: ${fornecedores.id} não foi encontrado`,
          HttpStatus.NOT_FOUND,
        );
      }
      return fornecedores;
    } catch (error) {
      throw new HttpException(
        'Fornecedor com este id não existe',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, dto: UpdateFornecedorDto) {
    try {
      const fornecedor = await this.fornecedorRepository.findOneBy({ id: id });
      if (!fornecedor) {
        throw new HttpException(
          `Fornecedor com este id: ${id} não foi encontrado`,
          HttpStatus.NOT_FOUND,
        );
      }
      await this.fornecedorRepository.update(id, dto);
      return { message: 'Dados do fornecedor atualizados com sucesso.' };
    } catch (error) {
      throw new HttpException(
        'Não foi possivel atulizar este fornecedor',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: number) {
    try {
      const fornecedor = await this.fornecedorRepository.findOneBy({ id: id });
      if (!fornecedor) {
        throw new HttpException(
          `Fornecedor com este id: ${fornecedor.id} não foi encontrado`,
          HttpStatus.NOT_FOUND,
        );
      }
      await this.fornecedorRepository.delete(id);
      return { message: 'Fornecedor removido do sistema com sucesso' };
    } catch (error) {
      throw new HttpException(
        'Erro ao remover este fornecedor',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
