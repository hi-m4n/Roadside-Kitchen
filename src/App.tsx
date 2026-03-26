import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Clock, Phone, MessageCircle, ChevronDown, ChevronUp, Utensils, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const WHATSAPP_NUMBER = "1234567890"; // Replace with actual number
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I'd%20like%20to%20order%20from%20Roadside%20Kitchen!`;

// --- Components ---

const Button = ({ children, className = "", onClick, href }: { children: React.ReactNode, className?: string, onClick?: () => void, href?: string }) => {
  const baseStyle = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95";
  const primaryStyle = "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg hover:shadow-orange-500/50 px-8 py-4 text-lg";
  
  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${primaryStyle} ${className}`}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${primaryStyle} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-extrabold text-white mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Utensils className="text-orange-500 w-8 h-8" />
          <span className="text-2xl font-black text-white tracking-tighter">ROADSIDE<span className="text-orange-500">KITCHEN</span></span>
        </div>
        <Button href="#contact" className="!px-6 !py-2 !text-sm hidden md:inline-flex">
          👉 Order Now
        </Button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
        alt="Sizzling grilled food" 
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#0a0a0a]"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-sm mb-6 border border-orange-500/30">
          🔥 Sizzling Hot & Ready
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
          Fresh, Flavor-Packed Meals <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Right by the Road</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
          At Roadside Kitchen, enjoy fast, delicious food made fresh daily — perfect for quick bites, hangouts, and satisfying cravings.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#contact" className="w-full sm:w-auto text-xl">
            👉 Order Now
          </Button>
          <a href="#menu" className="text-white font-semibold hover:text-orange-400 transition-colors px-6 py-4 flex items-center gap-2">
            View Menu <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const SocialProof = () => {
  const testimonials = [
    { quote: "The food is insanely good and always fresh. My go-to spot.", author: "Local Customer" },
    { quote: "Best roadside food experience. Fast service and great taste.", author: "Regular Visitor" },
    { quote: "Affordable and satisfying every time.", author: "Customer" }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-orange-500 text-orange-500" />)}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Loved by Food Lovers Nearby</h2>
          <p className="text-orange-400 font-semibold text-xl">⭐ 4.8/5 Rating • 100+ happy customers daily</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#141414] p-8 rounded-2xl border border-white/5 relative"
            >
              <div className="absolute -top-4 -left-2 text-6xl text-orange-500/20 font-serif">"</div>
              <p className="text-gray-300 text-lg italic mb-6 relative z-10">"{t.quote}"</p>
              <p className="text-white font-bold">— {t.author}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Button href="#contact">👉 Order Now</Button>
        </div>
      </div>
    </section>
  );
};

const MenuHighlights = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const menu = [
    { title: "🍗 Grilled & Fried Items", desc: "Crispy on the outside, juicy inside. Perfectly seasoned.", img: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "🍔 Burgers & Fast Food", desc: "Smash burgers, loaded fries, and quick bites to satisfy cravings.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "🍜 Street-Style Meals", desc: "Authentic, bold flavors cooked fresh right in front of you.", img: "https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "🥤 Drinks & Refreshments", desc: "Ice-cold beverages, shakes, and sodas to cool you down.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "🌮 Tacos & Wraps", desc: "Stuffed with fresh ingredients and zesty sauces.", img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "🥗 Fresh Salads", desc: "Crisp greens, grilled proteins, and house-made dressings.", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "🍰 Sweet Desserts", desc: "Decadent treats to perfectly end your meal.", img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "🍕 Wood-Fired Pizza", desc: "Thin crust, rich tomato sauce, and gooey melted cheese.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "🥪 Gourmet Sandwiches", desc: "Toasted to perfection with premium meats and fresh veggies.", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "🔥 Spicy Wings", desc: "Tossed in our signature hot sauce and served with cooling dip.", img: "https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "🥘 Hearty Bowls", desc: "Warm grains, roasted veggies, and savory proteins.", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "🍟 Loaded Fries", desc: "Smothered in melted cheese, crispy bacon, and jalapeños.", img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "🍦 Milkshakes & Floats", desc: "Thick, creamy, and topped with whipped cream and cherry.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "🍳 All-Day Breakfast", desc: "Eggs, bacon, and fluffy pancakes available anytime.", img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <section id="menu" className="py-24 bg-[#111]">
      <div className="container mx-auto px-6">
        <SectionHeading title="What We're Serving" subtitle="Mouth-watering options for every craving." />
        <div className="hidden md:flex justify-end gap-4 mb-6 -mt-8">
          <button onClick={() => scroll('left')} className="p-3 rounded-full bg-[#1a1a1a] border border-white/10 hover:bg-orange-500 hover:text-white transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={() => scroll('right')} className="p-3 rounded-full bg-[#1a1a1a] border border-white/10 hover:bg-orange-500 hover:text-white transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {menu.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="snap-start shrink-0 w-[85vw] md:w-[40vw] lg:w-[25vw] group rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/5 hover:border-orange-500/30 transition-colors"
            >
              <div className="h-48 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button href="#contact">👉 Order Now</Button>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    "Fresh ingredients daily",
    "Fast service (no long waiting)",
    "Affordable prices",
    "Perfect for quick stops & hangouts",
    "Consistent taste and quality"
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white mb-8"
            >
              Why Choose <br/><span className="text-orange-500">Roadside Kitchen?</span>
            </motion.h2>
            <div className="space-y-6 mb-10">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="bg-orange-500/20 p-2 rounded-full">
                    <CheckCircle2 className="text-orange-500 w-6 h-6" />
                  </div>
                  <span className="text-xl text-gray-200 font-medium">{f}</span>
                </motion.div>
              ))}
            </div>
            <Button href="#contact">👉 Order Now</Button>
          </div>
          <div className="lg:w-1/2">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Delicious food" 
              className="rounded-3xl shadow-2xl shadow-orange-500/20 border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => (
  <section className="py-24 bg-[#111]">
    <div className="container mx-auto px-6">
      <SectionHeading title="Visit Us Today" subtitle="Convenient roadside location. Easy to stop by anytime." />
      
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
        <div className="grid md:grid-cols-2">
          <div className="p-10 flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="text-orange-500 w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Roadside Kitchen</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Located conveniently by the main road. Perfect for a quick pit stop or a relaxed evening hangout.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-10">
              <Clock className="text-orange-500 w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Opening Hours</h3>
                <p className="text-gray-400">Mon - Sun: 11:00 AM - 11:00 PM</p>
              </div>
            </div>
            <Button href="https://maps.app.goo.gl/9H8uR8jG3eqC7BES9" className="w-full">
              Get Directions
            </Button>
          </div>
          <div className="h-64 md:h-auto bg-gray-800 relative min-h-[300px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4516031799426!2d90.35070387402115!3d23.802535078634822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13941db9ab1%3A0xbd332a9eff4a2fb!2z4Kaw4KeL4Kah4Ka44Ka-4KaH4KahIOCmleCmv-CmmuCnh-CmqA!5e0!3m2!1sbn!2sbd!4v1774546363087!5m2!1sbn!2sbd" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <Button href="#contact">👉 Order Now</Button>
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, submit this to a backend.
    // For now, we can redirect to WhatsApp with the pre-filled message.
    const text = `Hi, I'm ${formData.name}. My phone is ${formData.phone}. Order/Message: ${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <SectionHeading title="Get in Touch / Pre-Order" subtitle="Skip the wait. Order ahead or drop us a message." />
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-[#141414] p-8 md:p-10 rounded-3xl border border-white/5 shadow-xl">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Order / Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                  placeholder="What would you like to order?"
                ></textarea>
              </div>
              <Button className="w-full !py-4 text-xl mt-4">👉 Order Now</Button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Or order faster via WhatsApp</p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full px-8 py-4 transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How fast is the service?", a: "Very quick — most orders are ready within minutes." },
    { q: "Do you offer takeaway?", a: "Yes, takeaway is available for all items." },
    { q: "Are prices affordable?", a: "Yes, we focus on budget-friendly meals without compromising on quality." },
    { q: "What makes you different?", a: "Fresh cooking, bold flavors, and quick roadside convenience." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#111]">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionHeading title="Frequently Asked Questions" />
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#1a1a1a] border border-white/5 rounded-2xl overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg font-bold text-white">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-gray-500" />}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-400">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black py-20 border-t border-white/10 relative overflow-hidden">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-orange-600/10 blur-[120px] pointer-events-none"></div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Hungry? Don't Wait.</h2>
      <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
        Grab your favorite meal from Roadside Kitchen now.
      </p>
      <Button href="#contact" className="!px-12 !py-5 text-2xl mb-16">👉 Order Now</Button>
      
      <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10 text-gray-500">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Utensils className="w-5 h-5" />
          <span className="font-bold text-white">ROADSIDE<span className="text-orange-500">KITCHEN</span></span>
        </div>
        <p>© {new Date().getFullYear()} Roadside Kitchen. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a 
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
    aria-label="Order on WhatsApp"
  >
    <MessageCircle className="w-8 h-8" />
    <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
      Order Now!
    </span>
  </a>
);

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-gray-200 font-sans selection:bg-orange-500/30">
      <Navbar />
      <Hero />
      <SocialProof />
      <MenuHighlights />
      <Features />
      <Location />
      <ContactForm />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
