import * as React from 'react'
import Default from '../layouts/DefaultLayout'
import axios from 'axios'

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
		{
			displayText: 'ユーザー管理',
			href: '/user',
		},
	]
	return (
		<Default breadcrumbs={breadcrumbs} >
			<div className={`bg-gray-600`}></div>
		</Default >
	)
}

export default Index