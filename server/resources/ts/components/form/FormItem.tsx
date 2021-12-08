import * as React from 'react'

type _Props = {
	className?: string
	children: any
}

const FormItem = ({ className, children }: _Props): JSX.Element => {
	return <div className={`${className ? className : ''} form-item flex items-center`}>{children}</div>
}

export default FormItem
