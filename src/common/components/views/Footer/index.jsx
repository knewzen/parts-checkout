import React, {Component} from 'react'
// Import PropTypes from 'prop-types'
import {Grid, Header, Icon, Container} from 'semantic-ui-react'
import {StyledFooter, StyledFooterInner} from './style'

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
