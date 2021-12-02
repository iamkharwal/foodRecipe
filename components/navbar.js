let navbar = () => {
    return `
    <nav>
    <div class="wrap">
        <div class="logo">
          <a href="index.html"><h1 style="color:red">FOOD RECIPE</h1></a>  
        </div>
        <div class="search">
        <input type="text" id="search" oninput="debounce(searchItem,1000)" placeholder="Search Meal">
        </div>
        <div class="results" id="results"></div>
        <div class="menu">
            <ul>
                <li><a href="index.html">Latest Recipe</a></li>
                <li><a href="foodrecipe/random.html">Recipe of the Day</a></li>
            </ul>
        </div>
    </div>
</nav>
`;
}

export { navbar }
