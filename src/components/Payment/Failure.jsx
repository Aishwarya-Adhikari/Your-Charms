import { Link } from "react-router-dom"
import '../css/Payment.css';
const Failure = () => {
  return (
    <div className="payment-status-container">
      <div className="payment-status-card failure">
        <div className="status-icon">✕</div>
        <h1>Payment Failed</h1>
        <p>We couldn't process your payment. Please try again.</p>
        <p className="error-info">If the problem persists, please contact our support team.</p>
        <div className="action-buttons">
          <Link to="/cart" className="btn-primary">
            Return to Cart
          </Link>
          <Link to="/payment" className="btn-secondary">
            Try Again
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Failure
