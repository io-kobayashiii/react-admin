import * as React from 'react'

type _Props = {
	id: string
	name: string
	className?: string
	displayText: string
}

const CheckboxButton = ({ id, name, className, displayText }: _Props): JSX.Element => {
	return (
		<div className={`${className ? className : ''} checkbox-button inline-block`}>
			<input type='checkbox' id={id} name={name} className={`checkbox-button-input`} />
			<label htmlFor={id} className={`${className ? className : ''} checkbox-button-label rounded-4 p-16 block`}>
				{displayText}
			</label>
		</div>
	)
}

export default CheckboxButton
