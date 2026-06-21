import { useEffect, useState } from "react";

declare global {
  interface Window {
    fbAsyncInit?: () => void;
    FB?: {
      init: (options: { xfbml: boolean; version: string }) => void;
    };
  }
}

const FACEBOOK_PAGE_ID = "1162793673580492";
const MESSENGER_URL = `https://m.me/${FACEBOOK_PAGE_ID}`;

const HERO_IMG = "https://images.unsplash.com/photo-1767274859042-b0f619b8bc36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmJpa2UlMjBtb3RvcmN5Y2xlJTIwZGFyayUyMGRyYW1hdGljfGVufDF8fHx8MTc4MTUwODQ4Mnww&ixlib=rb-4.1.0&q=80&w=1600";
const CARD1_IMG = "https://images.unsplash.com/photo-1656420731611-ffae337fab6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMG1vdG9yY3ljbGUlMjBibGFjayUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzgxNTA4NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const CARD2_IMG = "https://images.unsplash.com/photo-1656420731047-3eb41c9d1dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcG9ydCUyMG1vdG9yY3ljbGUlMjBibGFjayUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzgxNTA4NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const CARD3_IMG = "https://images.unsplash.com/photo-1767274859143-16dfbc2f174f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzdXBlcmJpa2UlMjBtb3RvcmN5Y2xlJTIwZGFyayUyMGRyYW1hdGljfGVufDF8fHx8MTc4MTUwODQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080";

const bikes = [
  {
    name: "KAWASAKI Z1000",
    category: "Naked bike đô thị",
    price: "Từ 450 triệu",
    image: CARD1_IMG,
    description: "Dáng xe hầm hố, phù hợp người thích phong cách mạnh mẽ và dễ sử dụng trong phố."
  },
  {
    name: "YAMAHA YZF-R1",
    category: "Sportbike hiệu năng cao",
    price: "Từ 980 triệu",
    image: CARD2_IMG,
    description: "Thiết kế thể thao, thiên về trải nghiệm tốc độ và cảm giác lái đường trường."
  },
  {
    name: "DUCATI PANIGALE V4",
    category: "Superbike cao cấp",
    price: "Từ 1,2 tỷ",
    image: CARD3_IMG,
    description: "Mẫu superbike nổi bật dành cho khách hàng ưu tiên hiệu năng và thiết kế cao cấp."
  }
];

function Header({ onBookRide }: { onBookRide: () => void }) {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-[#0d0d0d]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button className="border-0 bg-transparent p-0 text-2xl font-black italic tracking-tight text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Motor <span className="text-[#c3cc8c]">AI</span>
        </button>
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wider text-[#c4c7c8] md:flex">
          <button className="border-0 bg-transparent text-inherit hover:text-white cursor-pointer" onClick={() => scrollTo("fleet")}>Dòng xe</button>
          <button className="border-0 bg-transparent text-inherit hover:text-white cursor-pointer" onClick={() => scrollTo("chatbot")}>Chatbot</button>
          <button className="border-0 bg-transparent text-inherit hover:text-white cursor-pointer" onClick={() => scrollTo("contact")}>Liên hệ</button>
        </nav>
        <button className="rounded bg-[#4b5320] px-4 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#5c6628] cursor-pointer border-0" onClick={onBookRide}>
          Đăng ký lái thử
        </button>
      </div>
    </header>
  );
}

function Hero({ onBookRide }: { onBookRide: () => void }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-24">
      <img src={HERO_IMG} alt="Xe mô tô phân khối lớn" className="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10" />
      <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl flex-col justify-center px-5 py-20 lg:px-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#c3cc8c]">Landing Page tích hợp Chatbot Facebook</p>
        <h1 className="max-w-3xl text-5xl font-black italic uppercase leading-tight tracking-tight text-white md:text-7xl">
          Motor AI tư vấn xe mô tô PKL
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#c4c7c8] md:text-lg">
          Xem xe nổi bật, hỏi giá, xem hình ảnh và nhận tư vấn theo ngân sách trực tiếp qua Facebook Messenger.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href={MESSENGER_URL} target="_blank" rel="noreferrer" className="rounded bg-[#4b5320] px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-white no-underline hover:bg-[#5c6628]">
            Tư vấn qua Messenger
          </a>
          <button className="rounded border border-white/60 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 cursor-pointer" onClick={onBookRide}>
            Đăng ký lái thử
          </button>
        </div>
      </div>
    </section>
  );
}

