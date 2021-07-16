import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Applicants extends BaseSchema {
	protected tableName = 'applicants'

	public async up () {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id')
			table.string('nome').notNullable()
			table.text('resumo_da_entrevista', 'longtext').notNullable()
			table.string('logradouro').notNullable()
			table.string('numero').notNullable()
			table.string('complemento').notNullable()
			table.string('cidade').notNullable()
			table.string('estado').notNullable()
			table.string('cep').notNullable()

			table.timestamps(true, true)
		})
	}

	public async down () {
		this.schema.dropTable(this.tableName)
	}
}