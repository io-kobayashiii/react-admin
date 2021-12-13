import * as React from 'react'

type _Props = {
	displayText: string
	className?: string
}

const SidebarSectionHeader = ({ displayText, className }: _Props): JSX.Element => {
	return <h3 className={`${className} p-16 font-bold bg-sidebar-link text-14`}>{displayText}</h3>
}

export default SidebarSectionHeader
