const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>Home</h1>
        <div>
          <img
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
            alt="beautiful pancakes"
          />
        </div>
        <div>
          Photo by{" "}
          <a href="https://unsplash.com/photos/eeqbbemH9-c?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
            {" "}
            Chad Montano
          </a>{" "}
          on <a href="https://unsplash.com/photos/eeqbbemH9-c">Unsplash</a>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}
<a href="/places">
  <button className="btn-primary">Places Page</button>
</a>;

module.exports = home;
