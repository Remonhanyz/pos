import React from 'react'
import styles from './index.module.scss'

const Button = ({children, className , ...otherProps}) => {
	return (
		<button
			type="button"
			className={`btn ${styles.button} ${className} btn-primary`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button