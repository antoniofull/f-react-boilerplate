import React from 'react';
import HelloWorld from './HelloWorld';
import '../app.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hello: 'Hello World!',
    };
  }

  render() {
    return (
      <div className="wrapper">
        <HelloWorld text={this.state.hello} />
      </div>
    );
  }
}

export default App;
