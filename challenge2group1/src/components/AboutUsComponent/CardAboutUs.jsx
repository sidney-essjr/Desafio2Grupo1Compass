export default function CardAboutUs({name, age, city, description}){
  return (
    <section>
      <p>{name}, {age}, {city}</p>
      <p>{description}</p>
    </section>
  )
}