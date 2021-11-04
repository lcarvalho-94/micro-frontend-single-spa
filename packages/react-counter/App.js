import { useState } from 'react';
import './App.css';
import { eventsEmitters } from './events';

function App() {
  const initialProducts = [
    {
      id: 1,
      img: 'https://miro.medium.com/max/1000/0*5Y1GT6TDqRDgaDSB.jpg',
      isAdded: false,
    },
    {
      id: 2,
      img: 'https://pbs.twimg.com/media/ENuODPYWwAIZ8TX.jpg',
      isAdded: false,
    }
  ];
  //const [counter, updateCounter] = useState(0);
  const [productList, updateProductList] = useState(initialProducts);

  // const handleIncrement = () => {
  //   updateCounter(counter + 1);
  // }

  // const handleDecrement = () => {
  //   updateCounter(counter - 1);
  // }

  const handleAction = (state, index) => {
    const updatedList = [...productList];
    updatedList[index].isAdded = state;

    updateProductList(updatedList);
  }

  const handleAddProduct = (index) => {
    const updatedList = [...productList];
    updatedList[index].isAdded = true;

    updateProductList(updatedList);
    //window.dispatchEvent(new CustomEvent('addProduct'));
    eventsEmitters.addProduct();
  }

  const handleRemoveProduct = (index) => {
    const updatedList = [...productList];
    updatedList[index].isAdded = false;

    updateProductList(updatedList);
    //window.dispatchEvent(new CustomEvent('removeProduct'));
    eventsEmitters.removeProduct();
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>React Counter: { counter }</h1>
        <button onClick={handleIncrement}>Adicionar</button>
        <button onClick={handleDecrement}>Decrementar</button> */}
        <div className="horse-container">
          {productList.map((product, i) => {
            if(product.isAdded) {
              return(
                <div className="horse-product">
                  <div className="img-container">
                    <img src={product.img} />
                  </div>
                  <button onClick={() => handleRemoveProduct(i)}>Remover</button>
                </div>
              )
            }
            return(
              <div className="horse-product">
                <div className="img-container">
                    <img src={product.img} />
                  </div>
                <button onClick={() => handleAddProduct(i)}>Adicionar</button>
              </div>
            )
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
