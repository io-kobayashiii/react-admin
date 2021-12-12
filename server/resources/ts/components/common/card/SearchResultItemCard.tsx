import * as React from 'react'

type _Props = {
	item: {
		main_image: {
			src: string
			alt?: string
		}
		name: string
		code: string | number
		key: string
		manufacturer: string
		standard: string | number
		sales_unit: string | number
		file_name: string
		images_number: {
			eps: number
			jpg: number
		}
		registered_date: string
		last_download_date: string
		note?: string
	}
	className?: string
}

const SearchResultItemCard = ({ item, className }: _Props): JSX.Element => {
	const dlClass = 'flex text-14'
	const dtClass = 'text-bold text-theme bg-gray-200 w-88 min-w-88 p-8'
	const ddClass = 'border-l border-gray-200 p-8 flex-grow'
	return (
		<div className={`${className ? className : ''} flex border border-gray-200 rounded-8 mt-16 ml-16 p-16 w-[calc((100%-48px)/2)] border`}>
			<div className={`h-100p w-30p relative`}>
				<a href={'/'} className={`block overflow-hidden`}>
					<img
						src={item.main_image.src}
						alt={item.main_image.alt}
						className={`absolute top-50p left-50p translate-x-minus-50p translate-y-minus-50p w-100p h-100p object-contain transition-all duration-300 hover:scale-105`}
					/>
				</a>
			</div>
			<div className={`w-[calc((100%-8px)*0.7)] ml-8`}>
				<div className={`border border-gray-2`}>
					<dl className={`${dlClass}`}>
						<dt className={`${dtClass}`}>品名</dt>
						<dd className={`${ddClass}`}>{item.name}</dd>
					</dl>
					<dl className={`${dlClass} border-t border-gray-200`}>
						<dt className={`${dtClass}`}>商品コード</dt>
						<dd className={`${ddClass}`}>{item.code}</dd>
					</dl>
					<dl className={`${dlClass} border-t border-gray-200`}>
						<dt className={`${dtClass}`}>キー1</dt>
						<dd className={`${ddClass}`}>{item.key}</dd>
					</dl>
					<dl className={`${dlClass} border-t border-gray-200`}>
						<dt className={`${dtClass}`}>メ・産</dt>
						<dd className={`${ddClass}`}>{item.manufacturer}</dd>
					</dl>
					<dl className={`${dlClass} border-t border-gray-200`}>
						<dt className={`${dtClass}`}>規格</dt>
						<dd className={`${ddClass}`}>{item.standard}</dd>
					</dl>
					<dl className={`${dlClass} border-t border-gray-200`}>
						<dt className={`${dtClass}`}>販売単位</dt>
						<dd className={`${ddClass}`}>{item.sales_unit}</dd>
					</dl>
					<dl className={`${dlClass} border-t border-gray-200`}>
						<dt className={`${dtClass}`}>ファイル名</dt>
						<dd className={`${ddClass}`}>{item.file_name}</dd>
					</dl>
					<dl className={`${dlClass} border-t border-gray-200`}>
						<dt className={`${dtClass}`}>画像数</dt>
						<dd className={`${ddClass}`}>
							EPS: {item.images_number.eps}, JPG: {item.images_number.jpg}
						</dd>
					</dl>
					<dl className={`${dlClass} border-t border-gray-200`}>
						<dt className={`${dtClass}`}>登録日</dt>
						<dd className={`${ddClass}`}>{item.registered_date}</dd>
					</dl>
					<dl className={`${dlClass} border-t border-gray-200`}>
						<dt className={`${dtClass}`}>最終DL日</dt>
						<dd className={`${ddClass}`}>{item.last_download_date}</dd>
					</dl>
					<dl className={`${dlClass} border-t border-gray-200`}>
						<dt className={`${dtClass}`}>備考</dt>
						<dd className={`${ddClass}`}>{item.note}</dd>
					</dl>
				</div>
			</div>
		</div>
	)
}

export default SearchResultItemCard
