import axios from 'axios'
import { useEffect, useState } from 'react';
import Joke from '../../components/Joke';

export default  () => {
    let [jokes, setJokes ] = useState([]);

    useEffect(() => {
        const fetchJokes = async () => {
            const jokesP = await axios.get('https://official-joke-api.appspot.com/jokes/ten');
            setJokes(jokesP.data)
        }
        fetchJokes();
    }, []);

  return (
    <>
      <h1>Jokes</h1>
      {jokes.map((j,i) => <Joke key={`joke-${j.id}`} {...j}/>)}
    </>
  );
}
