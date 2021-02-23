//imports here
import Animal from './Animal'
import Human from './Human'
import Car from './Car'

function App() {
  return (
    <div className="App">
      <h1>Title</h1>
      
      <Human name="Mocha" location="Detroit"/>
      <h3>Mocha has 2 animals:</h3>
      <Animal animal="Cat" name="Teddy"/>
      <Animal animal="Cat" name="Gwendolyn"/>
      <Car />
    </div>
  );
}
//animal="dog" -> called props(properties)
export default App;
