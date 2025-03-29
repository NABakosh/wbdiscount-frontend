import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import {
	Favourites,
	Finance,
	Home,
	ProductItem,
	ProfileBuyer,
	SellerCard,
} from './pages/index'

import './styles/main.scss'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<ProfileBuyer />} />
				<Route path='/profile-seller' element={<SellerCard />} />
				<Route path='/favourites' element={<Favourites />} />
				<Route path='/finance' element={<Finance />} />
				<Route path='/product' element={<ProductItem />} />
			</Route>
		</Routes>
	)
}

export default App
