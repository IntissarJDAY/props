import './App.css';
import Profile from './profile/Profile'

let arr=[
  {text: "Intissar JDAY"},
  {text:"Everything you can imagine is real." },
  {text : "Student"},
  {img : "/me.jpg"}
];
let image="/me.jpg";
const handleName=()=>alert("Jday Intissar") ;

function App() {
  return (
    <div style={{textAlign:'center', paddingTop:30, textShadow:'1px 1px 2px pink'}} >
     <Profile arr={arr} handleName ={handleName} image={image} />
    </div>
  );
}
export default App;
