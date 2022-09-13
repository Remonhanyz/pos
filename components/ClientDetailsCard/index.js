import React from 'react'
import Card from '../Card'
import styles from './index.module.scss'

const ClientDetailsCard = () => {
    return (
			<button className={`${styles.container}`}>
				<div
					className={`${styles.header} p-1 d-flex align-items-center justify-content-center`}
				>
					January 23, 2022 - 8:15pm
				</div>
				<div className="row p-0 m-0 text-start">
					<div className="col-6 row p-0 m-0">
						<div className={`col-12`}>Client Name:</div>
						<div className={`col-12 ${styles.styledText}`}>
							Ahmed Sami
						</div>
					</div>
					<div className="col-6 row p-0 m-0">
						<div className={`col-12`}>Members:</div>
						<div className={`col-12 ${styles.styledText}`}>8</div>
					</div>
				</div>
				<div className="row p-0 m-0 my-2 text-start">
					<div className={`col-12 mb-1`}>Tables</div>
					<div className={`py-1 ${styles.tableNumber}`}>23</div>
				</div>
			</button>
		);
}

export default ClientDetailsCard