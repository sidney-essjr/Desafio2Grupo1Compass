export default function CardAboutUs({dev}){
  return (
    <section className="w-1/2 mb-10 h-96 flex flex-col items-center mx-auto bg-lunar rounded-2xl" key={dev.id} >
      <img className="w-44 rounded-borderFull mt-10" src={`src/${dev.imgUrl}`} alt=" " />
      <div className="m-6 text-white ">
        <p className=" ">{dev.name}, {dev.idade}, {dev.cidade}</p>
        <p>{dev.aboutMe}</p>
      </div>
    </section>
  )
}

// adicionar botão de linkedin 
// cor de fundo branco gelo -> bg-gelo
// separar em dois cards por "linha"