import colorNames from 'colornames'
import { useState } from 'react'

const AddColor = () => {

    const [newColor, setNewColor] = useState("")
    const [hexValue, setHexValue] = useState("")
    const [isDarkText, setIsDarkText] = useState(true)

    const bgColor = {
        backgroundColor: newColor,
        color: isDarkText ? "#000" : "#fff"
        
    }

    return (
        <div>
            <section style={bgColor} className="square">
                <p>{newColor ? newColor : "Empty Color"}</p>
                <p>{hexValue ? hexValue : null}</p>
            </section>

            <form className="addColorForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="addColor" className="colorName">Add Color Name</label>
                <input
                    autoFocus
                    id="addColor"
                    type="text"
                    placeholder="Add color name"
                    value={newColor}
                    onChange={(e) => {
                        setNewColor(e.target.value);
                        setHexValue(colorNames(e.target.value))
                    }}
                />
                <button
                    type="button"
                    onClick={() => {setIsDarkText(!isDarkText)}}
                >
                    Toggle Text Color
                </button>
            </form>
        </div>
    )

}

export default AddColor;