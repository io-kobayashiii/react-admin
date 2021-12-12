import * as React from 'react'
import Default from '../layouts/DefaultLayout'
import axios from 'axios'
import { FiSearch } from 'react-icons/fi'
import { useForm, SubmitHandler } from 'react-hook-form'
import Card from '../components/common/card/Card'
import CardHeader from '../components/common/card/CardHeader'
import CardContent from '../components/common/card/CardContent'
import Dividers from '../components/common/Dividers'
import Divider from '../components/common/Divider'
import MultipleDragAndDropInputField from '../components/form/MultipleDragAndDropInputField'
import CheckboxButton from '../components/form/CheckboxButton'
import Label from '../components/form/Label'
import Input from '../components/form/Input'
import RadioButton from '../components/form/RadioButton'
import Textarea from '../components/form/Textarea'
import ErrorTip from '../components/form/ErrorTip'
import Button from '../components/common/Button'

type CSVSearchFormNames = {
	csv_file: File
	check_in_advance: File
}
type ProductCodeSearchFormNames = {
	all: string
	partial: string
}
type KeywordSearchFormNames = {
	keyword: string
	condition: string
	division: string
}
type FileNameSearchFormNames = {
	file_name: string
	partial_match: string
}
type NoteSearchFormNames = {
	keyword: string
	condition: string
}

