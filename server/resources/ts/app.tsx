import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Top from './pages/Top'
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import PageC from './pages/PageC'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Top />} />
				<Route path='/a' element={<PageA />} />
				<Route path='/b' element={<PageB />} />
				<Route path='/c' element={<PageC />} />
			</Routes>
		</BrowserRouter>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
