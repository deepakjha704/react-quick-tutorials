import React from "react";

function Application() {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 2</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="full Name"
            value="deepak"
          ></input>
          <img alt="person with alt text" src="" />
          <span title="taksh">X</span>
          <div data-testid="custom-element">custom tag</div>
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value=""></option>
            <option value="US">UnitedState</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input id="term" type="checkbox" />I agree to the terms and
            conditions
          </label>
        </div>
        <button>submit</button>
      </form>
    </>
  );
}

export default Application;
