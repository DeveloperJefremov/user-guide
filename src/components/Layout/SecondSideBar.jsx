// src/components/SecondSideBar.jsx

import React from 'react';
import styles from './SecondSideBar.module.css'; // Импортируем стили как модуль

const SecondSideBar = () => {
	// Массив элементов с уникальными ID и типами
	const elements = [
		{
			id: 'btn-5',
			type: 'button',
			label: 'Button 5',
			onClick: () => alert('Button 5 clicked'),
		},
		{
			id: 'link-4',
			type: 'link',
			label: 'Link 4',
			href: '#',
			target: '_blank',
		},
		{
			id: 'icon-4',
			type: 'icon',
			icon: '📅',
			label: 'Calendar',
			onClick: () => alert('Calendar clicked'),
		},
		{
			id: 'btn-6',
			type: 'button',
			label: 'Button 6',
			onClick: () => alert('Button 6 clicked'),
		},
		{ id: 'link-5', type: 'link', label: 'Link 5', href: '#', target: '_self' },
		{
			id: 'icon-5',
			type: 'icon',
			icon: '📋',
			label: 'Checklist',
			onClick: () => alert('Checklist clicked'),
		},
		{
			id: 'btn-7',
			type: 'button',
			label: 'Button 7',
			onClick: () => alert('Button 7 clicked'),
		},
		{
			id: 'link-6',
			type: 'link',
			label: 'Link 6',
			href: '#',
			target: '_blank',
		},
		{
			id: 'icon-6',
			type: 'icon',
			icon: '📞',
			label: 'Contact',
			onClick: () => alert('Contact clicked'),
		},
		{
			id: 'btn-8',
			type: 'button',
			label: 'Button 8',
			onClick: () => alert('Button 8 clicked'),
		},
	];

	return (
		<div className={styles['second-sidebar']}>
			<h2>2 SideBar</h2>
			<div className={styles['element-container']}>
				{elements.map(element => (
					<div key={element.id} className={styles['sidebar-element']}>
						{element.type === 'button' && (
							<button
								id={element.id}
								className={styles['sidebar-button']}
								onClick={element.onClick}
							>
								{element.label}
							</button>
						)}
						{element.type === 'link' && (
							<a
								id={element.id}
								className={styles['sidebar-link']}
								href={element.href}
								target={element.target}
								rel='noopener noreferrer'
							>
								{element.label}
							</a>
						)}
						{element.type === 'icon' && (
							<div
								id={element.id}
								className={styles['sidebar-icon']}
								onClick={element.onClick}
							>
								<span className={styles['icon']}>{element.icon}</span>
								{element.label}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default SecondSideBar;
