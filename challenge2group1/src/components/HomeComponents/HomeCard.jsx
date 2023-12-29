export default function HomeCard({image, imageDescription, title, text}){
  return(
    <section className="flex-col">
      <img className=" mx-auto mb-6" src={image} alt={imageDescription} />
      <h2 className="font-lato font-bold text-2xl text-center mb-6">{title}</h2>
      <p className="pstyle">{text}</p>
    </section>
  )
}