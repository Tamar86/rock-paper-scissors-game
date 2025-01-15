import styles from './PickOption.module.css';

import triangle from '../../assets/images/bg-triangle.svg';
import rock from '../../assets/images/icon-rock.svg';
import scissors from '../../assets/images/icon-scissors.svg';
import paper from '../../assets/images/icon-paper.svg';

function PickOption({ onPickPaper, onPickScissors, onPickRock }) {
	return (
		<div className={styles.container}>
			<img src={triangle} alt='triangle' className={styles.triangle} />
			<div className={styles.paper}>
				<button className={styles.button} onClick={onPickPaper}>
					<img src={paper} alt='paper' />
				</button>
			</div>
			<div className={styles.scissors}>
				<button className={styles.button} onClick={onPickScissors}>
					<img src={scissors} alt='scissors' />
				</button>
			</div>
			<div className={styles.rock}>
				<button className={styles.button} onClick={onPickRock}>
					<img src={rock} alt='rock' />
				</button>
			</div>
		</div>
	);
}

export default PickOption;
