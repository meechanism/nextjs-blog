import { useReducer } from 'react';

const initialState = {
  people: 0,
  siblings: 0
};

// action: { payload, type}
const myReducer = (state, action) => {
  switch (action.type) {
    case 'add-people':
      return { ...state, people: state.people + 1 };
    case 'add-sibling':
      return { ...state, siblings: state.siblings + 1 };
  }
};

export default function MyUseReducer() {
  let [state, dispatch] = useReducer(myReducer, initialState);

  const handlePeople = () => {
    dispatch({ type: 'add-people' });
  };

  const handleSibs = () => {
    dispatch({ type: 'add-sibling' });
    dispatch({ type: 'add-people' });
  };

  return (
    <>
      <h1>Use Reducer example</h1>
      <p>Total People: {state.people}</p>
      <p>Total siblings: {state.siblings}</p>
      <button onClick={handlePeople}>Increment people</button>
      <button onClick={handleSibs}>Increment siblings</button>
    </>
  );
}
