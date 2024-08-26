// src/components/StepFooter.jsx

import React from 'react';
import styles from './StepFooter.module.css'; // Импортируем стили как модуль

const StepFooter = ({ onSave, onCancel, isEditing }) => {
	return (
		<div className={styles.stepFooter}>
			{isEditing && (
				<>
					<button className={styles.cancelBtn} onClick={onCancel}>
						Cancel
					</button>
					<button className={styles.saveBtn} onClick={onSave}>
						Save
					</button>
				</>
			)}
		</div>
	);
};

export default StepFooter;
