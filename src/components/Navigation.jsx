import * as React from "react";
import FixedBottomNavigation from "./FixedBottomNavigation";
import VerticalTabs from "./DesktopNavigation";

export default function Navigation(props) {
  const { mobile } = props;
  console.log(mobile);
  return <>{mobile && <FixedBottomNavigation />}</>;
}
