import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Icon, Popup, Menu} from 'semantic-ui-react'
import {isEqual} from 'lodash'
import {
	StyledHeader,
	HeaderInner,
	Navicon,
	PageTitle,
	HeaderButton
} from './style'
import {Spacer} from 'styles/base'
import {LOGOUT_AUTH} from 'actions/auth'

class Header extends Component {
	shouldComponentUpdate (nextProps) {
		return !isEqual(nextProps, this.props)
	}

	static propTypes = {
		title: PropTypes.string,
		toggleSidebar: PropTypes.func,
		isLoggedIn: PropTypes.bool,
		isMobile: PropTypes.bool,
		logout: PropTypes.function
	}

	handleItemClick = (e, { name }) => console.log(name)

	render () {
		const {title, toggleSidebar, isLoggedIn, isMobile, logout} = this.props

		return (
			<Menu>
				<Link to='/'>
					<Menu.Item
						name='icon'
						onClick={this.handleItemClick}
					>
						<Icon name='microchip' size='large'/>
					</Menu.Item>
				</Link>
				<Menu.Menu position='right'>
					<Menu.Item name='Sign Up' as={Link} to='/signup' />
					{ isLoggedIn ? (
						<Menu.Item name='logout' onClick={logout} />
					) : (
						<Menu.Item name='login' as={Link} to='login' />
					)}
				</Menu.Menu>
			</Menu>
		)
	}
}

function mapStateToProps (state) {
	console.log(JSON.stringify(state))
	const { isLoggedIn } = state.me.auth
	return {
		isLoggedIn
	}
}

function mapDispatchToProps (dispatch) {
	return {
		logout: () => {
			dispatch(LOGOUT_AUTH())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
