import React from 'react'
import Card from '../Card'
import styles from './index.module.scss'
import {FiSearch} from 'react-icons/fi'
const Search = () => {
  return (
		<div className={`${styles.container} mb-2`}>
			<div className={`input-group text-start`}>
				<input
					className={`${styles.text} ps-4 form-control`}
					placeholder="Search"
					aria-label="Search"
					aria-describedby="basic-addon1"
				/>
				<span className={`input-group-text ${styles.icon}`}>
					<FiSearch color="#8193F7" />
				</span>
			</div>
		</div>
  );
}

export default Search