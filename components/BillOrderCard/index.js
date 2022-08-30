import React from "react";
import styles from "./index.module.scss";
import {AiFillCloseCircle} from "react-icons/ai";
import {HiMinusSm, HiOutlinePlusSm} from "react-icons/hi";
function BillOrderCard({title, quantity, size, price}) {
	return (
		<>
			<div
				className={`container ${styles.container} my-2 p-3 position-relative`}
			>
				<button
					className={`${styles.close} position-absolute m-0 d-flex row`}
					onClick={() => handleClose()}
				>
					<AiFillCloseCircle
						fontSize={20}
						color="#F44336"
						enableBackground={"white"}
						className={` p-0 m-0 `}
					/>
				</button>
				<div className={`${styles.title}`}>{title}</div>
				<div className="row m-0 p-0 pt-1">
					<div className="col-7 p-0 container">
						<div className="d-flex align-items-center">
							<div className={`${styles.size} me-2`}>{size}</div> -{" "}
							<div className={`${styles.price} ms-2`}> {price} EGP</div>
						</div>
					</div>
					<div className="col-5 text-end">
						<div
							className={`d-flex justify-content-end align-items-center`}
						>
							<button
								className={`${styles.quantityButtons} d-flex me-1`}
							>
								<HiMinusSm fontSize={14} color="#8193F7" />
							</button>
							{quantity}
							<button
								className={`${styles.quantityButtons} d-flex ms-1`}
							>
								<HiOutlinePlusSm fontSize={14} color="#8193F7" />
							</button>
						</div>
					</div>
				</div>
				
			</div>

		</>
	);
}

export default BillOrderCard;
