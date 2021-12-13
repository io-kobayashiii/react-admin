import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SidebarVisibilityContext } from './context/SidebarVisibilityContext'
import Index from './pages/Index'
import Login from './pages/Login'
import SearchResult from './pages/search/SearchResult'
import ItemDetail from './pages/item/ItemDetail'
import ItemRegistration from './pages/item/ItemRegistration'
import UserIndex from './pages/user/UserIndex'
import UserRegistration from './pages/user/UserRegistration'

const App = () => {
	const [sidebarVisibility, setSidebarVisibility] = React.useState(true)
	return (
		<SidebarVisibilityContext.Provider value={{ sidebarVisibility, setSidebarVisibility }}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Index />} />
					<Route path='/login' element={<Login />} />
					<Route path='/search/result' element={<SearchResult />} />
					<Route path='/item/:id' element={<ItemDetail />} />
					<Route path='/item/registration' element={<ItemRegistration />} />
					<Route path='/user' element={<UserIndex />} />
					<Route path='/user/registration' element={<UserRegistration />} />
				</Routes>
			</BrowserRouter>
		</SidebarVisibilityContext.Provider>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
