import * as React from 'react'
import Default from '../layouts/Default'

const Index = (): JSX.Element => {
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
		<Default breadcrumbs={breadcrumbs}>
			<div className={`bg-gray-600`}></div>
		</Default>
	)
}

export default Index
