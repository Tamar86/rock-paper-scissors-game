import styles from './ItemPicked.module.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Outcome from './Outcome';
import PlayerPicked from './PlayerPicked';
import HousePicked from './HousePicked';
import Modal from './Modal';

function ItemPicked() {
	const [outcome, setOutCome] = useState(false);
	const isModal = useSelector(state => state.players.isModal);
	const emptyHouse = useSelector(state => state.game.emptyHouse);
	const playerScore = useSelector(state => state.game.playerScore);
	const houseScore = useSelector(state => state.game.houseScore);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setOutCome(true);
		}, 2000);

		return () => clearTimeout(timeOut);
	}, []);

	return (
		<div className={styles.itemPicked}>
			<div className={styles.container}>
				<p>You picked</p>
				<div
					className={
						playerScore > houseScore && outcome ? styles.boxContainer : ''
					}
				>
					<PlayerPicked />
				</div>
			</div>

			{!emptyHouse && outcome && (
				<div className={styles.outcome}>
					{' '}
					<Outcome />{' '}
				</div>
			)}
			<div className={styles.container}>
				<p>The house picked</p>
				{emptyHouse ? (
					<div className={styles.house}>
						<div className={styles.houseEmpty}></div>
					</div>
				) : (
					<div
						className={
							playerScore < houseScore && outcome ? styles.boxContainer : ''
						}
					>
						<HousePicked />
					</div>
				)}
			</div>

			{isModal && <Modal />}
		</div>
	);
}

export default ItemPicked;
