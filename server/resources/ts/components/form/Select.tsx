import * as React from 'react'
import { UseFormRegister } from 'react-hook-form/dist/types/form.d'

type _Props<T> = {
	id?: string
	name: any
	isError: boolean
	value?: string
	className?: string
	register: UseFormRegister<T>
	rules?: {}
	children: any
}

const Select = <T,>({ id, name, isError, value, className, register, rules, children }: _Props<T>): JSX.Element => {
	return (
		<select
			id={id}
			value={value}
			className={`${className ? className : ''} ${
				isError ? 'border-custom-red bg-error-bg' : 'border-gray-200 bg-white'
			} w-100p p-8 rounded-4 border outline-none`}
			{...register(name, rules && rules)}
		>
			{children}
		</select>
	)
}

export default Select
