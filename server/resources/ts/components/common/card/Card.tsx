import * as React from 'react'

type _Props = {
	className?: string
	children?: any
}

const Card = ({ className, children }: _Props): JSX.Element => {
	return <div className={`${className ? className : ''} border border-gray-200 rounded-8`}>{children}</div>
}

export default Card
