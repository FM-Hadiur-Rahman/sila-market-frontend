import { getStatusClass } from "../../utils/orderHelpers";

export default function OrderStatusBadge({ status }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(status)}`}
    >
      {status}
    </span>
  );
}
