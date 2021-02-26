import React, {PureComponent, Dispatch} from 'react';
import { connect } from 'react-redux';
import { Action, decreaseArray, increaseArray } from '../store/actions';
import { getArray } from '../store/selectors';
import { IStore } from '../types';

type Props = {
  array: string[],
  decreaseArray: () => void
  increaseArray: () => void
}

class ClassArrayCounter extends PureComponent<Props> {

  constructor(props: Props) {
    super(props);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
  }

  componentDidUpdate(prevProps: Props) {
    console.log({prevArray: prevProps.array});
    console.log({currentArray: this.props.array});
    if (prevProps.array.length === this.props.array.length) { 
      console.log('same length')
    }
    if (prevProps.array !== this.props.array) {
      console.log('but different objects')
    }
  }
  
  handleDecrease () {
    this.props.decreaseArray();
  }

  handleIncrease () {
    this.props.increaseArray();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDecrease}>-</button>
        <span>{this.props.array.length}</span>
        <button onClick={this.handleIncrease}>+</button>
      </div>
    )
  }
}

const mapStateToProps =  (state: IStore) => ({
  array: getArray(state)
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  decreaseArray: () => {
    dispatch(decreaseArray())
  },
  increaseArray: () => {
    dispatch(increaseArray())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassArrayCounter);