import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Table, Grid} from 'semantic-ui-react'
import {Helmet} from 'react-helmet'
import _ from 'lodash'
import {LoginButton} from './style'
import {TextCenter} from 'styles/base'

class Row extends Component {
    static propTypes = {
        idx: PropTypes.int,
        part: PropTypes.object
    }
    render () {
        const {idx, part} = this.props
        return (
            <Table.Row disabled={part.quantity === 0}>
                <Table.Cell>{idx}</Table.Cell>
                <Table.Cell>{part.name}</Table.Cell>
                <Table.Cell>{part.quantity}</Table.Cell>
            </Table.Row>
        )
    }
}

class PartsGrid extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    static propTypes = {
        login: PropTypes.func,
        errors: PropTypes.object,
        parts: PropTypes.object.isReq
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {login} = this.props
        const {username, password} = this.state
        login({username, password})
    }

    handleChange = (e, {name, value}) => {
        this.setState({
            [name]: value
        })
    }

    render () {
        const {username, password} = this.state
        // Error from server
        const {errors, parts} = this.props
        const loginFormProps = {error: !_.isEmpty(errors)}
        // Login btn props
        const loginBtnProps = {
            content: 'Login',
            icon: 'sign in'
        }

        return (
            <Grid
                verticalAlign="middle"
                centered
                columns={1}
                textAlign="center"
                relaxed
            >
                <Helmet>
                    <title>PennApps: Hardware Checkout</title>
                </Helmet>
                <Grid.Row>
                    <Grid.Column tablet={12} mobile={16} computer={12}>
                        <Table celled unstackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell width={2}>ID</Table.HeaderCell>
                                    <Table.HeaderCell>Part Name</Table.HeaderCell>
                                    <Table.HeaderCell width={2}>Quantity</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {parts.entities.map((part, idx) =>
                                    <Row key={idx} idx={idx} part={part}/>)}
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

function mapStateToProps (state) {
    const { errors, isLoggedIn } = state.me.auth
    const { parts } = state.entities

    return {
        errors,
        isLoggedIn,
        parts
    }
}

function mapDispatchToProps (dispatch) {
    return {
        // login: async data => {
        // dispatch({type: LOGIN_AUTH_PENDING})
        // const result = await LOGIN_AUTH(data)
        // return dispatch(result)
        // },
        // clearErrors: async () => {
        // dispatch({type: AUTH_CLEAR_ERRORS})
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PartsGrid)
