import * as React from 'react'
import FooterOnly from '../layouts/FooterOnly'

const Login = (): JSX.Element => {
	return (
		<FooterOnly>
			<div className={`p-16 min-h-[calc(100vh-56px)] flex justify-center items-center`}>
				<div className={`p-16 max-w-sm rounded-4 bg-white w-100p`}>
					<p>test</p>
				</div>
			</div>
		</FooterOnly>
	)
}

export default Login
