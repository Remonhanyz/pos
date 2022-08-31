import React from "react";
import styles from "./index.module.scss";
import { HiHome, HiOutlineClipboardList } from "react-icons/hi";
import { IoLogOutOutline, IoFastFoodOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className={`${styles.container} container text-center`}>
      <div className={`h-100 d-flex flex-column align-items-start`}>
        <div
          role="button"
          className={`${styles.logo} d-flex flex-column align-items-center w-100`}
          onClick={() => {
            router.push("/");
          }}
        >
          LOGO
        </div>
        <div
          role="button"
          className={`${styles.item} ${
            router.pathname === "/" ? styles.active : ""
          } d-flex flex-column align-items-center w-100`}
          onClick={() => {
            router.push("/");
          }}
        >
          <HiHome size={25} /> Home
        </div>
        <div
          role="button"
          className={`${styles.item} ${
            router.pathname === "/take-away" ? styles.active : ""
          } d-flex flex-column align-items-center w-100`}
          onClick={() => {
            router.push("/take-away");
          }}
        >
          {/* <FontAwesomeIcon icon="fa-solid fa-bell-concierge" /> */}
          <IoFastFoodOutline size={25} />
          Menu
        </div>
        <div
          role="button"
          className={`${styles.item} ${
            router.pathname === "/orders" ? styles.active : ""
          } d-flex flex-column align-items-center w-100`}
          onClick={() => {
            router.push("/orders");
          }}
        >
          <HiOutlineClipboardList size={25} />
          Orders
        </div>
        <div
          role="button"
          className={`${styles.item} ${
            router.pathname === "/settings" ? styles.active : ""
          } d-flex flex-column align-items-center w-100`}
          onClick={() => {
            router.push("/settings");
          }}
        >
          <FiSettings size={18} />
          Settings
        </div>
        <div
          role="button"
          className={`${styles.logout} align-self-end d-flex flex-column justify-content-center align-items-center mt-auto w-100`}
        >
          <div style={{ paddingLeft: 7 }}>
            <IoLogOutOutline size={32} />
          </div>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Navbar;
