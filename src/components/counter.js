import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../store/slices/counter.slice';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);

  return (
    <div>
      <button onClick={() => dispatch(decrementCounter())}> - </button>
      <span> {counter} </span>
      <button onClick={() => dispatch(incrementCounter())}> + </button>
      <span> </span>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
};

export default Counter;