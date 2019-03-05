import React, {Component} from 'react'

class Order extends Component {
    render() {
        const {books} = this.props
        return (
            <div className="order">
                <div>
                    <select className="select">
                        <option>Пункт 1</option>
                        <option>Пункт 2</option>
                        <option>Пункт 3</option>
                    </select>
                </div>
                <div>
                    <input id="a" type="number"   />
                    
                </div>
            </div>
        )
    }

    handClick = () => {
    
    }

}

export default Order