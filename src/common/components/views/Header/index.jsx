import React, {Component} from 'react'
import { Link } from 'react-router-dom'
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

export default class Header extends Component {
	shouldComponentUpdate (nextProps) {
		return !isEqual(nextProps, this.props)
	}

				static propTypes = {
					title: PropTypes.string,
					toggleSidebar: PropTypes.func,
					isLoggedIn: PropTypes.bool,
					isMobile: PropTypes.bool
				}

				handleItemClick = (e, { name }) => console.log(name)

				render () {
					const {title, toggleSidebar, isLoggedIn, isMobile} = this.props

					return (
						<Menu>
							<Menu.Item
								name='icon'
								onClick={this.handleItemClick}
							>
								<Icon name='microchip' size='large'/>
							</Menu.Item>
							<Menu.Menu position='right'>
								<Link to='/signup'>
									<Menu.Item name='signup' onClick={this.handleItemClick} />
								</Link>
								<Link to='/logout'>
									<Menu.Item name='logout' onClick={this.handleItemClick} />
								</Link>
							</Menu.Menu>
						</Menu>
					)
				}
}
