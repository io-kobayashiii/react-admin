import * as React from 'react'
import Default from '../../layouts/DefaultLayout'
import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'
import { DataItem } from '../../data/DataItems'
import Card from '../../components/common/card/Card'
import CardHeader from '../../components/common/card/CardHeader'
import CardContent from '../../components/common/card/CardContent'
import ItemDetailItemCard from '../../components/common/card/ItemDetailItemCard'
import InnerCardHeader from '../../components/common/card/InnerCardHeader'
import InnerCardContent from '../../components/common/card/InnerCardContent'
import Button from '../../components/common/Button'

const item = DataItem

export const ItemDetail = () => {
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
				<CardHeader displayText={`アイテム詳細`} />
				<CardContent>
					<ItemDetailItemCard item={item} />
					<Card className={`mt-32`}>
						<InnerCardHeader displayText={`EPS画像一覧（${item.files.eps.length}）`} />
						<InnerCardContent>
							<div className={`flex flex-wrap m-minus-16 pb-16`}>
								{item.files.eps.map((file, index) => (
									<div key={index} className={`border border-gray-200 rounded-8 mt-16 ml-16 p-16 w-[calc((100%-80px)/4)] border`}>
										<p>{file.name}</p>
									</div>
								))}
							</div>
						</InnerCardContent>
					</Card>
					<Card className={`mt-32`}>
						<InnerCardHeader displayText={`JPG画像一覧（${item.files.jpg.length}）`} />
						<InnerCardContent>
							<div className={`flex flex-wrap m-minus-16 pb-16`}>
								{item.files.jpg.map((file, index) => (
									<div key={index} className={`border border-gray-200 rounded-8 mt-16 ml-16 p-16 w-[calc((100%-80px)/4)] border`}>
										<div>チェックボックスの行</div>
										<div
											className={`mt-16 w-100p pt-100p overflow-hidden relative hover:cursor-pointer`}
											onClick={() => console.log('clicked item image')}
										>
											<img
												src={file.src}
												alt={file.name}
												className={`absolute top-50p left-50p translate-x-minus-50p translate-y-minus-50p w-100p h-100p object-contain transition-all duration-300 hover:scale-105`}
											/>
										</div>
										<p className={`mt-16 font-bold`}>{file.name}</p>
										<form className={`flex justify-end mt-16`} action={'/test'}>
											<input type={'hidden'} name={'delete_image_id'} value={file.id} />
											<Button size={'small'} color={'red'} type={'submit'} displayText={'削除'} />
										</form>
									</div>
								))}
							</div>
						</InnerCardContent>
					</Card>
				</CardContent>
			</Card>
		</Default>
	)
}

export default ItemDetail
