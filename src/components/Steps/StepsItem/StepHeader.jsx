// src/components/StepHeader.jsx

import React from 'react';
import styles from './StepHeader.module.css'; // Импортируем стили как модуль

const StepHeader = ({
	order,
	title,
	onEdit,
	onDelete,
	isContentVisible,
	toggleContentVisibility,
}) => {
	return (
		<div className={styles.stepHeader}>
			<div className={styles.headerLeft}>
				<h3>{title}</h3>
				<p>{order}</p>
			</div>
			<div className={styles.headerRight}>
				<button className={styles.showBtn} onClick={toggleContentVisibility}>
					{isContentVisible ? 'Hide' : 'Show'}
				</button>
				<button className={styles.editBtn} onClick={onEdit}>
					Edit
				</button>
				<button className={styles.deleteBtn} onClick={onDelete}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default StepHeader;
