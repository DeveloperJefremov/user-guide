// src/components/Step.jsx

import React, { useEffect, useState } from 'react';
import StepFooter from './StepFooter';
import StepHeader from './StepHeader';
import styles from './StepItem.module.css'; // Импортируем стили как модуль

const Step = ({ stepData, onEditStep, onDelete }) => {
	const [isContentVisible, setIsContentVisible] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editedStepData, setEditedStepData] = useState(stepData);

	const {
		id,
		order,
		title,
		description,
		elementId,
		imgChecked,
		imgWidth,
		imgHeight,
		imageUrl,
	} = editedStepData;

	// Устанавливаем состояние imgChecked в зависимости от текущего состояния данных
	useEffect(() => {
		setEditedStepData(prevData => ({
			...prevData,
			imgChecked: imageUrl ? imgChecked : false, // Если нет изображения, сбрасываем состояние чекбокса
		}));
	}, [imageUrl, imgChecked]);

	const toggleContentVisibility = () => {
		if (!isEditing) {
			setIsContentVisible(!isContentVisible);
		}
	};

	const handleEditClick = () => {
		// Раскрываем шаг, если он свернут
		if (!isContentVisible) {
			setIsContentVisible(true);
		}
		setIsEditing(true);
	};

	const handleSaveClick = () => {
		onEditStep(editedStepData);
		setIsEditing(false);
	};

	const handleCancelClick = () => {
		setEditedStepData(stepData); // Отменяем изменения
		setIsEditing(false); // Выходим из режима редактирования
	};

	const handleInputChange = e => {
		const { name, value } = e.target;
		setEditedStepData(prevData => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleCheckboxChange = () => {
		setEditedStepData(prevData => ({
			...prevData,
			imgChecked: !prevData.imgChecked,
		}));
	};

	return (
		<div className={styles.step}>
			<StepHeader
				order={`Order ${order}`}
				title={
					isEditing ? (
						<input
							type='text'
							name='title'
							value={editedStepData.title}
							onChange={handleInputChange}
							className={styles.input}
						/>
					) : (
						title
					)
				}
				onEdit={handleEditClick}
				onDelete={() => onDelete(id)}
				isContentVisible={isContentVisible}
				toggleContentVisibility={toggleContentVisibility}
			/>
			{isContentVisible && (
				<>
					<section className={styles.stepContent}>
						<div className={styles.stepDetails}>
							{isEditing ? (
								<>
									<label>
										Description:
										<textarea
											name='description'
											value={editedStepData.description}
											onChange={handleInputChange}
											className={styles.textarea}
										/>
									</label>
									<label>
										Element ID:
										<input
											type='text'
											name='elementId'
											value={editedStepData.elementId}
											onChange={handleInputChange}
											className={styles.input}
										/>
									</label>
									<label>
										Image:
										<input
											type='checkbox'
											checked={editedStepData.imgChecked}
											onChange={handleCheckboxChange}
										/>
									</label>
									{editedStepData.imgChecked && (
										<>
											<label>
												Image Width:
												<input
													type='number'
													name='imgWidth'
													min='1'
													value={editedStepData.imgWidth}
													onChange={handleInputChange}
													className={styles.input}
												/>
											</label>
											<label>
												Image Height:
												<input
													type='number'
													name='imgHeight'
													min='1'
													value={editedStepData.imgHeight}
													onChange={handleInputChange}
													className={styles.input}
												/>
											</label>
											{editedStepData.imageUrl && (
												<img
													className={styles.stepImagePreview}
													src={editedStepData.imageUrl}
													alt={editedStepData.title}
													width={editedStepData.imgWidth}
													height={editedStepData.imgHeight}
												/>
											)}
										</>
									)}
								</>
							) : (
								<>
									<p>Description: {description}</p>
									<p>Element ID: {elementId}</p>
									{imgChecked && imageUrl && (
										<img
											className={styles.stepImagePreview}
											src={imageUrl}
											alt={title}
											width={imgWidth}
											height={imgHeight}
										/>
									)}
								</>
							)}
						</div>
					</section>
					<StepFooter
						onSave={handleSaveClick}
						onCancel={handleCancelClick}
						isEditing={isEditing}
					/>
				</>
			)}
		</div>
	);
};

export default Step;
