import * as React from 'react'

type _Props = {
	activeAccordionState: {
		activeAccordionIndex: number
		setActiveAccordionIndex: React.Dispatch<React.SetStateAction<number>>
	}
	accordionIndex: number
	className?: string
	children?: any
}

const AccordionLinksBody = ({ activeAccordionState, accordionIndex, className, children }: _Props): JSX.Element => {
	const isActive = activeAccordionState.activeAccordionIndex == accordionIndex
	const [wrapHeight, setWrapHeight] = React.useState(0)
	const listElem = React.useRef<any>()
	React.useEffect(() => {
		const { height } = listElem.current.querySelector('li').getBoundingClientRect()
		const childNum = listElem.current.querySelectorAll('li').length
		setWrapHeight(height * childNum)
	})
	return (
		<div className={`overflow-hidden`}>
			<ul ref={listElem} className={`transition-all duration-300`} style={{ height: isActive ? wrapHeight : 0 }}>
				{children}
			</ul>
		</div>
	)
}

export default AccordionLinksBody
