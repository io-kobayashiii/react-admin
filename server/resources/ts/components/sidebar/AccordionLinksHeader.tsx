import * as React from 'react'
import { IconType } from 'react-icons/lib/cjs/iconBase'
import { BsChevronDown } from 'react-icons/bs'

type _Props = {
	Icon: IconType
	displayText: string
	activeAccordionState: {
		activeAccordionIndex: number
		setActiveAccordionIndex: React.Dispatch<React.SetStateAction<number>>
	}
	accordionIndex: number
	additionalClasses?: string[]
}

const AccordionLinksHeader = ({ Icon, displayText, activeAccordionState, accordionIndex, additionalClasses }: _Props): JSX.Element => {
	const isActive = activeAccordionState.activeAccordionIndex == accordionIndex
	return (
		<a
			className={`${additionalClasses ? additionalClasses.join(' ') : ''} ${isActive ? 'bg-sidebar-active hover:bg-sidebar-link-hover' : `bg-sidebar-link hover:bg-sidebar-link-hover`} flex items-center p-16 hover:cursor-pointer`}
			onClick={() => activeAccordionState.setActiveAccordionIndex(isActive ? 0 : accordionIndex)}
		>
			<Icon size={'20'} />
			<span className={`ml-16 flex-grow`}>{displayText}</span>
			<BsChevronDown size={'16'} className={`${isActive ? 'is-active' : ''} rotate180`} />
		</a>
	)
}

export default AccordionLinksHeader
