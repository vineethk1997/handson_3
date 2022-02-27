import React, { Component } from 'react';
import './Form.css';

class ShowFormData extends Component {
  render() {
    //   console.table(this.props.data);
    return (
      <>
      <div className="data-container">
        <div className='formbox'>
        {this.props.data.user.map((value,index)=>{
            return(
                <>
                
                <div className='formdetails' key={index}>
                   Name: {value.name} || Dept: {value.dept}  || Rating: {value.rating}
                </div>
                {/* <button onClick={this.props.changeState} className='buttonform'>Go Back</button>
                 */}
                </>
            )
        })}
        
      </div>
      <button onClick={this.props.goBack} className='buttonform'>Go Back</button>
      </div>
      
      </>
    )
  }
}

export default ShowFormData