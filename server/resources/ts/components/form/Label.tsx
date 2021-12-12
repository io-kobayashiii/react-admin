import * as React from 'react'
import Badge from '../common/Badge'

type _Props = {
	displayText: string
	badge?: 'required' | 'optional'
	htmlFor?: string
	className?: string
}

const Label = ({ displayText, badge, htmlFor, className }: _Props): JSX.Element => {
	return (
		<label htmlFor={htmlFor ? htmlFor : htmlFor} className={`${className ? className : ''} pt-10`}>
			{displayText}
			{badge && (
				<Badge
					size={'medium'}
					color={badge && badge == 'required' ? 'red' : 'green'}
					displayText={badge && badge == 'required' ? '必須' : badge == 'optional' ? '任意' : displayText}
					className={'ml-8 h-fit'}
				/>
			)}
		</label>
	)
}

export default Label
