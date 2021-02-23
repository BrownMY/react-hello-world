function Animal(props) {
    return (
        <div>
            <h1>Animal</h1>
            <h2>{props.animal}</h2>
            <h3>{props.name}</h3>
            <p>This is a {props.animal}</p>
        </div>
    )
}
//h2 is accessing the props name using JS using a key calla animal
export default Animal;