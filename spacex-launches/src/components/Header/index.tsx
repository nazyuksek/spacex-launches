import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../assets/png/logo.png";
import Image from "next/image";
import Link from "next/link";

export interface HeaderProps {
  label?: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className={styles.Header}>
      <Link href="/" className={styles.logoContainer}>
        <Image src={Logo} alt="logo" className={styles.logo} />
      </Link>
      <span className={styles.launchesText}>SpaceX Launches</span>
    </div>
  );
};

export default Header;
