"use client";
import Image from "next/image";
import Link from "next/link";

interface SocialIcon {
  id: string;
  src: string;
  alt: string;
  url: string;
}

const Loan: React.FC = () => {
  const socialIcons: SocialIcon[] = [
    {
      id: "facebook",
      src: "https://api.iconify.design/uim:facebook-f.svg?color=%23E46A52",
      alt: "Facebook",
      url: "https://www.facebook.com/VeronicaBarraganLender/",
    },
    {
      id: "instagram",
      src: "https://api.iconify.design/uim:instagram.svg?color=%23E46A52",
      alt: "Instagram",
      url: "https://instagram.com/homeloansbyveronica/",
    },
    // {
    //   id: "linkedin",
    //   src: "https://api.iconify.design/uim:linkedin-alt.svg?color=%23004D22",
    //   alt: "LinkedIn",
    //   url: "mailto:Veronica@TeamVB.Net",
    // },
    {
      id: "google",
      src: "https://api.iconify.design/simple-icons:google.svg?color=%23E46A52",
      alt: "Google",
      url: "mailto:LBaird@cfmtg.com",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="text-[#021B2C] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold mb-4 text-sm sm:text-base">
            A Team You Can Trust
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900">
            Our President Veronica Barragan,
          </h1>

          <p className="mt-6 sm:mt-8 text-gray-800 text-sm sm:text-md leading-relaxed max-w-xl mx-auto lg:mx-0">
            I have been in the Mortgage Industry for the past 30 years and have
            enjoyed every minute of it. I started as a “Temp Girl” for a small
            Mortgage Banker in Visalia in 1988 and held the receptionist
            position. I eventually went on to the positions of: Doc drawer,
            shipper, loan processor and Loan Officer. At the end of my tenure
            with this company in 2005, I was Vice President. My true passion in
            this industry is being a “Loan Officer”. I enjoy meeting clients one
            on one, and guiding them one step at a time. Whether you need help
            writing a credit letter, structuring a savings plan, or finding the
            right home, I am here to assist you.
          </p>

          <Link href="/about">
            {" "}
            <button
              className="mt-8 sm:mt-10 inline-flex items-center gap-3 bg-[#021B2C] hover:bg-[#021B2C]/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition mx-auto lg:mx-0"
              type="button"
            >
              About me
            </button>
          </Link>
        </div>
        <div className="flex  flex-col justify-center items-center mt-16 sm:mt-20 lg:mt-0">
          <div className="w-full relative ">
            <div className="flex absolute flex-col items-end gap-1.5 top-36 left-52">
              <div className="flex lg:hidden flex-col items-start gap-1 ">
                <div className="h-4 w-4 bg-white rounded-full" />
                <div className="h-3 w-3 bg-white rounded-full" />
                <div className="h-2 w-2 bg-white rounded-full" />
                <div className="h-1 w-1 bg-white rounded-full" />
              </div>
            </div>
            <div className="w-full max-w-[400px] md:max-w-[500px] aspect-[4/5]  md:h-[500px] bg-[#021B2C] rounded-[20px]" />
            <Image
              src="/img/dp.png"
              alt="Advisor"
              width={480}
              height={680}
              className="absolute bottom-[2px] h-[60%] w-full max-w-[880px] object-contain object-bottom sm:h-[500px] sm:w-[450px] rounded-[20px]"
              priority
              unoptimized
            />
            <div className="md:hidden  absolute top-6 md:bottom-1 md:top-40 left-42 -translate-x-1/2 sm:left-20 sm:translate-x-0  sm:top-1/2 sm:-translate-y-1/2 bg-white rounded-[24px] sm:rounded-[30px] border-white shadow-4xl p-5 sm:p-8 w-[68%] sm:w-[300px]">
              <h3 className="text-lg sm:text-xl font-bold text-black">
                Veronica Barragan
              </h3>
              <p className="text-gray-800 mt-2 text-xs">Senior Loan Officer</p>

              <p className="text-gray-800 text-xs mt-2">NMLS ID: 1779283</p>
            </div>
          </div>
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 ">
            {socialIcons.map((icon) => (
              <a
                key={icon.id}
                href={icon.url}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-[#021B2C] border border-[#021B2C] flex items-center justify-center hover:bg-[#021B2C] transition group"
                aria-label={icon.alt}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={20}
                  height={20}
                  className="w-5 h-5 group-hover:brightness-0 text-[#021B2C] group-hover:invert transition-all"
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loan;
