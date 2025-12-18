import { Phone, Mail, Factory } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="relative bg-white">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0 pt-[40px] pb-[60px]">

        {/* First Row: WhatsApp and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[40px] gap-x-[60px] text-center mb-[40px]">

          {/* WhatsApp */}
          <div>
            <img src="/icon/whatsapp.svg" className="w-[50px] h-[50px] mx-auto" alt="" />
            <h3 className="mt-[10px] text-[18px] leading-[22px] font-bold uppercase text-[#999999]">
              WhatsApp / Call
            </h3>
            <a href="tel:+918780321239" className="mt-[6px] text-[16px] leading-[27px] text-black">
              +91 87803 21239
            </a>
          </div>

          {/* Email */}
          <div>
            <img src="/icon/mail.svg" className="w-[50px] h-[50px] mx-auto" />
            <h3 className="mt-[10px] text-[18px] leading-[22px] font-bold uppercase text-[#999999]">
              Email
            </h3>
            <a href="mailto:inquiry@athoscollagen.com" className="mt-[6px] text-[16px] leading-[24px] text-black">
              inquiry@athoscollagen.com
            </a>
          </div>

        </div>

        {/* Second Row: Factory Address (Centered) */}
        <div className="text-center">
          <img src="/icon/factory.svg" className="w-[50px] h-[50px] mx-auto" />
          <h3 className="mt-[10px] text-[18px] leading-[22px] font-bold uppercase text-[#999999]">
            Factory Address
          </h3>
          <p className="mt-[8px] max-w-[620px] mx-auto text-[16px] leading-[27px] text-black">
            Plot No. B-19, Gujarat Agro Infrastructure Mega Food Park,
            Village Shah & Vasravi, Tal. Mangrol,
            Dist. Surat-394410, Gujarat, India
          </p>
        </div>

        {/* Separator */}
        <div className="mt-[60px] h-px bg-[#555555]/25" />
      </div>
    </section>
  );
};

export default ContactInfo;
