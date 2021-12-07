import * as React from 'react'
import FooterOnly from '../layouts/FooterOnlyLayout'
import FormItem from '../components/form/FormItem'
import Divider from '../components/common/Divider'

const Login = (): JSX.Element => {
	return (
		<FooterOnly>
			<div className={`p-16 min-h-[calc(100vh-56px)] flex justify-center items-center`}>
				<div className={`p-32 max-w-sm rounded-8 bg-white w-100p`}>
					<div className={`h-160 flex justify-center items-center`}>
						<img className={`h-100`} src='/img/logo.png' alt='logo' />
					</div>
					<div className={`mt-32`}>
						<form action='/test' id={`login-form`}>
							<FormItem>
								<Divider numerator={4} className={'flex justify-end'}>
									<label htmlFor='user-id'>ID</label>
								</Divider>
								<Divider numerator={12} className={'ml-32'}>
									<input id='user-id' type='text' name={`user_id`} className={`w-100p p-8 rounded-4 border border-gray-200`} />
								</Divider>
							</FormItem>
							<FormItem className={`mt-16`}>
								<Divider numerator={4} className={'flex justify-end'}>
									<label htmlFor='password'>パスワード</label>
								</Divider>
								<Divider numerator={12} className={'ml-32'}>
									<input id='password' type='password' name={`password`} className={`w-100p p-8 rounded-4 border border-gray-200`} />
								</Divider>
							</FormItem>
						</form>
					</div>
				</div>
			</div>
		</FooterOnly>
	)
}

export default Login
