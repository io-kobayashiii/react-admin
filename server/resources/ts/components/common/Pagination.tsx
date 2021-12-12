import * as React from 'react'

type _Props = {
	currentPage: number
	pagesRange: number
	itemsPerPage: number
	allItemsNumber: number
	className?: string
}

const Pagination = ({ currentPage, pagesRange, itemsPerPage, allItemsNumber, className }: _Props): JSX.Element => {
	const maxPage = allItemsNumber % itemsPerPage == 0 ? allItemsNumber / itemsPerPage : Math.floor(allItemsNumber / itemsPerPage) + 1
	const generateListItems = () => {
		const listItems = []
		const listItemClass = 'w-36 h-36 rounded-100vh border border-theme flex justify-center items-center'
		const activeListItemClass = 'text-white bg-theme'
		const inactiveListItemClass = 'color-theme'
		const activeAnchorClass = 'w-100p h-100p flex justify-center items-center'
		switch (true) {
			case maxPage <= 5:
				console.log(`log ::: pagination switch: 1 / maxPage: ${maxPage}`)
				for (let i = 1; i <= maxPage; i++) {
					listItems.push(
						<li key={i} className={`${i != 1 ? 'ml-8' : ''} ${listItemClass} ${i == currentPage ? activeListItemClass : inactiveListItemClass}`}>
							{i == currentPage ? (
								<p>{i}</p>
							) : (
								<a href={`/search/result?page=${i}`} className={`${activeAnchorClass}`}>
									{i}
								</a>
							)}
						</li>,
					)
				}
				break
			case maxPage >= 6 && currentPage <= 2:
				console.log(`log ::: pagination switch: 2 / maxPage: ${maxPage}`)
				for (let i = 1; i <= (maxPage <= 4 ? maxPage : 5); i++) {
					listItems.push(
						<li key={i} className={`${i != 1 ? 'ml-8' : ''} ${listItemClass} ${i == currentPage ? activeListItemClass : inactiveListItemClass}`}>
							{i == currentPage ? (
								<p>{i}</p>
							) : (
								<a href={`/search/result?page=${i}`} className={`${activeAnchorClass}`}>
									{i}
								</a>
							)}
						</li>,
					)
				}
				break
			case maxPage >= 6 && currentPage >= maxPage - 1:
				console.log(`log ::: pagination switch: 3 / maxPage: ${maxPage}`)
				for (let i = maxPage - 4; i <= maxPage; i++) {
					listItems.push(
						<li
							key={i}
							className={`${i != maxPage - 4 ? 'ml-8' : ''} ${listItemClass} ${i == currentPage ? activeListItemClass : inactiveListItemClass}`}
						>
							{i == currentPage ? (
								<p>{i}</p>
							) : (
								<a href={`/search/result?page=${i}`} className={`${activeAnchorClass}`}>
									{i}
								</a>
							)}
						</li>,
					)
				}
				break
			default:
				console.log(`log ::: pagination switch: 4 / maxPage: ${maxPage}`)
				for (let i = currentPage - 2; i <= currentPage + 2; i++) {
					listItems.push(
						<li
							key={i}
							className={`${i != currentPage - 2 ? 'ml-8' : ''} ${listItemClass} ${
								i == currentPage ? activeListItemClass : inactiveListItemClass
							}`}
						>
							{i == currentPage ? (
								<p>{i}</p>
							) : (
								<a href={`/search/result?page=${i}`} className={`${activeAnchorClass}`}>
									{i}
								</a>
							)}
						</li>,
					)
				}
				break
		}
		return listItems
	}
	return <ul className={`${className ? className : ''} flex flex-wrap`}>{...generateListItems()}</ul>
}

export default Pagination
