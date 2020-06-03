import React from "react";

function Portfolio() {
  return (
    <div class="container bg-light border border-dark">
      <br/>
      <div class="row">
        <div class="ml-md-5"></div>
        <div class="ml-md-5"></div>
        <div class="ml-md-5"></div>
        <div class="ml-md-3"></div>
        <h4 class="mt-0 ml-md-5">Portfolio</h4>
      </div>
      <hr/>
      <div class="row">
        <div class="ml-md-5"></div>
        <div class="ml-md-5"></div>
        <div class="ml-md-5"></div>
        <div class="ml-md-5"></div>
        <div class="col-md-4">
          <div class="card">
            <img src="./images/lukeandmorty.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Luke and Morty</h5>
              <p class="card-text">This was my first project from my coding bootcamp. It is a pair of Jeopordy-style quizzes. One quiz is about Star Wars, the other is about Rick and Morty. My collaborators in this project were Spencer Wood, Val Young, and Vandana Sivadasan.</p>
              <a href="https://mibaska.github.io/Project01/" class="btn btn-primary">Enter</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="./images/accesibilitycalendar.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Accesibility Calendar</h5>
              <p class="card-text">This was my second project from my coding bootcamp. It is a calendar app. My collaborators in this project were Alek Seawright and Jared Higgins.</p>
              <a href="https://accessibility-calendar.herokuapp.com/" class="btn btn-primary">Enter</a>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div class="row">
        <div class="ml-md-5"></div>
        <div class="ml-md-5"></div>
        <div class="ml-md-5"></div>
        <div class="ml-md-5"></div>
        <div class="col-md-4">
          <div class="card">
            <img src="./images/villagerbirthdays.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Villager Birthdays</h5>
              <p class="card-text">This was my third and final project from my coding bootcamp. It is a companion app to Animal Crossing New Horizons. My collaborators in this project were Ashton Beaudoin, Nick A, Scott Manley, and Vandana Sivadasan.</p>
              <a href="https://villagerbirthdays.herokuapp.com/#/" class="btn btn-primary">Enter</a>
            </div>
          </div>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default Portfolio;