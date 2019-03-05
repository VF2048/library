import React, {Component} from 'react'

class Books extends Component {
    render() {
        const {books} = this.props
        return (
            <div className="books">
                <div>
                    {books.title}
                </div>
                <div>
                    {books.text}
                </div>
            </div>
        )
    }
}

export default Books