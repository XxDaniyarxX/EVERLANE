import Family from '../assets/image/Family.png'
import img_3 from '../assets/image/img_3.png'
import img_4 from '../assets/image/img_4.png'
import img_5 from '../assets/image/img_5.png'
import img_6 from '../assets/image/img_6.png'
import img_7 from '../assets/image/img_7.png'
import img_8 from '../assets/image/img_8.png'
import img_9 from '../assets/image/mengg.png'
import img_10 from '../assets/image/img_9png.png'
import img_11 from '../assets/image/img_11.png'
import img_12 from '../assets/image/les.png'
import img_13 from '../assets/svg/arrowleft.svg'
import img_14 from '../assets/image/img_12.png'
import img_15 from '../assets/image/img_13.png'
import img_16 from '../assets/image/img_14.png'
import img_17 from '../assets/image/img_15.png'
import img_18 from '../assets/image/img_16.png'
import img_19 from '../assets/image/img_17.png'
import img_20 from '../assets/image/img_18.png'
import img_21 from '../assets/image/img_19.png'
import img_22 from '../assets/image/img_20.png'
import img_23 from '../assets/image/img_21.png'
import img_24 from '../assets/image/img_22.png'
import img_28 from '../assets/image/img_24.png'
import img_29 from '../assets/image/img_25.png'
import img_25 from '../assets/svg/box.svg'
import img_26 from '../assets/svg/obb.svg'
import img_27 from '../assets/svg/map.svg'
import stars from '../assets/svg/stars.svg'
import arow from '../assets/svg/arow.svg'
import '../styles/Men.css'


