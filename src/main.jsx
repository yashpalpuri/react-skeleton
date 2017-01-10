var React= require('react');
var ReactDOM= require('react-dom');
var List= require('./components/List.jsx');
var Counter= require('./components/counter.jsx');

ReactDOM.render(<List />, document.getElementById('ingredients'));

ReactDOM.render(<Counter />, document.getElementById('counterId'));
