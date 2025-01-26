import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <div className="leading-4 min-h-screen margin mx-auto lg:max-w-7xl">
        <header className="shadow">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl lg:text-4xl ">Tech Book Club</h1>

            {/* <nav className="space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#services" className="text-gray-600 hover:text-gray-800">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav> */}
          </div>
        </header>

        <main className="container mx-auto px-6 py-12">
          <section className="grid grid-cols-2 gap-4 place-items-center">
            <div className="text-left max-w-lg">
              <h2
                className="leading-6 text-4xl bg-clip-text text-transparent bg-gradient-to-tl from-black via-stone-700  to-yellow-700 
                dark:bg-gradient-to-tl dark:from-white dark:via-stone-700  dark:to-black 
                md:text-7xl lg:text-8xl"
              >
                Join the ultimate tech book club
              </h2>
              <p className="w-full">
                Turn your reading time into learning time with fellow tech
                enthusiats. Get curated recommendations, join vibrant
                discussions, and level up your skills. one chapter at a time.
              </p>
              <a
                href="#contact"
                className="inline-block mt-3 px-6 py-3 bg-inherit border-2
                 dark:border-white  font-semibold rounded
                 hover:bg-blue-700"
              >
                REVIEW MEMBERSHIP OPTIONS <span className="mx-4 ">&darr;</span>
              </a>
              <div className="grid grid-cols-10 place-items-center mt-3 ">
                 
                <Image
                  src="/images/human1.png"
                  alt="human1"
                  className="col-span-1 rounded-lg -z-20"
                  width={30}
                  height={30}
                />
                <Image
                  src="/images/human2.png"
                  alt="human2"
                  className=" rounded-lg -z-10"
                  width={30}
                  height={30}
                />
                <Image
                  src="/images/human3.png"
                  alt="human3"
                  className="rounded-lg -z-0"
                  width={30}
                  height={30}
                />
                
                <div className="col-span-7 text-left">
                  <div className="grid grid-cols-10 gap-1">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p>200+ developers joined already</p>
                </div>
              </div>
            </div>
            <Image
              src="/images/colabo4.jpg"
              alt="Tech Team"
              className=" rounded-lg"
              width={480}
              height={480}
            />
          </section>

          <section id="about" className="mt-16 ">
            <div className="grid grid-cols-2 gap-4 place-items-center">
              <Image
                src="/images/colabo1.jpg"
                alt="Tech Team"
                className="rounded-lg"
                width={480}
                height={480}
              />
              <div>
                <h3 className="text-2xl mt-3 md:text-4xl lg:text-5xl  ">
                  Read together, grow Together
                </h3>
                <div className="grid grid-cols-8 gap-2 place-items-center">
                  <Image
                    src="/icons/checkbox.svg"
                    alt="checkbox"
                    className="col-span-1"
                    width={20}
                    height={20}
                  />
                  <p className="mt-3 col-span-7 ">
                    Monthly curated tech reads selected by industary experts
                  </p>
                </div>
                <div className="grid grid-cols-8 gap-2 place-items-center">
                  <Image
                    src="/icons/checkbox.svg"
                    alt="checkbox"
                    className="col-span-1"
                    width={20}
                    height={20}
                  />
                  <p className="mt-3 col-span-7 ">
                    Monthly curated tech reads selected by industary experts
                  </p>
                </div>
                <div className="grid grid-cols-8 gap-2 place-items-center">
                  <Image
                    src="/icons/checkbox.svg"
                    alt="checkbox"
                    className="col-span-1"
                    width={20}
                    height={20}
                  />
                  <p className="mt-3 col-span-7 ">
                    Monthly curated tech reads selected by industary experts
                  </p>
                </div>
                <div className="grid grid-cols-8 gap-2 place-items-center">
                  <Image
                    src="/icons/checkbox.svg"
                    alt="checkbox"
                    className="col-span-1"
                    width={20}
                    height={20}
                  />
                  <p className="mt-3 col-span-7 ">
                    Monthly curated tech reads selected by industary experts
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-4 place-items-center">
              <div>
                <h3 className="text-2xl mt-3 leading-5 md:text-4xl lg:text-5xl  ">
                  Not your average <br></br> book club
                </h3>
                <p>
                  Connect with a community that speaks your language from
                  <strong> Python</strong> to <strong>Typescript</strong> and
                  everything in between. Our discussion blend technical depth
                  with pratical applications.
                </p>
              </div>

              <Image
                src="/images/colabo3.jpg"
                alt="Tech Team"
                className=" rounded-lg"
                width={480}
                height={480}
              />
              <div className="col-span-2">
                <FontAwesomeIcon icon={faReact} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faPython} />
              </div>
            </div>
          </section>
          <section className="bg-local bg-[url('/images/bg.jpg')] py-11 bg-cover bg-center bg-no-repeat rounded">
            <h3 className="text-2xl mt-6 text-center leading-5 md:text-4xl lg:text-5xl  ">
              Your tech <br></br>reading journey
            </h3>
            <div className="grid grid-cols-4 gap-4 place-items-center mt-6 px-6">
              <div className="grid grid-cols-2 ">
                <Image
                  src="/icons/square-1.svg"
                  alt="number1box"
                  className="col-span-1"
                  width={20}
                  height={20}
                />
                <Image
                  src="/icons/turn-right.svg"
                  alt="checkbox"
                  className="col-span-1 "
                  width={20}
                  height={20}
                />
                <p className="mt-2 col-span-2">Choose your membership tier</p>
              </div>
              <div className="grid grid-cols-2 ">
                <Image
                  src="/icons/square-2.svg"
                  alt="number2box"
                  className="col-span-1"
                  width={20}
                  height={20}
                />
                <Image
                  src="/icons/turn-right.svg"
                  alt="checkbox"
                  className="col-span-1"
                  width={20}
                  height={20}
                />
                <p className="mt-2 col-span-2">Choose your membership tier</p>
              </div>
              <div className="grid grid-cols-2 ">
                <Image
                  src="/icons/square-3.svg"
                  alt="number3box"
                  className="col-span-1"
                  width={20}
                  height={20}
                />
                <Image
                  src="/icons/turn-right.svg"
                  alt="checkbox"
                  className="col-span-1"
                  width={20}
                  height={20}
                />
                <p className="mt-2 col-span-2">Choose your membership tier</p>
              </div>
              <div>
                <Image
                  src="/icons/square-4.svg"
                  alt="number4box"
                  className="col-span-1"
                  width={20}
                  height={20}
                />

                <p className="mt-2">Choose your membership tier</p>
              </div>
            </div>
          </section>

          <section id="services" className="mt-16">
            <h3 className="text-2xl mt-6 text-center leading-5 md:text-4xl lg:text-5xl  ">
              Membership options
            </h3>
            <div className="grid grid-cols-12 gap-1 place-items-center mt-6">
              <div className="border px-3 py-3 rounded-lg col-span-4 leading-7">
                <h4 className="text-xl">Starter</h4>
                <p>
                  <span className="text-3xl">$19</span> /month
                </p>
                <hr></hr>
                <div className="grid grid-cols-4 gap-1 mt-2">
                  <Image
                    src="/icons/checkbox.svg"
                    alt="checkbox"
                    className="col-span-1"
                    width={20}
                    height={20}
                  />
                  <p className="col-span-3">1 book/month</p>
                </div>
                <div className="grid grid-cols-4 gap-1 ">
                  <Image
                    src="/icons/checkbox.svg"
                    alt="checkbox"
                    className="col-span-1"
                    width={20}
                    height={20}
                  />
                  <p className="col-span-3">Online forums</p>
                </div>
                <a
                  href="#"
                  className="inline-block mt-3 px-7 py-2 bg-inherit border-2"
                >
                  SUBSCRIBE NOW
                </a>
              </div>
              <div className="border px-4 py-5 rounded-lg col-span-4 leading-7">
                <h4 className="text-xl">Pro</h4>
                <p>
                  <span className="text-3xl">$29</span> /month
                </p>
                <hr></hr>
                <div className="grid grid-cols-4 gap-1 mt-2">
                  <Image
                    src="/icons/checkbox.svg"
                    alt="checkbox"
                    className="col-span-1"
                    width={20}
                    height={20}
                  />
                  <p className="col-span-3">1 book/month</p>
                </div>
                <div className="grid grid-cols-4 gap-1 ">
                  <Image
                    src="/icons/checkbox.svg"
                    alt="checkbox"
                    className="col-span-1"
                    width={20}
                    height={20}
                  />
                  <p className="col-span-3">Online forums</p>
                </div>
                <a
                  href="#"
                  className="inline-block mt-3 px-7 py-2 bg-inherit border-2"
                >
                  SUBSCRIBE NOW
                </a>
              </div>
              <div className="border px-3 py-3 rounded-lg col-span-4 leading-7 ">
                <h4 className="text-xl">Enterprise</h4>
                <p>
                  <span className="text-3xl">Custom</span>
                </p>
                <hr></hr>
                <div className="grid grid-cols-4 gap-1 mt-2">
                  <Image
                    src="/icons/checkbox.svg"
                    alt="checkbox"
                    className="col-span-1"
                    width={20}
                    height={20}
                  />
                  <p className="col-span-3">1 book/month</p>
                </div>
                <div className="grid grid-cols-4 gap-1 ">
                  <Image
                    src="/icons/checkbox.svg"
                    alt="checkbox"
                    className="col-span-1"
                    width={20}
                    height={20}
                  />
                  <p className="col-span-3">Online forums</p>
                </div>
                <a
                  href=""
                  className="inline-block mt-3 px-7 py-2 bg-inherit border-2"
                >
                  Talk To Us
                </a>
              </div>
            </div>
          </section>

          <section id="testimony" className="mt-16">
            <div className="flex gap-1 justify-center ">
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            </div>
            <h4 className="text-xl mt-4 text-center max-w-lg mx-auto">
              &#34;This book club transformed my technical reading from a
              solitary activit into an enriching community experience. The
              discussions are gold!&#34;
            </h4>
            <p className="text-center">Sarah Chen, Software Architect</p>
          </section>
        </main>

        <footer className="bg-emerald-900 py-6 mt-16 ">
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-2xl mt-6 text-center leading-5 md:text-4xl lg:text-5xl  ">
              Ready to debug your <br></br> reading list?
            </h3>
            <a
              href="#contact"
              className="inline-block mt-3 px-7 py-2 bg-inherit border-2 "
            >
              REVIEW MEMBERSHIP OPTIONS
            </a>
            <div className="grid grid-cols-10 place-items-center mt-3">
              <Image
                src="/images/human1.png"
                alt="human1"
                className=" rounded-lg"
                width={30}
                height={30}
              />
              <Image
                src="/images/human2.png"
                alt="human2"
                className=" rounded-lg"
                width={30}
                height={30}
              />
              <Image
                src="/images/human3.png"
                alt="human3"
                className="rounded-lg"
                width={30}
                height={30}
              />
              <div className="col-span-7 text-left">
                <div className="grid grid-cols-10 gap-1">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                </div>
                <p>200+ developers joined already</p>
              </div>
            </div>
          </div>
          <hr className="w-full mt-2 mb-2"></hr>
          <div className="flex flex-row justify-between gap-3 px-4">
            <p className="">
              &copy; {new Date().getFullYear()} - Tech Book Club. All rights
              reserved.
            </p>
            <div>
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
