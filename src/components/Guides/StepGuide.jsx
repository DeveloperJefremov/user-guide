import React, { useEffect, useState } from 'react';
import Modal from '../UI/Modal';
import styles from './StepGuide.module.css';
import StepGuideItem from './StepGuideItem';

const StepGuide = ({ element, onClose }) => {
	const [position, setPosition] = useState({ top: '0px', left: '0px' });

	useEffect(() => {
		if (element) {
			const rect = element.getBoundingClientRect();
			setPosition({
				top: `${rect.top + window.scrollY}px`,
				left: `${rect.right + window.scrollX + 30}px`, // Отступ вправо на 30px
			});
		}
	}, [element]);

	return (
		<Modal onClick={onClose} style={{ top: position.top, left: position.left }}>
			<div className={styles.stepGuide}>
				<StepGuideItem onClose={onClose} />
			</div>
		</Modal>
	);
};

export default StepGuide;
