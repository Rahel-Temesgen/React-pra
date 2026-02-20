import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItem 
                    item={item}
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                />
            ))} 
            </ul> 
    )

}

export default ItemList;