import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";
import { getCountdownMinutes } from "../../utils/orderHelpers";

export default function DeliveryCountdown({ order }) {
  const [minutesLeft, setMinutesLeft] = useState(getCountdownMinutes(order));

  useEffect(() => {
    setMinutesLeft(getCountdownMinutes(order));

    const interval = setInterval(() => {
      setMinutesLeft(getCountdownMinutes(order));
    }, 1000 * 30);

    return () => clearInterval(interval);
  }, [order]);

  if (minutesLeft === null) return null;

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
      <Clock3 size={16} />
      {minutesLeft > 0 ? `${minutesLeft} min left` : "Arriving soon"}
    </div>
  );
}
