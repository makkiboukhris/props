import React, { Component } from 'react'
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var Handlename=()=>{
            alert(this.props.FullName )
        }
        return ( 
            <>
            <img onClick={()=>Handlename()} src={this.props.children} alt=""  width="350px" height="500px"/>
            <ul>
            <li>{this.props.FullName}</li>
            <li>{this.props.Profession}</li>
            <li>{this.props.Bio}</li>
            </ul>
            </>
        );
    }
}

export default Profile;