import { MigrationInterface, QueryRunner } from 'typeorm';

export class Fornecedor1693413643719 implements MigrationInterface {
  name = 'Fornecedor1693413643719';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "fornecedor" ("id" SERIAL NOT NULL, "razao_Social" character varying NOT NULL, "endereco" character varying NOT NULL, "contatoNome" character varying NOT NULL, "contatoEmail" character varying NOT NULL, CONSTRAINT "UQ_a5a2cf04ede94c322888de0e9d0" UNIQUE ("contatoNome"), CONSTRAINT "UQ_6790460161c5cad647d15913cfd" UNIQUE ("contatoEmail"), CONSTRAINT "PK_5bff2d88b4e0ef84a6444b786a6" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "fornecedor"`);
  }
}
