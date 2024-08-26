// src/components/UserGuideHeader.jsx

import React from 'react';
import styles from './UserGuideHeader.module.css'; // Импортируем стили как CSS-модуль

const UserGuideHeader = ({ title, description }) => {
	return (
		<div className={styles.heading}>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};

export default UserGuideHeader;
