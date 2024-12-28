import img from '../assets/image/img_27.png'
import img2 from '../assets/image/img_28.png'
import img3 from '../assets/image/img_29.png'
import img4 from '../assets/image/img_30.png'
import img5 from '../assets/image/img_31.png'
import img6 from '../assets/image/img_32.png'
import img7 from '../assets/image/img_33.png'
import img8 from '../assets/image/img_34.png'
import img9 from '../assets/image/img_35.png'
export default function About() {
  return (
    <main>
      <img src={img} alt=""/>
      <div style={{width: '100%', height: '525px', paddingTop: '76px' , paddingBottom: '3px', paddingLeft:'258px', paddingRight: "258px" }}>
         <div style={{width: '780px', height: '373px', fontSize: '38px', fontWeight: 'normal', textAlign: 'center'}}>
           At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it Radical Transparency.
         </div>
      </div>
      <div style={{display: "flex"}}>
        <img width={700} src={img2} alt=""/>
        <div style={{backgroundColor: '#E6DED8', width: '700px', paddingTop: '282px', height: '733px', paddingRight: '70px', paddingLeft: '70px'}}>
         <h4>OUR FACTORIES</h4>
          <h4 style={{fontSize: '40px', fontWeight: 'normal'}}>Our ethical approach.</h4>
          <div style={{width: '580px', letterSpacing: "1.4px", fontWeight: 'normal',height: '84px', marginTop: '20px'}}>
            We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.
          </div>
        </div>
      </div>
      <img width={1400} height={637} src={img3} alt=""/>
      <div style={{display: 'flex', width: '1400px', height: '552px'}}>
        <div
          style={{backgroundColor: '#E6DED8', width: '700px', height: '552px'}}>
          <div style={{
            backgroundColor: '#E6DED8',
            width: '700px',
            paddingTop: '182px',
            paddingRight: '70px',
            paddingLeft: '70px'
          }}>
            <h5>OUR QUALITY</h5>
            <h4 style={{fontSize: '40px', fontWeight: 'normal',}}>Designed
             <p> to last.</p></h4>
            <div style={{
              width: '580px',
              letterSpacing: "1.4px",
              fontWeight: 'normal',
              height: '64px',
              marginTop: '20px'
            }}>
              At Everlane, we’re not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.
            </div>
          </div>
        </div>
        <img src={img4} alt=""/>
      </div>
      <img width={1400} src={img5} alt=""/>
      <nav style={{width: '1400px', height: '660px', display: 'flex'}}>
        <div>
          <img width={700} src={img6} alt=""/>
        </div>
        <div style={{width: '700px', height: '660px', paddingLeft: '70px', paddingTop: '240px', paddingRight: '70px'}}>
           <h5>OUR PRICES</h5>
           <h4 style={{fontWeight: 'normal', fontSize: '40px'}}>Radically Transparent.</h4>
          <div style={{width: '580px', height: '80px', marginTop: '20px'}}>
            <h4 style={{fontWeight: 'normal', letterSpacing: '1.4px'}}>We believe our customers have a right to know how much their clothes cost to make. We reveal the true costs behind all of our products—from materials to labor to transportation—then offer them to you, minus the traditional retail markup.
            </h4>
          </div>
        </div>
      </nav>

       <div style={{gap: '20px', textAlign: "center", paddingRight: '200px', paddingLeft: '200px', paddingTop: '82px', paddingBottom: '82px'}}>
         <h4 style={{fontWeight: 'normal', fontSize: '32px'}}>More to Explore</h4>
         <div style={{display: "flex", gap: '20px', width: '1000px', height:'230px', marginTop: "20px"}}>
           <div style={{width: '320px', height: '230px'}}>
             <img width={320} src={img7} alt=""/>
             <h4 style={{paddingTop: "10px"}}>Our Products</h4>
           </div>

             <div style={{width: '320px', height: '230px'}}>
             <img width={320} src={img8} alt=""/>
             <h4 style={{paddingTop: "10px"}}>Our Stores</h4>
           </div>

             <div style={{width: '320px', height: '230px'}}>
             <img width={320} src={img9} alt=""/>
             <h4 style={{paddingTop: "10px"}}>Careers</h4>
           </div>

         </div>
       </div>

    </main>
  )
}

