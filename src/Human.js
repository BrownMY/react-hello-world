import Animal from './Animal'

function Human(props) {

    return (
        <div>
            <h1>Mocha</h1>
            <p>Name: {props.name}</p>
            <p>Location: {props.location}</p>
            <Animal age="6"/>
        </div>
    )
}
export default Human;