function BikeCard({ bike, onBookRide }: { bike: (typeof bikes)[number]; onBookRide: (model: string) => void }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-[#151515]">
      <div className="relative h-72 overflow-hidden">
        <img src={bike.image} alt={bike.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c3cc8c]">{bike.category}</p>
          <h3 className="mt-2 text-2xl font-black uppercase text-white">{bike.name}</h3>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <p className="text-sm leading-6 text-[#c4c7c8]">{bike.description}</p>
        <div className="flex items-center justify-between gap-4">
          <span className="font-bold text-white">{bike.price}</span>
          <button className="rounded bg-[#4b5320] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#5c6628] cursor-pointer border-0" onClick={() => onBookRide(bike.name)}>
            Đăng ký
          </button>
        </div>
      </div>
    </article>
  );
}

function Fleet({ onBookRide }: { onBookRide: (model: string) => void }) {
  return (
    <section id="fleet" className="bg-[#0f0f0f] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c3cc8c]">Xe nổi bật</p>
            <h2 className="mt-3 text-4xl font-black italic uppercase text-white">Các dòng xe đề xuất</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#8e9192]">
            Các mẫu xe này dùng để minh họa cho Landing Page và đồng bộ với chức năng tư vấn, xem ảnh, xem xe nổi bật của chatbot Motor AI.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {bikes.map((bike) => <BikeCard key={bike.name} bike={bike} onBookRide={onBookRide} />)}
        </div>
      </div>
    </section>
  );
}

