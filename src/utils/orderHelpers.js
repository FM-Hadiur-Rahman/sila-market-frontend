export function getEstimatedDelivery(orderType = "delivery") {
  return orderType === "pickup" ? "Ready in 15-20 min" : "25-35 min";
}

export function getInitialStatus(orderType = "delivery") {
  return orderType === "pickup" ? "Preparing" : "Received";
}

export function getStatusClass(status) {
  switch (status) {
    case "Received":
      return "bg-blue-50 text-blue-700";
    case "Preparing":
      return "bg-amber-50 text-amber-700";
    case "Ready for Pickup":
      return "bg-cyan-50 text-cyan-700";
    case "Out for Delivery":
      return "bg-purple-50 text-purple-700";
    case "Delivered":
    case "Completed":
      return "bg-green-50 text-green-700";
    case "Cancelled":
      return "bg-rose-50 text-rose-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

export function getProgressSteps(orderType = "delivery") {
  if (orderType === "pickup") {
    return ["Received", "Preparing", "Ready for Pickup", "Completed"];
  }

  return ["Received", "Preparing", "Out for Delivery", "Delivered"];
}

export function getStepIndex(status, orderType = "delivery") {
  const steps = getProgressSteps(orderType);
  return Math.max(steps.indexOf(status), 0);
}

export function formatOrderDate(dateString) {
  try {
    return new Date(dateString).toLocaleString();
  } catch {
    return dateString;
  }
}

export function getStatusTimeline(orderType = "delivery") {
  if (orderType === "pickup") {
    return ["Preparing", "Ready for Pickup", "Completed"];
  }

  return ["Preparing", "Out for Delivery", "Delivered"];
}

export function getNextStatus(currentStatus, orderType = "delivery") {
  const steps = getProgressSteps(orderType);
  const currentIndex = steps.indexOf(currentStatus);

  if (currentIndex === -1 || currentIndex >= steps.length - 1) {
    return currentStatus;
  }

  return steps[currentIndex + 1];
}

export function getCountdownMinutes(order) {
  if (!order?.createdAt) return null;

  const createdAt = new Date(order.createdAt).getTime();
  const now = Date.now();

  const totalMinutes = order.customer?.orderType === "pickup" ? 20 : 35;
  const endTime = createdAt + totalMinutes * 60 * 1000;
  const diffMs = endTime - now;

  if (diffMs <= 0) return 0;

  return Math.ceil(diffMs / (60 * 1000));
}
