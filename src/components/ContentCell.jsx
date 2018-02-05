import React, { Component } from 'react'

export default class ContentCell extends Component {
    render () {
        const { text, id } = this.props
        return (
            <li className={id + 'no'}>{text}</li>
        )
    }
}