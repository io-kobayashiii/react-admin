import * as React from 'react'

type _Props = {
	displayText: string
	className?: string
}

const InnerCardHeader = ({ displayText, className }: _Props): JSX.Element => {
	return <p className={`${className ? className : ''} p-16 text-bold bg-gray-100 rounded-t-8`}>{displayText}</p>
}

export default InnerCardHeader
