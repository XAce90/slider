import db from './data/db';
import Slider from './components/Slider';

function App() {
  const { cards } = db;
  return (
    <div className="App">
      <h1>Casper's Friendly Slider</h1>
      <Slider
        slides={cards}
        slidesShown={3}
      />
    </div>
  );
}
/* todo: background color */

export default App;
