import React from 'react';
import Menu from './components/Menu';

function App () {
  return (
    <div>
      <Menu>
        <h2>This is the content that shows in 'props.children'. </h2>
        <ul>
          <li>Egg and bacon</li>
          <li>Egg, sausage and bacon</li>
          <li>Egg and Spam</li>
          <li>Egg, bacon and Spam</li>
          <li>Egg, bacon, sausage and Spam</li>
          <li>Spam, bacon, sausage and Spam</li>
          <li>Spam, egg, Spam, Spam, bacon and Spam</li>
          <li>Spam, Spam, Spam, egg and Spam</li>
          <li>Spam, sausage, Spam, Spam, Spam, bacon, Spam, tomato and Spam (vinyl record)</li>
          <li>Spam, Spam, Spam, Spam, Spam, Spam, baked beans, Spam, Spam, Spam and Spam</li>
          <li>Lobster Thermidor aux crevettes with a Mornay sauce, garnished with truffle pâté, brandy and a fried egg on top, and Spam.</li>
        </ul>
      </Menu>
    </div>
  )
}

export default App;
