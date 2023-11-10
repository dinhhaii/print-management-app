import React from "react";

type CardProps = {};

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
      <div className="flex-auto p-4">
        <div className="flex flex-row -mx-3">
          <div className="flex-none w-2/3 max-w-full px-3">
            <div>
              <p className="mb-0 font-sans font-semibold leading-normal uppercase text-sm">
                Today's Money
              </p>
              <h5 className="mb-2 font-bold dark:text-white">$53,000</h5>
              <p className="mb-0 dark:text-white dark:opacity-60">
                <span className="font-bold leading-normal text-sm text-emerald-500">
                  +55%
                </span>
                since yesterday
              </p>
            </div>
          </div>
          <div className="px-3 text-right basis-1/3">
            <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
              <i className="fa fa-coins text-lg relative top-3.5 text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
