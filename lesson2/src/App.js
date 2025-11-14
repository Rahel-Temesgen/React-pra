import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import AddColor from './AddColor';

function App() {
 
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shopinglist')));

  const setAndSave = (newItem) => {
    setItems(newItem);
    localStorage.setItes=('shopinglist', JSON.stringify(newItem));
  }

  const [newItem, setNewItem] = useState("")
  const [search, setSearch] = useState("")
  const [newColor, setNewColor] = useState("")
  const [hexValue, setHexValue] = useState("")
  const [isDarkText, setIsDarkText] = useState(true)

  const addItems = (item) => {
    const id = items.length ? (items.length - 1) + 1 : 1;
    const newItem = { id, checked: false, item};
    const listItems = [...items, newItem];
    setAndSave(listItems);
  }

  const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? {
          ...item,
          checked: !item.checked
      } : item);

      setAndSave(listItems);
  }

  const handleDelete = (id) => {
      const listItems = items.filter(item => item.id !== id)

      setAndSave(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItems(newItem);
    setNewItem("");
  }

  return (
    <div className="App">
      <Header title="Groceries List"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))} 
        handleCheck={handleCheck} 
        handleDelete={handleDelete}
      />
      <AddColor 
        newColor={newColor}
        setNewColor={setNewColor}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
