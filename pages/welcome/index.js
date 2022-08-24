import Image from "next/image";
import React from "react";
import Card from "../../components/Card";
import styles from "./index.module.scss";
import hi from '../../public/images/hi.svg'

const Welcome = () => {
	return (
		<Card
			style={{width: "100%", height: "100%", padding: "10rem"}}
			margin="5rem"
		>
			<div className={`d-flex flex-wrap text-break `}>
				<div className={`d-flex flex-wrap text-break`}>
					Welcome Mr.Mohamed{" "}
					<div style={{marginTop: "-7px", marginLeft: "2rem"}}>
						<Image src={hi} alt="hi" width={26} />
					</div>
				</div>
				<div className={`d-flex flex-wrap text-break`}>

				Today
				</div>
			</div>
		</Card>
	);
};

export default Welcome;
