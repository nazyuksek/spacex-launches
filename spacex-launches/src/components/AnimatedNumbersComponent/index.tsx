import Header from "@/components/Header";
import SearchComponent from "@/components/SearchComponent";
import React, { useEffect, useRef, useState } from "react";
import styles from "./AnimatedNumbersComponent.module.scss";
import AnimatedNumber from "animated-number-react";

export interface AnimatedNumbersComponentProps {
  label?: string;
}

const AnimatedNumbersComponent = ({ label }: AnimatedNumbersComponentProps) => {
  const duration = 3000;
  const formatValue = (value: number) => value.toFixed(0);
  const animationRef = useRef(null);
  const [top, setTop] = useState<number>(0);

  return (
    <div className={styles.Animated}>
      <div className={styles.numbersAndText}>
        <AnimatedNumber
          duration={duration}
          value={218}
          formatValue={formatValue}
          delay={1000}
        />
        <span className={styles.subtitle}>Total Launches</span>
      </div>
      <div className={styles.numbersAndText}>
        <AnimatedNumber
          duration={duration}
          value={218}
          formatValue={formatValue}
          delay={1000}
          ref={animationRef}
        />
        <span className={styles.subtitle}>Upcoming Launches</span>
      </div>
    </div>
  );
};

export default AnimatedNumbersComponent;
