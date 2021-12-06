import * as React from 'react'
import Badge from '../components/Badge'

const PageA = (): JSX.Element => {
	return (
		<>
			<h2>PageA</h2>
			<Badge size={'small'} color={'blue'} displayText={'New!'} />
		</>
	)
}

export default PageA
