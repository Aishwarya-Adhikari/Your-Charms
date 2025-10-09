import { Link } from "react-router-dom"
import '../css/Payment.css';

const Success = () => {
  return (
    <div className="payment-status-container">
      <div className="payment-status-card success">
        <div className="status-icon">✓</div>
        <h1>Payment Successful!</h1>
        <p>Thank you for your purchase. Your order has been confirmed.</p>
        <p className="order-info">You will receive an email confirmation shortly.</p>
        <div className="action-buttons">
          <Link to="/" className="btn-primary">
            Continue Shopping
          </Link>
          <Link to="/explore-items" className="btn-secondary">
            View Products
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Success;