export default function Men() {
  return (
    <div>
      <section style={{height: '5700px'}}>
        <img src={Family} alt=""/>
        <div style={{width: '100%', height: '534px',}}>
          <h3 style={{
            color: '#262626',
            fontSize: '24px',
            fontWeight: 'normal',
            paddingTop: '90px',
            textAlign: 'center'
          }}>Shop by Category</h3>
          <div style={{
            width: '1316px',
            height: '295px',
            display: 'flex',
            gap: '8px',
            margin: '30px auto'
          }}>
            <div style={{
              width: '1316px',
              height: '295px',
              gap: '8px',
              margin: '0 auto'
            }}>
              <div style={{width: '212px', height: '295px'}}>
                <img width={212} height={263} src={img_3} alt=""/>
                <h3 className="h3-img" style={{
                  textAlign: 'center',
                  fontWeight: 'normal'
                }}>SHIRTS </h3>
              </div>
            </div>
            <div style={{
              width: '1316px',
              height: '295px',
              gap: '8px',
              margin: '0 auto'
            }}>
              <div style={{width: '212px', height: '295px'}}>
                <img width={212} height={263} src={img_4} alt=""/>
                <h3 className="h3-img" style={{
                  textAlign: 'center',
                  fontWeight: 'normal'
                }}>DENIM </h3>
              </div>
            </div>

            <div style={{
              width: '1316px',
              height: '295px',
              gap: '8px',
              margin: '0 auto'
            }}>
              <div style={{width: '212px', height: '295px'}}>
                <img width={212} height={263} src={img_5} alt=""/>
                <h3 className="h3-img" style={{
                  textAlign: 'center',
                  fontWeight: 'normal'
                }}>TEES </h3>
              </div>
            </div>
            <div style={{
              width: '1316px',
              height: '295px',
              gap: '8px',
              margin: '0 auto'
            }}>
              <div style={{width: '212px', height: '295px'}}>
                <img width={212} height={263} src={img_6} alt=""/>
                <h3 className="h3-img" style={{
                  textAlign: 'center',
                  fontWeight: 'normal'
                }}>PANTS </h3>
              </div>
            </div>

            <div style={{
              width: '1316px',
              height: '295px',
              gap: '8px',
              margin: '0 auto'
            }}>
              <div style={{width: '212px', height: '295px'}}>
                <img width={212} height={263} src={img_7} alt=""/>
                <h3 className="h3-img" style={{
                  textAlign: 'center',
                  fontWeight: 'normal'
                }}>SWEATERS </h3>
              </div>
            </div>
            <div style={{
              width: '1316px',
              height: '295px',
              gap: '8px',
              margin: '0 auto'
            }}>
              <div style={{width: '212px', height: '295px'}}>
                <img width={212} height={263} src={img_8} alt=""/>
                <h3 className="h3-img" style={{
                  textAlign: 'center',
                  fontWeight: 'normal'
                }}>OUTERWEAR </h3>
              </div>
            </div>

          </div>
        </div>

        <div style={{
          width: '100%',
          height: '534px',
          gap: '12px',
          display: 'flex',
          paddingLeft: '42px',
          paddingRight: '42px'
        }}>
          <div style={{width: '430px', height: '534px', position: 'relative'}}>
            <h4 style={{
              position: 'absolute',
              fontSize: '40px',
              fontWeight: 'normal',
              color: 'white',
              marginLeft: '110px',
              marginTop: '210px'
            }}>New Arrivals</h4>
            <button style={{
              position: 'absolute',
              width: '240px',
              height: '41px',
              backgroundColor: 'white',
              border: 'none',
              marginLeft: '100px',
              marginTop: '290px',
            }}>SHOP THE LATEST
            </button>
            <img width={430} height={534} src={img_9} alt=""/>

          </div>
          <div style={{width: '430px', height: '534px', position: 'relative'}}>
            <h4 style={{
              position: 'absolute',
              fontSize: '40px',
              fontWeight: 'normal',
              color: 'white',
              marginLeft: '110px',
              marginTop: '210px'
            }}>Best-Sellers</h4>
            <button style={{
              position: 'absolute',
              width: '240px',
              height: '41px',
              backgroundColor: 'white',
              border: 'none',
              marginLeft: '100px',
              marginTop: '290px',
            }}>SHOP YOUR FAVORITES
            </button>
            <img width={430} height={534} src={img_10} alt=""/>

          </div>
          <div style={{width: '430px', height: '534px', position: 'relative'}}>
            <h4 style={{
              position: 'absolute',
              fontSize: '40px',
              fontWeight: 'normal',
              color: 'white',
              marginLeft: '110px',
              marginTop: '210px'
            }}>The Holiday Outfit</h4>
            <button style={{
              position: 'absolute',
              width: '240px',
              height: '41px',
              backgroundColor: 'white',
              border: 'none',
              marginLeft: '100px',
              marginTop: '290px',
            }}>SHOP OCCASION
            </button>
            <img width={430} height={534} src={img_11} alt=""/>

          </div>
        </div>
        <nav style={{
          width: '100%',
          height: '461px',
          paddingTop: '90px',
          paddingBottom: '90px',
          paddingRight: '42px',
          paddingLeft: '42px'
        }}>
          <h4 style={{
            position: 'absolute',
            fontSize: '32px',
            fontWeight: 'normal',
            color: 'white',
            marginLeft: '350px',
            marginTop: '70px'
          }}>We’re on a Mission To Clean Up the Industry</h4>
          <h4 style={{
            position: 'absolute',
            fontSize: '16px',
            fontWeight: 'normal',
            color: 'white',
            marginLeft: '460px',
            marginTop: '120px',
            letterSpacing: '0.6px'
          }}>Read about our progress in our latest Impact Report.</h4>
          <button style={{
            position: 'absolute',
            width: '240px',
            height: '41px',
            backgroundColor: 'white',
            border: 'none',
            marginLeft: '540px',
            marginTop: '170px',
          }}>LEARN MORE
          </button>
          <img width={1316} height={281} src={img_12} alt=""/>
        </nav>
        <div style={{
          width: '100%',
          height: '817px',
          paddingTop: '90px',
          paddingBottom: '73px'
        }}>
          <h3 style={{
            fontSize: '30px',
            fontWeight: 'normal',
            textAlign: 'center'
          }}>Everlane Favorites</h3>
          <h3 style={{
            fontSize: '22px',
            fontWeight: 'normal',
            textAlign: 'center',
            paddingTop: '20px',
            paddingBottom: '30px'
          }}>Beautifully Functional. Purposefully Designed. Consciously
            Crafted.</h3>
          <div className='h4-hh' style={{
            width: '100%',
            height: '477px',
            gap: '12px',
            fontSize: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src={img_13} alt=""/>
            <div style={{width: '282px', height: '461px',}}>
              <img width={282} src={img_14} alt=""/>
              <div style={{
                display: 'flex',
                width: '282px',
                justifyContent: 'space-between'
              }}>
                <h4>The Waffle Long-Sleeve Crew</h4>
                <h4>$60</h4>
              </div>
              <h4 style={{color: '#737373', paddingTop: '5px'}}>Bone</h4>

            </div>
            <div style={{width: '282px', height: '461px'}}>
              <img width={282} src={img_15} alt=""/>
              <div style={{
                display: 'flex',
                width: '282px',
                justifyContent: 'space-between'
              }}>
                <h4>The Bomber Jacket | Uniform</h4>
                <h4>$148</h4>
              </div>
              <h4 style={{color: '#737373', paddingTop: '5px'}}>Toasted
                Coconut</h4>
            </div>
            <div style={{width: '282px', height: '461px'}}>
              <img width={282} src={img_16} alt=""/>
              <div style={{
                display: 'flex',
                width: '282px',
                justifyContent: 'space-between'
              }}>
                <h4>The Slim 4-Way Stretch Organic Jean | Uniform</h4>
                <h4>$98</h4>
              </div>
              <h4 style={{color: '#737373', paddingTop: '5px'}}>Dark Indigo</h4>
            </div>
            <div style={{width: '282px', height: '461px'}}>
              <img width={282} src={img_17} alt=""/>
              <div style={{
                display: 'flex',
                width: '282px',
                justifyContent: 'space-between'
              }}>
                <h4>The Essential Organic Crew</h4>
                <h4>$30</h4>
              </div>
              <h4 style={{color: '#737373', paddingTop: '5px'}}>Vintage
                Black</h4>
            </div>
            <div style={{width: '120px', height: '461px'}}>
              <img width={120} src={img_18} alt=""/>
              <div style={{
                display: 'flex',
                width: '282px',
                justifyContent: 'space-between'
              }}>
                <h4>The Heavyweight </h4>
              </div>
              <h4 style={{color: '#737373', paddingTop: '5px'}}>Heathered
                Brown</h4>
            </div>
            <img src={arow} alt=""/>
          </div>

          <div style={{
            width: '100%',
            height: '47px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '13px'
          }}>
            <div style={{
              width: '9px',
              height: '9px',
              backgroundColor: "black",
              borderRadius: '50%'
            }}></div>
            <div style={{
              width: '9px',
              height: '9px',
              backgroundColor: "#DDDBDC",
              borderRadius: '50%'
            }}></div>
            <div style={{
              width: '9px',
              height: '9px',
              backgroundColor: "#DDDBDC",
              borderRadius: '50%'
            }}></div>
            <div style={{
              width: '9px',
              height: '9px',
              backgroundColor: "#DDDBDC",
              borderRadius: '50%'
            }}></div>
          </div>
          <nav style={{
            width: '1400',
            height: '806px',
            gap: '74px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src={img_13} alt=""/>
            <div style={{
              width: '530px',
              height: '253px',
              paddingLeft: '42px',
              paddingRight: '42px'
            }}>
              <h4 style={{fontWeight: 'normal', paddingBottom: '40px'}}>People
                Are
                Talking</h4>
              <img src={stars} alt=""/>
              <div className='div-p'>
                <p>“Love this shirt! Fits perfectly and the</p> <p> fabric is
                thick without </p>
                <p>being stiff.”</p>
              </div>
              <h4 style={{fontWeight: 'normal', paddingTop: '40px'}}>-- JonSnSF,
                The Heavyweight Overshirt</h4>
            </div>
            <img width={530} src={img_19} alt=""/>
            <img src={arow} alt=""/>
          </nav>
          <div style={{
            width: '100%',
            height: '47px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '13px'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              backgroundColor: "black",
              borderRadius: '50%'
            }}></div>
            <div style={{
              width: '8px',
              height: '8px',
              backgroundColor: "#DDDBDC",
              borderRadius: '50%'
            }}></div>
            <div style={{
              width: '9px',
              height: '9px',
              backgroundColor: "#DDDBDC",
              borderRadius: '50%'
            }}></div>
            <div style={{
              width: '9px',
              height: '9px',
              backgroundColor: "#DDDBDC",
              borderRadius: '50%'
            }}></div>
          </div>
          <main style={{
            width: '100%',
            height: '967px',
            display: 'flex',
            gap: '20px',
            marginTop: '70px',
            borderTop: '1px solid black',
            paddingTop: '90px',
            paddingBottom: '90px',
            paddingRight: '185px',
            paddingLeft: '185px'
          }}>
            <div style={{width: '505px', height: '787px', textAlign: 'center'}}>
              <h4 style={{
                fontWeight: 'normal',
                fontSize: '26px',
                paddingBottom: '20px'
              }}>Our Holiday Gift Picks</h4>
              <img width={505} src={img_28} alt=""/>
              <h4 style={{
                letterSpacing: '1.4px',
                color: '#262626',
                paddingTop: '20px',
                fontWeight: 'normal'
              }}>The best presents for everyone on your list.</h4>
              <h4 style={{
                letterSpacing: '1.4px',
                color: '#262626',
                paddingTop: '30px',
                textDecoration: 'underline',
                fontWeight: 'normal'
              }}>Read More</h4>
            </div>

            <div style={{width: '505px', height: '787px', textAlign: 'center'}}>
              <h4 style={{
                fontWeight: 'normal',
                fontSize: '26px',
                paddingBottom: '20px'
              }}>Cleaner Fashion</h4>
              <img width={505} src={img_29} alt=""/>
              <h4 style={{
                letterSpacing: '1.4px',
                color: '#262626',
                paddingTop: '20px',
                fontWeight: 'normal'
              }}>See the sustainability efforts behind each of our
                products.</h4>
              <h4 style={{
                letterSpacing: '1.4px',
                color: '#262626',
                paddingTop: '30px',
                textDecoration: 'underline',
                fontWeight: 'normal'
              }}>Learn More</h4>
            </div>


          </main>
          <div style={{width: '100%', height: '770px',}}>
            <div style={{
              width: '100%',
              height: '433px',
              paddingLeft: '42px',
              paddingRight: '42px'
            }}>
              <div style={{
                width: '1316px',
                height: '196px',
                paddingTop: '110px',
                textAlign: 'center',
                borderTop: '1px solid black'
              }}>
                <h4 style={{fontSize: '34px', fontWeight: 'normal'}}>Everlane On
                  You</h4>
                <h4 style={{
                  fontWeight: 'normal',
                  paddingTop: '25px',
                  letterSpacing: '1.4px'
                }}>Share your latest look with #EverlaneOnYou for a chance to be
                  featured.</h4>
                <h4 style={{
                  fontWeight: 'normal',
                  textDecoration: 'underline',
                  letterSpacing: '1.4px',
                  paddingTop: '10px'
                }}>Add Your Photo</h4>
              </div>
              <div className='img-aa' style={{
                width: '1316px',
                height: '196px',
                gap: '13px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img width={30} height={30} src={img_13} alt=""/>
                <img src={img_20} alt=""/>
                <img src={img_21} alt=""/>
                <img src={img_22} alt=""/>
                <img src={img_23} alt=""/>
                <img src={img_24} alt=""/>
                <img width={30} height={30} src={arow} alt=""/>

              </div>
            </div>

            <div style={{
              width: '100%',
              height: '337px',
              paddingBottom: '90px',
              paddingTop: '50px',
              paddingRight: '77px',
              paddingLeft: '77px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div
                style={{width: '411px', height: '157px', textAlign: 'center',}}>
                <div style={{width: '88px', margin: "0 auto"}}>
                  <img width={78} src={img_25} alt=""/>
                </div>
                <h4 style={{
                  fontWeight: 'bold',
                  paddingTop: "10px",
                  paddingBottom: '5px'
                }}>Complimentary Shipping</h4>
                <h4 style={{
                  color: '#262626',
                  fontWeight: 'normal',
                  letterSpacing: '1.4px'
                }}>Enjoy free shipping on U.S. orders over </h4>
                <h4 style={{
                  color: '#262626',
                  fontWeight: 'normal',
                  letterSpacing: '1.4px'
                }}>100$ .</h4>
              </div>
              <div
                style={{width: '411px', height: '157px', textAlign: 'center'}}>
                <img width={78} src={img_26} alt=""/>
                <h4 style={{
                  fontWeight: 'bold',
                  paddingTop: "10px",
                  paddingBottom: '5px'
                }}>Consciously Crafted</h4>
                <h4 style={{
                  color: '#262626',
                  fontWeight: 'normal',
                  letterSpacing: '1.4px'
                }}>Designed with you and the planet in</h4>
                <h4 style={{
                  color: '#262626',
                  fontWeight: 'normal',
                  letterSpacing: '1.4px'
                }}>mind.</h4>
              </div>

              <div
                style={{width: '411px', height: '157px', textAlign: 'center'}}>
                <img width={78} src={img_27} alt=""/>
                <h4 style={{
                  fontWeight: 'bold',
                  paddingTop: "10px",
                  paddingBottom: '5px'
                }}>Come Say Hi</h4>
                <h4 style={{
                  color: '#262626',
                  fontWeight: 'normal',
                  letterSpacing: '1.4px'
                }}>We have 11 stores across the U.S.</h4>
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

