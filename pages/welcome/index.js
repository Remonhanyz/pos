import Image from "next/image";
import React from "react";
import Card from "../../components/Card";
import styles from "./index.module.scss";
import hi from "../../public/images/hi.svg";
import circle from "../../public/images/welcome_circle.svg";
import Button from "../../components/Button";

const Welcome = () => {
	return (
		<Card
			style={{width: "100%", height: "100%"}}
			className={`${styles.card} align-items-center justify-content-center d-flex`}
			margin="5rem"
		>
			<div className={`d-flex flex-wrap text-break row`}>
				<div
					className={`d-flex flex-wrap text-break flex-column col-6 align-items-center justify-content-center `}
				>
					<div>
						<div
							className={`d-flex flex-wrap text-break  ${styles.title}`}
						>
							Welcome Mr. Mohamed{" "}
							<div style={{marginLeft: "3.2rem"}}>
								<Image src={hi} alt="hi" width={29} />
							</div>
						</div>
						<div
							className={`d-flex flex-wrap text-break ${styles.description}`}
						>
							Today is Sunday, May 15, 2022, let's start work. <br />
							Have a good day
						</div>
						<Button text="start" style={{marginTop: 20, width: 130}}>
							Start
						</Button>
					</div>
				</div>
				<div
					className={`d-flex col-6 px-0 align-items-center justify-content-center`}
				>
					<div
						className={`d-flex flex-wrap position-relative px-0 w-100 h-100  ${styles.circle}`}
					>
						<div
							className={`d-flex col-6 position-absolute align-items-center justify-content-center w-100 h-100 ${styles.time}`}
						>
							00 : 00
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default Welcome;
