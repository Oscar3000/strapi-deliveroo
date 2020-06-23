import React from "react";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardImg,
  CardSubtitle,
} from "reactstrap";
import { CardText, CardTitle, Col, Row } from "reactstrap";

const Restaurant = ({ res }) => {
  return (
    <Card style={{ width: "30%", margin: "0 10px" }} className="h-100">
      {res.image && (
        <CardImg
          top={true}
          style={{ height: 250 }}
          src={`http://localhost:1337${res.image.url}`}
        />
      )}
      <CardBody>
        <CardTitle>{res.name}</CardTitle>
        <CardText>{res.description}</CardText>
      </CardBody>
      <div className="card-footer">
        <Link as={`/restaurants/${res.id}`} href={`/restaurants?id=${res.id}`}>
          <a className="btn btn-primary">View</a>
        </Link>
      </div>
    </Card>
  );
};

export default Restaurant;
