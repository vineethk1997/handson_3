import React, { Component } from 'react';
import './Form.css';
import ShowFormData from './ShowFormData';

class Form extends Component {

    state={
        name:"",
        dept:"",
        rating:"",
        user:[],
        flag:false,
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    
    

        const tempObj = {
            name : this.state.name,
            rating: this.state.rating,
            dept :  this.state.dept
        }

        const tempArr = this.state.user;
        tempArr.push(tempObj);
        this.setState({user : tempArr, flag:true});

    }

    goBack = ()=> {
     this.setState({flag:false})
    }

  render() {
      console.log(this.state.user, "USER");
    return (
        <>
        <h1 className='heading'>{this.state.flag === true ? "Employee Feedback Data":"Employee Feedback Form"}</h1>
      {this.state.flag === true ? (<ShowFormData data={this.state} goBack={this.goBack}/>) : <div className='formCollection'>
          {/* <h1 className='heading'>{this.state.flag==true ? "Employee Feedback Data":"Employee Feedback Form"}</h1> */}
          <form>
              <label for ="name" className='labelchange'>Name</label>
              <input type="text" className='inputchange' id="name" name ="name"  placeholder="name" onChange={this.handleChange} value={this.state.name} />
              <br/>
              <label for ="name" className='labelchange'>Dept</label>
              <input id="dept" type="text" className='inputchange' name ="dept"  placeholder="dept" onChange={this.handleChange}  value={this.state.dept} />
              <br/>
              <label for ="name" className='labelchange'>Rating</label>
              <input id="name" className='inputchange' name ="rating" type="text"  placeholder="rating"  onChange={this.handleChange}  value={this.state.rating} />
              <br/>
              <button className='buttonchange' onClick={this.handleSubmit}>Submit</button> 
              
          </form>
        
    </div>}
    </>


    )
  }
}

export default Form