import React from "react";

type Props = {
  command?: string;
  children: React.ReactNode;
};

export default function codeContainer({ command, children }: Props) {
  return (
    <div className="w-90-100 bg-akram font-bold text-base p-2 rounded-lg ls-wider">
      {children}
    </div>
  );
}
