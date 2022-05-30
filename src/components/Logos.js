import React from "react";

import styles from "./Logos.module.css";

import Sumsung from "../images/samsung.jpg";
import Xiaomi from "../images/xiaomi.png";
import Apple from "../images/apple.jpg";

function Logos() {
	return (
		<div className={styles.container}>
			<h3>Who Support Us?</h3>
			<div>
				<img src={Apple} alt='logo' />
				<img src={Sumsung} alt='logo' />
				<img src={Xiaomi} alt='logo' />
			</div>
		</div>
	);
}

export default Logos;
