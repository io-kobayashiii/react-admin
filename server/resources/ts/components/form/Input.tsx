import * as React from 'react'
import { UseFormRegister } from 'react-hook-form/dist/types/form.d'

type _Props<T> = {
	id?: string
	name: any
	type: string
	isError: boolean
	value?: string
	className?: string
	register: UseFormRegister<T>
	rules?: {}
}

const Input = <T,>({ id, name, type, isError, value, className, register, rules }: _Props<T>): JSX.Element => {
	return (
		<input
			id={id}
			type={type}
			value={value}
			className={`${className ? className : ''} ${
				isError ? 'border-custom-red bg-error-bg' : 'border-gray-200 bg-white'
			} w-100p p-8 rounded-4 border outline-none`}
			{...register(name, rules && rules)}
		/>
	)
}

export default Input
