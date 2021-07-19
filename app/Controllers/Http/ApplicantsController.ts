import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Applicant from 'App/Models/Applicant'

export default class ApplicantsController {
	public async index ({ request }: HttpContextContract) {
		const page = request.input('page', 1)

		const applicants = await Database.query().from('applicants').select('*').paginate(page)

		return applicants
	}
	
	public async store ({ request }: HttpContextContract) {
		const data = request.only([
			'nome',
			'telefone',
			'cpf',
			'email',
			'resumo_da_entrevista',
			'logradouro',
			'numero',
			'complemento',
			'cidade',
			'estado',
			'cep'
		])

		const applicant = await Applicant.create(data)

		return applicant
	}
	
	public async show ({ params }: HttpContextContract) {
		const applicant = await Applicant.findOrFail(params.id)

		return applicant
	}
	
	public async update ({ request, params }: HttpContextContract) {
		const applicant = await Applicant.findOrFail(params.id)
		const data = request.only([
			'nome',
			'telefone',
			'cpf',
			'email',
			'resumo_da_entrevista',
			'logradouro',
			'numero',
			'complemento',
			'cidade',
			'estado',
			'cep'
		])

		applicant.merge(data)

		await applicant.save()

		return applicant
	}
	
	public async destroy ({ params }: HttpContextContract) {
		const applicant = await Applicant.findOrFail(params.id)

		await applicant.delete()
	}
}