import * as React from 'react'
import Default from '../../layouts/DefaultLayout'
import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'
import { DataItem } from '../../data/DataItems'
import Card from '../../components/common/card/Card'
import CardHeader from '../../components/common/card/CardHeader'
import CardContent from '../../components/common/card/CardContent'
import Button from '../../components/common/Button'
import Dividers from '../../components/common/Dividers'
import Divider from '../../components/common/Divider'
import { FiSearch } from 'react-icons/fi'
import Label from '../../components/form/Label'
import MultipleDragAndDropInputField from '../../components/form/MultipleDragAndDropInputField'

const item = DataItem

export const ItemRegistration = () => {
	const breadcrumbs = [
		{
			displayText: 'HOME',
			href: '/',
		},
		{
			displayText: 'アイテム情報・画像一括登録',
			href: '/item/registration',
		},
	]
	return (
		<Default breadcrumbs={breadcrumbs}>
			<Card className={'bg-white'}>
				<CardHeader displayText={`アイテム情報・画像一括登録`} />
				<CardContent>
					<form action='/test'>
						<Dividers>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'画像ZIPファイル'} badge='required' />
							</Divider>
							<Divider base={16} md={12}>
								<MultipleDragAndDropInputField id={'zip_file'} name={'zip_file'} format={'zip'} />
							</Divider>
						</Dividers>
						<Dividers className={'mt-32'}>
							<Divider base={16} md={4} className={'md:flex md:justify-end pr-16'}>
								<Label displayText={'CSVファイル'} badge='required' />
							</Divider>
							<Divider base={16} md={12}>
								<MultipleDragAndDropInputField id={'csv_file'} name={'csv_file'} format={'csv'} />
							</Divider>
						</Dividers>
						<div className={`mt-32 flex justify-center`}>
							<Button size={'large'} color={'blue'} type={'submit'} displayText={'検索'} Icon={FiSearch} iconPosition={'left'} />
						</div>
					</form>
				</CardContent>
			</Card>
		</Default>
	)
}

export default ItemRegistration
