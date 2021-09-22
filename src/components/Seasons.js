// Import React
import React from "react";

// React Components
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// Initialize Class Component
class Seasons extends React.Component {

    // Initialize States
    state = { 
        lat: null, 
        errorMessage: "" 
    };

    // Get User position before render
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    // Adds conditional logic to our Render function
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
    
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
    
        return <Spinner message="Getting your location..." />;
    }


    // Render component
    render() {
        return <div className="border red">{this.renderContent()}</div>;
    }
}

// Render the component
export default Seasons;