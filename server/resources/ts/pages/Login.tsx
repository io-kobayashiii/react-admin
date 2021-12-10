import * as React from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import FooterOnly from '../layouts/FooterOnlyLayout'
import Dividers from '../components/common/Dividers'
import Divider from '../components/common/Divider'
import Label from '../components/form/Label'
import Input from '../components/form/Input'
import ErrorTip from '../components/form/ErrorTip'
import Button from '../components/common/Button'
import { RiLoginBoxLine } from 'react-icons/ri'

type LoginFormNameType = {
	user_id: string
	password: string
}

const Login = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<LoginFormNameType>()
	const loginFormMethods = useForm<LoginFormNameType>()
	const onSubmit: SubmitHandler<LoginFormNameType> = (data) => {
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
						<FormProvider {...loginFormMethods}>
							<form action='/test' id={`login-form`} onSubmit={handleSubmit(onSubmit)}>
								<Dividers>
									<Divider base={4} className={'flex justify-end'}>
										<Label displayText={'ID'} />
									</Divider>
									<Divider base={12}>
										<Input<LoginFormNameType> name={'user_id'} type={'text'} isError={!!errors.user_id} register={register} />
										{errors.user_id && <ErrorTip fieldError={errors.user_id} rules={{ required: true }} />}
									</Divider>
								</Dividers>
								<Dividers className={`mt-16`}>
									<Divider base={4} className={'flex justify-end'}>
										<Label displayText={'パスワード'} />
									</Divider>
									<Divider base={12}>
										<Input<LoginFormNameType> name={'password'} type={'password'} isError={!!errors.password} register={register} />
										{errors.password && <ErrorTip fieldError={errors.password} rules={{ required: true }} />}
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
						</FormProvider>
					</div>
				</div>
			</div>
		</FooterOnly>
	)
}

export default Login
