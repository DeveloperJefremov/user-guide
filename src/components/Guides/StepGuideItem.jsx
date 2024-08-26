import React, { useEffect } from 'react';
import styles from './StepGuideItem.module.css';

const StepGuideHeader = ({ title }) => {
	return (
		<div className={styles.stepGuideHeader}>
			<h2>{title}</h2>
		</div>
	);
};

const StepGuideBody = ({ bodyDescription }) => {
	return (
		<div className={styles.stepGuideBody}>
			<p>{bodyDescription}</p>
		</div>
	);
};


const StepGuideFooter = ({ element, closeModalWindow }) => {
	const closeModalHandler = () => {
		// Проверяем, существует ли элемент и его classList
		if (element && element.classList) {
			element.classList.remove(styles.highlighted);
		}
		closeModalWindow();
	};

	return (
		<div className={styles.stepGuideFooter}>
			<div className={styles.buttons}>
				<button className={styles.cancelBtn} onClick={closeModalHandler}>
					Close
				</button>
				<button className={styles.previousBtn} disabled>
					Previous
				</button>
				<button className={styles.saveBtn} disabled>
					Next
				</button>
			</div>
		</div>
	);
};

const StepGuideItem = ({ element, onClose }) => {
	useEffect(() => {
		if (!element) return;

		if (element) {
			element.style.position = 'relative';
			element.classList.add(styles.highlighted);
		}
	}, [element]);

	return (
		<section className={styles.stepGuideItem}>
			<StepGuideHeader title='Step Guide' />
			<StepGuideBody bodyDescription='This is the guide for the selected step.' />
			<StepGuideFooter closeModalWindow={onClose} element={element} />
		</section>
	);
};

export default StepGuideItem;
