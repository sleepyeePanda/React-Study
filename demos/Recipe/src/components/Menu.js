import Recipe from './Recipe'

const Menu = ({ recipes }) =>
    <article>
        <header>
            <h1>백종원의 맛있는 조리법</h1>
        </header>
        <div className="recipes">
            {recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />)
            }
        </div>
    </article>

export default Menu