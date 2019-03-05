import React, {PureComponent} from 'react'

class Menu extends PureComponent {
    state = {
        selected_item: 2,
        name: 'Бумеранг вернулся назад'
    }
    render() {
        return (
            <div>
                <div className="menu2">
                    <div onClick={this.books}>
                        Books
                    </div>
                    <div onClick={this.orders}>
                        Orders
                    </div>
                    <div className="a">
                        Очень длинный текст.
                    </div>
                </div>
                
            </div>
        )
    }

    books = () => {
        this.props.updateData(0)  
    }
    orders = () => {
        this.props.updateData(1) 
    }
}

export default Menu