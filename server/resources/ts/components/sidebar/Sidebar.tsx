import * as React from 'react'
import { FiHome, FiUsers } from 'react-icons/fi'
import { VscDiffAdded } from 'react-icons/vsc'
import SidebarLink from './SidebarLInk'
import { SidebarVisibilityContext } from '../../context/SidebarVisibilityContext'
import AccordionLinksHeader from './AccordionLinksHeader'
import AccordionLinksBody from './AccordionLinksBody'

type _Props = {
	className?: string
}

const Sidebar = ({ className }: _Props): JSX.Element => {
	const [activeAccordionIndex, setActiveAccordionIndex] = React.useState(0)
	const activeAccordionState = { activeAccordionIndex: activeAccordionIndex, setActiveAccordionIndex: setActiveAccordionIndex }
	let accordionIndex = 1
	return (
		<SidebarVisibilityContext.Consumer>
			{(context) => (
				<div
					className={`${
						className ? className : ''
					} fixed top-0 bottom-0 w-256 min-h-100vh bg-sidebar-bg text-sidebar-text transition-all duration-300 text-13`}
					style={{ marginLeft: context.sidebarVisibility ? 0 : '-256px' }}
				>
					<div className={`h-64 p-16 flex justify-center items-center bg-sidebar-bg`}>
						<img className={`h-100p`} src='/img/logo.png' alt='logo' />
					</div>
					<div className={`h-[calc(100vh-64px)] overflow-y-auto`}>
						<ul>
							<SidebarLink
								Icon={FiHome}
								displayText={'HOME'}
								href={'/'}
								activeAccordionState={activeAccordionState}
								accordionIndex={++accordionIndex}
							/>
							<SidebarLink
								Icon={VscDiffAdded}
								displayText={'アイテム情報・画像一括登録'}
								href={'/item/registration'}
								activeAccordionState={activeAccordionState}
								accordionIndex={++accordionIndex}
							/>
							<li>
								<AccordionLinksHeader
									Icon={FiUsers}
									displayText={'ユーザー管理'}
									activeAccordionState={activeAccordionState}
									accordionIndex={++accordionIndex}
								/>
								<AccordionLinksBody activeAccordionState={activeAccordionState} accordionIndex={accordionIndex}>
									<SidebarLink
										displayText={'ユーザー一覧'}
										href={'/user'}
										activeAccordionState={activeAccordionState}
										accordionIndex={accordionIndex}
									/>
									<SidebarLink
										displayText={'ユーザー登録'}
										href={'/user/registration'}
										activeAccordionState={activeAccordionState}
										accordionIndex={accordionIndex}
									/>
								</AccordionLinksBody>
							</li>
						</ul>
					</div>
				</div>
			)}
		</SidebarVisibilityContext.Consumer>
	)
}

export default Sidebar
