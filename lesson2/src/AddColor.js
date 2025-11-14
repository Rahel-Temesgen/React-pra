import colorNames from 'colornames'

const AddColor = ({ 
    newColor, 
    setNewColor,
    hexValue,
    setHexValue,
    isDarkText,
    setIsDarkText
    }) => {

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