import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaGithub,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#1c130d] text-white">
      
      {/* ================= MAIN FOOTER ================= */}
      <div
        className="
          mx-auto
          w-full
          max-w-377.5
          px-6
          pt-25
          pb-8
          sm:px-10
          lg:px-16.25
          lg:pt-30
          lg:pb-10
        "
      >

        {/* ================= TOP CONTENT ================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-16
            lg:grid-cols-[1.6fr_1fr_1fr]
            lg:gap-20
          "
        >

          {/* ================= BRAND ================= */}
          <div>
            <h2
              className="
                max-w-125
                font-sans
                text-[42px]
                font-bold
                leading-[1.05]
                tracking-[-0.035em]
                text-[#f8f5f2]
                sm:text-[50px]
                lg:text-[56px]
              "
            >
              Teaching Truth.
              <br />
              Restoring Destinies.
            </h2>

            <p
              className="
                mt-7
                max-w-125
                font-sans
                text-[16px]
                leading-[1.8]
                text-[#b8aaa1]
                sm:text-[17px]
              "
            >
              Advancing the Gospel, revealing the Word,
              <br className="hidden sm:block" />
              and raising lives through the power of God's
              <br className="hidden sm:block" />
              presence and truth.
            </p>
          </div>


          {/* ================= ADDRESS ================= */}
          <div>
            <h3
              className="
                mb-7
                font-sans
                text-[20px]
                font-bold
                text-white
              "
            >
              Address
            </h3>

            <p
              className="
                max-w-65
                font-sans
                text-[16px]
                leading-[1.8]
                text-[#b8aaa1]
              "
            >
              Mystery Embassy International
              <br />
              Accra, Ghana
            </p>

            {/* ================= SOCIAL ICONS ================= */}
            <div className="mt-9 flex items-center gap-2.5">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#493b33]
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#cc9c60]
                  hover:bg-[#cc9c60]
                  hover:text-white
                "
              >
                <FaFacebookF className="text-[17px]" />
              </a>

              {/* X */}
              <a
                href="#"
                aria-label="X"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#493b33]
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#cc9c60]
                  hover:bg-[#cc9c60]
                  hover:text-white
                "
              >
                <FaXTwitter className="text-[17px]" />
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#493b33]
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#cc9c60]
                  hover:bg-[#cc9c60]
                  hover:text-white
                "
              >
                <FaYoutube className="text-[17px]" />
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#493b33]
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#cc9c60]
                  hover:bg-[#cc9c60]
                  hover:text-white
                "
              >
                <FaInstagram className="text-[17px]" />
              </a>

            </div>
          </div>


          {/* ================= SAY HELLO ================= */}
          <div>
            <h3
              className="
                mb-7
                font-sans
                text-[20px]
                font-bold
                text-white
              "
            >
              Say Hello
            </h3>

            {/* Email */}
            <a
              href="mailto:info@example.com"
              className="
                inline-block
                border-b
                border-[#77685e]
                pb-1
                font-sans
                text-[16px]
                text-[#cfc3bc]
                transition-colors
                duration-300
                hover:border-[#cc9c60]
                hover:text-[#cc9c60]
              "
            >
              info@example.com
            </a>

            {/* Phone */}
            <a
              href="tel:+18005552569"
              className="
                mt-6
                block
                font-sans
                text-[21px]
                font-bold
                tracking-tight
                text-white
                transition-colors
                duration-300
                hover:text-[#cc9c60]
              "
            >
              +1 800 555 25 69
            </a>
          </div>

        </div>


        {/* ================= DIVIDER ================= */}
        <div
          className="
            mt-36.25
            border-t
            border-[#493b33]
          "
        />


        {/* ================= BOTTOM FOOTER ================= */}
        <div
          className="
            flex
            flex-col
            gap-5
            pt-7
            font-sans
            text-[15px]
            text-[#c0b5ae]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* ================= DEVELOPER ================= */}
          <a
            href="https://github.com/charlesdauda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Developed by CodeWithCharles"
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              transition-colors
              duration-300
              hover:text-[#cc9c60]
            "
          >
            <span>
              Developed by
            </span>

            <span
              className="
                font-semibold
                text-white
                transition-colors
                duration-300
                hover:text-[#cc9c60]
              "
            >
              CodeWithCharles
            </span>

            <FaGithub className="text-[16px]" />
          </a>


          {/* ================= COPYRIGHT ================= */}
          <p
            className="
              m-0
              text-[15px]
              text-[#c0b5ae]
            "
          >
            ClodioMinistries © 2026. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;