function ChatbotSection() {
  const features = [
    "Chào hỏi và hiển thị menu chính",
    "Tư vấn xe theo ngân sách và nhu cầu",
    "Gửi 01 ảnh xe cụ thể",
    "Gửi tối thiểu 03 ảnh xe nổi bật",
    "Hỗ trợ để lại thông tin liên hệ"
  ];

  return (
    <section id="chatbot" className="border-y border-white/10 bg-[#131313] px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c3cc8c]">Motor AI Chatbot</p>
          <h2 className="mt-3 text-4xl font-black italic uppercase text-white">Tư vấn xe ngay trên Facebook</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#c4c7c8]">
            Motor AI được tích hợp với Facebook Messenger, N8N, Google Sheets và AI Agent để phản hồi khách hàng, tra cứu dữ liệu xe và gửi hình ảnh sản phẩm trong cùng một luồng hội thoại.
          </p>
          <a href={MESSENGER_URL} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded bg-[#4b5320] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white no-underline hover:bg-[#5c6628]">
            Mở chatbot Messenger
          </a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
          <h3 className="mb-5 text-xl font-bold uppercase text-white">Chức năng chính</h3>
          <ul className="space-y-4 p-0 m-0 list-none">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm text-[#c4c7c8]">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#c3cc8c]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact({ onBookRide }: { onBookRide: () => void }) {
  return (
    <section id="contact" className="bg-[#0f0f0f] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-gradient-to-r from-[#1b1b1b] to-[#101010] p-8 md:p-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c3cc8c]">Liên hệ</p>
            <h2 className="mt-3 text-3xl font-black uppercase text-white">Cần tư vấn mẫu xe phù hợp?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#c4c7c8]">
              Nhắn tin với chatbot hoặc để lại thông tin đăng ký lái thử. Nhân viên showroom sẽ liên hệ lại để xác nhận lịch hẹn.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={MESSENGER_URL} target="_blank" rel="noreferrer" className="rounded bg-[#4b5320] px-6 py-3 text-center text-xs font-bold uppercase tracking-widest text-white no-underline hover:bg-[#5c6628]">
              Nhắn Messenger
            </a>
            <button className="rounded border border-white/30 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 cursor-pointer" onClick={onBookRide}>
              Đặt lịch lái thử
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b] px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#8e9192] md:flex-row md:items-center">
        <p><span className="font-bold text-white">Motor AI</span> - Landing Page tích hợp Chatbot Facebook.</p>
        <p>© 2026 Motor AI. Bài tập cá nhân.</p>
      </div>
    </footer>
  );
}

function BookingModal({ model, onClose }: { model: string; onClose: () => void }) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", date: "", time: "09:30", model });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#131313] p-6 shadow-2xl md:p-8">
        <button className="absolute right-4 top-4 border-0 bg-transparent text-2xl text-[#8e9192] hover:text-white cursor-pointer" onClick={onClose} aria-label="Đóng">×</button>
        {!isSubmitted ? (
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-black uppercase text-white">Đăng ký lái thử</h3>
              <p className="mt-2 text-sm leading-6 text-[#8e9192]">Form demo dùng cho Landing Page. Dữ liệu hiển thị xác nhận trên giao diện sau khi gửi.</p>
            </div>
            <label className="text-xs font-bold uppercase tracking-wider text-white">Chọn dòng xe</label>
            <select className="rounded border border-white/15 bg-[#1c1b1b] p-3 text-sm text-white" value={formData.model} onChange={(e) => setFormData({ ...formData, model: e.target.value })} required>
              {bikes.map((bike) => <option key={bike.name} value={bike.name}>{bike.name}</option>)}
            </select>
            <label className="text-xs font-bold uppercase tracking-wider text-white">Họ và tên</label>
            <input className="rounded border border-white/15 bg-[#1c1b1b] p-3 text-sm text-white" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Nhập họ và tên" required />
            <label className="text-xs font-bold uppercase tracking-wider text-white">Số điện thoại</label>
            <input className="rounded border border-white/15 bg-[#1c1b1b] p-3 text-sm text-white" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Nhập số điện thoại" required />
            <label className="text-xs font-bold uppercase tracking-wider text-white">Email</label>
            <input className="rounded border border-white/15 bg-[#1c1b1b] p-3 text-sm text-white" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Nhập email" required />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white">Chọn ngày</label>
                <input className="rounded border border-white/15 bg-[#1c1b1b] p-3 text-sm text-white" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} min={new Date().toISOString().split("T")[0]} required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white">Chọn giờ</label>
                <select className="rounded border border-white/15 bg-[#1c1b1b] p-3 text-sm text-white" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} required>
                  <option value="08:00">08:00</option>
                  <option value="09:30">09:30</option>
                  <option value="11:00">11:00</option>
                  <option value="13:30">13:30</option>
                  <option value="15:00">15:00</option>
                  <option value="16:30">16:30</option>
                </select>
              </div>
            </div>
            <button type="submit" className="mt-2 rounded bg-[#4b5320] p-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#5c6628] cursor-pointer border-0">Gửi đăng ký</button>
          </form>
        ) : (
          <div className="py-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-green-500/50 bg-green-950/40 text-3xl text-green-400">✓</div>
            <h3 className="text-2xl font-black uppercase text-white">Đăng ký thành công</h3>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#c4c7c8]">
              Cảm ơn <span className="font-bold text-white">{formData.name}</span>. Motor AI đã ghi nhận lịch đăng ký lái thử <span className="font-bold text-[#c3cc8c]">{formData.model}</span> vào lúc <span className="text-white">{formData.time}</span> ngày <span className="text-white">{formData.date}</span>.
            </p>
            <button className="mt-6 rounded border border-white/20 bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 cursor-pointer" onClick={onClose}>Đóng</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [bookingModel, setBookingModel] = useState(bikes[0].name);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookRide = (model?: string) => {
    setBookingModel(model || bikes[0].name);
    setIsBookingOpen(true);
  };

  useEffect(() => {
    if (!FACEBOOK_PAGE_ID) return;

    let fbRoot = document.getElementById("fb-root");
    if (!fbRoot) {
      fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.appendChild(fbRoot);
    }

    let fbCustomerChat = document.getElementById("fb-customer-chat");
    if (!fbCustomerChat) {
      fbCustomerChat = document.createElement("div");
      fbCustomerChat.id = "fb-customer-chat";
      fbCustomerChat.className = "fb-customerchat";
      fbCustomerChat.setAttribute("page_id", FACEBOOK_PAGE_ID);
      fbCustomerChat.setAttribute("attribution", "biz_inbox");
      document.body.appendChild(fbCustomerChat);
    }

    window.fbAsyncInit = () => {
      window.FB?.init({
        xfbml: true,
        version: "v18.0"
      });
    };

    if (!document.getElementById("facebook-jssdk")) {
      const js = document.createElement("script");
      js.id = "facebook-jssdk";
      js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
      document.head.appendChild(js);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <Header onBookRide={() => handleBookRide()} />
      <Hero onBookRide={() => handleBookRide()} />
      <Fleet onBookRide={handleBookRide} />
      <ChatbotSection />
      <Contact onBookRide={() => handleBookRide()} />
      <Footer />
      <div id="fb-root" />
      <div id="fb-customer-chat" className="fb-customerchat" />
      {isBookingOpen && <BookingModal model={bookingModel} onClose={() => setIsBookingOpen(false)} />}
    </main>
  );
}
