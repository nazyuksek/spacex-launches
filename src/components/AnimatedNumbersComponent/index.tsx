import Header from "@/components/Header";
import SearchComponent from "@/components/SearchComponent";
import React, { useEffect, useRef, useState } from "react";
import styles from "./AnimatedNumbersComponent.module.scss";
import AnimatedNumber from "animated-number-react";
import useLaunches from "@/hooks/useLaunches";

export interface AnimatedNumbersComponentProps {
  label?: string;
}

const AnimatedNumbersComponent = ({ label }: AnimatedNumbersComponentProps) => {
  const duration = 3000;
  const formatValue = (value: number) => value.toFixed(0);
  const animationRef = useRef(null);
  const [top, setTop] = useState<number>(0);
  const { launches } = useLaunches();

  return (
    <div className={styles.Animated}>
      <div className={styles.numbersAndText}>
        <AnimatedNumber
          duration={duration}
          value={launches.length}
          formatValue={formatValue}
          delay={1000}
        />
        <span className={styles.subtitle}>Total Launches</span>
      </div>
      <div className={styles.numbersAndText}>
        <AnimatedNumber
          duration={duration}
          value={launches.filter((el) => el.upcoming === true).length}
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
