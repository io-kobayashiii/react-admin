import * as React from 'react'

const Footer = (): JSX.Element => {
	return (
		<footer className={`border-t border-gray-200`}>
			<div className={`h-56 flex justify-center items-center`}>
				<p className={`text-12`}>&copy; CompanyName All Rights Reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
