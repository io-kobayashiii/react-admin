import * as React from 'react'
import { UseFormRegister } from 'react-hook-form/dist/types/form.d'

type _Props = {
	id?: string
	value?: string
	className?: string
	children: any
}

const SortSelect = ({ id, value, className, children }: _Props): JSX.Element => {
	return (
		<select id={id} value={value} className={`${className ? className : ''} w-fit p-8 rounded-4 border outline-none`}>
			{children}
		</select>
	)
}

export default SortSelect
