import logo from './logo.svg';
import './App.css';
import { Card, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="chrome://branding/content/firefox-wordmark.svg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
