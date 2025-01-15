import { useSelector } from 'react-redux';

import ItemPicked from './ItemPicked';
import GameLandingPage from './GameLandingPage';

function GameStart() {
	const itemPicked = useSelector(state => state.game.itemPicked);

	return (
		<div> {itemPicked === false ? <GameLandingPage /> : <ItemPicked />}</div>
	);
}

export default GameStart;
