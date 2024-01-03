export default function CardAboutUs({dev}){
  return (
    <section className="w-1/2 mt-10 mb-10 h-96 flex flex-col items-center mx-auto bg-lunar rounded-tl-2xl" key={dev.id} >
      <img className="w-44 rounded-full mt-10" src={`src/${dev.imgUrl}`} alt=" " />
      <div className="mt-6 text-white ">
        <p className=" ">{dev.name}, {dev.idade}, {dev.cidade}</p>
        <p>{dev.aboutMe}</p>
      </div>
    </section>
  )
}