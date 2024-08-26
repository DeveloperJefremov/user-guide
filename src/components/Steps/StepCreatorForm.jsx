// src/components/Steps/StepCreatorForm.jsx

import React, { useState } from 'react';
import styles from './StepCreatorForm.module.css'; // Импортируем стили как модуль

const StepCreatorForm = ({ onSave, onCancel }) => {
	const [order, setOrder] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [elementId, setElementId] = useState('');
	const [imgChecked, setImgChecked] = useState(false);
	const [imgWidth, setImgWidth] = useState(100);
	const [imgHeight, setImgHeight] = useState(100);
	const [imageUrl, setImageUrl] = useState('');

	const handleSave = () => {
		const formData = {
			order,
			title,
			description,
			elementId,
			imgChecked,
			imgWidth,
			imgHeight,
			imageUrl,
		};

		onSave(formData);

		// Очищаем все поля формы
		setOrder('');
		setTitle('');
		setDescription('');
		setElementId('');
		setImgChecked(false);
		setImgWidth(100);
		setImgHeight(100);
		setImageUrl('');
	};

	const handleCancel = () => {
		// Очищаем все поля формы
		setOrder('');
		setTitle('');
		setDescription('');
		setElementId('');
		setImgChecked(false);
		setImgWidth(100);
		setImgHeight(100);
		setImageUrl('');
		onCancel(); // Закрываем модальное окно после отмены
	};

	const handleImgCheckboxChange = async event => {
		const checked = event.target.checked;
		setImgChecked(checked);

		if (checked) {
			try {
				const response = await fetch('https://dog.ceo/api/breeds/image/random');
				const data = await response.json();
				if (data && data.message) {
					setImageUrl(data.message); // Устанавливаем URL изображения
				} else {
					setImageUrl(''); // Если URL нет, оставляем пустым
				}
			} catch (error) {
				console.error('Ошибка при получении изображения:', error);
				setImageUrl('');
			}
		} else {
			setImageUrl('');
		}
	};

	return (
		<form className={styles.formContainer}>
			<label>
				Order:
				<input
					type='number'
					min='0'
					value={order}
					onChange={e => setOrder(Math.max(0, e.target.value))}
					className={styles.input}
				/>
			</label>
			<label>
				Title:
				<input
					type='text'
					value={title}
					onChange={e => setTitle(e.target.value)}
					className={styles.input}
				/>
			</label>
			<label>
				Description:
				<textarea
					value={description}
					onChange={e => setDescription(e.target.value)}
					className={styles.textarea}
				/>
			</label>
			<label>
				Element ID:
				<input
					type='text'
					value={elementId}
					onChange={e => setElementId(e.target.value)}
					className={styles.input}
				/>
			</label>
			<label>
				Image:
				<input
					type='checkbox'
					checked={imgChecked}
					onChange={handleImgCheckboxChange}
				/>
				{imgChecked && (
					<div className={styles.imgSizeControls}>
						<label>
							Width:
							<input
								type='number'
								min='1'
								value={imgWidth}
								onChange={e => setImgWidth(Math.max(1, e.target.value))}
								className={styles.input}
							/>
						</label>
						<label>
							Height:
							<input
								type='number'
								min='1'
								value={imgHeight}
								onChange={e => setImgHeight(Math.max(1, e.target.value))}
								className={styles.input}
							/>
						</label>
						{/* Предварительный просмотр изображения, если URL загружен */}
						{imageUrl && (
							<div className={styles.imagePreview}>
								<img
									src={imageUrl}
									alt='Предварительный просмотр'
									width={imgWidth}
									height={imgHeight}
								/>
							</div>
						)}
					</div>
				)}
			</label>
			<div className={styles.buttons}>
				<button
					type='button'
					className={styles.cancelBtn}
					onClick={handleCancel}
				>
					Cancel
				</button>
				<button type='button' className={styles.saveBtn} onClick={handleSave}>
					Save
				</button>
			</div>
		</form>
	);
};

export default StepCreatorForm;
