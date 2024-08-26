import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = ({ onClick }) => {
	// Закрываем модальное окно при клике на бэкдроп
	return <div className={styles.backdrop} onClick={onClick}></div>;
};

const ModalWindow = props => {
	return (
		<div className={styles.modal} onClick={e => e.stopPropagation()}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlays');

const Modal = ({ onClick, children }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={onClick} />, // Здесь мы правильно передаем onClick
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalWindow>{children}</ModalWindow>,
				portalElement
			)}
		</>
	);
};

export default Modal;
