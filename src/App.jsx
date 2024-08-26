import React, { useState } from 'react';
import styles from './App.module.css';
import FirstSideBar from './components/Layout/FirstSideBar';
import SecondSideBar from './components/Layout/SecondSideBar';
import UserGuideFooter from './components/Layout/UserGuideFooter';
import UserGuideHeader from './components/Layout/UserGuideHeader';
import StepCreator from './components/Steps/StepCreator';
import StepItemList from './components/Steps/StepItemList'; // Импортируем новый компонент
import StepsMockData from './data/StepsMockData';


function App() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [steps, setSteps] = useState(StepsMockData);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	const handleSaveStep = newStep => {
		setSteps(prevSteps => [...prevSteps, newStep]);
	};

	const handleEditStep = updatedStep => {
		setSteps(prevSteps =>
			prevSteps.map(step => (step.id === updatedStep.id ? updatedStep : step))
		);
	};

	const handleDeleteStep = stepId => {
		setSteps(prevSteps => prevSteps.filter(step => step.id !== stepId));
	};

	return (
		<div className={styles.App}>
			<StepCreator
				isOpen={isModalOpen}
				onClose={closeModal}
				onSave={handleSaveStep}
			/>
			<FirstSideBar />
			<SecondSideBar />
			<main>
				<UserGuideHeader
					title='User Guide'
					description='User guides are a type of technical documentation that enables customers and end-users with step-by-step instructions on how to execute a task or process.'
				/>
				<section>
					<div className={styles.contentContainer}>
						<button className={styles.createStepBtn} onClick={openModal}>
							Create Step
						</button>
					</div>
				</section>

				<section>
					<div>
						<h2>Step Guide</h2>

						{/* Используем StepItemList вместо отображения StepItem напрямую */}
						<StepItemList
							steps={steps}
							onEditStep={handleEditStep}
							onDeleteStep={handleDeleteStep}
						/>
					</div>
				</section>
			</main>
			<UserGuideFooter className={styles.footerContainer}>
				<p>
					Contact us at:{' '}
					<a href='mailto:support@example.com'>support@example.com</a>
				</p>
				<p>&copy; 2024 Your Company. All rights reserved.</p>
			</UserGuideFooter>
		</div>
	);
}

export default App;
