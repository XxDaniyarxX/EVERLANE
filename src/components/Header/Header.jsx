import './Header.css'
import arrow from '../../assets/svg/arrowrigth.svg'
import USA from '../../assets/svg/USA.svg'
import everlane from '../../assets/svg/EVERLANE.svg'
import search from '../../assets/image/img.png'
import people from '../../assets/image/img_1.png'
import shop from '../../assets/image/img_2.png'
import {Link} from 'react-router-dom'


export default function Header() {
  return (
    <header className="Header">
      <div className='header'>
        <div className='logo'>
          <div style={{display: 'flex', gap: '5px'}}>
            <h4 style={{color: 'white', fontSize: '12px'}}>Get early access on
              launches and offers.</h4>
            <h4 style={{
              color: 'white',
              fontSize: '12px',
              fontWeight: 'normal',
              textDecoration: 'underline'
            }}>Sign Up For Texts </h4>
          <img src={arrow} alt=""/>
          </div>
          <div style={{marginLeft: '1300px', position: 'absolute'}}>
            <img src={USA} alt=""/>
          </div>
        </div>
      </div>
       <div style={{width: '1400px', height: '56px',}}>
         <div style={{
           display: 'flex',
           width: '1400px',
           alignItems: 'center',
           justifyContent: 'space-between',
           paddingLeft: '68px',
           paddingRight: '28px',
           borderBottom: '1px solid #888888',
         }}>

           <div
             className="about"
             style={{
               width: '294px',
               alignItems: 'center',
               height: '56px',
               fontSize: '12px',
               color: '#262626',
               display: 'flex',
               justifyContent: 'space-around',
             }}
           >
             <Link style={{textDecoration: 'none', color: 'black'}} to={`women`}>
               <h4 className="hover-line">Women</h4>
             </Link>
             <Link style={{textDecoration: 'none', color: 'black'}} to={`/`}>
               <h4 className="hover-line">Men</h4>
             </Link>
             <Link style={{textDecoration: 'none', color: 'black'}} to={`about`}>
               <h4 className="hover-line">About</h4>
             </Link>
             <Link style={{textDecoration: 'none', color: 'black'}} to={`ever-world`}>
               <h4 className="hover-line">Everworld Stories</h4>
             </Link>


           </div>


           <div style={{paddingRight: '200px'}}><img src={everlane} alt=""/>
           </div>
           <div style={{
             width: '120px',
             height: '40px',
             display: 'flex',
             alignItems: 'center',
             gap: '15px'
           }}>
             <img width={20} src={search} alt=""/>
             <img width={20} src={people} alt=""/>
             <img width={20} src={shop} alt=""/>
           </div>
         </div>
       </div>
       <div style={{width: '100%', height: '56px', alignItems: 'center', }}>
            <ul style={{display: "flex", listStyle: 'none', paddingTop: '20px', width: "1400px", alignItems: 'center', justifyContent: 'center', gap: "30px", fontSize: '12px', color: '#262626', fontWeight: 'normal'}}>
              <li>Holiday Gifting</li>
              <li>New Arrivals</li>
              <li>Best-Sellers</li>
              <li>Clothing</li>
              <li>Tops & Sweaters</li>
              <li>Pants & Jeans</li>
              <li>Outerwear</li>
              <li>Shoes & Bags</li>
              <li style={{color: 'red'}}>Sale</li>
            </ul>
       </div>
    </header>
  )
}

