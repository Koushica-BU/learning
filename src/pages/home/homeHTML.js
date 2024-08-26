let homeHTML = (function () {
  let getHomeHTML = function () {
    return `<h1>
      My Projects and Learnings 💻
    </h1>
    <p>
      Welcome to my personal portfolio, where I document my learning journey in
      HTML, CSS, and JavaScript. 🚀 Here, I share my progress from fundamental
      concepts to fully realized projects. 🎯 Each project represents a step in
      mastering the art of coding, and this site serves as my canvas 🎨 to
      showcase what I’ve learned along the way. Come explore and watch as my
      skills continue to evolve! 🌱
    </p>
    <ul>
      <li>
        <a href="#basic">Basic html tags</a>
      </li>
      <li>
        <a href="#autocomplete">Basic Autocomplete</a>
      </li>
    </ul>`;
  };

  return {
    getHomeHTML,
  };
})();

export { homeHTML };
