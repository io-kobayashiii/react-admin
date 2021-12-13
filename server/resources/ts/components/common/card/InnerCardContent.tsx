import * as React from 'react'

type _Props = {
	className?: string
	children?: any
}

/**
 * @returns just has 'p-16' class div element. componentization for better code visibility.
 */
const InnerCardContent = ({ className, children }: _Props): JSX.Element => {
	return <div className={`${className ? className : ''} p-16`}>{children}</div>
}

export default InnerCardContent
