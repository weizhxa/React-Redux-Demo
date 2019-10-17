import React from 'react';
import Add from "../components/Add";
import {connect} from "react-redux";
import * as action from '../redux/actions/Add';
import {bindActionCreators} from "redux";

@connect(
    state => (adds => state.add.items),
    dispatch => (actions => bindActionCreators(action, dispatch))
)

class Home extends React.Component {

    handleAdd = () => {
        this.props.add(this.refs.input.value);//执行添加
        this.refs.input.value = '';
    }

    render() {
        console.log("this.props.adds: " + this.props.adds);
        const items = this.props.adds;
        return (
            <div>
                <div>
                    <input type="text" ref={'input'}/>
                    <button onClick={this.handleAdd}>添加</button>
                </div>
                <div>
                    <ul>
                        {
                            items && items.length > 0 ? items.map((item, index) =>
                                    <Add key={index.toString()} item={item}/>
                                ) :
                                <Add key={"0"} item={'没有东西呢，哥哥。'}/>
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home
