import React from "react";

type Props = {
  items: Array<{
    class: string;
    propertie1: string;
    propertie2: string;
  }>;
};

export default function UtilityTable({ items }: Props) {
  return (
    <div className="my-1 max-h-22 overflowY-auto specialScroll">
      <div className="display-flex  justifyC-between justifyC-left flex-row ">
        <div className="w-50-100">
          <p className="font-bold text-inner">Classes</p>
        </div>
        <div className="w-50-100">
          <p className="text-inner font-bold">Properties</p>
        </div>
      </div>
      <div className="h-0.1 w-auto bg-inner"></div>

      {items.map((item: any, index: any) => (
        <div>
          <div className="display-flex  justifyC-between justifyC-left flex-row">
            <div className="w-50-100">
              <p className="font-normal text-inner">{item.class}</p>
            </div>
            <div className="w-50-100">
              <p className="text-inner font-normal">{item.propertie1}</p>
              <p className="text-inner whitespace-pre-wrap">
                {item.propertie2}
              </p>
            </div>
          </div>
          <div className="w-100-100 h-0.1 bg-inner opacity-20"></div>
        </div>
      ))}
    </div>
  );
}
