import React, { useState } from "react";
import ClosingShift from "../../components/ClosingShift";

import ShiftStart from "../../components/ShiftStart";

const Welcome = () => {
  const [isShiftStarted, setIsShiftStarted] = useState(false);
  return (
    <>
      {!isShiftStarted && <ShiftStart setIsShiftStarted={setIsShiftStarted} />}
      {isShiftStarted && <ClosingShift />}
    </>
  );
};

export default Welcome;