const Index = (): JSX.Element => {
	const env = process.env.MIX_FRONT_APP_ENV
	const baseURL =
		env === 'mock'
			? 'http://localhost:8083'
			: env === 'development'
			? 'http://api.localhost'
			: env === 'staging'
			? 'https://test-api.example.com'
			: 'https://api.example.com '
	let axiosBase = axios.create({
		baseURL: baseURL,
		headers: {
			'Content-Type': 'application/json',
			'X-Requested-With': 'XMLHttpRequest',
		},
		responseType: 'json',
	})
	axiosBase.get('/companies').then((res) => {
		console.log(res.data)
	})
	const breadcrumbs = [
		{
			displayText: 'HOME',
			href: '/',
		},
	]
	const CSVSearchFormUseForm = useForm<CSVSearchFormNames>()
	const CSVSearchFormOnSubmit: SubmitHandler<CSVSearchFormNames> = (data) => {
		console.log(data)
	}
	const ProductCodeSearchFormUseForm = useForm<ProductCodeSearchFormNames>()
	const ProductCodeSearchFormOnSubmit: SubmitHandler<ProductCodeSearchFormNames> = (data) => {
		console.log(data)
	}
	const KeywordSearchFormUseForm = useForm<KeywordSearchFormNames>()
	const KeywordSearchFormOnSubmit: SubmitHandler<KeywordSearchFormNames> = (data) => {
		console.log(data)
	}
	const FileNameSearchFormUseForm = useForm<FileNameSearchFormNames>()
	const FileNameSearchFormOnSubmit: SubmitHandler<FileNameSearchFormNames> = (data) => {
		console.log(data)
	}
	const NoteSearchFormUseForm = useForm<NoteSearchFormNames>()
	const NoteSearchFormOnSubmit: SubmitHandler<NoteSearchFormNames> = (data) => {
		console.log(data)
	}
	return (
		<Default breadcrumbs={breadcrumbs}>
			{/* <Card className={'bg-white'}>
				<CardHeader displayText={'カードヘッダー'} />
				<CardContent>
					<form action='/test' id={'form-xxxx-1'}>
						<Dividers>
							<Divider base={16} md={8}>
								<Card className={`h-100p`}>
									<InnerCardHeader displayText={'カード内のカードヘッダー'} />
									<CardContent>
										<ValidationGroup>
											<MultipleDragAndDropInputField id={'drag-and-drop-input-field'} name={'drag_and_drop_input_field'} format={'csv'} />
										</ValidationGroup>
									</CardContent>
								</Card>
							</Divider>
							<Divider base={16} md={8} className={`pl-32`}>
								<Card className={`h-100p`}>
									<InnerCardHeader displayText={'カード内のカードヘッダー'} />
									<CardContent>
										<CheckboxButton id={'checkbox-button'} name={'check_in_advance'} displayText={'チェックボックス'} />
									</CardContent>
								</Card>
							</Divider>
						</Dividers>
					</form>
				</CardContent>
			</Card> */}
			<Card className={'bg-white'}>
				<CardHeader displayText={'カードヘッダー'} />
				<CardContent>
					<form action='/test' onSubmit={CSVSearchFormUseForm.handleSubmit(CSVSearchFormOnSubmit)}>
						<Dividers>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'ファイル選択'} badge='required' />
							</Divider>
							<Divider base={16} md={12}>
								<MultipleDragAndDropInputField id={'csv_file'} name={'csv_file'} format={'csv'} />
							</Divider>
						</Dividers>
						<Dividers className={`mt-32`}>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'チェック状態'} badge='optional' />
							</Divider>
							<Divider base={16} md={12}>
								<CheckboxButton
									id={'check_in_advance'}
									name={'check_in_advance'}
									isError={!!CSVSearchFormUseForm.formState.errors.check_in_advance}
									value={1}
									register={CSVSearchFormUseForm.register}
									rules={{ required: false }}
									displayText={'あらかじめチェック'}
								/>
							</Divider>
						</Dividers>
						<div className={`mt-32 flex justify-center`}>
							<Button size={'large'} color={'blue'} type={'submit'} displayText={'検索'} Icon={FiSearch} iconPosition={'left'} />
						</div>
					</form>
				</CardContent>
			</Card>
			<Card className={'bg-white mt-32'}>
				<CardHeader displayText={'カードヘッダー'} />
				<CardContent>
					<form action='/test' onSubmit={ProductCodeSearchFormUseForm.handleSubmit(ProductCodeSearchFormOnSubmit)}>
						<Dividers>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'テキストエリア'} badge='required' />
							</Divider>
							<Divider base={16} md={12}>
								<Textarea<ProductCodeSearchFormNames>
									name={'all'}
									rows={6}
									isError={false}
									register={ProductCodeSearchFormUseForm.register}
									rules={{ required: false }}
								></Textarea>
							</Divider>
						</Dividers>
						<Dividers className={`mt-32`}>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'テキスト'} badge='required' />
							</Divider>
							<Divider base={16} md={12}>
								<Input<ProductCodeSearchFormNames>
									name={'partial'}
									type={'text'}
									isError={false}
									register={ProductCodeSearchFormUseForm.register}
									rules={{ required: false }}
								/>
							</Divider>
						</Dividers>
						<div className={`mt-32 flex justify-center`}>
							<Button size={'large'} color={'blue'} type={'submit'} displayText={'検索'} Icon={FiSearch} iconPosition={'left'} />
						</div>
					</form>
				</CardContent>
			</Card>
			<Card className={'bg-white mt-32'}>
				<CardHeader displayText={'カードヘッダー'} />
				<CardContent>
					<form action='/test' onSubmit={KeywordSearchFormUseForm.handleSubmit(KeywordSearchFormOnSubmit)}>
						<Dividers className={`mt-32`}>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'テキスト'} badge='required' />
							</Divider>
							<Divider base={16} md={12}>
								<Input<KeywordSearchFormNames>
									name={'keyword'}
									type={'text'}
									isError={false}
									register={KeywordSearchFormUseForm.register}
									rules={{ required: false }}
								/>
							</Divider>
						</Dividers>
						<Dividers className={`mt-32`}>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'検索条件'} badge='required' />
							</Divider>
							<Divider base={16} md={12}>
								<div>
									<RadioButton
										id={'condition_and'}
										name={'condition'}
										isError={!!KeywordSearchFormUseForm.formState.errors.condition}
										displayText={'AND'}
										register={KeywordSearchFormUseForm.register}
										rules={{ required: true }}
										value={'and'}
									/>
									<RadioButton
										id={'condition_or'}
										name={'condition'}
										isError={!!KeywordSearchFormUseForm.formState.errors.condition}
										displayText={'OR'}
										register={KeywordSearchFormUseForm.register}
										rules={{ required: true }}
										className={'ml-8'}
										value={'or'}
									/>
								</div>
								{KeywordSearchFormUseForm.formState.errors.condition && (
									<ErrorTip fieldError={KeywordSearchFormUseForm.formState.errors.condition} rules={{ required: true }} />
								)}
							</Divider>
						</Dividers>
						<Dividers className={`mt-32`}>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'複数チェックボックス'} badge='required' />
							</Divider>
							<Divider base={16} md={12}>
								<CheckboxButton
									id={'division_1'}
									name={'division'}
									isError={!!KeywordSearchFormUseForm.formState.errors.division}
									value={1}
									register={KeywordSearchFormUseForm.register}
									rules={{ required: true }}
									displayText={'あらかじめチェック'}
								/>
								<CheckboxButton
									id={'division_2'}
									name={'division'}
									isError={!!KeywordSearchFormUseForm.formState.errors.division}
									value={1}
									register={KeywordSearchFormUseForm.register}
									rules={{ required: true }}
									displayText={'あらかじめチェック'}
									className={'ml-8'}
								/>
								<CheckboxButton
									id={'division_3'}
									name={'division'}
									isError={!!KeywordSearchFormUseForm.formState.errors.division}
									value={1}
									register={KeywordSearchFormUseForm.register}
									rules={{ required: true }}
									displayText={'あらかじめチェック'}
									className={'ml-8'}
								/>
							</Divider>
						</Dividers>
						<div className={`mt-32 flex justify-center`}>
							<Button size={'large'} color={'blue'} type={'submit'} displayText={'検索'} Icon={FiSearch} iconPosition={'left'} />
						</div>
					</form>
				</CardContent>
			</Card>
			<Card className={'bg-white mt-32'}>
				<CardHeader displayText={'カードヘッダー'} />
				<CardContent>
					<form action='/test' onSubmit={FileNameSearchFormUseForm.handleSubmit(FileNameSearchFormOnSubmit)}>
						<Dividers className={`mt-32`}>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'テキスト'} badge='required' />
							</Divider>
							<Divider base={16} md={12}>
								<Input<FileNameSearchFormNames>
									name={'file_name'}
									type={'text'}
									isError={false}
									register={FileNameSearchFormUseForm.register}
									rules={{ required: false }}
								/>
							</Divider>
						</Dividers>
						<Dividers className={`mt-32`}>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'チェックボックス'} badge='optional' />
							</Divider>
							<Divider base={16} md={12}>
								<CheckboxButton
									id={'partial_match'}
									name={'partial_match'}
									isError={!!FileNameSearchFormUseForm.formState.errors.partial_match}
									value={1}
									register={FileNameSearchFormUseForm.register}
									rules={{ required: false }}
									displayText={'部分一致'}
								/>
							</Divider>
						</Dividers>
						<div className={`mt-32 flex justify-center`}>
							<Button size={'large'} color={'blue'} type={'submit'} displayText={'検索'} Icon={FiSearch} iconPosition={'left'} />
						</div>
					</form>
				</CardContent>
			</Card>
			<Card className={'bg-white mt-32'}>
				<CardHeader displayText={'カードヘッダー'} />
				<CardContent>
					<form action='/test' onSubmit={NoteSearchFormUseForm.handleSubmit(FileNameSearchFormOnSubmit)}>
						<Dividers className={`mt-32`}>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'テキスト'} badge='required' />
							</Divider>
							<Divider base={16} md={12}>
								<Input<NoteSearchFormNames>
									name={'keyword'}
									type={'text'}
									isError={!!NoteSearchFormUseForm.formState.errors.keyword}
									register={NoteSearchFormUseForm.register}
									rules={{ required: true }}
								/>
								{NoteSearchFormUseForm.formState.errors.keyword && (
									<ErrorTip fieldError={NoteSearchFormUseForm.formState.errors.keyword} rules={{ required: true }} />
								)}
							</Divider>
						</Dividers>
						<Dividers className={`mt-32`}>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'テキスト'} badge='required' />
							</Divider>
							<Divider base={16} md={12}>
								<div>
									<RadioButton
										id={'note_search_form_condition_and'}
										name={'condition'}
										isError={!!NoteSearchFormUseForm.formState.errors.condition}
										displayText={'AND'}
										register={NoteSearchFormUseForm.register}
										rules={{ required: true }}
										value={'and'}
									/>
									<RadioButton
										id={'note_search_form_condition_or'}
										name={'condition'}
										isError={!!NoteSearchFormUseForm.formState.errors.condition}
										displayText={'OR'}
										register={NoteSearchFormUseForm.register}
										rules={{ required: true }}
										className={'ml-8'}
										value={'or'}
									/>
								</div>
								{NoteSearchFormUseForm.formState.errors.condition && (
									<ErrorTip fieldError={NoteSearchFormUseForm.formState.errors.condition} rules={{ required: true }} />
								)}
							</Divider>
						</Dividers>
						<div className={`mt-32 flex justify-center`}>
							<Button size={'large'} color={'blue'} type={'submit'} displayText={'検索'} Icon={FiSearch} iconPosition={'left'} />
						</div>
					</form>
				</CardContent>
			</Card>
		</Default>
	)
}

export default Index
