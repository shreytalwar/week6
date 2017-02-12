// DO NOT MODIFY

// So we can use React
var React = require('react')
var ReactDOM = require('react-dom')

// Helper functions
// .shuffle() shuffles (randomizes the order of) an array
// e.g. [1,2,3,4,5].shuffle()
// getDeck() gives us an array of cards, represented as strings
// Hint: JavaScript's built-in .splice() function will remove elements from an
// array to create a new array. For example, a "hand" from a deck of cards might
// go something like this:
//
// deck.splice(0,5)
var helpers = require('./components/Helpers')
var getDeck = helpers.getDeck
Array.prototype.shuffle = helpers.shuffle

// Our component classes
var Card = require('./components/Card')

// END OF STUFF TO NOT MODIFY

var App = React.createClass({

   dealthisdeck: function() {
     var newdeal= getDeck().shuffle().splice(0,5)
     this.setState({hand: newdeal });
      },

   getInitialState: function(){
     return {hand: ["face_down","face_down","face_down","face_down","face_down"]};
      },

   render: function() {
   return (
     <div>
       <h1>Welcome to the Shrey's Casino!</h1>
       <div className="row">

         <Card card= {this.state.hand[0]} />
         <Card card= {this.state.hand[1]}  />
         <Card card= {this.state.hand[2]}  />
         <Card card= {this.state.hand[3]}  />
         <Card card= {this.state.hand[4]}  />
           <div className="col-sm-2">
             <h1><a href="#" className="btn btn-success" onClick={this.dealthisdeck}>Deal</a></h1>
           </div>
       </div>
     </div>
   )
 }
})

ReactDOM.render(<App />, document.getElementById("app"))
