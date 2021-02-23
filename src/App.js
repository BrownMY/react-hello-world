//imports here
import Animal from './Animal'
import Human from './Human'

function App() {
  return (
    <div className="App">
      <h1>Title</h1>
      
      <Human name="Mocha" location="Detroit"/>
      <h3>Mocha has 2 animals.</h3>
      <Animal animal="Cat" name="Teddy"/>
      <Animal animal="Cat" name="Gwendolyn"/>

    </div>
  );
}
//animal="dog" -> called props(properties)
export default App;
