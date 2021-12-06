import * as React from 'react'
import { IconType } from 'react-icons/lib/cjs/iconBase'
import { BadeProps } from '../../types/GlobalTypes'
import Badge from '../common/Badge'

type _Props = {
	Icon?: IconType
	displayText: string
	href: string
	activeAccordionState: {
		activeAccordionIndex: number
		setActiveAccordionIndex: React.Dispatch<React.SetStateAction<number>>
	}
	accordionIndex: number
	badge?: BadeProps
	additionalClasses?: string[]
}

const SidebarLink = ({ Icon, displayText, href, activeAccordionState, accordionIndex, badge, additionalClasses }: _Props): JSX.Element => {
	const isActive = activeAccordionState.activeAccordionIndex == accordionIndex
	return (
		<li>
			<a className={`${additionalClasses ? additionalClasses.join(' ') : ''} ${isActive ? 'bg-sidebar-active hover:bg-sidebar-link-hover' : `bg-sidebar-link hover:bg-sidebar-link-hover`} flex items-center p-16`} href={href}>
				{Icon && <Icon size={'20'} />}
				<span className={`${Icon ? '' : 'pl-20'} ml-16 flex-grow`}>{displayText}</span>
				{badge && <Badge size={badge.size} color={badge.color} displayText={badge.displayText} />}
			</a>
		</li>
	)
}

export default SidebarLink
