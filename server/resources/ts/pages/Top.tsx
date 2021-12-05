import * as React from 'react'
import { Outlet } from 'react-router-dom'

const Top = (): JSX.Element => {
	return (
		<>
			<h2>Top</h2>
			<Outlet />
		</>
	)
}

export default Top
