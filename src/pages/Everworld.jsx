import img from '../assets/image/img_36.png'
import img1 from '../assets/image/img_37.png'
import img2 from '../assets/image/img_38.png'
import img3 from '../assets/image/img_39.png'
import img4 from '../assets/image/img_40.png'
import img5 from '../assets/image/img_41.png'
import img6 from '../assets/image/img_42.png'
import img7 from '../assets/image/img_43.png'
import img8 from '../assets/image/img_44.png'
import img9 from '../assets/image/img_45.png'
export default function Everworld() {
  return (
    <div>
        <div style={{width: '1400px', height: '393px', paddingTop:"64px" , paddingBottom:"64px", paddingLeft:"60px", paddingRight:"60px"}}>
             <div style={{width: '1280px', height:'14px', backgroundColor: "black"}}></div>
             <h3 style={{fontSize: "160px", fontWeight: 'bold'}}>everworld</h3>
             <h4 style={{fontSize: '24px', fontWeight: "normal"}}>We’re on a mission to clean up a dirty industry.
               <p>These are the people, stories, and ideas that will help us get there.</p></h4>
        </div>
        <section style={{width: "1400px", height: '1683px', padding: "120px 60px"}}>
             <h3 style={{fontSize: '54px'}}>The Latest</h3>
              <div style={{width:'1400px', height:'1360px',}}>
                   <div style={{display: "flex", gap: "24px", width: "1280px", height: "590px"}}>
                       <div style={{width: "410px", height: "510px"}}>
                         <img width={410} src={img} alt=""/>
                         <h4 style={{fontSize: "32px", fontWeight: "normal", paddingTop: "20px"}}>How To Style Winter Whites</h4>
                         <button style={{marginTop: '12px', display: "flex", alignItems: 'center', justifyContent: "center", width: '69px', height: "24px", border: '1px solid #DDDBDC', backgroundColor: 'white', borderRadius: "30px"}}>Style</button>
                       </div>
                       <div style={{width: "410px", height: "510px"}}>
                         <img width={410} src={img1} alt=""/>
                         <h4 style={{fontSize: "32px", fontWeight: "normal", paddingTop: "20px"}}> We Won A Glossy Award</h4>
                         <button style={{marginTop: "12px", display: "flex", alignItems: 'center', justifyContent: "center", width: '117px', height: "24px", border: '1px solid #DDDBDC', backgroundColor: 'white', borderRadius: "30px"}}>Transparency</button>
                        </div>
                         <div style={{width: "410px", height: "510px"}}>
                         <img width={410} src={img2} alt=""/>
                         <h4 style={{fontSize: "32px", fontWeight: "normal", paddingTop: "20px"}}>Coordinate Your Style: Matching Outfits for <p>Everyone</p></h4>
                         <button style={{marginTop: "12px", display: "flex", alignItems: 'center', justifyContent: "center", width: '69px', height: "24px", border: '1px solid #DDDBDC', backgroundColor: 'white', borderRadius: "30px"}}>Style</button>
                        </div>
                   </div>

                     <div style={{display: "flex", gap: "24px", width: "1280px", height: "590px", marginTop: '80px'}}>
                       <div style={{width: '410px', height: '510px'}}>
                         <img width={410} src={img3} alt=""/>
                         <h4 style={{
                           fontSize: '32px',
                           fontWeight: 'normal',
                           paddingTop: '20px'
                         }}>Black Friday Fund 2023</h4>
                         <button style={{
                           marginTop: '12px',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           width: '117px',
                           height: '24px',
                           border: '1px solid #DDDBDC',
                           backgroundColor: 'white',
                           borderRadius: '30px'
                         }}>Transparency
                         </button>

                       </div>
                       <div style={{width: '410px', height: '510px'}}>
                         <img width={410} src={img4} alt=""/>
                         <h4 style={{
                           fontSize: '32px',
                           fontWeight: 'normal',
                           paddingTop: '20px'
                         }}>What to Wear this Season: Holiday Outfits & Ideas</h4>
                         <button style={{marginTop: "12px", display: "flex", alignItems: 'center', justifyContent: "center", width: '69px', height: "24px", border: '1px solid #DDDBDC', backgroundColor: 'white', borderRadius: "30px"}}>Style</button>
                        </div>
                         <div style={{width: "410px", height: "510px"}}>
                         <img width={410} src={img5} alt=""/>
                         <h4 style={{fontSize: "32px", fontWeight: "normal", paddingTop: "20px"}}>Thanksgiving Outfit Ideas</h4>
                         <button style={{marginTop: "12px", display: "flex", alignItems: 'center', justifyContent: "center", width: '69px', height: "24px", border: '1px solid #DDDBDC', backgroundColor: 'white', borderRadius: "30px"}}>Style</button>
                        </div>
                   </div>
                <div style={{width:'240px', marginLeft:"500px"}}>
                  <button style={{
                    width: "240px",
                    height: "61px",
                    backgroundColor: "black",
                    color: "white",
                    padding: "20px",
                    border: 'none',
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: 'center',
                    borderRadius: '8px'
                  }}>Load more Articals
                  </button>

                </div>

              </div>
        </section>
      <img width={1400} src={img6} alt=""/>
       <div style={{width: "1400px", height: '682px', padding: '120px 60px'}}>
           <h3 style={{fontSize: '54px'}}>Our Progress</h3>
          <div style={{display: "flex", gap: '24px', width: '1820px', height: '358px'}}>
            <div style={{width: "410px", height: "358px"}}>
              <img width={410} src={img7} alt=""/>
              <h4 style={{fontSize: "32px", fontWeight: "normal", paddingTop: "10px"}}>Carbon Commitment</h4>
            </div>
              <div style={{width: "410px", height: "358px"}}>
              <img width={410} src={img8} alt=""/>
              <h4 style={{fontSize: "32px", fontWeight: "normal", paddingTop: "10px"}}>Environmental Initiatives</h4>
            </div>
              <div style={{width: "410px", height: "358px"}}>
              <img width={410} src={img9} alt=""/>
              <h4 style={{fontSize: "32px", fontWeight: "normal", paddingTop: "10px"}}>Better Factories</h4>
            </div>


          </div>
       </div>
        <div style={{height: "345px", width: "100%", backgroundColor:"black", padding: "90px 60px"}}>
           <h3 style={{fontSize: "54px", color: "white"}}>Follow us on social for more</h3>
          <button style={{width: "240px", height: '61px', padding: "20px", color:"black", backgroundColor: "white", borderRadius: '8px', border: 'none', marginTop: '31px'}}>@Everlane Instagram</button>
        </div>
    </div>
  )
}

