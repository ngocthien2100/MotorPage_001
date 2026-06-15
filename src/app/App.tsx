import { useState, useEffect, useRef } from "react";
import svgPaths from "../imports/Html→Body/svg-l64atcqoce";

// Hỗ trợ kiểu TypeScript toàn cục
declare global {
  interface Window {
    fbAsyncInit: any;
    FB: any;
  }
}

// Ảnh demo sản phẩm (Unsplash chất lượng cao)
const HERO_IMG = "https://images.unsplash.com/photo-1767274859042-b0f619b8bc36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmJpa2UlMjBtb3RvcmN5Y2xlJTIwZGFyayUyMGRyYW1hdGljfGVufDF8fHx8MTc4MTUwODQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080";
const CARD1_IMG = "https://images.unsplash.com/photo-1656420731611-ffae337fab6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMG1vdG9yY3ljbGUlMjBibGFjayUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzgxNTA4NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const CARD2_IMG = "https://images.unsplash.com/photo-1656420731047-3eb41c9d1dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcG9ydCUyMG1vdG9yY3ljbGUlMjBibGFjayUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzgxNTA4NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const CARD3_IMG = "https://images.unsplash.com/photo-1767274859143-16dfbc2f174f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzdXBlcmJpa2UlMjBtb3RvcmN5Y2xlJTIwZGFyayUyMGRyYW1hdGljfGVufDF8fHx8MTc4MTUwODQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080";

// Cấu hình kết nối Fanpage Facebook dự phòng
const FACEBOOK_PAGE_ID = "YOUR_PAGE_ID"; 

// CẤU HÌNH WEBHOOK N8N CỦA BẠN TẠI ĐÂY
const N8N_WEBHOOK_URL = "https://ngocthien213.app.n8n.cloud/webhook/fb-webhook"; 

