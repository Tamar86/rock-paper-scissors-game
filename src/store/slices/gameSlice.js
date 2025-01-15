import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	score: parseInt(localStorage.getItem('score')) || 12,
	itemPicked: false,
	emptyHouse: true,
	outcome: '',
	playerScore: null,
	houseScore: null,
};

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setItemPicked: (state, action) => {
			state.itemPicked = action.payload;
		},
		// Score
		incrementScore: state => {
			const newScore = (state.score += 1);
			localStorage.setItem('score', newScore);
			state.playerScore = 1;
			state.houseScore = 0;
			if (state.score === 24) {
				state.outcome = 'Winner';
				localStorage.removeItem('score');
			} else {
				state.outcome = 'You win';
			}
		},
		decrementScore: state => {
			const newScore = (state.score -= 1);
			localStorage.setItem('score', newScore);
			state.houseScore = 1;
			state.playerScore = 0;
			if (state.score === 0) {
				state.outcome = 'Game Over';
				localStorage.removeItem('score');
			} else {
				state.outcome = 'You lose';
			}
		},
		draw: state => {
			state.score += 0;
		},

		setScore: (state, action) => {
			state.score = action.payload;
		},

		//outcome

		setOutcome: (state, action) => {
			state.outcome = action.payload;
		},

		setEmptyHouse: (state, action) => {
			state.emptyHouse = action.payload;
		},

		setPlayersScore: state => {
			state.playerScore = null;
			state.houseScore = null;
		},
	},
});

export const {
	setItemPicked,
	incrementScore,
	decrementScore,
	draw,
	setPlayersScore,
	setOutcome,
	setScore,
	setEmptyHouse,
} = gameSlice.actions;

export default gameSlice.reducer;
