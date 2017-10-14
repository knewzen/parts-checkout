import React from 'react'
import Header from '../../components/views/Header'
import Footer from '../../components/views/Footer'
import Main from '../Main'
import {StyledApp} from './style'

const MyApp = () => (
	<div className="AppContainer">
		<Header />
		<Main />
		<Footer />
	</div>
)

export default MyApp
