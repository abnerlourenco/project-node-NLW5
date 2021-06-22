<<<<<<< HEAD
import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
=======
import {MigrationInterface, QueryRunner, Table} from "typeorm";
>>>>>>> 562e04ec4c7cb8e57121272373ca3d6c45258adb

export class CreateConnections1623870902695 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "connections",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "admin_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "update_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "socket_id",
                        type: "varchar",
                    },
                ],
            }),
        );
<<<<<<< HEAD

        await queryRunner.createForeignKey(
            "connections",
            new TableForeignKey({
                name: "FKConnectionUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("connections", "FKConnectionUser");
=======
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
>>>>>>> 562e04ec4c7cb8e57121272373ca3d6c45258adb
        await queryRunner.dropTable("connections");
    }

}
