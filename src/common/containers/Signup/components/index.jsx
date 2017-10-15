import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Form, Message, Grid} from 'semantic-ui-react'
import {Helmet} from 'react-helmet'
import _ from 'lodash'
import {SignupButton} from './style'
import {TextCenter} from 'styles/base'
import util from 'util'

export default class SignUpComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            password2: ''
        }
    }

    static propTypes = {
        signup: PropTypes.func.isRequired,
        errors: PropTypes.object
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {signup} = this.props
        const {username, password, password2} = this.state
        signup({username, password, password2})
    }

    handleChange = (e, {name, value}) => {
        this.setState({
            [name]: value
        })
    }

    render () {
        const {username, password, password2} = this.state
        // Error from server
        const { errors } = this.props
        const loginFormProps = {error: !_.isEmpty(errors)}
        // Login btn props
        const signupBtnProps = {
            content: 'Sign Up',
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
                    <title>Sign Up</title>
                </Helmet>
                <Grid.Row>
                    <Grid.Column tablet={10} mobile={16} computer={6}>
                        {errors.error &&
                                <Message
                                    error
                                    header={'Server Error'}
                                    content={errors.error}
                                />
                        }
                        <Form onSubmit={this.handleSubmit} {...loginFormProps}>
                            <Form.Input
                                placeholder="Username"
                                name="username"
                                label="Username"
                                value={username}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                placeholder="Password"
                                type="password"
                                name="password"
                                label="Password"
                                value={password}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                placeholder="Password"
                                type="password"
                                name="password2"
                                label="Confirm Password"
                                value={password2}
                                onChange={this.handleChange}
                            />
                            {!(password === password2) &&
                                <Message
                                    error
                                    header={'Error'}
                                    content={'Passwords do not match'}
                                />
                            }
                            <TextCenter>
                                <SignupButton {...signupBtnProps}
                                    disabled={(password !== password2) || password === ''}
                                />
                            </TextCenter>
                            { !(password === password2) &&
                                <Message>
                                    <Message.Header>
                                        Error
                                    </Message.Header>
                                    <p>
                                        Passwords do not match
                                    </p>
                                </Message>
                            }
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
