import { MigrationInterface, QueryRunner } from "typeorm";

export class Ape1716301975114 implements MigrationInterface {
    name = 'Ape1716301975114'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "apellido" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "apellido"`);
    }

}
