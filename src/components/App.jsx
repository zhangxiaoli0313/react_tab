import React, { Component } from 'react'
import Cell from './Cell'
import TitleCell from './titleCell'
import ContentCell from './ContentCell'
import '../assets/home.scss'

export default class App extends Component {
    constructor () {
        super()
        this.state = {
            title: ['A', 'B', 'C', 'D'],
            content: ['河北', '山西', '北京', '云南'],
            activeIdx: 0
        }
    }
    changeActiveIdx (arg) {
        this.setState({
            activeIdx: arg
        })
    }
    render () {
        const {title, content, activeIdx} = this.state
        return (
            <div>
                <Cell>
                    {
                        title.map((val, idx) => {
                            return <TitleCell
                                key={idx}
                                text={val}
                                id={activeIdx == idx ? 'active' : ''}
                                ids={idx}
                                getIds = { ::this.changeActiveIdx }
                            />
                        })
                    }
                </Cell>
                <Cell classPrefix='content'>
                    {
                        content.map((val, idx) => {
                            return <ContentCell
                                key={idx}
                                text={val}
                                id={activeIdx == idx ? 'have' : ''}
                                ids={idx}
                            />
                        })
                    }
                </Cell>
            </div>
        )
    }
}
