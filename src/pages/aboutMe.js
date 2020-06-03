import React from "react";

function AboutMe() {

  return (
    <div class="container bg-light border border-dark">
      <br/>
      <div class="row">
        <div class="ml-md-5"></div>
        <div class="ml-md-5"></div>
        <div class="ml-md-5"></div>
        <div class="ml-md-5"></div>
        <h4 class="mt-0 ml-5">About Me</h4>
      </div>
      <hr/>
      <div class="media">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-2">
            <img src="./images/portfolio-picture.png" class="mr-3 ml-3" alt="Michael Baska"/>
          </div>
          <div class="col-md-5">
            <div class="media-body">
                <p>I am a student of the KU Coding Boot Camp. I have learned html, css and javascript.</p>
                <p>Html is relatively easy. The most important thing to remember is the tags and what they do.</p>
                <p>CSS is harder, at least for me. You need to know exactly how to make things look good for the client.</p>
                <p>Javascript is the hardest, although it is the part I most enjoy. With javascript, you can make a website do nearly anything.</p>
                <p>Here are some of the applications I have made in this Bootcamp:</p>
                <ul>
                  <li><a href="https://mibaska.github.io/password/">A Password Generator</a></li>
                  <li><a href="https://mibaska.github.io/quiz/">A Coding Quiz</a></li>
                  <li><a href="https://mibaska.github.io/dayplanner/">A Day Planner</a></li>
                  <li><a href="https://mibaska.github.io/Homework06/">A Weather App</a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default AboutMe;