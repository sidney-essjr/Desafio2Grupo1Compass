import HomeCard from "../components/HomeComponents/HomeCard"
import HomeContainer from "../components/HomeComponents/HomeContainer"
import HomeButton from "../components/HomeComponents/HomeButton"
import HomeItemContainer from "../components/HomeComponents/HomeItemContainer"

export default function Home(){
  return (
    <main>
     <HomeContainer>
       <HomeItemContainer>
        <p>love for nature</p>
        <h1>Discover Your Green Side</h1>
        <p>We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, allowing you to create your very own green oasis. </p>
        <HomeButton text="Shop now" />
          <img src="/section-1-left-image-plant.svg" alt="" />
       </HomeItemContainer>
        <img src="/section-1-right-image-plant.svg" alt="" />
     </HomeContainer>

     <HomeContainer>
      <HomeItemContainer>
        <h2>Steps To Take Care Of Your Plants</h2>
        <p>By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you'll be well on your way to maintaining healthy and thriving plants.</p>
      </HomeItemContainer>
      <HomeItemContainer>
        <HomeCard 
          image="/section-2-water-image.svg" 
          imageDescription="water-image" 
          title="Watering"
          text="water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration."  
        />
        <HomeCard 
          image= "/section-2-sun-image.svg"
          imageDescription="sun-img" 
          title="Sunlight" 
          text="Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs"
        />
        <HomeCard 
          image="/section-2-fertilizing-image.svg"
          imageDescription="Fertilizing"
          title="Nutrients and Fertilizing"
          text="Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula."
        />
      </HomeItemContainer>      
     </HomeContainer>

     <HomeContainer>
      <img src="../../public/section-2-image-1.svg" alt="" />
      <img src="../../public/section-2-image-2.svg" alt="" />
      <HomeItemContainer>
        <img src="../../public/section-2-image-3.svg" alt="" />
        <p>Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, allowing you to create your very own green oasis. In addition to our extensive plant selection, we also provide gardening kits and fertilizers to equip you with everything you need to nurture your plants and achieve gardening success. But we don't stop there! We believe that knowledge is the key to a thriving garden, so we offer a wealth of information and resources on gardening techniques, plant care tips, and landscaping ideas. Whether you're a seasoned gardener or just starting your green journey, our goal is to inspire and support you every step of the way. Get ready to explore our virtual garden and discover the joys of gardening with us!</p>
        <HomeButton text="See more photos"/>
      </HomeItemContainer>
     </HomeContainer>

     <HomeContainer>
      <h2>this weeks Most Popular and best selling</h2>

     </HomeContainer>

     <HomeContainer>
      <h2>Plants in Sale</h2>
     </HomeContainer>
    </main>
  )
}