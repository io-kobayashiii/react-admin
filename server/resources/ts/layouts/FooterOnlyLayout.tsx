import * as React from 'react'
import Footer from '../components/footer/Footer'

type _Props = {
	children?: any
}

const FooterOnlyLayout = ({ children }: _Props): JSX.Element => {
	return (
		<>
			<main className={`bg-gray-200 min-h-[calc(100vh-56px)]`}>{children}</main>
			<Footer />
		</>
	)
}

export default FooterOnlyLayout
