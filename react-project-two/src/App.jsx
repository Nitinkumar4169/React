import UserCard from "./Components/UserCard"
import nitinpic from "./assets/nitinpic.jpeg"


function App() {

  return (
    <div className="container">
    <UserCard name="Nitin Yadav" desc="desc1"/>
    <UserCard name="Tula Rao" desc="desc2"/>
    <UserCard name="Shri Krishna" desc="desc3"/>
   </div>
  )
}

export default App
