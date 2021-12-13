import * as React from 'react'
import { BsCheck2Square } from 'react-icons/bs'
import Default from '../../layouts/DefaultLayout'
import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'
import Card from '../../components/common/card/Card'
import CardHeader from '../../components/common/card/CardHeader'
import CardContent from '../../components/common/card/CardContent'
import Input from '../../components/form/Input'
import Button from '../../components/common/Button'
import Divider from '../../components/common/Divider'
import Dividers from '../../components/common/Dividers'
import Label from '../../components/form/Label'
import Select from '../../components/form/Select'
import ErrorTip from '../../components/form/ErrorTip'

type UserRegistrationFormNames = {
	user_id: string | number
	password: string
	rights_level: 'administrator' | 'general_user'
	display_name: string
	belongs: string
	note: string
}

export const UserRegistration = () => {
	const breadcrumbs = [
		{
			displayText: 'HOME',
			href: '/',
		},
		{
			displayText: 'ユーザー登録',
			href: '/user',
		},
	]
	const UserRegistrationFormUseForm = useForm<UserRegistrationFormNames>()
	const UserRegistrationFormOnSubmit: SubmitHandler<UserRegistrationFormNames> = (data) => {
		console.log(data)
	}
	return (
		<Default breadcrumbs={breadcrumbs}>
			<Card className={'bg-white'}>
				<CardHeader displayText={`ユーザー登録`} />
				<CardContent>
					<form action='/test' onSubmit={UserRegistrationFormUseForm.handleSubmit(UserRegistrationFormOnSubmit)}>
						<Dividers>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'ID'} badge='required' />
							</Divider>
							<Divider base={16} md={8}>
								<Input<UserRegistrationFormNames>
									name={'user_id'}
									type={'text'}
									isError={!!UserRegistrationFormUseForm.formState.errors.user_id}
									register={UserRegistrationFormUseForm.register}
									rules={{ required: true }}
								/>
								{UserRegistrationFormUseForm.formState.errors.user_id && (
									<ErrorTip fieldError={UserRegistrationFormUseForm.formState.errors.user_id} rules={{ required: true }} />
								)}
							</Divider>
						</Dividers>
						<Dividers className={`mt-32`}>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'パスワード'} badge='required' />
							</Divider>
							<Divider base={16} md={8}>
								<Input<UserRegistrationFormNames>
									name={'password'}
									type={'text'}
									isError={!!UserRegistrationFormUseForm.formState.errors.password}
									register={UserRegistrationFormUseForm.register}
									rules={{ required: true }}
								/>
								{UserRegistrationFormUseForm.formState.errors.password && (
									<ErrorTip fieldError={UserRegistrationFormUseForm.formState.errors.password} rules={{ required: true }} />
								)}
							</Divider>
						</Dividers>
						<Dividers className={`mt-32`}>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'管理権限'} badge='required' />
							</Divider>
							<Divider base={16} md={4}>
								<Select<UserRegistrationFormNames>
									name={'rights_level'}
									isError={!!UserRegistrationFormUseForm.formState.errors.rights_level}
									register={UserRegistrationFormUseForm.register}
									rules={{ required: true }}
								>
									<option value={'administrator'}>管理者</option>
									<option value={'registerer'}>登録者</option>
									<option value={'viewer'}>閲覧者</option>
								</Select>
								{UserRegistrationFormUseForm.formState.errors.rights_level && (
									<ErrorTip fieldError={UserRegistrationFormUseForm.formState.errors.rights_level} rules={{ required: true }} />
								)}
							</Divider>
						</Dividers>
						<Dividers className={`mt-32`}>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'表示名'} badge='required' />
							</Divider>
							<Divider base={16} md={8}>
								<Input<UserRegistrationFormNames>
									name={'display_name'}
									type={'text'}
									isError={!!UserRegistrationFormUseForm.formState.errors.display_name}
									register={UserRegistrationFormUseForm.register}
									rules={{ required: true }}
								/>
								{UserRegistrationFormUseForm.formState.errors.display_name && (
									<ErrorTip fieldError={UserRegistrationFormUseForm.formState.errors.display_name} rules={{ required: true }} />
								)}
							</Divider>
						</Dividers>
						<Dividers className={`mt-32`}>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'所属'} badge='required' />
							</Divider>
							<Divider base={16} md={8}>
								<Input<UserRegistrationFormNames>
									name={'belongs'}
									type={'text'}
									isError={!!UserRegistrationFormUseForm.formState.errors.belongs}
									register={UserRegistrationFormUseForm.register}
									rules={{ required: true }}
								/>
								{UserRegistrationFormUseForm.formState.errors.belongs && (
									<ErrorTip fieldError={UserRegistrationFormUseForm.formState.errors.belongs} rules={{ required: true }} />
								)}
							</Divider>
						</Dividers>
						<Dividers className={`mt-32`}>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'備考'} badge='optional' />
							</Divider>
							<Divider base={16} md={8}>
								<Input<UserRegistrationFormNames>
									name={'note'}
									type={'text'}
									isError={false}
									register={UserRegistrationFormUseForm.register}
									rules={{ required: false }}
								/>
							</Divider>
						</Dividers>
						<div className={`mt-32 flex justify-center`}>
							<Button size={'large'} color={'blue'} type={'submit'} displayText={'登録'} Icon={BsCheck2Square} iconPosition={'left'} />
						</div>
					</form>
				</CardContent>
			</Card>
		</Default>
	)
}

export default UserRegistration
