import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
// import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import SignIn from './pages/signin'

function App() {
	return (
		<Router>
			
			<Routes>
				<Route exact path='/' element={<Home />} />
				{/* <Route path='/about' element={<About />} /> */}
				<Route path='/contact' element={<Contact />} />
				{/* <Route path='/blogs' element={<Blogs />} /> */}
				<Route path='/sign-up' element={<SignUp />} />
        		<Route path='/sign-in' element={<SignIn />} />
			</Routes>
		</Router>
	);
}

export default App;
