import { getProgressSteps, getStepIndex } from "../../utils/orderHelpers";

export default function OrderProgress({ status, orderType = "delivery" }) {
  const steps = getProgressSteps(orderType);
  const activeIndex = getStepIndex(status, orderType);

  return (
    <div className="mt-6">
      <div className="relative grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => {
          const isActive = index <= activeIndex;
          const isCurrent = index === activeIndex;

          return (
            <div key={step} className="relative flex items-center gap-3">
              <div
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  isActive
                    ? "bg-cyan-600 text-white"
                    : "bg-slate-100 text-slate-500"
                } ${isCurrent ? "ring-4 ring-cyan-100" : ""}`}
              >
                {index + 1}
              </div>

              <div>
                <p
                  className={`text-sm font-semibold ${
                    isActive ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  {step}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute left-10 top-5 hidden h-[2px] w-[calc(100%-1rem)] md:block">
                  <div
                    className={`h-full w-full ${
                      index < activeIndex ? "bg-cyan-600" : "bg-slate-200"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
