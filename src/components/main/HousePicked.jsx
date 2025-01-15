import { useSelector } from 'react-redux';
import styles from './HousePicked.module.css';
import rock from '../../assets/images/icon-rock.svg';
import scissors from '../../assets/images/icon-scissors.svg';
import paper from '../../assets/images/icon-paper.svg';
import Modal from './Modal';

function HousePicked() {
	const house = useSelector(state => state.players.house);
	const isModal = useSelector(state => state.players.isModal);
	return (
		<div
			className={
				house === 'paper'
					? styles.paper
					: house === 'scissors'
					? styles.scissors
					: house === 'rock'
					? styles.rock
					: ''
			}
		>
			<button className={styles.button}>
				<img
					className={styles.image}
					src={
						house === 'paper'
							? paper
							: house === 'scissors'
							? scissors
							: house === 'rock'
							? rock
							: ''
					}
				/>
			</button>
			{isModal && <Modal />}
		</div>
	);
}

export default HousePicked;
