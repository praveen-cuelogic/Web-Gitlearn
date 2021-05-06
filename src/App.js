import React, { Component } from "react";
import UseState from "./UseState";
import Counters from "./components/counters";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./ParentChildComponent";
import Blog from "./Blog";
import Login from "./Login";
import ES6feature from "./ES6";
import AddItem from "./ClasscomponentState";
import LifeCycle from "./LifeCycle";
import ParentComp from "./ParentComp";
import HeroName from "./HeroName";
import ErrorBoundary from "./ErrorBoundary";
import RefsComponent from "./RefsComponent";
import UseEffectComp from "./UseEffectComp";
import CompleteRouting from "./CompleteRouting";
import Memo from "./components/Memo";
import ListMap from "./ListMap";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    posts: [],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleRestart = () => {
    window.location.reload();
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resolve) => {
      const posts = resolve.data;
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div>
        <h1>PG Coming</h1>
        <h1>Changed by PK</h1>

        <p>Test</p>
        <Memo name="US" /> <br />
        <ListMap />
        ----------------------
        <CompleteRouting />
        <UseEffectComp />
        <RefsComponent />
        <ErrorBoundary>
          <HeroName heroName="PG" />
        </ErrorBoundary>
        <ErrorBoundary>
          <HeroName heroName="Joker" />
        </ErrorBoundary>
        ----------------------------------
        <ParentComp />
        --------------------------
        <LifeCycle />
        ==============
        <AddItem />
        ============================
        <UseState meraName="PG" />
        <Router>
          <ul className="nav-links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/ab/">
              <li>About</li>
            </Link>
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="*" component={Home} />
          </Switch>
        </Router>
        <ES6feature />
        <Login />
        <ul>
          { this.state.posts.map(user => <li>{user.name}</li>)}
        </ul>

        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onRestart={this.handleRestart}
          />
        </main>
      </div>
    );
  }
}

export default App;
