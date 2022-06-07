import React from "react";

type Props = {
  items: Array<{
    class: string;
    properties: string;
  }>;
};

export default function UtilityTable({ items }: Props) {
  return (
    <div className="my-1 max-h-22 overflowY-auto p-2 specialScroll">
      <div className="display-flex  justifyC-between justifyC-left flex-row ">
        <div className="w-50-100 border-b-2  border-t-0 border-r-0 border-l-0 border-solid  border-b-inner">
          <p className="font-bold text-inner">Classes</p>
        </div>
        <div className="w-50-100 border-b-2  border-t-0 border-r-0 border-l-0 border-solid  border-b-inner">
          <p className="font-bold text-inner">Properties</p>
        </div>
      </div>

      {items.map((item: any, index: any) => (
        <div key={index}>
          <div className="display-flex  justifyC-between justifyC-left flex-row">
            <div className="w-50-100">
              <p className="font-normal text-inner ">{item.class}</p>
            </div>
            <div className="w-50-100">
              <p className="text-inner font-normal">{item.properties}</p>
            </div>
          </div>
          <div className="w-100-100 h-0.1 opacity-20 bg-inner"></div>
        </div>
      ))}
    </div>
  );
}
