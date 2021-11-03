import * as React from "react";
import FixedBottomNavigation from "./FixedBottomNavigation";

export default function Navigation(props) {
  const { mobile } = props;

  return <>{mobile && <FixedBottomNavigation />}</>;
}
