
import './App.css';
import Posts from './components/context/Posts';
// import Products from './components/product/Products';
// import Users from './components/users/Users';
// import Store1 from './components/context/Store1';
// import ProductStore from './components/context/ProductStore';
import TaskStore from './components/context/TaskStore';
function App() {
 
  return (
    <div className='bg-info'>
      <TaskStore><Posts/></TaskStore>
      {/* <ProductStore> <Products/></ProductStore> */}
      {/* <Store1><Users/> </Store1> */}
      
    </div>
  );
   
}

export default App;
