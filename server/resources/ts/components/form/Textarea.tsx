import * as React from 'react'
import { UseFormRegister } from 'react-hook-form/dist/types/form.d'

type _Props<T> = {
	id?: string
	name: any
	rows: number
	isError: boolean
	className?: string
	register: UseFormRegister<T>
	rules?: {}
	children?: any
}

const Textarea = <T,>({ id, name, rows, isError, className, register, rules, children }: _Props<T>): JSX.Element => {
	return (
		<textarea
			id={id}
			rows={rows ? rows : 3}
			className={`${className ? className : ''} ${
				isError ? 'border-custom-red bg-error-bg' : 'border-gray-200 bg-white'
			} w-100p p-8 rounded-4 border outline-none`}
			{...register(name, rules && rules)}
		>
			{children}
		</textarea>
	)
}

export default Textarea
