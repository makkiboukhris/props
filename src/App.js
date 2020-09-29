import React, { Component } from 'react'
import Profile from './Profile/Profile';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() { 
    let person ={FullName:"Makki Boukhris" , Bio:"👨‍💻💻" , Profession:"student" , url:"https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/69370951_2401033676646860_8708337464437112832_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=04CvLmLuY5IAX8MkfZm&_nc_ht=scontent.ftun3-1.fna&oh=cf7a99a6e7ff5bfa94a4fa6dae977b6a&oe=5F9917D7"}
    return ( 
      <div>
      <Profile FullName={person.FullName} Bio={person.Bio} Profession={person.Profession} >{person.url}</Profile>
      </div>
      );
  }
}

export default App;

