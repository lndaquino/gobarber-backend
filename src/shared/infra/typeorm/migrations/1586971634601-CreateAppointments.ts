import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1586971634601
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'provider',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}

/**
 * Linha do tempo
 *
 * 1a semana: criar tabela Agendamentos
 * 2a semana: criar tabela usuarios
 * 3a semana: entra novo dev e percebe q tinha um campo com erro na tabela agendamentos e faz uma edição
 * 4a semana: cria tabela Compras
 * Migrations ajuda a fazer esse controle das alterações no banco de dados para todos os envolvidos
 */
