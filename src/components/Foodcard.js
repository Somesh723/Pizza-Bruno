import Counter from "./Counter";
import Card from 'react-bootstrap/Card';
import "./../style/Foodcard.css";


function Foodcard(props) {
  return (
    <>
    <Card className = "card">
      <Card.Img variant="top" src={props.src} className="cardImg"/>
      <Card.Body className="cardBody"> 
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.descrip}</Card.Text>
        <div className="priceAndCount">
          <div className="price"><b>₹</b>300</div>
          <Counter />
        </div>
      </Card.Body>
    </Card>
    </>
    );
}
export default Foodcard;