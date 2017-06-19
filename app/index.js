import React from 'react';
import ReactDOM from 'react-dom';

let names = ['Kaya', 'Kuma', 'NeiNei', 'MooMoo'];

const divStyle = {
    color: 'orange'
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={divStyle}>
                <h1> Hello, World! </h1>
            </div>
        );
    }
}


const MyComponent = () => (
    <div> Hello, World! This is function create ele! </div>
);

var data = 123;
var MyTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return <h1> {this.props.title} </h1>;
    }
});
// var LikeButton = React.createClass({
//   getInitialState: function() {
//     return {liked: false};
//   },
//   handleClick: function(event) {
//     this.setState({liked: !this.state.liked});
//   },
//   render: function() {
//     var text = this.state.liked ? 'like' : 'haven\'t liked';
//     return (
//       <p onClick={this.handleClick}>
//         You {text} this. Click to toggle.
//       </p>
//     );
//   }
// });

// ReactDOM.render(
//   <LikeButton />,
//   document.getElementById('example')
// );


App.PropTypes = {
    todo: React.PropTypes.object,
    name: React.PropTypes.string
}


ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<MyComponent />, document.getElementById('app2'));
ReactDOM.render(<peopelLis />, document.getElementById('app3'));
ReactDOM.render(
    <div>
        {
            names.map(function (name) {
                return <div key={name.toString()}>Hello, {name}!</div>
            })
        }
    </div>,
    document.getElementById('app3')
);

var Hello = React.createClass({
  getInitialState: function () {
    return {
      opacity: 1.0
    };
  },

  componentDidMount: function () {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  },

  render: function () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
});

ReactDOM.render(
  <Hello name="world"/>,
  document.getElementById('example')
);
