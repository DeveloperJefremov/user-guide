import React from 'react';
import Card from '../UI/Card';
import styles from './StepItemList.module.css'; // Импортируем стили для StepItemList
import StepItem from './StepsItem/StepItem'; // Импортируем компонент StepItem

const StepItemList = ({ steps, onEditStep, onDeleteStep }) => {
	return (
		<>
			{steps.length > 0 && (
				<Card className={styles.stepsContainer}>
					{steps.map(step => (
						<StepItem
							key={step.id}
							stepData={step}
							onEditStep={onEditStep}
							onDelete={onDeleteStep}
						/>
					))}
				</Card>
			)}
		</>
	);
};

export default StepItemList;
