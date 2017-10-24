import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {APPLICATION_INIT} from 'actions'
import {ThemeProvider} from 'styled-components'
import theme from 'styles/theme'
import App from 'containers/App'

// import RoutingWrapper from 'components/addons/RoutingWrapper'
import { BrowserRouter } from 'react-router-dom'

export default class Root extends Component {
        static propTypes = {
            store: PropTypes.object,
            SSR: PropTypes.object,
            history: PropTypes.object,
            routes: PropTypes.array
        }

        static defaultProps = {
            SSR: {}
        }

        componentWillMount () {
            const {store} = this.props
            store.dispatch({type: APPLICATION_INIT})
        }

        render () {
            const {store} = this.props
            return (
                <Provider store={store} key={Math.random()}>
                    <ThemeProvider theme={theme}>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </ThemeProvider>
                </Provider>
            )
        }
}
