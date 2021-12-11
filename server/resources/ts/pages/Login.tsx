import * as React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import FooterOnly from '../layouts/FooterOnlyLayout'
import Dividers from '../components/common/Dividers'
import Divider from '../components/common/Divider'
import Label from '../components/form/Label'
import Input from '../components/form/Input'
import ErrorTip from '../components/form/ErrorTip'
import Button from '../components/common/Button'
import { RiLoginBoxLine } from 'react-icons/ri'

type LoginFormNames = {
	user_id: string
	password: string
}

const Login = (): JSX.Element => {
	const loginFormUseForm = useForm<LoginFormNames>()
	const onSubmit: SubmitHandler<LoginFormNames> = (data) => {
		console.log(data)
	}
	return (
		<FooterOnly>
			<div className={`p-32 min-h-[calc(100vh-56px)] flex justify-center items-center`}>
				<div className={`p-32 max-w-sm rounded-8 bg-white w-100p`}>
					<div className={`h-160 flex justify-center items-center`}>
						<img className={`h-100`} src='/img/logo.png' alt='logo' />
					</div>
					<div className={`mt-32`}>
						<form action='/test' id={`login-form`} onSubmit={loginFormUseForm.handleSubmit(onSubmit)}>
							<Dividers>
								<Divider base={4} className={'flex justify-end'}>
									<Label displayText={'ID'} />
								</Divider>
								<Divider base={12}>
									<Input<LoginFormNames>
										name={'user_id'}
										type={'text'}
										isError={!!loginFormUseForm.formState.errors.user_id}
										register={loginFormUseForm.register}
										rules={{ required: true }}
									/>
									{loginFormUseForm.formState.errors.user_id && (
										<ErrorTip fieldError={loginFormUseForm.formState.errors.user_id} rules={{ required: true }} />
									)}
								</Divider>
							</Dividers>
							<Dividers className={`mt-16`}>
								<Divider base={4} className={'flex justify-end'}>
									<Label displayText={'パスワード'} />
								</Divider>
								<Divider base={12}>
									<Input<LoginFormNames>
										name={'password'}
										type={'password'}
										isError={!!loginFormUseForm.formState.errors.password}
										register={loginFormUseForm.register}
										rules={{ required: true }}
									/>
									{loginFormUseForm.formState.errors.password && (
										<ErrorTip fieldError={loginFormUseForm.formState.errors.password} rules={{ required: true }} />
									)}
								</Divider>
							</Dividers>
							<div className={`mt-32 flex justify-center`}>
								<Button
									size={'medium'}
									color={'theme'}
									type={'submit'}
									form={'login-form'}
									displayText={'ログイン'}
									Icon={RiLoginBoxLine}
									iconPosition={'left'}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</FooterOnly>
	)
}

export default Login
