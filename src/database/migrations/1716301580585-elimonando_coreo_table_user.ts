import { MigrationInterface, QueryRunner } from "typeorm";

export class ElimonandoCoreoTableUser1716301580585 implements MigrationInterface {
    name = 'ElimonandoCoreoTableUser1716301580585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

}
