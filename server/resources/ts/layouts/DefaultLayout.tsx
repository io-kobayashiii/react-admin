import * as React from 'react'
import { SidebarVisibilityContext } from '../context/SidebarVisibilityContext'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

type _Props = {
	breadcrumbs: {
		displayText: string
		href: string
	}[]
	children?: any
}

const DefaultLayout = ({ breadcrumbs, children }: _Props): JSX.Element => {
	return (
		<div className={`flex`}>
			<Sidebar />
			<SidebarVisibilityContext.Consumer>
				{(context) => (
					<div className={`flex-grow transition-all duration-300`} style={{ paddingLeft: context.sidebarVisibility ? '256px' : 0 }}>
						<Header breadcrumbs={breadcrumbs} />
						<main className={`bg-gray-200 h-[calc(100%-176px)] p-32`}>{children}</main>
						<Footer />
					</div>
				)}
			</SidebarVisibilityContext.Consumer>
		</div>
	)
}

export default DefaultLayout
