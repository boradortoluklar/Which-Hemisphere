import React from 'react';
import ReactDOM from 'react-dom';
import HemiSphereDisplay from './HemiSphereDisplay';
 
class App extends React.Component{
    

    state = { latitude : null, errorMessage: '' }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (positon) => {
                this.setState({latitude : positon.coords.latitude})
            }, 
            (error) => {
                this.setState({errorMessage : error.message})
            }
    
        )
    }
    render(){
        if(this.state.errorMessage && !this.state.latitude) {
            return <div>{this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.latitude){
            return <div><HemiSphereDisplay latitude ={ this.state.latitude}/></div>
        }
        else{
            return <div>Loading...</div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)