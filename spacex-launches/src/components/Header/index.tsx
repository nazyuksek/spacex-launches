import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../assets/png/logo.png";
import Image from "next/image";

export interface HeaderProps {
  label?: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className={styles.Header}>
      <div className={styles.logoContainer}>
        <Image src={Logo} alt="logo" className={styles.logo} />
      </div>
      <span className={styles.launchesText}>SpaceX Launches</span>
    </div>
  );
};

export default Header;
