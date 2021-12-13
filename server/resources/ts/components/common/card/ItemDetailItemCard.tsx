import * as React from 'react'
import { Item } from '../../../types/GlobalTypes'

type _Props = {
	item: Item
	className?: string
}

const ItemDetailItemCard = ({ item, className }: _Props): JSX.Element => {
	const dlClass = 'flex text-14'
	const dtClass = 'text-bold text-theme bg-gray-100 w-144 min-w-144 p-8'
	const ddClass = 'border-l border-gray-200 p-8 flex-grow'
	return (
		<div className={`${className ? className : ''}`}>
			<div className={`flex`}>
				<div className={`w-30p relative overflow-hidden`}>
					<img
						src={item.main_image.src}
						alt={item.main_image.alt}
						className={`absolute top-50p left-50p translate-x-minus-50p translate-y-minus-50p w-100p h-100p object-contain transition-all duration-300 hover:scale-105`}
					/>
				</div>
				<div className={`w-[calc((100%-8px)*0.7)] ml-8`}>
					<div className={`border border-gray-2`}>
						<dl className={`${dlClass}`}>
							<dt className={`${dtClass}`}>品名</dt>
							<dd className={`${ddClass}`}>{item.name}</dd>
						</dl>
						<div className={`flex`}>
							<dl className={`${dlClass} w-50p border-t border-gray-200`}>
								<dt className={`${dtClass}`}>商品コード</dt>
								<dd className={`${ddClass}`}>{item.code}</dd>
							</dl>
							<dl className={`${dlClass} w-50p border-t border-l border-gray-200`}>
								<dt className={`${dtClass}`}>キー1</dt>
								<dd className={`${ddClass}`}>{item.key_1}</dd>
							</dl>
						</div>
						<div className={`flex`}>
							<dl className={`${dlClass} w-50p border-t border-gray-200`}>
								<dt className={`${dtClass}`}>キー2</dt>
								<dd className={`${ddClass}`}>{item.key_2}</dd>
							</dl>
							<dl className={`${dlClass} w-50p border-t border-l border-gray-200`}>
								<dt className={`${dtClass}`}>キー3</dt>
								<dd className={`${ddClass}`}>{item.key_3}</dd>
							</dl>
						</div>
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
							<dt className={`${dtClass}`}>ファイル名（EPS）</dt>
							<dd className={`${ddClass}`}>{item.files.eps.map((eps_file, index) => (index == 0 ? eps_file.name : `, ${eps_file.name}`))}</dd>
						</dl>
						<dl className={`${dlClass} border-t border-gray-200`}>
							<dt className={`${dtClass}`}>ファイル名（JPG）</dt>
							<dd className={`${ddClass}`}>{item.files.jpg.map((jpg_file, index) => (index == 0 ? jpg_file.name : `, ${jpg_file.name}`))}</dd>
						</dl>
						<dl className={`${dlClass} border-t border-gray-200`}>
							<dt className={`${dtClass}`}>画像数</dt>
							<dd className={`${ddClass}`}>
								EPS：{item.files.eps.length} ／ JPG：{item.files.jpg.length}
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
							<dt className={`${dtClass}`}>コメント1</dt>
							<dd className={`${ddClass}`}>{item.comments_1}</dd>
						</dl>
						<dl className={`${dlClass} border-t border-gray-200`}>
							<dt className={`${dtClass}`}>コメント2</dt>
							<dd className={`${ddClass}`}>{item.comments_2}</dd>
						</dl>
						<dl className={`${dlClass} border-t border-gray-200`}>
							<dt className={`${dtClass}`}>コメント3</dt>
							<dd className={`${ddClass}`}>{item.comments_3}</dd>
						</dl>
						<dl className={`${dlClass} border-t border-gray-200`}>
							<dt className={`${dtClass}`}>コメント4</dt>
							<dd className={`${ddClass}`}>{item.comments_4}</dd>
						</dl>
						<dl className={`${dlClass} border-t border-gray-200`}>
							<dt className={`${dtClass}`}>コメント5</dt>
							<dd className={`${ddClass}`}>{item.comments_5}</dd>
						</dl>
						<dl className={`${dlClass} border-t border-gray-200`}>
							<dt className={`${dtClass}`}>備考</dt>
							<dd className={`${ddClass}`}>{item.note}</dd>
						</dl>
					</div>
				</div>
			</div>
			<div className={`flex justify-end mt-16`}>
				<p className={`font-bold`}>DL回数：{item.download_count}回</p>
			</div>
		</div>
	)
}

export default ItemDetailItemCard
