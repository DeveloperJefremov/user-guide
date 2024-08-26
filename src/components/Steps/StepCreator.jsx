// src/components/Steps/StepCreator.jsx

import React from 'react';
import Modal from '../UI/Modal';
import styles from './StepCreator.module.css'; // Импортируем стили как модуль
import StepCreatorForm from './StepCreatorForm'; // Импорт нового компонента формы

let idCounter = 0; // Глобальная переменная для генерации уникальных ID

const StepCreator = ({ isOpen, onClose, onSave }) => {
	if (!isOpen) return null;

	const handleSave = formData => {
		const guideStep = {
			id: idCounter++, // Присваиваем уникальный идентификатор
			...formData,
		};
		console.log('Guide Step:', guideStep);

		onSave(guideStep);
		onClose(); // Закрываем модальное окно после сохранения
	};

	const handleCancel = () => {
		onClose(); // Закрываем модальное окно после отмены
	};

	return (
		<Modal onClick={onClose}>
			<div className={styles.modal} onClick={e => e.stopPropagation()}>
				<h2>Create Step</h2>
				<StepCreatorForm onSave={handleSave} onCancel={handleCancel} />
				
			</div>
		</Modal>
	);
};

export default StepCreator;
