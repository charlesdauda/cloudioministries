import { MapPin, Phone, Mail, Clock, ArrowUpRight} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto grid w-full max-w-375 grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <p className="mb-5 font-sans text-[13px] font-bold uppercase tracking-[0.25em] text-[#c9953d]">
            Get In Touch
          </p>
          <h2 className="max-w-175 font-sans text-[42px] font-bold leading-[1.08] tracking-[-0.04em] text-[#202020] sm:text-[50px] lg:text-[58px]">
            Connect With
            <br />
            <span className="text-[#b27a48]">Dr Cloudio.</span>
          </h2>
          <p className="mt-7 max-w-155 font-sans text-[16px] leading-[1.9] text-[#80766f] sm:text-[17px]">
            I would love to hear from you. Whether you are seeking ministry
            information, an invitation, prayer support, or simply want to
            connect with us, our team is here to serve you.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-9 sm:grid-cols-2">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#b27a48] text-white">
                <MapPin size={21} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-sans text-[16px] font-bold text-[#202020]">
                  Our Address
                </h3>
                <p className="mt-2 font-sans text-[15px] leading-[1.8] text-[#80766f]">
                  Mystery Embassy International
                  <br />
                  Accra, Ghana
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#b27a48] text-white">
                <Phone size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-sans text-[16px] font-bold text-[#202020]">
                  Contact Number
                </h3>
                <a
                  href="tel:+233244496968"
                  className="mt-2 block font-sans text-[15px] leading-[1.8] text-[#80766f] transition-colors duration-300 hover:text-[#b27a48]"
                >
                  +233 244 496 968
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#b27a48] text-white">
                <Clock size={21} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="font-sans text-[16px] font-bold text-[#202020]">
                 Sunday Service
                </h3>

                <p className="mt-2 font-sans text-[15px] leading-[1.8] text-[#80766f]">
                 Sundays
                  <br />
                  7:00 AM – 10:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#b27a48] text-white">
                <Mail size={21} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="font-sans text-[16px] font-bold text-[#202020]">
                  Email Us
                </h3>

                <a
                  href="mailto:info@cloudioministries.com"
                  className="mt-2 block font-sans text-[15px] leading-[1.8] text-[#80766f] transition-colors duration-300 hover:text-[#b27a48]"
                >info@cloudioministries.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-100 overflow-hidden sm:min-h-125 lg:min-h-145">
          <iframe
           title="Mystery Embassy International Location"
            src="https://www.google.com/maps?q=Accra%2C%20Ghana&output=embed"
            className="absolute inset-0 h-full w-full border-0 grayscale-15"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a href="https://maps.app.goo.gl/PCzDFUV5yNMj382k8"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-5 left-5 inline-flex items-center gap-2 bg-white px-5 py-3 font-sans text-[12px] 
            font-bold uppercase tracking-[0.12em] text-[#202020] shadow-lg transition-all duration-300 hover:bg-[#b27a48]
             hover:text-white">
            Open in Google Maps
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;