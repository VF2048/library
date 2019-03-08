import React, {PureComponent} from 'react'
import Menu from './Menu'
import BooksList from './library'
import books from './BookList'
import Order from './order'
import './style.css'


class App extends PureComponent {
    state = {
        selected_item: 0,
    };
    updateData = (value) => {
        this.setState({ selected_item: value })
     }
    render() {
        const bookss = this.state.selected_item === 0 && <section><BooksList book = {books} /></section>
        const order = this.state.selected_item === 1 && <section><Order book = {books}/></section>
        return (
            <div>
                <div className='headline'>
                    <h1>
                        dsg
                    </h1>
                </div>
                <div className="main">
                    <div className="menu">
                            <Menu updateData={this.updateData} />
                    </div>
                    <div className="catalog">
                        
                        <div className="item">
                            {bookss}
                        </div>
                        <div className="item">
                            {order}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App