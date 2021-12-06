import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SidebarVisibilityContext } from './context/SidebarVisibilityContext'
import Index from './pages/Index'
import PageA from './pages/PageA'

const App = () => {
	const [sidebarVisibility, setSidebarVisibility] = React.useState(true)
	return (
		<SidebarVisibilityContext.Provider value={{ sidebarVisibility, setSidebarVisibility }}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Index />} />
					<Route path='/a' element={<PageA />} />
				</Routes>
			</BrowserRouter>
		</SidebarVisibilityContext.Provider>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
