import './../style/App.css';
import Foodcard from './Foodcard';
import HomeNav from './HomeNav';
import mashroom from "./../images/mashroom.jpeg";
import paneerPizza from "./../images/paneer-pizza.jpeg";
import margherita from "./../images/margherita.jpeg";
import farmhouse from "./../images/farmhouse.jpeg";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Hr from "./../components/Hr";

function App() {
  return (
    <div className="Container">
      <div className="header">
        <HomeNav/>
      </div>
      <div className="pizza-container">
        <div className="veg-pizza-text">
          <b>Veg Pizza</b>
        </div>
        <Hr />
          <div className="veg-pizza">
            <Foodcard name = "Peppy Paneer" descrip="Perfect blend paneer, capsicum and red paprika to give a blast of flavours" src={paneerPizza}/>
            <Foodcard name = "Margherita" descrip="Classic delight with loaded mozzarella cheese " src={margherita}/>
            <Foodcard name = "Farm House" descrip="Delightful combo of grilled mushroom & veggies" src={farmhouse}/>
            <Foodcard name = "Spicey Paradise" descrip="A spicey delicacy made with mashroom and spicey bell-peppers" src={mashroom}/>
            <Foodcard name = "Peppy Paneer" descrip="Perfect blend paneer, capsicum and red paprika to give a blast of flavours" src={paneerPizza}/>
            <Foodcard name = "Margherita" descrip="Classic delight with loaded mozzarella cheese " src={margherita}/>
          </div>
        </div>
        <div className="pizza-container">
        <div className="veg-pizza-text">
          <b>Non-Veg Pizza</b>
        </div>
        <Hr />
          <div className="veg-pizza">
            <Foodcard name = "Chicken bonanza" descrip="Perfect blend paneer, capsicum and red paprika to give a blast of flavours" src={paneerPizza}/>
            <Foodcard name = "Chicken Margherita" descrip="Classic delight with loaded mozzarella cheese " src={margherita}/>
            <Foodcard name = "Non-veg Loaded" descrip="Delightful combo of grilled mushroom & veggies" src={farmhouse}/>
            <Foodcard name = "Spicey Paradise" descrip="A spicey delicacy made with mashroom and spicey bell-peppers" src={mashroom}/>
            <Foodcard name = "Peppy Pizza" descrip="Perfect blend paneer, capsicum and red paprika to give a blast of flavours" src={paneerPizza}/>
            <Foodcard name = "Margherita" descrip="Classic delight with loaded mozzarella cheese " src={margherita}/>
            <Foodcard name = "Farm House" descrip="Delightful combo of grilled mushroom & veggies" src={farmhouse}/>
          </div>
        </div>
    </div>
  );
}

export default App;
