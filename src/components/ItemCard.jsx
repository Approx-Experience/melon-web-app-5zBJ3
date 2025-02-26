const ItemCard = ({ item }) => {
  return (
    <div className='item-card'>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span>${item.price}</span>
    </div>
  )
}
export default ItemCard
