import './Footer.css'
import arr from '../../assets/image/img_26.png'
export default function Footer() {
  return (
    <div style={{width:'100%' ,height:'440px', backgroundColor: '#F5F4F4', paddingTop: '40px', paddingLeft: '72px', paddingRight: '72px'}}>
       <div style={{width: '1256px', height: '280px', paddingTop: '20px', gap: '10px', display: 'flex'}}>
           <div style={{width: '194px', height: '155px', paddingTop: '20px',}}>
             <h4 style={{fontWeight: "bold"}}>Account</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: "20px", fontWeight: 'normal'}}>Log In</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: '10px', fontWeight: 'normal'}}>Sign Up</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: '10px', fontWeight: 'normal'}}>Redeem a Gift Card</h4>
           </div>
          <div style={{width: '194px', height: '280px', paddingTop: '20px',}}>
             <h4 style={{fontWeight: "bold"}}>Company</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: "20px", fontWeight: 'normal'}}>Environmental Initiatives</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: '10px', fontWeight: 'normal'}}>Factories</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: '10px', fontWeight: 'normal'}}>DEI</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: '10px', fontWeight: 'normal'}}>Careers</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: '10px', fontWeight: 'normal'}}>International</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: '10px', fontWeight: 'normal'}}>Accessibility</h4>
           </div>

            <div style={{width: '194px', height: '182px', paddingTop: '20px',}}>
             <h4 style={{fontWeight: "bold"}}>Get Help</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: "20px", fontWeight: 'normal'}}>Help Center</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: '10px', fontWeight: 'normal'}}>Return Policy</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: '10px', fontWeight: 'normal'}}>Shipping Info</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: '10px', fontWeight: 'normal'}}>Careers</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: '10px', fontWeight: 'normal'}}>Bulk Orders</h4>
           </div>

            <div style={{width: '194px', height: '314px', paddingTop: '20px',}}>
             <h4 style={{fontWeight: "bold"}}>Connect</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: "20px", fontWeight: 'normal'}}>Facebook</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: '10px', fontWeight: 'normal'}}>Instagram</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: '10px', fontWeight: 'normal'}}>Twitter</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: '10px', fontWeight: 'normal'}}>Affiliates</h4>
             <h4 style={{color: '#737373', letterSpacing: '1.4px', paddingTop: '10px', fontWeight: 'normal'}}>Out Stores</h4>
           </div>
            <div style={{width: '480px', height: '93px', display: 'flex', padding: "20px"}}>
              <input placeholder='Email Address' style={{width: '388px', height: '53px', border: '1px solid grey', paddingLeft: '15px',fontSize: '18px', outline: 'none'}} type="text"/>
              <img src={arr} alt=""/>
            </div>
       </div>
        <nav style={{paddingTop: '16px', paddingBottom: '16px', marginTop: '10px'}}>
           <ul style={{display: 'flex', gap: '11px', color: 'gray', listStyle: 'none', fontSize: '12px', fontWeight: 'normal'}}>
             <li>Privacy Policy</li>
             <li>Terms of Service</li>
             <li>Do Not Sell or Share My Personal Information</li>
             <li>CS Supply Chain Transparency</li>
             <li>Vendor Code of Conduct</li>
             <li>Sitemap Pages</li>
             <li>Sitemap Products</li>
             <li></li>
           </ul>
           <h4 style={{textAlign: 'center', color: 'gray', paddingTop: '20px',}}>© 2023 All Rights Reserved</h4>
        </nav>
    </div>
  )
}