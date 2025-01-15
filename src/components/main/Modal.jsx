import styles from './Modal.module.css';
import modalImg from '../../assets/images/image-rules.svg';
import iconClose from '../../assets/images/icon-close.svg';
import { useDispatch } from 'react-redux';
import { setModal } from '../../store/slices/playerSlice';
function Modal() {
	const dispatch = useDispatch();
	return (
		<div
			className={styles.overlay}
			onClick={() => {
				dispatch(setModal(false));
			}}
		>
			<div className={styles.modal}>
				<div className={styles.modalHeader}>
					<p className={styles.text}>Rules</p>
					<button
						className={styles.btn}
						onClick={() => {
							dispatch(setModal(false));
						}}
					>
						<img src={iconClose} />
					</button>
				</div>
				<img src={modalImg} alt='Image of rules' className={styles.modalImg} />
			</div>
		</div>
	);
}

export default Modal;
