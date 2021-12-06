import * as React from 'react'
import { FiHome } from 'react-icons/fi'
import SidebarLink from './SidebarLInk'
import AccordionLinksHeader from './AccordionLinksHeader'
import AccordionLinksBody from './AccordionLinksBody'

type _Props = {
	additionalClasses?: string[]
}

const Sidebar = ({ additionalClasses }: _Props): JSX.Element => {
	const [activeAccordionIndex, setActiveAccordionIndex] = React.useState(0)
	const activeAccordionState = { activeAccordionIndex: activeAccordionIndex, setActiveAccordionIndex: setActiveAccordionIndex }
	let accordionIndex = 1
	return (
		<div className={`${additionalClasses ? additionalClasses.join(' ') : ''} w-256 min-h-100vh bg-sidebar-bg`}>
			<div className={`h-64 p-16 flex justify-center items-center sticky top-0 z-1`}>
				<img className={`h-100p`} src='/img/logo.png' alt='logo' />
			</div>
			<div className={`h-[calc(100%-64px)] overflow-y-scroll`}>
				<h3 className={`p-16 font-bold bg-sidebar-link`}>Section Title</h3>
				<ul>
					<SidebarLink Icon={FiHome} displayText={'Dashboard'} href={'/'} activeAccordionState={activeAccordionState} accordionIndex={++accordionIndex} />
					<SidebarLink Icon={FiHome} displayText={'HOME'} href={'/'} badge={{ size: 'small', color: 'light-blue', displayText: 'badge' }} activeAccordionState={activeAccordionState} accordionIndex={++accordionIndex} />
					<li>
						<AccordionLinksHeader Icon={FiHome} displayText={'Dashboard'} activeAccordionState={activeAccordionState} accordionIndex={++accordionIndex} />
						<AccordionLinksBody activeAccordionState={activeAccordionState} accordionIndex={accordionIndex}>
							<SidebarLink displayText={'HOME'} href={'/'} activeAccordionState={activeAccordionState} accordionIndex={accordionIndex} />
							<SidebarLink displayText={'HOME'} href={'/'} activeAccordionState={activeAccordionState} accordionIndex={accordionIndex} />
							<SidebarLink displayText={'HOME'} href={'/'} activeAccordionState={activeAccordionState} accordionIndex={accordionIndex} />
						</AccordionLinksBody>
					</li>
				</ul>
				<h3 className={`p-16 font-bold bg-sidebar-link`}>Section Title</h3>
				<ul>
					<SidebarLink Icon={FiHome} displayText={'Dashboard'} href={'/'} activeAccordionState={activeAccordionState} accordionIndex={++accordionIndex} />
					<SidebarLink Icon={FiHome} displayText={'HOME'} href={'/'} badge={{ size: 'small', color: 'light-blue', displayText: 'badge' }} activeAccordionState={activeAccordionState} accordionIndex={++accordionIndex} />
					<li>
						<AccordionLinksHeader Icon={FiHome} displayText={'Dashboard'} activeAccordionState={activeAccordionState} accordionIndex={++accordionIndex} />
						<AccordionLinksBody activeAccordionState={activeAccordionState} accordionIndex={accordionIndex}>
							<SidebarLink displayText={'HOME'} href={'/'} activeAccordionState={activeAccordionState} accordionIndex={accordionIndex} />
							<SidebarLink displayText={'HOME'} href={'/'} activeAccordionState={activeAccordionState} accordionIndex={accordionIndex} />
							<SidebarLink displayText={'HOME'} href={'/'} activeAccordionState={activeAccordionState} accordionIndex={accordionIndex} />
						</AccordionLinksBody>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar
