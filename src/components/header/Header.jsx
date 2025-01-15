import styles from './Header.module.css';
import { useSelector } from 'react-redux';

function Header() {
	const score = useSelector(state => state.game.score);
	return (
		<div className={styles.header}>
			<div>
				<h1 className={styles.heading}>
					<span>Rock</span>
					<span>Paper</span>
					<span>Scissors</span>
				</h1>
			</div>

			<div className={styles.scoreContainer}>
				<span>Score</span>
				<span className={styles.score}>{score}</span>
			</div>
		</div>
	);
}

export default Header;
