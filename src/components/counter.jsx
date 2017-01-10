var React= require('react');

var Counter= React.createClass({
  increaseCount: function(){
    this.setState({
      count: this.state.count+1
    });
  },
  getInitialState: function(){
    return {
      count: 0
    }
  },
  render: function(){
    return (
      <div>
        <h2>{this.state.count}</h2>
        <a href="#" onClick={this.increaseCount}>Increase Count</a>
      </div>
    );
  }
}
);

module.exports= Counter;

/*var counter= React.createClass({
  incrementCount: function(){
    this.setState({
        count: this.state.count + 1
      });
},
getInitialState: function(){
  return {
    count: 0
  }
},
  render: function(){
    return (
      <div class="my-component">
        <h1>Count: {this.state.count}</h1>
          <button type="button" onClick={this.incrementCount}>Increase Count</button>
      </div>
    );
  }
});*/
/*var Counter = React.createClass({
  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  getInitialState: function(){
     return {
       count: 0
     }
  },
  render: function(){
    return (
      <div class="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
});
module.exports = Counter;*/
