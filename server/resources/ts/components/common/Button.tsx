import * as React from 'react'
import { Size, Color } from '../../types/GlobalTypes'
import { IconType } from 'react-icons/lib/cjs/iconBase'

type _Props = {
	size: Size
	color: Color
	type: 'button' | 'submit'
	form?: string
	displayText: string
	Icon?: IconType
	iconPosition?: 'left' | 'right'
	className?: string
}

const Button = ({ size, color, type, form, displayText, Icon, iconPosition, className }: _Props): JSX.Element => {
	const sizeClasses = () => {
		switch (size) {
			case 'small':
				return 'px-8 py-2 '
			case 'medium':
				return 'px-16 py-8'
			case 'large':
				return 'px-32 py-12'
		}
	}
	const colorClasses = () => {
		switch (color) {
			case 'blue':
				return 'text-white bg-custom-blue'
			case 'light-blue':
				return 'text-white bg-custom-light-blue'
			case 'green':
				return 'text-white bg-custom-green'
			case 'yellow':
				return 'text-white bg-custom-yellow'
			case 'orange':
				return 'text-white bg-custom-orange'
			case 'red':
				return 'text-white bg-custom-red'
			case 'pink':
				return 'text-white bg-custom-pink'
			case 'theme':
				return 'text-white bg-theme'
		}
	}
	return (
		<button
			type={type}
			form={form && form}
			className={`${sizeClasses()} ${colorClasses()} ${
				className ? className : ''
			} rounded-4 flex items-center transition-all duration-300 hover:brightness-105`}
		>
			{Icon && iconPosition == 'left' && <Icon className={`mr-8`} size={20} />}
			<span>{displayText}</span>
			{Icon && iconPosition == 'right' && <Icon className={`ml-8`} size={20} />}
		</button>
	)
}

export default Button
