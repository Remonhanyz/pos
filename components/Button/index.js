import React from 'react'
import styles from './index.module.scss'

const Button = ({children, style, onClick, className}) => {
	return (
		<button
			type="button"
			style={style}
			className={`btn ${styles.button} ${className} btn-primary`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button