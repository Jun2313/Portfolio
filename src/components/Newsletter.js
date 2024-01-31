import { Alert , Row, Col} from "react-bootstrap";
import { useEffect, useState} from "react";
// import { clear } from "@testing-library/user-event/dist/clear";

export const Newsletter = ({ onValidated, status, message}) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indevOf("@") > -1 &&
    onValidated({
      EMAIL : email
    })
  }

  const clearFields  = () => {
    setEmail('');
  }


  return(
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter</h3>
            {status === 'sending' && <Alert>Subscribing...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="succes">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="submit">Submit</button>
              </div>
            </form> 
          </Col>
        </Row>
      </div>
    </Col>
  )
}