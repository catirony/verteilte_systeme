import { React, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

function GroupAdministration() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="px-2">
      <h2>Gruppen verwalten</h2>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>-Name der Gruppe-</Card.Title>
          <Card.Link href="/devGroupSettings">Gruppe bearbeiten</Card.Link>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>-Name der Gruppe-</Card.Title>
          <Card.Link href="/devGroupSettings">Gruppe bearbeiten</Card.Link>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>-Name der Gruppe-</Card.Title>
          <Card.Link href="/devGroupSettings">Gruppe bearbeiten</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GroupAdministration;
