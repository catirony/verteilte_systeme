import { React, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

function SettingsForm() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="px-2">
      <h2>Einstellungen</h2>

      <Card>
        <Card.Body>
          <Card.Title>Nutzereinstellungen</Card.Title>
          <Card.Link href="#">Profil bearbeiten</Card.Link>
          <Card.Link href="#">Passwort ändern</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SettingsForm;
