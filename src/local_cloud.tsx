import React from "react";
import {
  Server,
  Cloud,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  ShieldCheck,
  BarChart3,
  Database,
  HardDrive,
  HelpCircle,
  Lightbulb,
  ChevronRight,
} from "lucide-react";

const FeatureItem = ({ label, desc, isPositive }: any) => (
  <li className="flex items-start gap-3">
    {isPositive ? (
      <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={18} />
    ) : (
      <XCircle className="text-red-400 mt-1 shrink-0" size={18} />
    )}
    <div>
      <span className="font-semibold text-gray-700 block text-sm md:text-base">
        {label}
      </span>
      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </li>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-blue-100">
      {/* --- HERO SECTION --- */}
      <header className="relative overflow-hidden bg-white pt-16 pb-12 md:pt-24 md:pb-20 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
            Infrastructure Guide 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 leading-tight">
            ยกระดับธุรกิจด้วย <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Smart Deployment Strategy
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            เลือกรากฐานที่มั่นคงที่สุดสำหรับซอฟต์แวร์ของคุณ
            ไม่ว่าจะเป็นการดูแลเองแบบ Local หรือขยายตัวอย่างไร้ขีดจำกัดบน Cloud
          </p>
        </div>
      </header>

      {/* --- SECTION 1: WHAT IS A SERVER? --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-blue-600 mb-4 font-bold uppercase tracking-widest text-sm">
                <HelpCircle size={18} /> <span>SERVER คืออะไร?</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                หัวใจหลักของการรันระบบ
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                **Server (เครื่องแม่ข่าย)** คือคอมพิวเตอร์ที่มีประสิทธิภาพสูง
                ออกแบบมาเพื่อ "ให้บริการ" (Serve)
                ข้อมูลหรือโปรแกรมแก่คอมพิวเตอร์เครื่องอื่นๆ ในเครือข่ายตลอด 24
                ชั่วโมง
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Database className="text-blue-500 mb-2" />
                  <h4 className="font-bold text-sm">จัดเก็บข้อมูล</h4>
                  <p className="text-xs text-slate-500">
                    เป็นที่อยู่ของ Database และไฟล์สำคัญขององค์กร
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <HardDrive className="text-cyan-500 mb-2" />
                  <h4 className="font-bold text-sm">ประมวลผลแอปพลิเคชัน</h4>
                  <p className="text-xs text-slate-500">
                    รันโค้ดและคำนวณ Logic ต่างๆ ของระบบเว็บไซต์หรือแอป
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="text-yellow-300" /> เข้าใจง่ายๆ
                </h3>
                <p className="opacity-90 leading-relaxed italic text-sm md:text-base">
                  "ถ้าระบบซอฟต์แวร์เหมือนคน... Server ก็คือ 'บ้าน'
                  ที่คนนั้นอาศัยอยู่ หากบ้านพัง คนก็ทำงานไม่ได้ การเลือก
                  Deployment จึงเป็นการเลือกว่าจะ 'สร้างบ้านเองบนที่ดินตัวเอง
                  (Local)' หรือ 'เช่าคอนโดหรูที่บริหารจัดการให้ทุกอย่าง
                  (Cloud)'"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: COMPARISON TABLE --- */}
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              เจาะลึกความแตกต่าง
            </h2>
            <p className="text-slate-500 italic font-medium">
              Local (On-Premise) vs. Cloud Deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Local Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200">
                  <Server size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    Local Deployment
                  </h3>
                  <p className="text-sm text-slate-400">
                    การติดตั้งบนเซิร์ฟเวอร์ตัวเอง
                  </p>
                </div>
              </div>
              <ul className="space-y-6">
                <FeatureItem
                  label="Infrastructure"
                  desc="คุณต้องจัดหาฮาร์ดแวร์ ห้องเซิร์ฟเวอร์ และระบบแอร์เอง"
                  isPositive={true}
                />
                <FeatureItem
                  label="Cost"
                  desc="ลงทุนก้อนใหญ่ (Capex) และมีค่าบำรุงรักษาจุกจิกตลอดปี"
                  isPositive={false}
                />
                <FeatureItem
                  label="Scalability"
                  desc="ยากมาก ถ้าผู้ใช้เยอะขึ้น ต้องรอสั่งซื้อเครื่องใหม่มาเพิ่ม"
                  isPositive={false}
                />
                <FeatureItem
                  label="Data Sovereignty"
                  desc="ข้อมูลอยู่กับตัว 100% เหมาะกับหน่วยงานที่เข้มงวดมาก"
                  isPositive={true}
                />
              </ul>
            </div>

            {/* Cloud Card */}
            <div className="bg-white p-8 rounded-3xl border-2 border-cyan-500 shadow-xl shadow-cyan-100 relative">
              <div className="absolute -top-4 right-8 bg-cyan-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest">
                RECOMMENDED
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-cyan-500 rounded-2xl text-white shadow-lg shadow-cyan-200">
                  <Cloud size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    Cloud Deployment
                  </h3>
                  <p className="text-sm text-slate-400">
                    การเช่าทรัพยากรบนระบบคลาวด์
                  </p>
                </div>
              </div>
              <ul className="space-y-6">
                <FeatureItem
                  label="Infrastructure"
                  desc="ใช้งานผ่านผู้ให้บริการ (AWS, Azure) ไม่ต้องตั้งเครื่องเอง"
                  isPositive={true}
                />
                <FeatureItem
                  label="Cost"
                  desc="จ่ายตามการใช้งานจริง (Opex) ประหยัดค่าไฟและคนดูแล"
                  isPositive={true}
                />
                <FeatureItem
                  label="Scalability"
                  desc="ขยายได้ทันทีใน 1 คลิก รองรับผู้ใช้หลักล้านได้สบาย"
                  isPositive={true}
                />
                <FeatureItem
                  label="Reliability"
                  desc="มีระบบสำรองข้อมูลทั่วโลก มั่นใจว่าระบบไม่ล่มง่ายๆ"
                  isPositive={true}
                />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: DECISION GUIDE --- */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 italic text-slate-700 underline decoration-blue-500 decoration-4 underline-offset-8">
            ควรเลือกแบบไหนดี?
          </h2>
          <div className="space-y-4">
            <div className="group p-6 rounded-2xl border border-slate-200 hover:border-blue-500 transition-all cursor-default flex items-center justify-between">
              <div>
                <h4 className="font-bold text-lg mb-1">
                  เลือก Local Deployment ถ้า...
                </h4>
                <p className="text-slate-500 text-sm">
                  กฎหมายบังคับเก็บข้อมูลในตึกตัวเอง หรือมีแบนด์วิดท์ภายในสูงมาก
                </p>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-blue-500" />
            </div>
            <div className="group p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 transition-all cursor-default flex items-center justify-between">
              <div>
                <h4 className="font-bold text-lg mb-1 text-cyan-700 font-extrabold text-xl italic underline">
                  เลือก Cloud Deployment ถ้า...
                </h4>
                <p className="text-slate-500 text-sm italic underline">
                  ต้องการความเร็ว เริ่มต้นไว ขยายตัวง่าย และลดภาระงาน IT
                  ในระยะยาว
                </p>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-cyan-500" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="bg-slate-900 text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            พร้อมออกแบบโครงสร้างระบบของคุณหรือยัง?
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed italic">
            ให้ทีมผู้เชี่ยวชาญของเราช่วยวิเคราะห์ความคุ้มค่า (TCO){" "}
            <br className="hidden md:block" />
            ระหว่างการสร้างเองหรือใช้คลาวด์
            เพื่อผลลัพธ์ที่ดีที่สุดสำหรับธุรกิจคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20">
              จองวันปรึกษาฟรี <ArrowRight size={20} />
            </button>
            <button className="bg-transparent border border-slate-700 hover:bg-slate-800 text-white px-10 py-4 rounded-full font-bold transition-all">
              ดูผลงานที่ผ่านมา
            </button>
          </div>
          <p className="mt-12 text-slate-600 text-xs">
            © 2026 Tech Solution Co., Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
