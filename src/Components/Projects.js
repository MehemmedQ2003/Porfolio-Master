import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };

    this.ToDo = () => {
      window.location.assign("https://github.com/MehemmedQ2003/To-Do-React");
    };
    this.ToDoLive = () => {
      window.location.assign("https://quantum-todo-design.netlify.app/");
    };


    this.WeatherApp = () => {
      window.location.assign("https://github.com/MehemmedQ2003/Weather_App");
    };
    this.WeatherAppLive = () => {
      window.location.assign("https://quantum-weather-app.netlify.app/");
    };


    this.Woodmart = () => {
      window.location.assign("https://github.com/MehemmedQ2003/woodmart-xtemos");
    };
    this.WoodmartLive = () => {
      window.location.assign("https://woodmart-xtemos-shopping.netlify.app/");
    };


    this.toDOList = () => {
      window.location.assign("https://github.com/MehemmedQ2003/To-do-list");
    };
    this.toDOListLive = () => {
      window.location.assign("https://todolist-quantum.netlify.app/");
    };


    this.githubProfiles = () => {
      window.location.assign("https://github.com/MehemmedQ2003/Github-find-profiles");
    };
    this.githubProfilesLive = () => {
      window.location.assign("https://github.com/MehemmedQ2003/Github-find-profiles");
    };


    this.nftMarketing = () => {
      window.location.assign("https://github.com/MehemmedQ2003/NTF_Marketing");
    };
    this.nftMarketingLive = () => {
      window.location.assign("https://ntf-marketing.netlify.app/");
    };


    this.movieApp = () => {
      window.location.assign("https://github.com/MehemmedQ2003/Movie_app");
    };
    this.movieAppLive = () => {
      window.location.assign("https://github.com/MehemmedQ2003/Movie_app");
    };


    this.Portfolio = () => {
      window.location.assign("https://github.com/MehemmedQ2003/3D_Portfolio");
    };
    this.PortfolioLive = () => {
      window.location.assign("https://muhammed-frontend-portfolio.netlify.app/");
    };

    this.Menu = () => {
      window.location.assign("https://github.com/MehemmedQ2003/Restaurant_Project");
    };
    this.MenuLive = () => {
      window.location.assign("https://chef-menu.netlify.app/");
    };

    this.toggleCategories = () => {
      if (this.state.activeTab === 0) {
        return (
          <div className="projects-grid">
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/Todo.jpg) center / cover",
                }}
              >
                To DO React
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Get Things Done. Add, delete, Update list 
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.ToDo.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.ToDoLive.bind(this)}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/Weather.jpg) center / cover",
                }}
              >
                Standard WeatherApp
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Find weather for any Country
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.WeatherApp.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.WeatherAppLive.bind(this)}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/woodmart-xtemos.png) center / cover",
                }}
              >
                Woodmart Xtemos
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Wood, Flower, Toys
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.Woodmart.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px", }} 
                    onClick={this.WoodmartLive.bind(this) }>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else if (this.state.activeTab === 1) {
        return (
          <div className="projects-grid"> 
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/ToDoList.png) center / cover",
                }}
              >
                To DO List
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                To DO list with Javascript
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.toDOList.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.toDOListLive.bind(this)}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "white",
                  height: "180px",
                  background: "url(images//GithubProfiles.png) center / cover",
                }}
              >
                GitHub Profiles
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Find Github Profiles
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.githubProfiles.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.githubProfilesLive.bind(this)}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "white",
                  height: "180px",
                  background: "url(images/NFT_Marketing.png) center / cover",
                }}
              >
                NFT Marketing
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Find Any games, music
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.nftMarketing.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.nftMarketingLive.bind(this)}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      }
      if (this.state.activeTab === 2) {
        return (
          <div>
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "white",
                  height: "180px",
                  background: "url(images/MovieApp.png) center / cover",
                }}
              >
                Movie App
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Movie APp with Css
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.movieApp.bind(this)}
                 ><i className="fa fa-github" aria-hidden="true" /> Github
                 </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.movieAppLive.bind(this)}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/3d-portfoliio.png) center / cover",
                }}
              >
                3D Portfolio
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                3D Portfolio with Css
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.Portfolio.bind(this)}
                 ><i className="fa fa-github" aria-hidden="true" /> Github
                 </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}
                onClick={this.PortfolioLive.bind(this)}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo 
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "white",
                  height: "180px",
                  background: "url(images/menu-chef.png) center / cover",
                }}
              >
                Chef Menu
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Chef Menu with HTML, CSS, JS
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.Menu.bind(this)}
                 ><i className="fa fa-github" aria-hidden="true" /> Github
                 </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}
                onClick={this.MenuLive.bind(this)}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      }
    };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React JS</Tab>
          <Tab>Javascript</Tab>
          <Tab>Css</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
