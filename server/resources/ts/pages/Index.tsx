import * as React from 'react'
import Default from '../layouts/DefaultLayout'
import axios from 'axios'
import { FiSearch } from 'react-icons/fi'
import Card from '../components/common/card/Card'
import CardHeader from '../components/common/card/CardHeader'
import CardContent from '../components/common/card/CardContent'
import InnerCardHeader from '../components/common/card/InnerCardHeader'
import Dividers from '../components/common/Dividers'
import Divider from '../components/common/Divider'
import ValidationGroup from '../components/form/ValidationGroup'
import MultipleDragAndDropInputField from '../components/form/MultipleDragAndDropInputField'
import CheckboxButton from '../components/form/CheckboxButton'
import Button from '../components/common/Button'

const Index = (): JSX.Element => {
	const env = process.env.MIX_FRONT_APP_ENV
	const baseURL = env === 'mock' ? 'http://localhost:8084' : env === 'development' ? 'http://api.localhost' : env === 'staging' ? 'https://test-api.example.com' : 'https://api.example.com '

	let axiosBase = axios.create({
		baseURL: baseURL,
		headers: {
			'Content-Type': 'application/json',
			'X-Requested-With': 'XMLHttpRequest'
		},
		responseType: 'json'
	})

	axiosBase.get('/companies').then(res => {
		console.log(res.data)
	})


	const breadcrumbs = [
		{
			displayText: 'HOME',
			href: '/',
		},
	]
	return (
		<Default breadcrumbs={breadcrumbs}>
			{/* <Card className={'bg-white'}>
				<CardHeader displayText={'カードヘッダー'} />
				<CardContent>
					<form action='/test' id={'form-xxxx-1'}>
						<Dividers>
							<Divider base={16} md={8}>
								<Card className={`h-100p`}>
									<InnerCardHeader displayText={'カード内のカードヘッダー'} />
									<CardContent>
										<ValidationGroup>
											<MultipleDragAndDropInputField id={'drag-and-drop-input-field'} name={'drag_and_drop_input_field'} format={'csv'} />
										</ValidationGroup>
									</CardContent>
								</Card>
							</Divider>
							<Divider base={16} md={8} className={`pl-32`}>
								<Card className={`h-100p`}>
									<InnerCardHeader displayText={'カード内のカードヘッダー'} />
									<CardContent>
										<CheckboxButton id={'checkbox-button'} name={'checkbox_button'} displayText={'チェックボックス'} />
									</CardContent>
								</Card>
							</Divider>
						</Dividers>
					</form>
				</CardContent>
			</Card> */}
			<Card className={'bg-white'}>
				<CardHeader displayText={'カードヘッダー'} />
				<CardContent>
					<form action='/test'>
						<Dividers>
							<Divider base={16} md={4} className={'md:flex md:justify-end'}>
								<label className={`pr-16`}>ファイル選択</label>
							</Divider>
							<Divider base={16} md={12}>
								<MultipleDragAndDropInputField id={'drag-and-drop-input-field-2'} name={'drag_and_drop_input_field_2'} format={'csv'} />
							</Divider>
						</Dividers>
						<Dividers className={`mt-32`}>
							<Divider base={16} md={4} className={'md:flex md:justify-end'}>
								<label className={`pr-16`}>チェック状態</label>
							</Divider>
							<Divider base={16} md={12}>
								<CheckboxButton id={'is-all-checked'} name={'checkbox_button'} displayText={'あらかじめチェック'} />
							</Divider>
						</Dividers>
						<div className={`mt-32 flex justify-center`}>
							<Button size={'large'} color={'blue'} type={'submit'} displayText={'検索'} Icon={FiSearch} iconPosition={'left'} />
						</div>
					</form>
				</CardContent>
			</Card>
			<Card className={'bg-white mt-32'}>
				<CardHeader displayText={'カードヘッダー'} />
				<CardContent>
					<form action='/test'>
						<Dividers>
							<Divider base={16} md={4} className={'md:flex md:justify-end'}>
								<label className={`pr-16`}>ファイル選択</label>
							</Divider>
							<Divider base={16} md={12}>
								<MultipleDragAndDropInputField id={'drag-and-drop-input-field-2'} name={'drag_and_drop_input_field_2'} format={'csv'} />
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

export default Index