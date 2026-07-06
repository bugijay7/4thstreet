import React from 'react';

// --- IMAGE & VIDEO IMPORTS ---
import logoPng from './assets/logonew1.png';
import heroVideo from './assets/hero-bg.mp4'; 
import cutImage1 from './assets/cut-1.jpg';
import cutImage2 from './assets/cut-2.jpg';
import cutImage3 from './assets/cut-3.jpg';
import cutImage4 from './assets/cut-4.jpg';
import cutImage5 from './assets/cut-5.jpg';
import cutImage6 from './assets/cut-6.jpg';

function App() {
  const services = [
    { name: "Premium Haircut", price: "KES 500", desc: "Precision fade, taper, or classic scissor cut tailored to your style." },
    { name: "Beard Trim & Shape", price: "KES 300", desc: "Razor lining, beard conditioning, and hot towel finish." },
    { name: "The Combo (Cut + Beard)", price: "KES 700", desc: "Our signature full-service package for a completely fresh look." },
    { name: "Kids' Haircut", price: "KES 400", desc: "Gentle and stylish cuts for the little ones (under 12)." },
    { name: "Hair Tattoo / Lines", price: "KES 150+", desc: "Custom hair art and sharp surgical lines." },
    { name: "Facial Scrub & Wash", price: "KES 400", desc: "Deep cleansing, exfoliating scrub, and steaming face treatment." }
  ];

  const barbers = [
    { name: "Alex", role: "Master Barber", specialty: "Fades & Sharp Lineups" },
    { name: "Brian", role: "Beard Stylist", specialty: "Hot Towel Shaves & Grooming" },
    { name: "Chris", role: "Junior Barber", specialty: "Modern Trends & Kids' Cuts" }
  ];

  // Inline font assignment to guarantee they load without forcing you to modify tailwind.config.js immediately
  const luxuryStyles = {
    fontFamily: {
      serif: { fontFamily: "'Cormorant Garamond', Georgia, serif" },
      sans: { fontFamily: "'Montserrat', sans-serif" }
    }
  };

  return (
    <div style={luxuryStyles.fontFamily.sans} className="bg-black text-zinc-300 min-h-screen selection:bg-amber-500 selection:text-black antialiased font-light">
      
      {/* --- NAVBAR --- */}
      <div className="navbar bg-black/90 backdrop-blur-md border-b border-zinc-900 sticky top-0 z-50 px-6 md:px-16">
        <div className="navbar-start">
          <a href="#" className="flex items-center gap-2 py-1">
            <img 
              src={logoPng} 
              alt="The 4th Street Logo" 
              className="h-9 w-auto md:h-11 object-contain" 
              style={{ filter: 'brightness(1.1)' }}
            />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium uppercase tracking-widest text-xs gap-6 text-zinc-400">
            <li><a href="#about" className="hover:text-amber-500 transition duration-300">About</a></li>
            <li><a href="#services" className="hover:text-amber-500 transition duration-300">Services</a></li>
            <li><a href="#team" className="hover:text-amber-500 transition duration-300">Our Barbers</a></li>
            <li><a href="#contact" className="hover:text-amber-500 transition duration-300">Location</a></li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end lg:hidden">
            <button tabIndex={0} className="btn btn-ghost btn-circle text-white" aria-label="Open Menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h11" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content fixed left-0 right-0 w-auto mx-4 mt-3 z-[60] p-6 shadow-2xl bg-zinc-950 border border-zinc-900 rounded-none text-zinc-400 font-medium uppercase tracking-widest text-xs gap-3">
              <li><a href="#about" className="active:bg-amber-500 active:text-black py-3">About</a></li>
              <li><a href="#services" className="active:bg-amber-500 active:text-black py-3">Services</a></li>
              <li><a href="#team" className="active:bg-amber-500 active:text-black py-3">Our Barbers</a></li>
              <li><a href="#contact" className="active:bg-amber-500 active:text-black py-3">Location</a></li>
            </ul>
          </div>

          <a href="tel:0743454537" className="btn bg-transparent hover:bg-amber-500 text-amber-500 hover:text-black border border-amber-500/60 rounded-none font-medium uppercase tracking-widest text-xs hidden lg:flex transition-all duration-300 px-6">
            Call to Book
          </a>
        </div>
      </div>

      {/* --- HERO SECTION WITH RESPONSIVE BACKGROUND --- */}
      <div className="hero min-h-[90vh] relative overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover md:hidden opacity-40"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <img 
          src={cutImage1} 
          alt="The 4th Street Barbershop Premium Grooming" 
          className="absolute z-0 w-full h-full object-cover hidden md:block opacity-35"
        />

        <div className="hero-overlay bg-gradient-to-t from-black via-black/80 to-transparent relative z-10"></div>
        
        <div className="hero-content text-center py-20 px-4 relative z-20">
          <div className="max-w-3xl">
            <div className="text-amber-500 font-medium tracking-widest uppercase text-xs mb-6">
              Kinoo's Premier Grooming Parlour
            </div>
            <h1 style={luxuryStyles.fontFamily.serif} className="mb-8 text-5xl md:text-7xl font-light text-white tracking-wide leading-tight italic">
              Your Style. <br />
              <span className="text-amber-500 not-italic font-normal">Your Confidence.</span>
            </h1>
            <p className="mb-10 text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light tracking-wide">
              Welcome to <strong className="text-white font-medium">The 4th Street</strong> at the Kinoo Old Petrol Station hub. A sanctuary of tailored aesthetics, fine craftsmanship, and exceptional grooming standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:0743454537" className="btn bg-amber-500 hover:bg-amber-600 text-black border-none rounded-none font-semibold text-xs uppercase tracking-widest px-8 h-12">
                Book Appointment
              </a>
              <a href="#services" className="btn bg-transparent text-white border border-zinc-700 hover:border-white rounded-none font-medium text-xs uppercase tracking-widest px-8 h-12 transition-all">
                View Price Menu
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- QUICK INFO RIBBON --- */}
      <div className="bg-zinc-950 border-y border-zinc-900 py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-amber-500/70 font-medium tracking-widest uppercase text-[10px]">Inquiries</span>
            <a href="tel:0743454537" style={luxuryStyles.fontFamily.serif} className="text-2xl text-white hover:text-amber-500 transition mt-1">0743 454537</a>
          </div>
          <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-zinc-900 py-6 md:py-0">
            <span className="text-amber-500/70 font-medium tracking-widest uppercase text-[10px]">Location Hub</span>
            <span style={luxuryStyles.fontFamily.serif} className="text-2xl text-white mt-1">Kinoo, Kenya</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-amber-500/70 font-medium tracking-widest uppercase text-[10px]">The Landmark</span>
            <span style={luxuryStyles.fontFamily.serif} className="text-2xl text-white mt-1">Old Petrol Station</span>
          </div>
        </div>
      </div>

      {/* --- ABOUT / EXPERIENCE --- */}
<section id="about" className="py-28 px-6 max-w-6xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
    
    {/* Left Column: Text Content (Occupies 5 columns on large screens) */}
    <div className="lg:col-span-5 lg:sticky lg:top-28">
      <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-500 block mb-3">The Philosophy</span>
      <h3 style={luxuryStyles.fontFamily.serif} className="text-4xl md:text-5xl font-light text-white uppercase tracking-wide mb-8">
        More Than Just A Cut. <br /><span className="italic font-normal text-amber-500 capitalize">An Art Form.</span>
      </h3>
      <p className="text-zinc-400 mb-6 leading-relaxed font-light">
        At The 4th Street, grooming is treated with curatorial care. From the moment you cross our threshold at the Old Petrol Station, you escape into a refined, unhurried space tailored for the modern gentleman.
      </p>
      <p className="text-zinc-400 leading-relaxed font-light mb-10">
        Our master artisans blend classic barbering heritage with contemporary precision execution, ensuring every look perfectly complements your individual character and frame structure.
      </p>
      
      <div className="stats bg-zinc-950 border border-zinc-900 rounded-none w-full grid grid-cols-2">
        <div className="stat place-items-center py-6">
          <div className="stat-title text-zinc-500 text-[10px] uppercase tracking-widest">Standard</div>
          <div style={luxuryStyles.fontFamily.serif} className="stat-value text-amber-500 text-2xl font-light tracking-wide mt-1">Top Tier</div>
        </div>
        <div className="stat place-items-center py-6 border-l border-zinc-900">
          <div className="stat-title text-zinc-500 text-[10px] uppercase tracking-widest">Review Index</div>
          <div style={luxuryStyles.fontFamily.serif} className="stat-value text-white text-2xl font-light tracking-wide mt-1">5.0 ★</div>
        </div>
      </div>
    </div>
    
    {/* Right Column: 6-Image Luxury Editorial Layout (Occupies 7 columns on large screens) */}
    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="space-y-4">
        <img className="rounded-none object-cover w-full h-64  border border-zinc-900 transition-all duration-700" src={cutImage1} alt="Grooming detailing" />
        <img className="rounded-none object-cover w-full h-80  border border-zinc-900 transition-all duration-700" src={cutImage3} alt="Barbershop premium chair" />
      </div>
      <div className="space-y-4 md:pt-8">
        <img className="rounded-none object-cover w-full h-80  border border-zinc-900 transition-all duration-700" src={cutImage2} alt="Classic scissor work" />
        <img className="rounded-none object-cover w-full h-64 border border-zinc-900 transition-all duration-700" src={cutImage4} alt="Hot towel treatment" />
      </div>
      <div className="space-y-4 col-span-2 md:col-span-1 md:pt-16">
        <img className="rounded-none object-cover w-full h-64  border border-zinc-900 transition-all duration-700" src={cutImage5} alt="Sharp alignment taper" />
        <img className="rounded-none object-cover w-full h-80 border border-zinc-900 transition-all duration-700" src={cutImage6} alt="The 4th street shopfront" />
      </div>
    </div>

  </div>
</section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="bg-zinc-950 py-28 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-500 block mb-2">The Menu</span>
            <h3 style={luxuryStyles.fontFamily.serif} className="text-4xl md:text-5xl font-light uppercase tracking-wider text-white">Grooming & Apothecary</h3>
            <div className="w-12 h-[1px] bg-amber-500/40 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {services.map((item, index) => (
              <div key={index} className="border-b border-zinc-900 pb-6 flex flex-col justify-between group hover:border-amber-500/30 transition duration-300">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 style={luxuryStyles.fontFamily.serif} className="text-2xl font-light text-white tracking-wide group-hover:text-amber-500 transition duration-300">{item.name}</h4>
                    <span style={luxuryStyles.fontFamily.serif} className="text-xl font-normal text-amber-500 ml-4">{item.price}</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section id="team" className="py-28 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-500 block mb-2">The Artisans</span>
          <h3 style={luxuryStyles.fontFamily.serif} className="text-4xl md:text-5xl font-light uppercase tracking-wider text-white">Meet the Guild</h3>
          <div className="w-12 h-[1px] bg-amber-500/40 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {barbers.map((barber, index) => (
            <div key={index} className="bg-zinc-950 border border-zinc-900 rounded-none text-center p-10 hover:border-zinc-800 transition duration-500">
              <div className="w-20 h-20 bg-zinc-900 border border-amber-500/30 rounded-full mx-auto mb-6 flex items-center justify-center text-xl font-light text-zinc-400 style={{ ...luxuryStyles.fontFamily.serif }}">
                {barber.name[0]}
              </div>
              <h4 style={luxuryStyles.fontFamily.serif} className="text-2xl font-light text-white tracking-wide uppercase">{barber.name}</h4>
              <div className="text-amber-500/80 text-[10px] tracking-widest uppercase font-medium mt-1 mb-4">
                {barber.role}
              </div>
              <p className="text-zinc-500 text-xs tracking-wide font-light border-t border-zinc-900 pt-4">Specialty: {barber.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="bg-zinc-950 border-y border-zinc-900 py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 style={luxuryStyles.fontFamily.serif} className="text-4xl text-white font-light tracking-wide mb-4">Reserve Your Session</h3>
          <p className="text-zinc-500 font-light text-sm max-w-md mx-auto mb-10 leading-relaxed">
            While walk-ins are accommodated when scheduling allows, a formal reservation secures your exact time with your preferred artisan.
          </p>
          <a href="tel:0743454537" className="btn bg-amber-500 hover:bg-amber-600 text-black border-none rounded-none font-semibold uppercase tracking-widest text-xs px-10 h-12">
            Call 0743 454537
          </a>
        </div>
      </section>

      {/* --- CONTACT & LOCATION INFO --- */}
      <section id="contact" className="py-28 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-500 block mb-2">The Atelier</span>
            <h3 style={luxuryStyles.fontFamily.serif} className="text-4xl font-light uppercase tracking-wide text-white mb-8">Location & Hours</h3>
            
            <div className="space-y-8 font-light">
              <div>
                <h4 className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">The Destination</h4>
                <p style={luxuryStyles.fontFamily.serif} className="text-2xl text-white">The 4th Street @Kinoo Old Petrol Station</p>
                <p className="text-xs text-zinc-500 tracking-wide mt-0.5">Kinoo, Central Province, Kenya</p>
              </div>

              <div>
                <h4 className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2">Availability Matrix</h4>
                <div className="grid grid-cols-2 gap-y-1.5 text-xs tracking-wide max-w-xs text-zinc-400">
                  <span>Monday — Saturday</span>
                  <span className="text-white text-right">8:00 AM — 8:00 PM</span>
                  <span>Sunday</span>
                  <span className="text-white text-right">10:00 AM — 6:00 PM</span>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Direct Hotline</h4>
                <a href="tel:0743454537" style={luxuryStyles.fontFamily.serif} className="text-3xl text-white hover:text-amber-500 transition duration-300">
                  0743 454537
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 rounded-none border border-zinc-900 p-12 flex flex-col justify-center items-center min-h-[350px] text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="relative z-10">
              <div className="text-amber-500/80 text-3xl mb-4 font-light">📍</div>
              <h4 style={luxuryStyles.fontFamily.serif} className="text-2xl text-white font-light tracking-wide mb-3">Kinoo Old Petrol Station</h4>
              <p className="text-zinc-500 text-xs max-w-xs mx-auto mb-8 leading-relaxed font-light">
                Conveniently situated along the main arterial route in Kinoo. Located adjacent to the historic station landmark.
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="btn bg-transparent hover:bg-white text-zinc-400 hover:text-black border border-zinc-800 hover:border-white rounded-none btn-sm uppercase tracking-widest text-[10px] px-6 h-10 transition-all"
              >
                Open Navigation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer footer-center p-12 bg-zinc-950 text-zinc-500 border-t border-zinc-900 text-[11px] tracking-wide font-light">
        <div>
          <p style={luxuryStyles.fontFamily.serif} className="tracking-widest text-white uppercase mb-3 text-base font-light">
            THE 4TH <span className="text-amber-500 font-normal">STREET</span> BARBERSHOP
          </p>
          <p className="max-w-md mx-auto leading-relaxed">Serving an elite clientele in Kinoo, Kenya with meticulous grooming rituals.</p>
          <p className="mt-6 text-[10px] text-zinc-600">© {new Date().getFullYear()} The 4th Street. Crafted Excellence.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;