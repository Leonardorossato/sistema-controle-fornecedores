import { ApiProperty } from '@nestjs/swagger';

export class CreateFornecedorDto {
  @ApiProperty({ nullable: false, type: String })
  razao_Social: string;

  @ApiProperty({ nullable: false, type: String })
  endereco: string;

  @ApiProperty({ nullable: false, type: String })
  contatoNome: string;

  @ApiProperty({ nullable: false, type: String })
  contatoEmail: string;
}
