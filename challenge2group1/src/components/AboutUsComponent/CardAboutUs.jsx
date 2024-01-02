export default function CardAboutUs({dev}){
  return (
    <section 
      key={dev.id}
      className="w-1/2  mt-10 h-96 flex flex-col items-center mx-auto bg-lunar rounded-tl-2xl"
    >
      <img 
        src={`src/${dev.imgUrl}`} 
        alt=" "
        className="w-44 rounded-full mt-10"
      />
      <div
        className="mt-6 text-white "
      >
        <p
          className=""
        >{dev.name}, {dev.idade}, {dev.cidade}</p>
        <p>{dev.aboutMe}</p>
      </div>
    </section>
  )
}