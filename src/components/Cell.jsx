import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../assets/lists.scss'
import '../assets/home.scss'

export default class List extends Component {
    static propTypes = {
        classPrefix: PropTypes.oneOf(['title', 'content'])
    }
    static defaultProps = {
        className: 'cell',
        classPrefix: 'title'
    }
    render () {
        const { children, className, classPrefix } = this.props
        return (
            <ul className={`${className} ${classPrefix}-${className}`}>{children}</ul>
        )
    }
}
