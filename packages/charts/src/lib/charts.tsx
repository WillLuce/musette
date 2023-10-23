import styles from './charts.module.scss';

/* eslint-disable-next-line */
export interface ChartsProps {}

export function Charts(props: ChartsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Charts!</h1>
    </div>
  );
}

export default Charts;
