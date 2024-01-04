export default function HomeCard({image, imageDescription, title, text}){
  return(
    <section className="flex-col mb-6">
      <img className=" mx-auto mb-2 md:mb-6" src={image} alt={imageDescription} />
      <h2 className="font-lato font-bold text-2xl text-center mb-2 md:mb-6">{title}</h2>
      <p className="p-style">{text}</p>
    </section>
  )
}