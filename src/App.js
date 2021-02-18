import Card from './components/Card';

function App() {

  return (
    <div className="App">
      <h1>Casper's Friendly Slider</h1>
      <Card 
        title="We are Humans"
        subtitle="What will you find here"
        text="We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite."
        image="https://picsum.photos/300/150/"
      />
    </div>
  );
}

export default App;
