import React from "react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="ml-md-4"></div>
      <div class="ml-md-3"></div>
      <h2 class="navbar navbar-expand-lg text-light bg-primary ml-md-5">Michael Baska</h2>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="ml-md-5"></div>
      <div class="ml-md-5"></div>
      <div class="ml-md-5"></div>
      <div class="ml-md-5"></div>
      <div class="ml-md-5"></div>
      <div class="ml-md-5"></div>
      <div class="ml-md-5"></div>
      <div class="ml-md-5"></div>
      <div class="ml-md-5"></div>
      <div class="ml-md-5"></div>
      <div class="ml-md-5"></div>
      <div class="ml-md-5"></div>
      <div class="ml-md-4"></div>
      <div class="ml-md-4"></div>
      <div class="collapse navbar-collapse ml-md-5" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="./aboutme">About Me <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
