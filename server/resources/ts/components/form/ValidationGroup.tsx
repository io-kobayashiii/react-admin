import * as React from 'react'

type _Props = {
	className?: string
	children?: any
}

/**
 * @returns just has 'validation-group' class div element. componentization for better code visibility.
 */
const ValidationGroup = ({ className, children }: _Props): JSX.Element => {
	return <div className={`${className ? className : ''} validation-group`}>{children}</div>
}

export default ValidationGroup
