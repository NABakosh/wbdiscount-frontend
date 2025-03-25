import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
	return (
		<div className='layout'>
			<Header />
			<main className='layout__content'>
				<Outlet />
			</main>
			<span>FOOTER</span>
		</div>
	)
}

export default Layout
