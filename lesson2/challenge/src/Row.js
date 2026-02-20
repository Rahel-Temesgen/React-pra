import Cell from "./Cell"

const Row = ({ item }) => {
  return (
    <tr>
        {Object.entries(item).map(([key, value]) => {
            return (
                <Cell key={key} cellData={
                    typeof value === "object" ? JSON.stringify(value) : value} />
            )
        })}      
    </tr>

  )
}

export default Row
