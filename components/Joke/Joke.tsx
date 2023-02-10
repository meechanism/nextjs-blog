import styles from './Joke.module.css';

interface JokeProps {
    id: number;
    punchline: string;
    type: string;
    setup: string;
}

const Joke = (joke: JokeProps) => {
    return <div className={styles.card}>
        <h3 className={styles.title}>{joke.setup}</h3>
        <p className={styles.punchline}>{joke.punchline}</p>
    </div>
}

export default Joke;
