import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// Class Component
class App extends React.Component {
  // The state below replaces the constructor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     latitude: null,
  //     errorMessage: ''
  //   };
  // }

  state = {
    latitude: null,
    errorMessage: ''
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitude: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log('The Component was Updated');
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          <SeasonDisplay latitude={this.state.latitude} />
        </div>
      );
    }

    return <Spinner message='Please Accept Location Request' />;
  }

  render() {
    return <div className='border red'>{this.renderContent()}</div>;
  }
}

// Functional / Dumb component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );
//   return <div>Latitude: </div>;
// };

ReactDOM.render(<App />, document.querySelector('#root'));
