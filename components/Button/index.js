import React from 'react'
import styles from './index.module.scss'

const Button = ({children, style, onPress}) => {
  return (
		<button
			type="button"
			style={style}
			className={`btn ${styles.button} btn-primary`}
			onPress={onPress}
		>
			{children}
		</button>
  );
}

export default Button