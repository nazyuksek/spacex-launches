import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./LaunchCard.module.scss";

export interface LaunchCardProps {
  label?: string;
  image: string;
  name: string;
  date: string;
}

const LaunchCard = ({ label, name, image, date }: LaunchCardProps) => {
  return (
    <div className={styles.LaunchCard}>
      <img src={image} alt="img" className={styles.image} />
      <div className={styles.right}>
        <div className={styles.info}>
          <span className={styles.name}>{name}</span>
          <span className={styles.date}>{date}</span>
        </div>
        <div className={styles.learnButton}>Learn More</div>
      </div>
    </div>
  );
};

export default LaunchCard;
