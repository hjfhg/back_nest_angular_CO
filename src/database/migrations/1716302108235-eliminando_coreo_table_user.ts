import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminandoCoreoTableUser1716302108235 implements MigrationInterface {
    name = 'EliminandoCoreoTableUser1716302108235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "apellido"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "apellido" character varying NOT NULL`);
    }

}
