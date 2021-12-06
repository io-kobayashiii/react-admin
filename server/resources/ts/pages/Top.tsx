import * as React from 'react'
import { SidebarVisibilityContext } from '../context/SidebarVisibilityContext'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'

const Top = (): JSX.Element => {
	const breadcrumbs = [
		{
			displayText: 'HOME',
			href: '/',
		},
		{
			displayText: 'ユーザー管理',
			href: '/user',
		},
	]
	return (
		<div className={`flex`}>
			<Sidebar />
			<SidebarVisibilityContext.Consumer>
				{(context) => (
					<div className={`flex-grow`}>
						<Header breadcrumbs={breadcrumbs} />
					</div>
				)}
			</SidebarVisibilityContext.Consumer>
		</div>
	)
}

export default Top
