import * as React from 'react'

type _Props = {
	displayText: string
	htmlFor?: string
	className?: string
}

const Label = ({ displayText, htmlFor, className }: _Props): JSX.Element => {
	return (
		<label htmlFor={htmlFor ? htmlFor : htmlFor} className={`${className ? className : ''} pt-10 pr-16`}>
			{displayText}
		</label>
	)
}

export default Label
