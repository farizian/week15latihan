import react from 'react'
import Navbar from '../components/Navbar'

class Detail extends react.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.match.params.id
    }
  }
  render(){
    return(
      <div>
        <Navbar/>
        Detail - {this.state.id}
      </div>
    )
  }
}

export default Detail