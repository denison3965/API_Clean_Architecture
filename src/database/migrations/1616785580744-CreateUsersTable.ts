import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1616785580744 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },

                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,

                },

                {
                    name: 'password',
                    type: 'varchar',
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');

    }

}
