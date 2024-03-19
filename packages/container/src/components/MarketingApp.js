import React, { useEffect, useRef } from "react";
import { mount } from "MarketingMFE/Marketing";

const MarketingApp = () => {
  const ref = useRef();
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref}></div>;
};

export default MarketingApp;
