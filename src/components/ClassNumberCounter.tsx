import React, {PureComponent, Dispatch} from 'react';
import { connect } from 'react-redux';
import { Action, decreaseNumber, increaseNumber } from '../store/actions';
import { getNumber } from '../store/selectors';
import { IStore } from '../types';

type Props = {
  number: number,
  decreaseNumber: () => void
  increaseNumber: () => void
}

class ClassNumberCounter extends PureComponent<Props> {

  constructor(props: Props) {
    super(props);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
  }

  componentDidUpdate(prevProps: Props) {
    console.log({prevNumber: prevProps.number});
    console.log({currentNumber: this.props.number})
  }
  
  handleDecrease () {
    this.props.decreaseNumber();
  }

  handleIncrease () {
    this.props.increaseNumber();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDecrease}>-</button>
        <span>{this.props.number}</span>
        <button onClick={this.handleIncrease}>+</button>
      </div>
    )
  }
}

const mapStateToProps =  (state: IStore) => ({
  number: getNumber(state)
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  decreaseNumber: () => {
    dispatch(decreaseNumber())
  },
  increaseNumber: () => {
    dispatch(increaseNumber())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassNumberCounter);
