const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div>
          <img
            src="https://images.unsplash.com/photo-1495001258031-d1b407bc1776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            alt="Happy Sign"
          />
          Photo by{" "}
          <a href="https://unsplash.com/@markadriane?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            MARK ADRIANE
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/free-happy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
