import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPriceToCategory1776322522847 implements MigrationInterface {
    name = 'AddPriceToCategory1776322522847'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`price\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`price\``);
    }

}
