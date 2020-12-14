import PropTypes from 'prop-types'
const Profile=(props) => {
    const{handleName,arr,image}=props;
 return (
<div>
    <button onClick={handleName} style={{backgroundColor:'lightgreen',borderBlockColor:'lightgreen'}}  >Show alert</button>
   { arr.map( (el,i)=>(
               <div key={i}>
            <p> {el.text}  </p>
            </div>)
       )  
   } 
   <img src={image} width="300" alt="image1"/>
</div>
 );
};
Profile.defaultProps={
    handleName:"alert",
    arr:[{text:"hi!"}],
    image:"/me.jpg"
 };
 Profile.propTypes={
    handleName:PropTypes.func.isRequired,
    arr:PropTypes.array.isRequired
 };
export default Profile;  