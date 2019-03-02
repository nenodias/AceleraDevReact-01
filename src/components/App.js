import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: ''
    };
  }
  renderRecipes(){
    const search = this.state.searchString;
    const regex = new RegExp(`(${search})`, 'gi');
    const testIgnoreCase = text => regex.test(text);
    const recipes = this.recipes.filter(i => testIgnoreCase(i.title) || testIgnoreCase(i.ingredients) );
    if(recipes.length > 0){
      return recipes.map((recipe, i) => <RecipeItem {...recipe} regex={ regex } key={i} />);
    }
    return (<h1 style={{"flex":"1"}}>No Results to show</h1>);
  }
  render() { 
    return (
      <div className="App">
        <Navbar onChange={(e) => this.setState({ searchString: e.target.value.toLowerCase() })} />
        <div className="container mt-10">
          <div className="row">
            { this.renderRecipes() }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
