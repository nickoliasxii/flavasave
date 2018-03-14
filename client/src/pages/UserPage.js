import React, { Component } from "react";
import Nav from "../components/Nav/NavLogged.js";
import Input from "../components/Forms/Input.js";
import FormBtn from "../components/Forms/FormBtn.js";
import DropDwn from "../components/Forms/DropDwn.js";
import Panel from "../components/Panels/Panel.js";
import OrangeHdr from "../components/Panels/OrangeHdr.js";
import NeedToCookList from "../components/Lists/NeedToCookList";
import CompleteList from "../components/Lists/CompleteList";
import FooterLogged from "../components/Footer/FooterLogged.js";
import API from "../utils/API";

class UserPage extends Component {

  //set inital state of forms to empty
  state = {
    recipes: [],
    recipe_url: ""
  };

  // componentDidMount() {
  //   this.loadRecipes();
  // }

  // loadRecipes = () => {
  //   API.getRecipe()
  //     .then(res =>
  //       this.setState({ recipe_url: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteRecipe = id => {
  //   API.deleteRecipe(id)
  //     .then(res => this.loadRecipes())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.recipe_url) {
      API.saveRecipe({
        recipe_url: this.state.recipe_url,
      })
        //.then(res => this.loadRecipes())
        .catch(err => console.log(err));
    }
  };

  //Need an addRecipe method

  //Need SearchRecipe method

  //Need SearchRecipes by tags method

  //Need a get method for Need to Cook Recipes

  //Need a get method for COmpleted REcipes

  render() {
    return (
      <div>
        <Nav />
        <h1 className="greeting-text">WELCOME, PLACEHOLDER@PLACEHOLDER.COM.</h1>
        <div className="container-fluid userpage-container">
          <h3 className="search-title">ADD RECIPE BY URL</h3>
          <form className="row">
            <Input
              value={this.state.recipe_url}
              onChange={this.handleInputChange}
              name="recipe_url"
              className="input-width"
            />
            <FormBtn
              disabled={!(this.state.recipe_url)}
              onClick={this.handleFormSubmit}
              photo={require("../images/add_button.png")}
              className="search-btn"
              imageClass="imageClass"
            />
          </form>

          <h3 className="search-title">SEARCH RECIPES</h3>
          <form className="row">
            <Input 
            name="search-recipe" 
            className="input-width"
            />
            <FormBtn 
            photo={require("../images/search_button.png")} 
            className="search-btn"
            imageClass="imageClass"
            />
          </form>

          <h3 className="search-title">SEARCH BY TAGS</h3>
          <form className="row">
            <Input 
            name="search-tags" 
            className="input-width"
            />
            <FormBtn 
            photo={require("../images/tag_search_button.png")} 
            className="search-btn"
            imageClass="tag-search-button"
            />
          </form>
        </div>

        <OrangeHdr
          className="container orange-box"
          photo={require("../images/egg_crack_bowl.png")}
          alt={"cracked egg"}
          name={"Need to Cook Recipes"}
        />
        <div className="container-fluid userpage-container">
          <NeedToCookList />
        </div>

        <OrangeHdr
          className="container orange-box"
          photo={require("../images/fork_knife.png")}
          alt={"utensils"}
          name={"Completed Recipes"}
        />
        <div className="container-fluid userpage-container">
          <CompleteList />
        </div>

        <FooterLogged />
      </div>
    );
  }
}

export default UserPage;
