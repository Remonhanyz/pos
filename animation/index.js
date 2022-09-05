export const rightToLeft = (delay, duration = 0.7) => {
	return {
		hidden: {
			opacity: 0,
			x: 300
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 150,
				delay: delay,
				duration: duration
			}
		}
	};
};

export const downToUp = {
	hidden: {opacity: 0, y: 100},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 200,
			delay: 0.2,
			duration: 0.7
		}
	},
	exit: {opacity: 0, y: 0}
};
export const pageOutMove = () => {
	return {
		hidden: {
			opacity: 0,
			x: 300,
			transition: {type: "linear", stiffness: 40, duration: 1}
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {type: "linear", stiffness: 40, duration: 1}
		},
		exit: {
			opacity: 0,
			x: "-100vw",
			transition: {type: "linear", delay: 0.1, duration: 1}
		}
	};
};
export const pageInMove = () => {
	return {
		hidden: {
			opacity: 1,
			x: "100vw",
			transition: {type: "linear", delay: 0, duration: 0.9}
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {type: "linear", delay: 0.1, duration: 0.9}
		},
		exit: {
			opacity: 0,
			x: "100vw",
			transition: {type: "linear", delay: 0, duration: 1}
		}
	};
};
