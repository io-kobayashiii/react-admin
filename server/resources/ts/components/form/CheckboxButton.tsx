import * as React from 'react'
import { UseFormRegister } from 'react-hook-form/dist/types/form.d'

type _Props<T> = {
	id?: string
	name: any
	isError: boolean
	displayText: string
	value: string | number
	className?: string
	register: UseFormRegister<T>
	rules?: {}
}

const CheckboxButton = <T,>({ id, name, isError, displayText, value, className, register, rules }: _Props<T>): JSX.Element => {
	return (
		<div className={`${className ? className : ''} checkbox-button inline-block`}>
			<input type='checkbox' value={value} id={id} className={`checkbox-button-input`} {...register(name, rules && rules)} />
			<label
				htmlFor={id}
				className={`${className ? className : ''} ${
					isError ? 'border-custom-red bg-error-bg' : 'border-gray-200 bg-white'
				} checkbox-button-label rounded-4 p-16 block`}
			>
				{displayText}
			</label>
		</div>
	)
}

export default CheckboxButton
