import * as React from 'react'

type Numerator = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16
type _Props = {
	numerator: Numerator
	className?: string
	children?: any
}

const Divider = ({ numerator, className, children }: _Props): JSX.Element => {
	const getTailwindCssClass = () => {
		switch (numerator) {
			case 1:
				return 'w-[calc(100%/16*1)]'
			case 2:
				return 'w-[calc(100%/16*2)]'
			case 3:
				return 'w-[calc(100%/16*3)]'
			case 4:
				return 'w-[calc(100%/16*4)]'
			case 5:
				return 'w-[calc(100%/16*5)]'
			case 6:
				return 'w-[calc(100%/16*6)]'
			case 7:
				return 'w-[calc(100%/16*7)]'
			case 8:
				return 'w-[calc(100%/16*8)]'
			case 9:
				return 'w-[calc(100%/16*9)]'
			case 10:
				return 'w-[calc(100%/16*10)]'
			case 11:
				return 'w-[calc(100%/16*11)]'
			case 12:
				return 'w-[calc(100%/16*12)]'
			case 13:
				return 'w-[calc(100%/16*13)]'
			case 14:
				return 'w-[calc(100%/16*14)]'
			case 15:
				return 'w-[calc(100%/16*15)]'
			case 16:
				return 'w-[calc(100%/16*16)]'
		}
	}
	return <div className={`${getTailwindCssClass()} ${className ? className : ''}`}>{children}</div>
}

export default Divider
