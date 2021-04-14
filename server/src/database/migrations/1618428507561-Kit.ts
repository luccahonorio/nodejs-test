import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Kit1618428507561 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "kits",
            columns: [
                {
                    name:"id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name:"name",
                    type: "varchar",
                },
                {
                    name:"created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name:"updated_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: 'isDeleted',
                    type: "boolean",
                    default: false,

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("kits");
    }

}
