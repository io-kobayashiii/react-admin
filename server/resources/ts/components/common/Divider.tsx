import * as React from 'react'

type Numerator = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16
type _Props = {
	base: Numerator
	xs?: Numerator
	sm?: Numerator
	md?: Numerator
	lg?: Numerator
	xl?: Numerator
	className?: string
	children?: any
}

const Divider = ({ base, xs, sm, md, lg, xl, className, children }: _Props): JSX.Element => {
	const getTailwindCssClass = () => {
		let numeratorClasses = [] as string[]
		switch (base) {
			case 1:
				numeratorClasses.push('w-[calc(100%/16*1)]')
				break
			case 2:
				numeratorClasses.push('w-[calc(100%/16*2)]')
				break
			case 3:
				numeratorClasses.push('w-[calc(100%/16*3)]')
				break
			case 4:
				numeratorClasses.push('w-[calc(100%/16*4)]')
				break
			case 5:
				numeratorClasses.push('w-[calc(100%/16*5)]')
				break
			case 6:
				numeratorClasses.push('w-[calc(100%/16*6)]')
				break
			case 7:
				numeratorClasses.push('w-[calc(100%/16*7)]')
				break
			case 8:
				numeratorClasses.push('w-[calc(100%/16*8)]')
				break
			case 9:
				numeratorClasses.push('w-[calc(100%/16*9)]')
				break
			case 10:
				numeratorClasses.push('w-[calc(100%/16*10)]')
				break
			case 11:
				numeratorClasses.push('w-[calc(100%/16*11)]')
				break
			case 12:
				numeratorClasses.push('w-[calc(100%/16*12)]')
				break
			case 13:
				numeratorClasses.push('w-[calc(100%/16*13)]')
				break
			case 14:
				numeratorClasses.push('w-[calc(100%/16*14)]')
				break
			case 15:
				numeratorClasses.push('w-[calc(100%/16*15)]')
				break
			case 16:
				numeratorClasses.push('w-[calc(100%/16*16)]')
				break
		}
		switch (xs) {
			case 1:
				numeratorClasses.push('xs:w-[calc(100%/16*1)]')
				break
			case 2:
				numeratorClasses.push('xs:w-[calc(100%/16*2)]')
				break
			case 3:
				numeratorClasses.push('xs:w-[calc(100%/16*3)]')
				break
			case 4:
				numeratorClasses.push('xs:w-[calc(100%/16*4)]')
				break
			case 5:
				numeratorClasses.push('xs:w-[calc(100%/16*5)]')
				break
			case 6:
				numeratorClasses.push('xs:w-[calc(100%/16*6)]')
				break
			case 7:
				numeratorClasses.push('xs:w-[calc(100%/16*7)]')
				break
			case 8:
				numeratorClasses.push('xs:w-[calc(100%/16*8)]')
				break
			case 9:
				numeratorClasses.push('xs:w-[calc(100%/16*9)]')
				break
			case 10:
				numeratorClasses.push('xs:w-[calc(100%/16*10)]')
				break
			case 11:
				numeratorClasses.push('xs:w-[calc(100%/16*11)]')
				break
			case 12:
				numeratorClasses.push('xs:w-[calc(100%/16*12)]')
				break
			case 13:
				numeratorClasses.push('xs:w-[calc(100%/16*13)]')
				break
			case 14:
				numeratorClasses.push('xs:w-[calc(100%/16*14)]')
				break
			case 15:
				numeratorClasses.push('xs:w-[calc(100%/16*15)]')
				break
			case 16:
				numeratorClasses.push('xs:w-[calc(100%/16*16)]')
				break
		}
		switch (sm) {
			case 1:
				numeratorClasses.push('sm:w-[calc(100%/16*1)]')
				break
			case 2:
				numeratorClasses.push('sm:w-[calc(100%/16*2)]')
				break
			case 3:
				numeratorClasses.push('sm:w-[calc(100%/16*3)]')
				break
			case 4:
				numeratorClasses.push('sm:w-[calc(100%/16*4)]')
				break
			case 5:
				numeratorClasses.push('sm:w-[calc(100%/16*5)]')
				break
			case 6:
				numeratorClasses.push('sm:w-[calc(100%/16*6)]')
				break
			case 7:
				numeratorClasses.push('sm:w-[calc(100%/16*7)]')
				break
			case 8:
				numeratorClasses.push('sm:w-[calc(100%/16*8)]')
				break
			case 9:
				numeratorClasses.push('sm:w-[calc(100%/16*9)]')
				break
			case 10:
				numeratorClasses.push('sm:w-[calc(100%/16*10)]')
				break
			case 11:
				numeratorClasses.push('sm:w-[calc(100%/16*11)]')
				break
			case 12:
				numeratorClasses.push('sm:w-[calc(100%/16*12)]')
				break
			case 13:
				numeratorClasses.push('sm:w-[calc(100%/16*13)]')
				break
			case 14:
				numeratorClasses.push('sm:w-[calc(100%/16*14)]')
				break
			case 15:
				numeratorClasses.push('sm:w-[calc(100%/16*15)]')
				break
			case 16:
				numeratorClasses.push('sm:w-[calc(100%/16*16)]')
				break
		}
		switch (md) {
			case 1:
				numeratorClasses.push('md:w-[calc(100%/16*1)]')
				break
			case 2:
				numeratorClasses.push('md:w-[calc(100%/16*2)]')
				break
			case 3:
				numeratorClasses.push('md:w-[calc(100%/16*3)]')
				break
			case 4:
				numeratorClasses.push('md:w-[calc(100%/16*4)]')
				break
			case 5:
				numeratorClasses.push('md:w-[calc(100%/16*5)]')
				break
			case 6:
				numeratorClasses.push('md:w-[calc(100%/16*6)]')
				break
			case 7:
				numeratorClasses.push('md:w-[calc(100%/16*7)]')
				break
			case 8:
				numeratorClasses.push('md:w-[calc(100%/16*8)]')
				break
			case 9:
				numeratorClasses.push('md:w-[calc(100%/16*9)]')
				break
			case 10:
				numeratorClasses.push('md:w-[calc(100%/16*10)]')
				break
			case 11:
				numeratorClasses.push('md:w-[calc(100%/16*11)]')
				break
			case 12:
				numeratorClasses.push('md:w-[calc(100%/16*12)]')
				break
			case 13:
				numeratorClasses.push('md:w-[calc(100%/16*13)]')
				break
			case 14:
				numeratorClasses.push('md:w-[calc(100%/16*14)]')
				break
			case 15:
				numeratorClasses.push('md:w-[calc(100%/16*15)]')
				break
			case 16:
				numeratorClasses.push('md:w-[calc(100%/16*16)]')
				break
		}
		switch (lg) {
			case 1:
				numeratorClasses.push('lg:w-[calc(100%/16*1)]')
				break
			case 2:
				numeratorClasses.push('lg:w-[calc(100%/16*2)]')
				break
			case 3:
				numeratorClasses.push('lg:w-[calc(100%/16*3)]')
				break
			case 4:
				numeratorClasses.push('lg:w-[calc(100%/16*4)]')
				break
			case 5:
				numeratorClasses.push('lg:w-[calc(100%/16*5)]')
				break
			case 6:
				numeratorClasses.push('lg:w-[calc(100%/16*6)]')
				break
			case 7:
				numeratorClasses.push('lg:w-[calc(100%/16*7)]')
				break
			case 8:
				numeratorClasses.push('lg:w-[calc(100%/16*8)]')
				break
			case 9:
				numeratorClasses.push('lg:w-[calc(100%/16*9)]')
				break
			case 10:
				numeratorClasses.push('lg:w-[calc(100%/16*10)]')
				break
			case 11:
				numeratorClasses.push('lg:w-[calc(100%/16*11)]')
				break
			case 12:
				numeratorClasses.push('lg:w-[calc(100%/16*12)]')
				break
			case 13:
				numeratorClasses.push('lg:w-[calc(100%/16*13)]')
				break
			case 14:
				numeratorClasses.push('lg:w-[calc(100%/16*14)]')
				break
			case 15:
				numeratorClasses.push('lg:w-[calc(100%/16*15)]')
				break
			case 16:
				numeratorClasses.push('lg:w-[calc(100%/16*16)]')
				break
		}
		switch (xl) {
			case 1:
				numeratorClasses.push('xl:w-[calc(100%/16*1)]')
				break
			case 2:
				numeratorClasses.push('xl:w-[calc(100%/16*2)]')
				break
			case 3:
				numeratorClasses.push('xl:w-[calc(100%/16*3)]')
				break
			case 4:
				numeratorClasses.push('xl:w-[calc(100%/16*4)]')
				break
			case 5:
				numeratorClasses.push('xl:w-[calc(100%/16*5)]')
				break
			case 6:
				numeratorClasses.push('xl:w-[calc(100%/16*6)]')
				break
			case 7:
				numeratorClasses.push('xl:w-[calc(100%/16*7)]')
				break
			case 8:
				numeratorClasses.push('xl:w-[calc(100%/16*8)]')
				break
			case 9:
				numeratorClasses.push('xl:w-[calc(100%/16*9)]')
				break
			case 10:
				numeratorClasses.push('xl:w-[calc(100%/16*10)]')
				break
			case 11:
				numeratorClasses.push('xl:w-[calc(100%/16*11)]')
				break
			case 12:
				numeratorClasses.push('xl:w-[calc(100%/16*12)]')
				break
			case 13:
				numeratorClasses.push('xl:w-[calc(100%/16*13)]')
				break
			case 14:
				numeratorClasses.push('xl:w-[calc(100%/16*14)]')
				break
			case 15:
				numeratorClasses.push('xl:w-[calc(100%/16*15)]')
				break
			case 16:
				numeratorClasses.push('xl:w-[calc(100%/16*16)]')
				break
		}
		return numeratorClasses
	}
	return <div className={`${getTailwindCssClass().join(' ')} ${className ? className : ''} items-center pl-16`}>{children}</div>
}

export default Divider
