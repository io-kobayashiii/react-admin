import * as React from 'react'

type Numerator = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16
type _Props = {
	className?: string
	children: any
}

const Badge = ({ className, children }: _Props): JSX.Element => {
	return <div className={`${className ? className : ''} form-item flex items-center`}>{children}</div>
}

export default Badge
