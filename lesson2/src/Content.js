import { useState } from "react";

const Content = () => {

    const [name, setName] = useState('Dave');

    const handleNameChange = () => {
        const name = ['Alice', 'Bob', 'Dave'];
        const int = Math.floor(Math.random() * 3);
         setName(name[int]);
    }

    const handleClick = () => {
        alert('you clicked it');
    }
    const handleClick2 = (name) => {
        alert(`hello ${name}`);
    }
    const handleClick3 = (e) => {
        alert(e.target.innerText);
    }

    return (
        <main>
            <p>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change it</button>
            <button onClick={() => handleClick2('Dave')}>Click it</button>
            <button onClick={(e) => handleClick3(e)}>Click it</button>
        </main>
    )
}

export default Content;