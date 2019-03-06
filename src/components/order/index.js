import React, {Component} from 'react'

class Order extends Component {
    state = {
        selectedId: 0,
        selectedIndex: 0,
        valueEntered:0,
        valueValues: [],
        setElements:1,
        valueId: [0],
    };
    render() {
        const {book} =this.props;
        var page = [];
        var cost = [];
        var sum;
        var toms = book.map((b, index) => {
            return <option  index={index}>{b.title}</option>
        })

        for(var i = 0;i<this.state.setElements;i++) {
            var order = <div>
                            <div>
                                <select id={i} onClick={this.selected}>{toms}</select>
                            </div>
                            <div>
                                <input type="namber" id={i} onChange={this.handClick}/>
                                <div id={i}>const={this.state.valueValues[i] * book[this.state.valueId[i]].prise}</div>
                            </div>
                        </div>;
            page.push(order);
        }

        for(var d = 0;d < cost.length;d++) {
            sum = sum + cost[d]
        }

        return (
            <div>
                {page}
                <button onClick={this.addElement}>+</button>
            </div>
        )
        
    }
    addElement = () => {
        this.setState({ setElements: this.state.setElements + 1})
        this.setState(state => {
            state.valueId[state.setElements -1 ] = 0;
        })
    }
    selected = (element) => {
        var selected = document.getElementById(element.target.id);
        this.setState({selectedId:selected.id})
        this.setState({selectedIndex: selected.options[selected.selectedIndex].index})
        this.setState(state => {
            state.valueId[state.selectedId] = state.selectedIndex;
     
        })
    }
    handClick = (element) => {
        var elements = element.target
        this.setState({selectedId:elements.id})
        this.setState({valueEntered: elements.value})
        this.setState(state => {
            state.valueValues[state.selectedId] = state.valueEntered;

        })
    }
}

export default Order