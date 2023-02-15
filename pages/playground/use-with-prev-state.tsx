import { useReducer } from 'react';

const useStateWithPrevious = (initialValue) => {
  const reducer = (state, value) => ({
    value,
    previousValue: state.value
  });

  const [{ value, previousValue }, setValue] = useReducer(reducer, {
    value: initialValue
  });

  return [value, previousValue, setValue];
};

export default function UseWithPrevState() {
  const [count, previousValue, setValue] = useStateWithPrevious(0);

  const handleClick = () => setValue((count) => count + 1);
  return (
    <div>
      <h1>Prev state</h1>
      <p>New Count:{count}</p>
      <p>Prev Count:{previousValue}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
