import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SidebarVisibilityContext } from './context/SidebarVisibilityContext'
import Top from './pages/Top'
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import PageC from './pages/PageC'

const App = () => {
	const [sidebarVisibility, setSidebarVisibility] = React.useState(true)
	return (
		<SidebarVisibilityContext.Provider value={{ sidebarVisibility, setSidebarVisibility }}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Top />} />
					<Route path='/a' element={<PageA />} />
					<Route path='/b' element={<PageB />} />
					<Route path='/c' element={<PageC />} />
				</Routes>
			</BrowserRouter>
		</SidebarVisibilityContext.Provider>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
