import React from 'react'

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am changed!")}} />
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
    </React.Fragment>
  );
}

const Cat = () => (
  <div>Meow!</div>
)

export default App;
