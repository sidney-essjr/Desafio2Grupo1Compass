export default function HomeCard({image, imageDescription, title, text}){
  return(
    <section>
      <img src={image} alt={imageDescription} />
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  )
}