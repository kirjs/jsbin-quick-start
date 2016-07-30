var Hello = React.createClass({
  render: function (){
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
});

var config = {
  title: {
    text: 'Hello, World!'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }]
};

ReactDOM.render(
  <ReactHighcharts config = {config}/>,
  document.getElementById('container')
);
