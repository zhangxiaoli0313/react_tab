import React, { Component } from 'react'

export default class titleCell extends Component {
    constructor () {
        super()
        this.change = this.change.bind(this)
    }
    change () {
        const {ids, getIds} = this.props
        getIds(ids)
    }
    render () {
        const { text, id } = this.props
        return (
            <li className={id} onClick={this.change}>{text}</li>
        )
    }
}
