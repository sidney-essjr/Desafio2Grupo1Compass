export default function HomeCard({image, imageDescription, title, text}){
  return(
    <section className="flex-col my-5 mx-5 md:mx-20">
      <img className=" mx-auto mb-6" src={image} alt={imageDescription} />
      <h2 className="font-lato font-bold text-2xl text-center mb-6">{title}</h2>
      <p className="p-style">{text}</p>
    </section>
  )
}