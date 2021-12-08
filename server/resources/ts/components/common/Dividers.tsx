import * as React from 'react'

type _Props = {
	className?: string
	children?: any
}

const Dividers = ({ className, children }: _Props): JSX.Element => {
	return <div className={`${className ? className : ''} ml-minus-16 flex flex-wrap`}>{children}</div>
}

export default Dividers
