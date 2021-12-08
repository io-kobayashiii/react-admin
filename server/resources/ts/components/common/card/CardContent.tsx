import * as React from 'react'

type _Props = {
	className?: string
	children?: any
}

/**
 * @returns just has 'p-32' class div element. componentization for better code visibility.
 */
const CardContent = ({ className, children }: _Props): JSX.Element => {
	return <div className={`${className ? className : ''} p-32`}>{children}</div>
}

export default CardContent
