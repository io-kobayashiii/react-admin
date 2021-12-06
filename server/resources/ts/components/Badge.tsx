import * as React from 'react'
import { Size, Color } from '../types/GlobalTypes'

type _Props = {
	size: Size
	color: Color
	displayText: String
	additionalClasses?: String[]
}

const Badge = ({ size, color, displayText, additionalClasses }: _Props): JSX.Element => {
	const sizeClasses = () => {
		switch (size) {
			case 'small':
				return 'px-4 py-2 text-12 rounded-2'
			case 'medium':
				return 'px-8 py-4 text-14 rounded-3'
			case 'large':
				return 'px-12 py-6 text-16 rounded-4'
			default:
				console.log(`error ::: 'size' props is invalid in Badge`)
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
			default:
				console.log(`error ::: 'color' props is invalid in Badge`)
		}
	}
	return <span className={`inline-block leading-1em ${sizeClasses()} ${colorClasses()} ${additionalClasses}`}>{displayText}</span>
}

export default Badge
