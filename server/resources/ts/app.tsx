import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SidebarVisibilityContext } from './context/SidebarVisibilityContext'
import Index from './pages/Index'
import Login from './pages/Login'
import SearchResult from './pages/search/SearchResult'
import ItemDetail from './pages/item/ItemDetail'

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
				</Routes>
			</BrowserRouter>
		</SidebarVisibilityContext.Provider>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
