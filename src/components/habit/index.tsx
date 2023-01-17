import styles from './style.module.css';

interface Props {
  completed: number;
}

function Habit({ completed }: Props) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className={styles.habit}>{completed}</div>
    </>
  );
}

export default Habit;
