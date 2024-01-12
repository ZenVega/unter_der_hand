import React from "react";

interface props {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: props) => {
  return <div className="max-w-5xl m-auto">{children}</div>;
};

export default PageWrapper;
