import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
console.log(data);


const App = () => {
  const stores= data.map(items=>{
    return(
      <Card
      key={items.id}
      img={items.coverImg}
      rating={items.stats.rating}
      review count={items.stats.reviewCount}
      location={items.location}
      title={items.title}
      price={items.price}
      openSpots={items.openSpots}
      />
    )
  })
  return (
    <div>
    <Navbar/>
    <section className="cards--list">
    {stores}
    </section>
   
    </div>
    
  )
}

export default App