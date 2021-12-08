import * as React from 'react'

type _Props = {
	displayText: string
	className?: string
}

const CardHeader = ({ displayText, className }: _Props): JSX.Element => {
	return <p className={`${className ? className : ''} p-16 text-bold text-white bg-theme rounded-t-8`}>{displayText}</p>
}

export default CardHeader
