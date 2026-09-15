import Footer from "@/src/components/bannerHome/Footer";
import Header from "@/src/components/header/header";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { validateForm } from "@/src/shared/validation";

const LOGIN_SCHEMA = {
  username: { label: "Username", required: true },
  password: { label: "Password", required: true },
};

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginFieldErrors, setLoginFieldErrors] = useState({});

  // Hardcoded credentials
  const USERNAME = "";
  const PASSWORD = "";

  // ✅ Check localStorage on mount
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const fieldErrors = validateForm({ username, password }, LOGIN_SCHEMA);
    setLoginFieldErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      setLoginError("");
      return;
    }

    if (username === USERNAME && password === PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true"); // ✅ Save login
      setLoginError("");
    } else {
      setLoginError("❌ Invalid username or password");
    }
  };

  // ✅ Logout (optional)
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  // Fetch orders only if logged in
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchOrders = async () => {
      try {
        const res = await fetch("https://apis.pharmmaex.com/orders");
        // const res = await fetch("http://localhost:5001/orders");
        const data = await res.json();
        setOrders(data?.orders);
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [isAuthenticated]);

  // Update payment status in backend
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const res = await fetch(`https://apis.pharmmaex.com/change-status`, {
        // const res = await fetch(`http://localhost:5001/change-status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus, orderId: orderId }),
      });

      if (res.ok) {
        setOrders((prev) =>
          prev.map((order) =>
            order.orderId == orderId ? { ...order, status: newStatus } : order
          )
        );
        alert("✅ Updated Successfully!");
      } else {
        alert("❌ Failed to update status");
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  // 🚪 If not authenticated, show login form
  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <div className="container mt-5" style={{ marginBottom: "150px" }}>
          <h2 className="text-center mb-4">Login Required</h2>
          <form
            onSubmit={handleLogin}
            className="mx-auto"
            style={{ maxWidth: "400px" }}
          >
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                className={`form-control ${loginFieldErrors.username ? "is-invalid" : ""}`}
                placeholder="Enter username"
                aria-invalid={Boolean(loginFieldErrors.username)}
              />
              {loginFieldErrors.username && (
                <div className="invalid-feedback">{loginFieldErrors.username}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className={`form-control ${loginFieldErrors.password ? "is-invalid" : ""}`}
                placeholder="Enter password"
                aria-invalid={Boolean(loginFieldErrors.password)}
              />
              {loginFieldErrors.password && (
                <div className="invalid-feedback">{loginFieldErrors.password}</div>
              )}
            </div>

            {loginError && <p className="text-danger">{loginError}</p>}

            <button
              type="submit"
              className="btn  w-100"
              style={{ backgroundColor: "#00833d", color: "#ffffff" }}
            >
              Login
            </button>
          </form>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold">Orders</h2>
          <button onClick={handleLogout} className="btn btn-danger btn-sm">
            Logout
          </button>
        </div>

        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "300px" }}
          >
            <div className="spinner-border text-black" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover w-100">
              <thead className="table-dark">
                <tr>
                  <th>Order ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Amount</th>
                  <th>Cart</th>
                  <th>Created At</th>
                  <th>Payment verification</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order.orderId}</td>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.phone}</td>
                    <td>
                      {order.amount} {order.currency}
                    </td>
                    <td>
                      {order.cart &&
                        Object.entries(order.cart).map(([item, qty]) => (
                          <div key={item}>
                            {item}: {qty}
                          </div>
                        ))}
                    </td>
                    <td>{new Date(order.createdAt).toLocaleString()}</td>
                    <td>
                      <select
                        value={order.status}
                        onChange={(e) =>
                          handleStatusChange(order.orderId, e.target.value)
                        }
                        className="form-select form-select-sm"
                      >
                        <option value="pending">Pending</option>
                        <option value="verified">Verified</option>
                      </select>
                    </td>
                  </tr>
                ))}
                {orders.length === 0 && (
                  <tr>
                    <td className="text-center" colSpan="8">
                      No orders found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
