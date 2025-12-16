import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputBase =
    "w-full h-[36px] rounded-[6px] border border-[#CED4DA] px-[12px] text-[16px] text-black placeholder-[#6C757D]";

  const labelBase =
    "text-[16px] leading-[24px] text-[#555555]";

  return (
    <section className="bg-white pb-[120px]">
      <div className="max-w-[1200px] mx-auto px-4 pt-[0px]">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">

          {/* FORM */}
          <div>
            <h2 className="text-[32px] leading-[38px] font-bold text-[#1D7AA3] mb-[28px]">
              Send Message
            </h2>

            <form className="space-y-[14px]">

              <div>
                <label className={labelBase}>Company name</label>
                <input className={inputBase} placeholder="Company" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
                <div>
                  <label className={labelBase}>Contact person name*</label>
                  <input className={inputBase} placeholder="Please enter your name *" />
                </div>

                <div>
                  <label className={labelBase}>Email *</label>
                  <input className={inputBase} placeholder="Please enter your email *" />
                </div>
              </div>

              <div>
                <label className={labelBase}>Subject *</label>
                <input className={inputBase} placeholder="Subject" />
              </div>

              <div>
                <label className={labelBase}>Message *</label>
                <textarea
                  className="w-full h-[108px] rounded-[6px] border border-[#CED4DA] px-[12px] py-[6px] text-[16px] placeholder-[#6C757D]"
                  placeholder="Message for Us *"
                />
              </div>

              <button
                type="submit"
                className="
                  mt-[8px]
                  w-[171.7px]
                  h-[40px]
                  bg-[#198754]
                  text-white
                  rounded-tl-[6px]
                  rounded-br-[6px]
                "
              >
                Send message
              </button>

            </form>
          </div>

          {/* MAP */}
          <div className="h-[380px] border">
            <iframe
              src="https://www.google.com/maps?q=Athos%20Collagen%20Pvt%20Ltd&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
