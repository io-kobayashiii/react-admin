import * as React from 'react'
import { Link } from 'react-router-dom'
import { FcMenu } from 'react-icons/fc'
import { FiHome, FiUsers, FiDatabase } from 'react-icons/fi'
import { SidebarVisibilityContext } from '../../context/SidebarVisibilityContext'

type _Props = {
	breadcrumbs: {
		displayText: string
		href: string
	}[]
	className?: string
}

const Header = ({ breadcrumbs, className }: _Props): JSX.Element => {
	const useFrequentlyMenuClasses = 'flex flex-col justify-center items-center hover:cursor-pointer hover:text-custom-text-hover'
	return (
		<header className={`${className ? className : ''} sticky top-0 z-100 bg-white`}>
			<div className={`h-64 flex justify-between items-center`}>
				<div className={`px-32 py-16`}>
					<SidebarVisibilityContext.Consumer>
						{(context) => (
							<FcMenu size={'24'} className={`hover:cursor-pointer`} onClick={() => context.setSidebarVisibility(!context.sidebarVisibility)} />
						)}
					</SidebarVisibilityContext.Consumer>
				</div>
				<div className={`flex px-32 py-12`}>
					<div className={`flex`}>
						<Link className={`${useFrequentlyMenuClasses}`} to='/'>
							<FiHome size={'24'} />
							<p className={`text-10`}>HOME</p>
						</Link>
						<Link className={`${useFrequentlyMenuClasses} ml-16`} to='/'>
							<FiDatabase size={'24'} />
							<p className={`text-10`}>画像登録</p>
						</Link>
						<Link className={`${useFrequentlyMenuClasses} ml-16`} to='/'>
							<FiUsers size={'24'} />
							<p className={`text-10`}>ユーザー</p>
						</Link>
					</div>
				</div>
			</div>
			<div className={`px-32 border-t border-b border-gray-200 h-56 flex items-center`}>
				<ul className={`flex text-14`}>
					{breadcrumbs.map((breadcrumb, mapIndex) => {
						return (
							<li className={`flex items-center`} key={mapIndex}>
								{breadcrumbs.length !== mapIndex + 1 ? (
									<>
										{mapIndex == 0 ? '' : <span className={`mx-8`}>/</span>}
										<Link to={breadcrumb.href} className={`hover:text-custom-text-hover flex items-center`}>
											{breadcrumb.displayText}
										</Link>
									</>
								) : (
									<>
										{mapIndex == 0 ? '' : <span className={`mx-8`}>/</span>}
										<p className={`flex items-center text-custom-text-hover`}>{breadcrumb.displayText}</p>
									</>
								)}
							</li>
						)
					})}
				</ul>
			</div>
		</header>
	)
}

export default Header
