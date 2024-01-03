export default function CardAboutUs({dev}){
  return (
    <section 
      key={dev.id}
      className="w-1/3 mt-10 h-96 flex flex-col items-center mx-auto bg-lunar rounded shadow-xl"
    >
      <img 
        src={`src/${dev.imgUrl}`} 
        alt=" "
        className="w-44 rounded-full mt-10"
      />
      <div
        className="mt-6 mb-6  text-white "
      >
        <p
          className=""
        >{dev.name}, {dev.idade}, {dev.cidade}</p>
        <p
          className=""
        >{dev.aboutMe}</p>
      </div>
    </section>
  )
}