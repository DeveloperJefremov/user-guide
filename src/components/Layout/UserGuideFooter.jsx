// src/components/UserGuideFooter.jsx

import React from 'react';
import styles from './UserGuideFooter.module.css'; // Импортируем стили как модуль

const UserGuideFooter = ({ children }) => {
	return (
		<footer className={styles.userGuideFooter}>
			<div className={styles.footerContent}>
				<div className={styles.footerInfo}>{children}</div>
			</div>
		</footer>
	);
};

export default UserGuideFooter;
