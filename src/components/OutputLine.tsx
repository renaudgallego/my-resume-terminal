import React from "react";

interface OutputLineProps {
  children: React.ReactNode;
  className?: string;
}

export const OutputLine: React.FC<OutputLineProps> = ({
  children,
  className = ""
}) => {
  return <div className={`output-line ${className}`.trim()}>{children}</div>;
};
