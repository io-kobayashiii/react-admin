import * as React from 'react'
import { FieldError } from 'react-hook-form/dist/types/errors'

type _Props = {
	fieldError: FieldError
	rules?: {
		min?: string | number
		max?: string | number
		minLength?: number
		maxLength?: number
		pattern?: string
		required?: boolean
	}
	className?: string
}

const ErrorTip = ({ fieldError, rules, className }: _Props): JSX.Element => {
	const getErrorMessage = () => {
		const commonMessage = '入力値が不正です' as string
		switch (fieldError.type) {
			case 'min':
				return rules && rules.min ? `${rules.min}以上の値を入力してください` : commonMessage
			case 'max':
				return rules && rules.max ? `${rules.max}以下の値を入力してください` : commonMessage
			case 'minLength':
				return rules && rules.minLength ? `${rules.minLength}文字以上で入力してください` : commonMessage
			case 'maxLength':
				return rules && rules.maxLength ? `${rules.maxLength}文字以下で入力してください` : commonMessage
			case 'pattern':
				return '正しい形式で入力してください'
			case 'required':
				return '入力してください'
			default:
				return commonMessage
		}
	}
	return <p className={`${className ? className : ''} text-custom-red text-14 mt-4`}>{getErrorMessage()}</p>
}

export default ErrorTip
