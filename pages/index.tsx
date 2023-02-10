import { useState, createContext } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Homepage from '../components/Homepage';

const context = {
  name: null
};
export const GlobalContext = createContext(context);

GlobalContext.displayName = 'GlobalContext';

export default function Home() {
  const [username, setUsername] = useState('Fuwa');
  return (
    <ErrorBoundary>
      <GlobalContext.Provider value={{ name: username }}>
        <Homepage />
      </GlobalContext.Provider>
    </ErrorBoundary>
  );
}
