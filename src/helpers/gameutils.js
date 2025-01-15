export function game(
	player,
	randomItem,
	dispatch,

	draw,
	setOutcome,
	incrementScore,
	decrementScore,
) {
	if (player === randomItem) {
		dispatch(draw());
		dispatch(setOutcome('draw'));
	} else if (
		(player === 'paper' && randomItem === 'rock') ||
		(player === 'rock' && randomItem === 'scissors') ||
		(player === 'scissors' && randomItem === 'paper')
	) {
		dispatch(incrementScore());
	} else if (
		(player === 'rock' && randomItem === 'paper') ||
		(player === 'scissors' && randomItem === 'rock') ||
		(player === 'paper' && randomItem === 'scissors')
	) {
		dispatch(decrementScore());
	}
}