function HeroSection({ onBookRide, onNavigate }: { onBookRide: (model?: string) => void; onNavigate: (id: string) => void }) {
  return (
    <div className="absolute bg-black content-stretch flex h-[921.59px] items-center justify-center left-0 overflow-clip right-0 top-[71.39px]" data-name="Hero Section">
      <div className="absolute flex inset-[-23.04px_-32px] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="Siêu xe phân khối lớn trong buổi hoàng hôn" className="absolute h-[145.83%] left-[-2.5%] max-w-none top-[-22.92%] w-[105%] object-cover" src={HERO_IMG} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-gradient-to-r from-black inset-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0)]" data-name="Gradient" />
      <div className="flex-[1_0_0] max-w-[1440px] min-w-px relative">
        <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] px-[64px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="[word-break:break-word] flex flex-col font-['Geist',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#c3cc8c] text-[12px] tracking-[3.6px] uppercase w-full">
              <p className="leading-[14.4px]">THIẾT KẾ ĐỂ THỐNG TRỊ</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="[word-break:break-word] flex flex-col font-['Archivo_Narrow',sans-serif] font-bold italic justify-center leading-[0] relative shrink-0 text-[72px] text-white tracking-[-1.44px] uppercase w-full">
              <p className="leading-[79.2px] mb-0">KHAI PHÓNG</p>
              <p className="leading-[79.2px]">QUÁI THÚ</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start max-w-[576px] pb-[0.595px] pt-[6.795px] relative shrink-0 w-[576px]">
            <div className="[word-break:break-word] flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4c7c8] text-[18px]">
              <p className="leading-[28.8px] mb-0">Trải nghiệm đỉnh cao của hiệu suất xe phân khối lớn. Mỗi đường cong</p>
              <p className="leading-[28.8px] mb-0">tối ưu khí động học, mỗi chi tiết cơ khí đúc kết</p>
              <p className="leading-[28.8px]">sức mạnh thuần khiết.</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-start pt-[24px] relative shrink-0 w-full">
            <button 
              className="bg-[#4b5320] hover:bg-[#5c6628] transition-colors duration-200 content-stretch flex flex-col items-center justify-center px-[41px] py-[17px] relative shrink-0 cursor-pointer border-0 animate-pulse"
              onClick={() => onBookRide()}
            >
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
              <div className="[word-break:break-word] flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[2.8px] uppercase whitespace-nowrap">
                <p className="leading-[19.6px]">ĐĂNG KÝ LÁI THỬ</p>
              </div>
            </button>
            <button 
              className="content-stretch flex flex-col items-center justify-center px-[41px] py-[17px] relative shrink-0 cursor-pointer bg-transparent border-0 hover:bg-white/10 transition-colors duration-200"
              onClick={() => onNavigate("specs")}
            >
              <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none" />
              <div className="[word-break:break-word] flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[2.8px] uppercase whitespace-nowrap">
                <p className="leading-[19.6px]">KHÁM PHÁ HIỆU NĂNG</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BikeCard({ img, name, category, col, onBook }: { img: string; name: string; category: string; col: string; onBook: () => void }) {
  return (
    <div className={`bg-[#1c1b1b] ${col} justify-self-stretch relative row-1 self-start shrink-0 group overflow-hidden cursor-pointer`} onClick={onBook}>
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="h-[458px] relative shrink-0 w-full overflow-hidden">
          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
            <img alt={name} className="absolute h-full left-[-12.57%] max-w-none top-0 w-[125.14%] object-cover transition-transform duration-700 ease-out group-hover:scale-105" src={img} />
          </div>
          <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0 mix-blend-saturation pointer-events-none opacity-40 group-hover:opacity-0 transition-opacity duration-500" />
        </div>
        <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.9)] inset-px opacity-75 to-[rgba(0,0,0,0.1)] via-1/2 via-[rgba(0,0,0,0.3)] transition-all duration-300 group-hover:opacity-90" data-name="Gradient" />
        
        {/* Overlay nút hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-[#4b5320] text-white font-bold text-xs tracking-widest px-6 py-3 border border-white/20 shadow-lg uppercase transition-all duration-300 hover:bg-[#5c6628] rounded">
            Đăng ký lái thử
          </span>
        </div>

        <div className="absolute bottom-[17px] left-px w-[220px] pointer-events-none">
          <div className="content-stretch flex flex-col items-start pb-[32px] pt-[31px] px-[32px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Archivo_Narrow',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white uppercase whitespace-nowrap">
              <p className="leading-[31.2px]">{name}</p>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Geist',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#c3cc8c] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
              <p className="leading-[14.4px]">{category}</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(68,71,72,0.3)] border-solid inset-0 pointer-events-none group-hover:border-[#c3cc8c]/50 transition-colors duration-300" />
    </div>
  );
}

function SectionProductGalleryBentoGrid({ onBookRide }: { onBookRide: (model: string) => void }) {
  return (
    <div id="fleet" className="absolute content-stretch flex flex-col gap-[48px] items-start left-0 max-w-[1440px] px-[64px] py-[48px] right-0 top-[992.98px]">
      <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
          <div className="[word-break:break-word] flex flex-col font-['Archivo_Narrow',sans-serif] font-bold italic justify-center leading-[0] relative shrink-0 text-[40px] text-white tracking-[-0.4px] uppercase whitespace-nowrap">
            <p className="leading-[48px]">CÁC DÒNG XE</p>
          </div>
          <div className="bg-[#4b5320] h-[4px] relative shrink-0 w-[96px]" />
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8e9192] text-[14px] tracking-[0.7px] whitespace-nowrap">
          <p className="leading-[19.6px]">01 / 04 LỰA CHỌN</p>
        </div>
      </div>
      <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_460px] relative shrink-0 w-full">
        <BikeCard img={CARD1_IMG} name="SHADOW RS" category="SIÊU HIỆU NĂNG" col="col-1" onBook={() => onBookRide("SHADOW RS")} />
        <BikeCard img={CARD2_IMG} name="APEX GT" category="BẬC THẦY ĐƯỜNG TRƯỜNG" col="col-2" onBook={() => onBookRide("APEX GT")} />
        <BikeCard img={CARD3_IMG} name="NIGHTMARE X" category="QUÁI VẬT ĐÔ THỊ" col="col-3" onBook={() => onBookRide("NIGHTMARE X")} />
      </div>
    </div>
  );
}

function SpecCard({ icon, label, value, sub, col }: { icon: React.ReactNode; label: string; value: string; sub: string; col: string }) {
  return (
    <div className={`bg-[#131313] ${col} justify-self-stretch relative row-1 self-start shrink-0`}>
      <div aria-hidden className="absolute border border-[rgba(68,71,72,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[33px] relative size-full">
          <div className="h-[88px] relative shrink-0 w-[64px]">
            <div className="content-stretch flex flex-col items-start pb-[24px] relative size-full">
              <div className="content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[64px]">
                <div aria-hidden className="absolute border border-[#c3cc8c] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                {icon}
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Geist',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8e9192] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap mb-2">
            <p className="leading-[14.4px]">{label}</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Archivo_Narrow',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-center text-white tracking-[-0.4px] whitespace-nowrap">
            <p className="leading-[48px]">{value}</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono',monospace] justify-center leading-[0] not-italic relative shrink-0 text-[#c4c7c8] text-[12px] text-center whitespace-nowrap mt-2">
            <p className="leading-[18px]">{sub}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTechSpecsGrid() {
  return (
    <div id="specs" className="absolute bg-[#0e0e0e] content-stretch flex flex-col items-start left-0 px-[64px] py-[97px] right-0 top-[1656.98px]">
      <div aria-hidden className="absolute border-[rgba(68,71,72,0.1)] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="max-w-[1440px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] relative size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
              <div className="[word-break:break-word] flex flex-col font-['Archivo_Narrow',sans-serif] font-bold italic justify-center leading-[0] relative shrink-0 text-[40px] text-center text-white tracking-[4px] uppercase whitespace-nowrap">
                <p className="leading-[48px]">VƯỢT TRỘI VỀ KỸ THUẬT</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
              <div className="[word-break:break-word] flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4c7c8] text-[16px] text-center whitespace-nowrap">
                <p className="leading-[24px]">Kỹ thuật chính xác kết hợp sức mạnh thuần khiết không giới hạn.</p>
              </div>
            </div>
          </div>
          <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_250.39px] relative shrink-0 w-full">
            <SpecCard
              col="col-1"
              label="MÃ LỰC"
              value="215 HP"
              sub="@ 14.500 VÒNG/PHÚT"
              icon={
                <div className="h-[20px] relative shrink-0 w-[16px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                    <path d={svgPaths.p9899234} fill="#C3CC8C" />
                  </svg>
                </div>
              }
            />
            <SpecCard
              col="col-2"
              label="MÔ-MEN XOẮN"
              value="124 NM"
              sub="LỰC KÉO TỐI ĐA"
              icon={
                <div className="h-[16px] relative shrink-0 w-[19.977px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9767 16">
                    <path d={svgPaths.p25d5bd2c} fill="#C3CC8C" />
                  </svg>
                </div>
              }
            />
            <SpecCard
              col="col-3"
              label="HỆ THỐNG PHANH"
              value="330 MM"
              sub="HỆ THỐNG BREMBO"
              icon={
                <div className="relative shrink-0 size-[20px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p32a757c0} fill="#C3CC8C" />
                  </svg>
                </div>
              }
            />
            <SpecCard
              col="col-4"
              label="CÔNG NGHỆ"
              value="GEN 4"
              sub="MÀN HÌNH OLED"
              icon={
                <div className="relative shrink-0 size-[22px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                    <path d={svgPaths.p2f6b3600} fill="#C3CC8C" />
                  </svg>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <div className="absolute bg-[#0e0e0e] content-stretch flex flex-col items-start left-0 pt-px right-0 top-[2253.38px]">
      <div aria-hidden className="absolute border-[#444748] border-solid border-t inset-0 pointer-events-none" />
      <div className="max-w-[1440px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[64px] py-[48px] relative size-full">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <div className="h-[123.88px] max-w-[320px] relative shrink-0 w-[320px]">
              <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-0.91px]">
                <div className="[word-break:break-word] absolute flex flex-col font-['Archivo_Narrow',sans-serif] font-black justify-center leading-[0] left-0 text-[#c3cc8c] text-[28px] whitespace-nowrap">
                  <p className="leading-[31.2px] mb-0">ApexMoto</p>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.625px] right-0 top-[60px]">
                <div className="[word-break:break-word] flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8e9192] text-[14px]">
                  <p className="leading-[22.75px] mb-0">Định nghĩa giới hạn tốc độ và phong cách.</p>
                  <p className="leading-[22.75px]">Sinh ra từ đường đua, thiết kế cho đường phố.</p>
                </div>
              </div>
            </div>
            <div className="gap-x-[48px] gap-y-[48px] grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_134.39px] inline-grid relative shrink-0">
              <div className="col-1 content-stretch flex flex-col gap-[16px] items-start relative row-1 self-start shrink-0 w-[111.36px]">
                <div className="[word-break:break-word] flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">
                  <p className="leading-[14.4px]">ĐIỀU HƯỚNG</p>
                </div>
                {[
                  { label: "Dòng xe", id: "fleet" },
                  { label: "Tìm đại lý", id: "specs" },
                  { label: "Liên hệ", id: "specs" }
                ].map((item) => (
                  <div 
                    key={item.label} 
                    className="[word-break:break-word] flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8e9192] hover:text-white cursor-pointer text-[16px] whitespace-nowrap"
                    onClick={() => onNavigate(item.id)}
                  >
                    <p className="leading-[24px]">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="col-2 content-stretch flex flex-col gap-[16px] items-start pb-[40px] relative row-1 self-start shrink-0 w-[128.86px]">
                <div className="[word-break:break-word] flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">
                  <p className="leading-[14.4px]">PHÁP LÝ</p>
                </div>
                {["Chính sách bảo mật", "Điều khoản dịch vụ"].map((l) => (
                  <div key={l} className="[word-break:break-word] flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8e9192] hover:text-white cursor-pointer text-[16px] whitespace-nowrap">
                    <p className="leading-[24px]">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between pt-[33px] relative shrink-0 w-full">
            <div aria-hidden className="absolute border-[rgba(68,71,72,0.1)] border-solid border-t inset-0 pointer-events-none" />
            <div className="[word-break:break-word] flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8e9192] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">© 2026 ApexMoto. BẢO LƯU MỌI QUYỀN.</p>
            </div>
            <div className="h-[20px] relative shrink-0">
              <div className="content-stretch flex gap-[23.99px] items-start relative size-full">
                <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0">
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.pf778600} fill="#8E9192" />
                    </svg>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0">
                  <div className="h-[20px] relative shrink-0 w-[18px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
                      <path d={svgPaths.p2b729200} fill="#8E9192" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderTopNavBar({ onNavigate, onBookRide }: { onNavigate: (id: string) => void; onBookRide: () => void }) {
  const [activeTab, setActiveTab] = useState("DÒNG XE");

  const menuItems = [
    { label: "DÒNG XE", id: "fleet", w: "w-[90px]" },
    { label: "HIỆU NĂNG", id: "specs", w: "w-[110px]" },
    { label: "THƯ VIỆN", id: "fleet", w: "w-[100px]" },
    { label: "THÔNG SỐ", id: "specs", w: "w-[110px]" },
  ];

  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(19,19,19,0.8)] content-stretch flex flex-col items-start left-0 pb-px right-0 top-0 z-40">
      <div aria-hidden className="absolute border-[rgba(68,71,72,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="max-w-[1440px] relative shrink-0 w-full">
        <div className="flex flex-row items-center max-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[64px] py-[16px] relative size-full">
            <div className="h-[38.39px] relative shrink-0 w-[142.63px] cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo_Narrow',sans-serif] font-bold italic justify-center leading-[0] left-0 text-[32px] text-white top-[18.5px] tracking-[-1.6px] whitespace-nowrap">
                <p className="leading-[38.4px]">ApexMoto</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
              {menuItems.map(({ label, id, w }) => {
                const isActive = activeTab === label;
                return (
                  <div 
                    key={label} 
                    className={`h-[37.19px] relative shrink-0 cursor-pointer ${w}`}
                    onClick={() => {
                      setActiveTab(label);
                      onNavigate(id);
                    }}
                  >
                    {isActive && <div aria-hidden className="absolute border-[#c3cc8c] border-b-2 border-solid inset-0 pointer-events-none" />}
                    <div className={`-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo_Narrow',sans-serif] ${isActive ? "font-bold text-[#c3cc8c]" : "font-medium text-[#c4c7c8]"} justify-center leading-[0] left-0 text-[20px] top-[15px] tracking-[-1px] uppercase whitespace-nowrap`}>
                      <p className="leading-[31.2px]">{label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button 
              className="bg-[#4b5320] hover:bg-[#5c6628] transition-colors duration-200 content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative shrink-0 cursor-pointer border-0"
              onClick={onBookRide}
            >
              <div className="[word-break:break-word] flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[1.4px] uppercase whitespace-nowrap">
                <p className="leading-[19.6px]">ĐĂNG KÝ LÁI THỬ</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// BONG BÓNG CHAT Messenger nổi cố định góc màn hình
function FloatingChatButton({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="fixed bottom-8 right-8 content-stretch flex flex-col items-end z-50 cursor-pointer group transition-transform duration-300 hover:scale-110"
      onClick={onClick}
    >
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[64px]">
        <div className="absolute bg-[rgba(0,132,255,0.2)] inset-0 rounded-[9999px] animate-ping opacity-75" />
        <div className="absolute bg-[rgba(0,132,255,0.4)] inset-0 rounded-[9999px]" />
        <div className="flex-[1_0_0] min-h-px pointer-events-none relative rounded-[9999px] w-full">
          <div className="absolute inset-0 rounded-[9999px] bg-[#1c1b1b] flex items-center justify-center">
            {/* SVG Logo Facebook Messenger */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="#0084FF" />
              <path d="M7.5 13.5l3.5-3.5 3.5 3.5 3.5-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div aria-hidden className="absolute border-2 border-[#0084FF] border-solid inset-0 rounded-[9999px] shadow-[0px_0px_15px_0px_rgba(0,132,255,0.4)]" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingModel, setBookingModel] = useState("SHADOW RS");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "09:30"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // States dành cho khung Chatbot trực tiếp trên trang
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Xin chào! Cảm ơn bạn đã ghé thăm ApexMoto. Tôi là Trợ lý ảo hỗ trợ thông tin nhanh. Bạn có câu hỏi nào cần giải đáp không?", time: "Vừa xong" }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [sessionId, setSessionId] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Tạo Session ID duy nhất lưu vào localStorage để n8n quản lý bộ nhớ hội thoại (Memory)
  useEffect(() => {
    let session = localStorage.getItem("apexmoto_chat_session");
    if (!session) {
      session = "session_" + Math.random().toString(36).substring(2, 11);
      localStorage.setItem("apexmoto_chat_session", session);
    }
    setSessionId(session);
  }, []);

  // Tự động cuộn xuống tin nhắn mới nhất trong khung chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isBotTyping]);

  // Cuộn trang mượt mà
  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Mở modal và gán dòng xe tương ứng
  const handleBookRide = (model?: string) => {
    if (model) {
      setBookingModel(model);
    }
    setIsBookingOpen(true);
  };

  // Xử lý gửi Form đăng ký lái thử
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Trả lời tin nhắn chatbot offline (Giả lập dự phòng khi chưa cấu hình Link Webhook n8n)
  const getOfflineBotResponse = (inputText: string): string => {
    const text = inputText.toLowerCase();
    
    if (text.includes("shadow") || text.includes("mạnh nhất") || text.includes("tốc độ") || text.includes("nhanh nhất")) {
      return "Dòng xe mạnh nhất hiện tại là SHADOW RS sở hữu động cơ 215 mã lực (HP) và mô-men xoắn cực đại 124 NM, sinh ra từ đường đua và tối ưu cho tốc độ.";
    }
    if (text.includes("lái thử") || text.includes("đăng ký") || text.includes("chạy thử") || text.includes("đặt lịch")) {
      return "Bạn có thể đăng ký chạy thử xe miễn phí bằng cách nhấn vào nút 'ĐĂNG KÝ LÁI THỬ' ở menu trên cùng trang web và điền thông tin hẹn nhé!";
    }
    if (text.includes("giá") || text.includes("bao nhiêu") || text.includes("tiền") || text.includes("bán")) {
      return "Giá bán dự kiến các dòng xe: Shadow RS khoảng 850 triệu VNĐ, Apex GT khoảng 720 triệu VNĐ, và Nightmare X khoảng 650 triệu VNĐ. Chi tiết xin vui lòng điền form đăng ký lái thử.";
    }
    if (text.includes("đại lý") || text.includes("ở đâu") || text.includes("showroom") || text.includes("địa chỉ")) {
      return "Showroom chính thức của ApexMoto hiện có tại 2 thành phố lớn: Hà Nội (123 Lê Văn Lương) và TP. Hồ Chí Minh (456 Nguyễn Thị Minh Khai).";
    }
    if (text.includes("apex gt")) {
      return "APEX GT là dòng xe bậc thầy đường trường (Endurance Master), được thiết kế tối ưu cho hành trình dài, êm ái và siêu bền bỉ.";
    }
    if (text.includes("nightmare x")) {
      return "NIGHTMARE X là dòng xe quái vật đô thị (Urban Terror), thiết kế phá cách, linh hoạt trong ngõ hẻm và sở hữu gia tốc tức thì ấn tượng.";
    }

    return "Cảm ơn bạn đã nhắn tin cho ApexMoto! Nhấp vào nút Messenger ở góc trên bên phải khung chat để gửi tin nhắn đến Fanpage của chúng tôi hoặc điền form Đăng ký lái thử nhé.";
  };

  // Gửi tin nhắn
  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || chatInput;
    if (!text.trim()) return;

    // 1. Thêm tin nhắn của User vào khung chat
    const userMsg = { sender: "user", text, time: "Vừa xong" };
    setChatMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setChatInput(""); // Clear ô nhập

    // 2. Kích hoạt trạng thái Bot đang nhập tin nhắn
    setIsBotTyping(true);

    // Kiểm tra xem đã cấu hình Webhook n8n chưa
    const isN8nConfigured = N8N_WEBHOOK_URL && N8N_WEBHOOK_URL !== "YOUR_N8N_WEBHOOK_URL";

    if (isN8nConfigured) {
      try {
        // 3. Gửi POST Request sang Webhook n8n
        const response = await fetch(N8N_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: text,
            sessionId: sessionId || "default_session"
          })
        });

        if (!response.ok) {
          throw new Error("Không thể kết nối đến n8n");
        }

        const data = await response.json();
        
        // Trích xuất phản hồi từ n8n (hỗ trợ nhiều định dạng đầu ra của node AI n8n)
        const botReplyText = data.output || data.response || data.reply || data.text || (typeof data === "string" ? data : JSON.stringify(data));

        const botMsg = { sender: "bot", text: botReplyText || "Tôi nhận được tín hiệu từ n8n nhưng phản hồi bị trống.", time: "Vừa xong" };
        setChatMessages((prev) => [...prev, botMsg]);
      } catch (error) {
        console.error("Lỗi Webhook n8n:", error);
        // Trả lời dự phòng bằng chatbot offline nếu n8n bị lỗi kết nối
        setTimeout(() => {
          const fallbackReply = "Hiện tại máy chủ AI thông qua n8n của tôi đang gặp chút sự cố kết nối. " + getOfflineBotResponse(text);
          setChatMessages((prev) => [...prev, { sender: "bot", text: fallbackReply, time: "Vừa xong" }]);
        }, 1000);
      } finally {
        setIsBotTyping(false);
      }
    } else {
      // Sử dụng chatbot offline giả lập nếu chưa điền URL n8n
      setTimeout(() => {
        const botResponseText = getOfflineBotResponse(text);
        const botMsg = { sender: "bot", text: botResponseText, time: "Vừa xong" };
        setChatMessages((prev) => [...prev, botMsg]);
        setIsBotTyping(false);
      }, 1000);
    }
  };

  // Chuyển hướng sang Facebook Messenger Fanpage thật
  const handleOpenRealMessenger = () => {
    window.open(`https://m.me/${FACEBOOK_PAGE_ID}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="relative size-full min-h-[2800px]"
      style={{ backgroundImage: "linear-gradient(90deg, rgb(19, 19, 19) 0%, rgb(19, 19, 19) 100%)" }}
    >
      <HeroSection onBookRide={handleBookRide} onNavigate={handleNavigate} />
      <SectionProductGalleryBentoGrid onBookRide={handleBookRide} />
      <SectionTechSpecsGrid />
      <Footer onNavigate={handleNavigate} />
      <HeaderTopNavBar onNavigate={handleNavigate} onBookRide={() => handleBookRide()} />
      
      {/* Bong bóng kích hoạt chat */}
      <FloatingChatButton onClick={() => setIsChatOpen(!isChatOpen)} />

      {/* KHUNG CHAT MESSENGER TÍCH HỢP TRỰC TIẾP TRÊN TRANG (Không cần đăng nhập, kết nối n8n/giả lập) */}
      {isChatOpen && (
        <div className="fixed bottom-28 right-8 w-[380px] h-[500px] bg-[#131313] border border-[rgba(255,255,255,0.12)] rounded-2xl flex flex-col z-50 shadow-2xl overflow-hidden transition-all duration-300">
          
          {/* Header hộp chat */}
          <div className="bg-gradient-to-r from-[#0084FF] to-[#00A2FF] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Avatar Bot */}
              <div className="relative size-[38px] rounded-full bg-[#1c1b1b] flex items-center justify-center border border-white/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="#C3CC8C" />
                  <path d="M8 11h8M8 15h5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="absolute bottom-0 right-0 size-2.5 bg-green-500 rounded-full border border-[#131313]"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-semibold">Trợ lý ApexMoto</span>
                <span className="text-white/80 text-[11px]">Trực tuyến • Phản hồi tự động</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Nút liên kết FB thật */}
              <button 
                title="Trò chuyện qua ứng dụng Messenger"
                className="text-white hover:bg-white/10 p-1.5 rounded-full cursor-pointer bg-transparent border-0 transition-colors"
                onClick={handleOpenRealMessenger}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </button>
              {/* Nút Đóng */}
              <button 
                className="text-white hover:bg-white/10 p-1.5 rounded-full cursor-pointer bg-transparent border-0 transition-colors"
                onClick={() => setIsChatOpen(false)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* Danh sách tin nhắn */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 scrollbar-thin scrollbar-thumb-white/10">
            {chatMessages.map((msg, index) => (
              <div 
                key={index}
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === "bot" 
                    ? "bg-[#222] text-[#e4e4e7] rounded-bl-sm self-start" 
                    : "bg-[#0084FF] text-white rounded-br-sm self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
            
            {/* Trạng thái Bot đang nhập tin nhắn */}
            {isBotTyping && (
              <div className="bg-[#222] text-[#a1a1aa] rounded-2xl rounded-bl-sm p-3 self-start max-w-[80%] flex items-center gap-1.5">
                <span className="size-1.5 bg-[#8e9192] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                <span className="size-1.5 bg-[#8e9192] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                <span className="size-1.5 bg-[#8e9192] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Gợi ý câu hỏi nhanh (Quick replies) */}
          <div className="px-4 py-2 border-t border-[rgba(255,255,255,0.06)] flex flex-wrap gap-1.5 bg-black/20">
            {[
              "Dòng xe mạnh nhất?",
              "Giá Shadow RS?",
              "Địa chỉ ở đâu?",
              "Đăng ký lái thử?"
            ].map((q) => (
              <button
                key={q}
                className="bg-[#1c1b1b] hover:bg-[#2a2a2a] text-[#c3cc8c] border border-[#c3cc8c]/20 hover:border-[#c3cc8c]/40 text-xs px-2.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer text-left"
                onClick={() => handleSendMessage(q)}
                disabled={isBotTyping}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Ô nhập tin nhắn chân trang */}
          <div className="p-3 border-t border-[rgba(255,255,255,0.08)] bg-[#1c1b1b] flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Nhập câu hỏi của bạn..."
              className="flex-1 bg-[#222] text-white placeholder-[#8e9192] border border-transparent focus:border-[#0084FF] text-sm p-2.5 rounded-lg focus:outline-none"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
              disabled={isBotTyping}
            />
            <button
              className="bg-[#0084FF] hover:bg-[#0074E0] disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-2.5 rounded-lg border-0 cursor-pointer transition-colors"
              onClick={() => handleSendMessage()}
              disabled={isBotTyping || !chatInput.trim()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Modal Đăng ký lái thử */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-all duration-300">
          <div className="bg-[#131313] border border-[rgba(255,255,255,0.1)] w-full max-w-[500px] rounded-xl p-8 relative shadow-2xl">
            {/* Nút đóng */}
            <button 
              className="absolute top-4 right-4 text-[#8e9192] hover:text-white cursor-pointer bg-transparent border-0 transition-colors"
              onClick={() => {
                setIsBookingOpen(false);
                setIsSubmitted(false);
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h3 className="font-['Archivo_Narrow'] text-[28px] text-white font-bold uppercase tracking-wide">
                    Đăng Ký Lái Thử
                  </h3>
                  <p className="text-[#8e9192] text-sm">
                    Trải nghiệm thực tế sức mạnh quái thú từ ApexMoto.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Dropdown chọn dòng xe */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white text-xs font-semibold uppercase tracking-wider">Chọn dòng xe</label>
                    <select 
                      className="bg-[#1c1b1b] border border-[rgba(255,255,255,0.15)] text-white p-3 rounded text-sm focus:outline-none focus:border-[#c3cc8c] cursor-pointer"
                      value={bookingModel}
                      onChange={(e) => setBookingModel(e.target.value)}
                      required
                    >
                      <option value="SHADOW RS">SHADOW RS (SIÊU HIỆU NĂNG)</option>
                      <option value="APEX GT">APEX GT (BẬC THẦY ĐƯỜNG TRƯỜNG)</option>
                      <option value="NIGHTMARE X">NIGHTMARE X (QUÁI VẬT ĐÔ THỊ)</option>
                    </select>
                  </div>

                  {/* Họ tên */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white text-xs font-semibold uppercase tracking-wider">Họ và tên</label>
                    <input 
                      type="text" 
                      placeholder="Nhập họ và tên của bạn" 
                      className="bg-[#1c1b1b] border border-[rgba(255,255,255,0.15)] text-white p-3 rounded text-sm focus:outline-none focus:border-[#c3cc8c]"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  {/* Số điện thoại */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white text-xs font-semibold uppercase tracking-wider">Số điện thoại</label>
                    <input 
                      type="tel" 
                      placeholder="Nhập số điện thoại" 
                      className="bg-[#1c1b1b] border border-[rgba(255,255,255,0.15)] text-white p-3 rounded text-sm focus:outline-none focus:border-[#c3cc8c]"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white text-xs font-semibold uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      placeholder="Nhập email liên hệ" 
                      className="bg-[#1c1b1b] border border-[rgba(255,255,255,0.15)] text-white p-3 rounded text-sm focus:outline-none focus:border-[#c3cc8c]"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  {/* Ngày & Giờ */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-white text-xs font-semibold uppercase tracking-wider">Chọn ngày</label>
                      <input 
                        type="date" 
                        className="bg-[#1c1b1b] border border-[rgba(255,255,255,0.15)] text-white p-3 rounded text-sm focus:outline-none focus:border-[#c3cc8c]"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-white text-xs font-semibold uppercase tracking-wider">Chọn giờ</label>
                      <select 
                        className="bg-[#1c1b1b] border border-[rgba(255,255,255,0.15)] text-white p-3 rounded text-sm focus:outline-none focus:border-[#c3cc8c]"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        required
                      >
                        <option value="08:00">08:00 AM</option>
                        <option value="09:30">09:30 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="13:30">01:30 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:30">04:30 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="bg-[#4b5320] hover:bg-[#5c6628] transition-colors duration-200 text-white font-bold p-4 rounded text-sm tracking-wider uppercase border-0 cursor-pointer shadow-lg mt-2"
                >
                  Gửi đăng ký
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center gap-6 py-8">
                <div className="size-[64px] rounded-[9999px] bg-green-950/40 border border-green-500/50 flex items-center justify-center text-green-400">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-['Archivo_Narrow'] text-[24px] text-white font-bold uppercase tracking-wider">ĐĂNG KÝ THÀNH CÔNG!</h4>
                  <p className="text-[#c4c7c8] text-sm max-w-[320px] leading-relaxed">
                    Cảm ơn <span className="font-semibold text-white">{formData.name}</span>. ApexMoto đã ghi nhận lịch đăng ký chạy thử xe <span className="font-semibold text-[#c3cc8c]">{bookingModel}</span> của bạn vào lúc <span className="font-semibold text-white">{formData.time}</span> ngày <span className="font-semibold text-white">{formData.date}</span>. 
                  </p>
                  <p className="text-[#8e9192] text-xs mt-2">
                    Chúng tôi sẽ liên hệ lại qua số điện thoại <span className="text-white font-medium">{formData.phone}</span> để xác nhận lịch hẹn trước khi bạn đến.
                  </p>
                </div>
                <button 
                  className="bg-transparent border border-white/20 hover:border-white/40 text-white font-bold px-8 py-3 rounded text-xs tracking-wider uppercase cursor-pointer transition-colors mt-2"
                  onClick={() => {
                    setIsBookingOpen(false);
                    setIsSubmitted(false);
                  }}
                >
                  Đóng cửa sổ
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
