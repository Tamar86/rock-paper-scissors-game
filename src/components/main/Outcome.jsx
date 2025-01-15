import styles from './Outcome.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	setEmptyHouse,
	setItemPicked,
	setOutcome,
	setPlayersScore,
	setScore,
} from '../../store/slices/gameSlice';

function Outcome() {
	const dispatch = useDispatch();
	const outcome = useSelector(state => state.game.outcome);
	const score = useSelector(state => state.game.score);
	function handleReset() {
		dispatch(setItemPicked(false));
		dispatch(setEmptyHouse(true));
		dispatch(setPlayersScore());

		if (score === 0 || score === 24) {
			dispatch(setScore(12));
			dispatch(setOutcome(''));
		}
	}
	return (
		<div className={styles.outcome}>
			<p className={styles.outcomeText}>{outcome}</p>
			<button className={styles.outcomeBtn} onClick={handleReset}>
				Play again
			</button>
		</div>
	);
}

export default Outcome;
