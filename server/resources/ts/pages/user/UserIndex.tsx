import * as React from 'react'
import { Link } from 'react-router-dom'
import Default from '../../layouts/DefaultLayout'
import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'
import Card from '../../components/common/card/Card'
import CardHeader from '../../components/common/card/CardHeader'
import CardContent from '../../components/common/card/CardContent'
import Button from '../../components/common/Button'
import Pagination from '../../components/common/Pagination'

export const UserIndex = () => {
	const breadcrumbs = [
		{
			displayText: 'HOME',
			href: '/',
		},
		{
			displayText: 'ユーザー一覧',
			href: '/user',
		},
	]
	const tableHeaders = ['管理番号', 'ユーザーID', 'タイプ', '表示名', '登録日', '登録者', '所属', '備考', 'DL数', '編集']
	const user = {
		control_number: 38,
		user_id: 111221111,
		rights_level: 'administrator',
		display_name: '担当者1',
		registered_date: '2020-10-10',
		registrant_name: '管理者1',
		belongs: '株式会社example',
		note: '備考欄です',
		download_count: 153,
	}
	const users = [user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user, user]
	const commonTdClass = 'p-8'
	return (
		<Default breadcrumbs={breadcrumbs}>
			<Card className={'bg-white'}>
				<CardHeader displayText={`ユーザー一覧`} />
				<CardContent>
					<div className={`flex justify-center`}>
						<Pagination currentPage={4} pagesRange={2} itemsPerPage={20} allItemsNumber={150} />
					</div>
					<table className={`text-13 w-100p border border-gray-200 mt-16`}>
						<thead>
							<tr>
								{tableHeaders.map((header, index) => (
									<th key={index} className={`${index != 0 ? 'border-l border-gray-200' : ''} text-center text-white bg-theme p-8 font-bold`}>
										{header}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => (
								<tr key={index} className={`${index % 2 == 0 ? 'bg-gray-100' : ''}`}>
									<td className={`${commonTdClass}`}>{user.control_number}</td>
									<td className={`${commonTdClass} border-l border-gray-200`}>{user.user_id}</td>
									<td className={`${commonTdClass} border-l border-gray-200`}>{user.rights_level}</td>
									<td className={`${commonTdClass} border-l border-gray-200`}>{user.display_name}</td>
									<td className={`${commonTdClass} border-l border-gray-200`}>{user.registered_date}</td>
									<td className={`${commonTdClass} border-l border-gray-200`}>{user.registrant_name}</td>
									<td className={`${commonTdClass} border-l border-gray-200`}>{user.belongs}</td>
									<td className={`${commonTdClass} border-l border-gray-200`}>{user.note}</td>
									<td className={`${commonTdClass} border-l border-gray-200`}>{user.download_count}</td>
									<td className={`${commonTdClass} border-l border-gray-200 flex justify-center`}>
										<Link to={`/user/${user.user_id}`}>
											<Button size={'small'} color={'blue'} type={'button'} displayText={'編集'} />
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<div className={`flex justify-center mt-16`}>
						<Pagination currentPage={4} pagesRange={2} itemsPerPage={20} allItemsNumber={150} />
					</div>
				</CardContent>
			</Card>
		</Default>
	)
}

export default UserIndex
