import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Table, Grid} from 'semantic-ui-react'
import {Helmet} from 'react-helmet'
import _ from 'lodash'
import {LoginButton} from './style'
import {TextCenter} from 'styles/base'

export default class PartsGrid extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    static propTypes = {
        login: PropTypes.func,
        errors: PropTypes.object
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
        const {errors} = this.props
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
                                <Table.Row disabled>
                                    <Table.Cell>Jamie</Table.Cell>
                                    <Table.Cell>Approved</Table.Cell>
                                    <Table.Cell>Requires call</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>John</Table.Cell>
                                    <Table.Cell>Selected</Table.Cell>
                                    <Table.Cell>None</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jamie</Table.Cell>
                                    <Table.Cell>Approved</Table.Cell>
                                    <Table.Cell>Requires call</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell disabled>Jill</Table.Cell>
                                    <Table.Cell>Approved</Table.Cell>
                                    <Table.Cell>None</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
