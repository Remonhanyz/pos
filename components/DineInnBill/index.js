import React from "react";
import BillOptions from "../BillOptions";
import styles from "./index.module.scss";

const DineInnBill = () => {
	return (
		<div className={`${styles.container} d-flex flex-column`}>
			<div className="row p-0 m-0">
				<div className={`col-6 ${styles.orderNumber} row p-0 m-0`}>
					<div className="col-12 p-0 m-0">Order Bill # 1</div>
					<div className={`${styles.orderDate} col-12 p-0 m-0`}>
						January 23, 2022 - 5:00pm
					</div>
				</div>
				<div className={`col-6 ${styles.orderType} text-end row p-0 m-0`}>
					<div className="dropdown col-8 p-0 m-0 align-items-center d-flex justify-content-center px-2">
						<a
							className={`btn btn-secondary dropdown-toggle  ${styles.dropdown_menu}`}
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<div className={`${styles.drop_down} text-start`}>
								Empty
							</div>
						</a>

						<ul className={`dropdown-menu w-100`}>
							<li>
								<a
									className={`dropdown-item ${styles.dropdown_item}`}
									href="#"
								>
									Action
								</a>
							</li>
							<li>
								<a
									className={`dropdown-item ${styles.dropdown_item}`}
									href="#"
								>
									Another action
								</a>
							</li>
							<li>
								<a
									className={`dropdown-item ${styles.dropdown_item}`}
									href="#"
								>
									Something else
								</a>
							</li>
						</ul>
					</div>

					<div className={`${styles.tableNumber} col-4 text-center m-0`}>
						Table 12
					</div>
				</div>
			</div>
			<div className="mt-auto">
				<BillOptions />
			</div>
		</div>
	);
};

export default DineInnBill;
