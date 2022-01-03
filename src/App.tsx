import {Button} from "./components/Button";

function App() {
  return (
    <div>
      <Button />
      <Button />
    </div>
  );
}

export default App;

/*

  function handlerOne(){
    window.alert('Clicou no botão 1...');
  }

  function handlerTwo(){
    window.alert('Clicou no botão 2...');
  }

  function handlerThree(){
    window.alert('Clicou no botão 3 ou mais...');
  }

<Button text="Btn1" myHandler={handlerOne} />
      <Button text="Btn2" myHandler={handlerTwo} />
      <Button text="Btn3" myHandler={handlerThree} />
      <Button myHandler={handlerThree} />
*/