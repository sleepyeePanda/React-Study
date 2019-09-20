const Ingredient = ({name, amount, measurement}) =>
<li>
    <span className="name">{name}</span>
    <span className="amount">{amount}</span>
    <span calssName="measurement">{measurement}</span>
</li>

export default Ingredient