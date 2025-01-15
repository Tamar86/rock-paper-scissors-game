import { useSelector } from 'react-redux';
import styles from './PlayerPicked.module.css';
import rock from '../../assets/images/icon-rock.svg';
import scissors from '../../assets/images/icon-scissors.svg';
import paper from '../../assets/images/icon-paper.svg';

function PlayerPicked() {
	const player = useSelector(state => state.players.player);
	return (
		<div
			className={
				player === 'paper'
					? styles.paper
					: player === 'scissors'
					? styles.scissors
					: player === 'rock'
					? styles.rock
					: ''
			}
		>
			<button className={styles.button}>
				<img
					className={styles.image}
					src={
						player === 'paper'
							? paper
							: player === 'scissors'
							? scissors
							: player === 'rock'
							? rock
							: ''
					}
				/>
			</button>
		</div>
	);
}

export default PlayerPicked;
