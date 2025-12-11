import Entry from "./components/Entry"
import Header from "./components/Header"
import data from "./components/data"

const content = data.map(item => {
  return (
    <Entry 
      key={item.id}
      {...item}
      // img={item.img}
      // title={item.title}
      // country={item.country}
      // dates={item.dates}
      // googleMapsLink={item.googleMapsLink}
      // text={item.text}
    />
  )
})

const App = () => {
  return (
    <>
      <Header /> 
      <main className="container">
        {content}
      </main> 
    </>
  )
}

export default App
