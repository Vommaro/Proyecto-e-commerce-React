import NavBar from "./componets/NavBar/NavBar.jsx"
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemDetailContainer } from "./componets/ItemDetailContainer/ItemDetailContainer.jsx"


function App() {
  return (
    <BrowserRouter>
    <NavBar />

  <Routes>
    <Route path="/" element ={<ItemListContainer greetings={"Catalogo de Productos"}/>}/>
    <Route path='/category/:category' element ={<ItemListContainer />}/>
    <Route path="/detail/:id" element ={<ItemDetailContainer />}/>    
  </Routes>
    </BrowserRouter>
  )
} 

export default App
