import { useDispatch, useSelector } from 'react-redux';
import { setEmptyHouse, setItemPicked } from '../../store/slices/gameSlice.js';
import { setPlayer } from '../../store/slices/playerSlice.js';

import { setHouse } from '../../store/slices/playerSlice.js';
import { game } from '../../helpers/gameutils.js';
import {
	incrementScore,
	decrementScore,
	draw,
	setOutcome,
} from '../../store/slices/gameSlice.js';
import Modal from './Modal.jsx';
import PickOption from './PickOption.jsx';

function GameLandingPage() {
	const isModal = useSelector(state => state.players.isModal);
	const items = useSelector(state => state.players.items);
	const dispatch = useDispatch();
	function handlePick(player) {
		const randomItem = items[Math.floor(Math.random() * items.length)];
		const timeOut = setTimeout(() => {
			dispatch(setEmptyHouse(false));
			game(
				player,
				randomItem,
				dispatch,
				draw,
				setOutcome,
				incrementScore,
				decrementScore,
			);
		}, 1000);
		dispatch(setHouse(randomItem));

		return () => clearTimeout(timeOut);
	}

	function handlePickPaper() {
		dispatch(setItemPicked(true));
		dispatch(setPlayer('paper'));
		handlePick('paper');
	}
	function handlePickScissors() {
		dispatch(setItemPicked(true));
		dispatch(setPlayer('scissors'));
		handlePick('scissors');
	}
	function handlePickRock() {
		dispatch(setItemPicked(true));
		dispatch(setPlayer('rock'));
		handlePick('rock');
	}
	return (
		<>
			<PickOption
				onPickPaper={handlePickPaper}
				onPickScissors={handlePickScissors}
				onPickRock={handlePickRock}
			/>
			{isModal && <Modal />}
		</>
	);
}

export default GameLandingPage;
