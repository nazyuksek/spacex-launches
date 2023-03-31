import { LaunchesContext } from "@/context/LaunchesContext";
import { useContext } from "react";

export default function useLaunches() {
  return useContext(LaunchesContext);
}
