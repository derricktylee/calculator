import React from "react";
import data from "../assets/data";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Button from "react-bootstrap/Button";

export default function RegSaver() {
  return (
    <div className="container">
      <h3>Current Account</h3>
      {data[2].regSaverData.map((item) => {
        const {
          id,
          bank,
          interestRate,
          interest,
          limit,
          timeframe,
          img,
          requirement,
          withdrawals,
          link,
        } = item;
        return (
          <Container key={id}>
            <Card style={{ width: "100%" }} className="mt-3 mb-2">
              <CardHeader as={"h5"}>{bank}</CardHeader>
              <div className="row no-gutters h-100">
                <div className="col bank-img-container py-2 px-4">
                  <img src={img} className="card-img bank-logo" />
                </div>
                <div className="col-md-10">
                  <Card.Body>
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>Interest Rate</span>{" "}
                      {interestRate}%
                    </Card.Text>
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>
                        Interest Payout
                      </span>{" "}
                      {interest}%
                    </Card.Text>
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>Timeframe:</span>{" "}
                      {timeframe}
                    </Card.Text>
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>Deposit Limit:</span>{" "}
                      £{limit.min}-{limit.max} per month
                    </Card.Text>
                    <Card.Text>
                      <span style={{ fontWeight: "bold" }}>
                        Withdrawal Limit:
                      </span>{" "}
                      {withdrawals}
                    </Card.Text>
                    {requirement && (
                      <Card.Text>
                        <span style={{ fontWeight: "bold" }}>Requirement:</span>{" "}
                        {requirement}
                      </Card.Text>
                    )}
                    <Button
                      variant="secondary"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 fw-bold"
                    >
                      Link
                    </Button>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Container>
        );
      })}
    </div>
  );
}
