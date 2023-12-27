import HomeCard from "../components/HomeCard"
import waterImg from "/section-2-water-image.svg"
import sunImg from "/section-2-sun-image.svg"
import Fertiliging from "/section-2-fertilizing-image.svg" 

export default function Home(){
  return (
    <main>
     <section>
       <div>
        <p>love for nature</p>
        <h1>Discover Your Green Side</h1>
        <p>We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, allowing you to create your very own green oasis. </p>
        <button>Shop now</button>
        <div>
          <img src="/section-1-left-image-plant.svg" alt="" />
        </div>
       </div>

      <div>
        <img src="/section-1-right-image-plant.svg" alt="" />
      </div>
     </section>

     <section>
      <div>
        <h2>Steps To Take Care Of Your Plants</h2>
        <p>By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you'll be well on your way to maintaining healthy and thriving plants.</p>
      </div>
      <div>
        <HomeCard 
          image={waterImg} 
          imageDescription="water-image" 
          title="Watering"
          text="water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration."  
        />
        <HomeCard 
          image={sunImg}
          imageDescription="sun-img" 
          title="Sunlight" 
          text="Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs"
        />
        <HomeCard 
          image={Fertiliging}
          imageDescription="Fertilizing"
          title="Nutrients and Fertilizing"
          text="Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula."
        />
      </div>      
     </section>


    </main>
  )
}