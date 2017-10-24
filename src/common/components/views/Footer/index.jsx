import React, {Component} from 'react'
// Import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react' /* Grid, Header, Icon, */ 
// import {StyledFooter, StyledFooterInner} from './style'

export default class Footer extends Component {
    shouldComponentUpdate () {
        return false
    }

    render () {
        return (
            <div>
                <Container textAlign='center'>
          --Footer--
                </Container>
            </div>
        )
    }
}
