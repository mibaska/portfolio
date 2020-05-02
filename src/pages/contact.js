import React from "react";

function Contact() {
  return (
    <div class="container bg-light border border-dark">
      <br/>
      <div class="row">
        <div class="ml-md-3"></div>
        <h4 class="mt-0 ml-md-5">Contact</h4>
      </div>
      <hr/>
      <form>
        <div class="form-group">
          <div class="row">
            <div class="ml-md-5"></div>
            <div class="ml-md-3"></div>
            <label for="exampleFormControlInput1">Email address</label>
          </div>
          <div class="col-md-10">
            <input type="email" class="form-control ml-md-5" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="ml-md-5"></div>
            <div class="ml-md-3"></div>
            <label for="exampleFormControlTextarea1">Message</label>
          </div>
          <div class="col-md-10">
            <textarea class="form-control ml-md-5" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
      </form>
      <div class="row">
        <div class="ml-md-5"></div>
        <div class="ml-md-3"></div>
        <input class="btn btn-primary" type="submit" value="Submit"/>
      </div>
      <br/>
    </div>
  )
}

export default Contact;