import * as React from 'react'
import Default from '../../layouts/DefaultLayout'
import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'
import { DataItem } from '../../data/DataItems'
import Card from '../../components/common/card/Card'
import CardHeader from '../../components/common/card/CardHeader'
import CardContent from '../../components/common/card/CardContent'
import SearchResultItemCard from '../../components/common/card/SearchResultItemCard'
import SortSelect from '../../components/common/SortSelect'
import Pagination from '../../components/common/Pagination'

const item = DataItem
const items = [item, item, item, item, item, item, item, item, item, item, item, item, item, item, item, item, item, item, item, item]

export const Result = () => {
	const breadcrumbs = [
		{
			displayText: 'HOME',
			href: '/',
		},
		{
			displayText: '検索結果',
			href: '/search/result',
		},
	]
	return (
		<Default breadcrumbs={breadcrumbs}>
			<Card className={'bg-white'}>
				<CardHeader displayText={`検索キー：${'検索キー'} ／ ヒット数：${'240'}件`} />
				<CardContent>
					<div className={`flex justify-between items-center`}>
						<p>
							{'21'}〜{'40'}件目を表示
						</p>
						<SortSelect className={'text-14'}>
							<option value={'download_desc'}>ダウンロード数順</option>
							<option value={'updated_at_desc'}>更新順</option>
						</SortSelect>
					</div>
					<div className={`flex justify-center items-center pb-16`}>
						<Pagination currentPage={4} pagesRange={2} itemsPerPage={20} allItemsNumber={80} />
					</div>
					<div className={`flex flex-wrap m-minus-16 pb-16`}>
						{items.map((_item, index) => (
							<SearchResultItemCard item={_item} key={index} />
						))}
					</div>
					<div className={`flex justify-center items-center pt-16`}>
						<Pagination currentPage={4} pagesRange={2} itemsPerPage={20} allItemsNumber={80} />
					</div>
				</CardContent>
			</Card>
		</Default>
	)
}

export default Result
