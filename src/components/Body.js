import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopStories from "./StoriesComponents/TopStories";
import BestStories from "./StoriesComponents/BestStories";
import NewStories from "./StoriesComponents/NewStories";

const Body = () => {
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={TopStories}/>
          <Route exact path="/topstories" component={TopStories}/>

          <Route exact path="/beststories" component={BestStories}/>

          <Route exact path="/newstories" component={NewStories}/>


        </Switch>
      </BrowserRouter>
    )
}

export default Body