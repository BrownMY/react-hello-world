function Animal(props) {
    return (
        <div>
            <h3>{props.animal}</h3>
            <h3>{props.name}</h3>
            <p>This is a {props.animal}</p>
        </div>
    )
}
//h2 is accessing the props name using JS using a key calla animal
export default Animal;