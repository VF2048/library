import React, {Component} from 'react'

class Order extends Component {
    state = {
        value: 0,
        addOrders: 1,
        id: 0,
        i:0
    };
    render() {
        const {book} =this.props
        const error = <div className="okno" onClick={this.clear}>Неправельное колличество!!!</div>
        var toms = [];
        var is=0;
        toms = book.map((b, index) => {
            return <option id={index}>{b.title}</option>
        })
        var page = []
        for(var i=0;i<this.state.addOrders;i++) {
            var order = <div>
            <div>
                <select className="select" id="select" onChange={this.selected}>{toms}</select>
            </div>
            
            <div>
                <div id="edit">
                <input type="number" id={is++} onChange={this.handClick} />
                <div className="prise">cost = {this.state.value * book[this.state.id].prise}</div>
                </div>
            </div>
        </div>;
            page.push(order)
        }
        return (
            <div>
                {page}
                <div>
                {this.state.value > book[this.state.id].quantity ? error : ""}
                </div>
                <button className="toOrder">To order</button>
            </div>
        )
        
    }
    handClick = (e) => {
        this.setState({ value: e.target.value })
        console.log(e.target.value)
    }
    clear = () => {
        document.getElementById().value = 0
        this.setState({ value: 0 })
    }
    selected = () => {
        var e = document.getElementById("select");
        var index = e.options[e.selectedIndex].index;
        this.setState({id: index})
    }
}

export default Order