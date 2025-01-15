import { useDispatch, useSelector } from 'react-redux';
import styles from './Rules.module.css';
import { setModal } from '../../store/slices/playerSlice';

function Rules() {
	const dispatch = useDispatch();
	const isModal = useSelector(state => state.players.isModal);
	return (
		<button
			className={styles.rules}
			onClick={() => dispatch(setModal(!isModal))}
		>
			Rules
		</button>
	);
}

export default Rules;
