import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Fornecedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', unique: true })
  razao_Social: string;

  @Column({ nullable: false, type: 'varchar' })
  endereco: string;

  @Column({ nullable: false, type: 'varchar', unique: true })
  contatoNome: string;

  @Column({ nullable: false, type: 'varchar', unique: true })
  contatoEmail: string;
}
