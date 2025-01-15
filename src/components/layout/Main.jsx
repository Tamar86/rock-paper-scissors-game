import styles from './Main.module.css';

import GameStart from '../main/GameStart';
import Rules from '../main/Rules';

function Main() {
	return (
		<div className={styles.main}>
			<GameStart />
			<Rules />
		</div>
	);
}

export default Main;
