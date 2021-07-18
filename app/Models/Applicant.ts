import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Applicant extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public nome: string

	@column()
	public cpf: string

	@column()
	public email: string

	@column()
	public resumo_da_entrevista: string

	@column()
	public logradouro: string

	@column()
	public numero: string

	@column()
	public complemento: string

	@column()
	public cidade: string

	@column()
	public estado: string

	@column()
	public cep: string

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}
