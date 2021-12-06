import * as React from 'react'

const Footer = (): JSX.Element => {
	return (
		<footer className={`border-t border-gray-200 h-56`}>
			<div className={`h-100p flex justify-center items-center`}>
				<p className={`text-12`}>&copy; EISHODO All Rights Reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
