import * as React from 'react'
import FooterOnly from '../layouts/FooterOnlyLayout'
import Dividers from '../components/common/Dividers'
import Divider from '../components/common/Divider'
import Button from '../components/common/Button'
import ValidationGroup from '../components/form/ValidationGroup'
import { RiLoginBoxLine } from 'react-icons/ri'

const Login = (): JSX.Element => {
	return (
		<FooterOnly>
			<div className={`p-32 min-h-[calc(100vh-56px)] flex justify-center items-center`}>
				<div className={`p-32 max-w-sm rounded-8 bg-white w-100p`}>
					<div className={`h-160 flex justify-center items-center`}>
						<img className={`h-100`} src='/img/logo.png' alt='logo' />
					</div>
					<div className={`mt-32`}>
						<form action='/test' id={`login-form`}>
							<ValidationGroup>
								<Dividers>
									<Divider base={4} className={'flex justify-end'}>
										<label className={`pr-16`}>ID</label>
									</Divider>
									<Divider base={12}>
										<input id='user-id' type='text' name={`user_id`} className={`w-100p p-8 rounded-4 border border-gray-200`} />
									</Divider>
								</Dividers>
							</ValidationGroup>
							<ValidationGroup className={`mt-16`}>
								<Dividers>
									<Divider base={4} className={'flex justify-end'}>
										<label className={`pr-16`}>パスワード</label>
									</Divider>
									<Divider base={12}>
										<input id='password' type='password' name={`password`} className={`w-100p p-8 rounded-4 border border-gray-200`} />
									</Divider>
								</Dividers>
							</ValidationGroup>
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
