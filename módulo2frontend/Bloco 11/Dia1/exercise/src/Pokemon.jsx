import React, {Component} from "react";

class Pokemon extends Component{
  render(){
    const { name, type, averageWeight, image } = this.props;
    return(
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>Average weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
        <img src={image} alt={`{name} sprite`} />
      </div>
    )
  }    
}

export default Pokemon;
