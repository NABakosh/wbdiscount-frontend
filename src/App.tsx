import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import ProfileBuyer from './pages/ProfileBuyer'
import SellerCard from './pages/SellerCard'
import './styles/main.scss'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<ProfileBuyer />} />
				<Route path='/profile-seller' element={<SellerCard />} />
			</Route>
		</Routes>
	)
}

export default App
