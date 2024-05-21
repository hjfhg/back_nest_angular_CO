import { MigrationInterface, QueryRunner } from "typeorm";

export class AñadiendoCoreoTableUser1716302847480 implements MigrationInterface {
    name = 'AñadiendoCoreoTableUser1716302847480'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

}
