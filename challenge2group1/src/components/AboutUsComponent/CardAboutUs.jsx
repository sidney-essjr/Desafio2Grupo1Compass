export default function CardAboutUs({dev}){
  return (
    <section key={dev.id}>
      <img src={`src/${dev.imgUrl}`} alt=" " />
      <p>{dev.name}, {dev.idade}, {dev.cidade}</p>
      <p>{dev.aboutMe}</p>
    </section>
  )
}