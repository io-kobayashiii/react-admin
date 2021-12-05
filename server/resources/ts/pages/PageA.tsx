import * as React from 'react'
import { Outlet } from 'react-router-dom'

const PageA = (): JSX.Element => {
	return (
		<>
			<h2>PageA</h2>
			<Outlet />
		</>
	)
}

export default PageA
