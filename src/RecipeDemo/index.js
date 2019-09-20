const data = [
    {
        "name": "떡볶이",
        "ingredients":[
            {"name": "떡볶이 떡", "amount": 2, "measurement":"컵"},
            {"name": "파", "amount": 0.5, "measurement":"컵"},
            {"name": "고춧가루", "amount": 1.5, "measurement":"T"},
            {"name": "고추장", "amount": 1, "measurement":"T"},
            {"name": "설탕", "amount": 3, "measurement":"T"},
            {"name": "간장", "amount": 2.5, "measurement":"T"}
        ],
        "steps":[
            "후라이팬에 떡과 물(종이컵 2컵)과 설탕(3스푼)을 넣고 끓인다.",
            "보글보글 끓으면 고추장을 밥숟가락으로 한스푼 넣어준다.",
            "고추장이 뭉치지 않게 잘 풀어주고 간장 2스푼도 넣어준다.",
            "고춧가루 1.5스푼 넣어준다.",
            "마지막으로 총총 썰은 파를 넣고 잘 버무리면 벌써 끝"
        ]
    },

    {
        "name": "볶음라면",
        "ingredients":[
            {"name": "라면", "amount": 1, "measurement":"봉지"},
            {"name": "달걀", "amount": 1, "measurement":"개"},
            {"name": "대파", "amount": 1, "measurement":"약간"}
        ],
        "steps":[
            "먼저 라면면발과 건더기스프를 넣고 라면을 끓여줘요.",
            "라면이 끓는동안 파를 송송 썰어서 준비해줍니다.",
            "면이 충분히 익었으면 면과 건더기스프만 남기고 물을 버려줘요.",
            "준비해 놓은 파를 기름에 살살 볶아줘요.",
            "거기에 삶아놓은 라면을 넣고 스프는 반정도만 넣고 열심히 볶아줍니다."
        ]
    },
    {
        "name": "에그 스크램블",
        "ingredients":[
            {"name": "달걀", "amount": 3, "measurement":"개"},
            {"name": "우유", "amount": 0.5, "measurement":"소주컵"},
            {"name": "소금", "amount": 0.5, "measurement":"큰술"},
            {"name": "설탕", "amount": 0.3, "measurement":"큰술"},
            {"name": "버터", "amount": 1, "measurement":"소주컵"}
        ],
        "steps":[
            "달걀을 잘 섞어주신후에 설탕을 넣어주세요.",
            "소금은 조금만 넣어주었어요.",
            "우유를 달걀에 넣어주세요.",
            "우유와 달걀을 잘 섞어주세요.",
            "버터를 팬에 넣어 녹여주세요.",
            "버터가 거의 녹을때쯤 계란을 넣어주세요.",
            "달걀을 팬에 넣어주시고 주걱으로 앞으로 쭈욱 갔다가 뒤로 왔다가 몇번 해주시면 된답니다.	"
        ]
    }
]


const Recipe = ({name, ingredients, steps}) =>
<section id={name.toLowerCase().replace(/ /g, "-")}>
    <h1>{name}</h1>
    <ul className="ingredients">
        {ingredients.map((ingredient, i) =>
            <li key={i}>{ingredient.name} {ingredient.amount} {ingredient.measurement}</li>)}
    </ul>
    <section className="instructions">
        <h3>조리 절차</h3>
        {steps.map((step, i)=>
            <p key={i}>{step}</p>
        )}
    </section>
</section>

const Menu = ({title, recipes}) =>
<article>
    <header>
        <h1>{title}</h1>
    </header>
    <div className="recipes">
        {recipes.map((recipe, i) =>
            <Recipe key={i} {...recipe} />
        )}
    </div>
</article>

ReactDOM.render(
    <Menu recipes={data}
    title="백종원 조리법" />,
    document.getElementById("react-container")
)


