import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	player: '',
	house: '',
	items: ['rock', 'paper', 'scissors'],
	isModal: true,
};

export const playerSlice = createSlice({
	name: 'players',
	initialState,
	reducers: {
		//Player
		setPlayer: (state, action) => {
			state.player = action.payload;
		},

		//House

		setHouse: (state, action) => {
			state.house = action.payload;
		},

		setModal: (state, action) => {
			state.isModal = action.payload;
		},
	},
});

export const { setPlayer, setHouse, setModal } = playerSlice.actions;

export default playerSlice.reducer;
