import { createContext, Dispatch, SetStateAction } from 'react'

export type SidebarVisibilityContextProps = {
	sidebarVisibility: boolean
	setSidebarVisibility: Dispatch<SetStateAction<boolean>>
}

export const SidebarVisibilityContext = createContext({} as SidebarVisibilityContextProps)
