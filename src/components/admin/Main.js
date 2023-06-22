import React from 'react';

const Main = () => {
  return (
    <main role="main">
      <section className="panel important">
        <h2>Write Some News</h2>
        <ul>
          <li>Information Panel</li>
        </ul>
      </section>

      <section className="panel important">
        <h2>Write a post</h2>
        <form action={window.location.pathname} method="post">
          <div className="twothirds">
            Blog title:<br />
            <input type="text" name="title" size="40" /><br /><br />
            Content:<br />
            <textarea name="newstext" rows="15" cols="67"></textarea><br />
          </div>
          <div>
            <input type="submit" name="submit" value="Save" />
          </div>
        </form>
      </section>
    </main>
  );
}

export default Main;
