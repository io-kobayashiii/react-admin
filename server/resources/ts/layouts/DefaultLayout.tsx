import * as React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

type _Props = {
	breadcrumbs: {
		displayText: string
		href: string
	}[]
	children: any
}

const DefaultLayout = ({ breadcrumbs, children }: _Props): JSX.Element => {
	return (
		<div className={`flex`}>
			<Sidebar />
			<div className={`flex-grow`}>
				<Header breadcrumbs={breadcrumbs} />
				<main className={`bg-gray-200 h-[calc(100%-176px)]`}>{children}</main>
				<Footer />
			</div>
		</div>
	)
}

export default DefaultLayout
