export function getOrders() {
  try {
    return JSON.parse(localStorage.getItem("sila-orders") || "[]");
  } catch {
    return [];
  }
}

export function saveOrders(orders) {
  localStorage.setItem("sila-orders", JSON.stringify(orders));
}

export function addOrder(order) {
  const existingOrders = getOrders();
  const updatedOrders = [order, ...existingOrders];
  saveOrders(updatedOrders);
  localStorage.setItem("sila-last-order", JSON.stringify(order));
  return updatedOrders;
}

export function getLastOrder() {
  try {
    return JSON.parse(localStorage.getItem("sila-last-order") || "null");
  } catch {
    return null;
  }
}

export function getOrderByNumber(orderNumber) {
  const orders = getOrders();
  return orders.find((order) => order.orderNumber === orderNumber) || null;
}

export function updateOrderByNumber(orderNumber, updates) {
  const orders = getOrders();

  const updatedOrders = orders.map((order) =>
    order.orderNumber === orderNumber ? { ...order, ...updates } : order,
  );

  saveOrders(updatedOrders);

  const updatedOrder =
    updatedOrders.find((order) => order.orderNumber === orderNumber) || null;

  const lastOrder = getLastOrder();
  if (lastOrder?.orderNumber === orderNumber && updatedOrder) {
    localStorage.setItem("sila-last-order", JSON.stringify(updatedOrder));
  }

  return updatedOrder;
}
