import Image from "next/image";
import Head from "next/head";

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
                  <div>STARS</div>
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
                <h3 className="text-2xl mt-3 md:text-4xl lg:text-5xl  ">Not your average book club</h3>
                <p>
                  Connect with a community that speaks your language from{" "}
                  <strong>Python</strong> to <strong>Typescript</strong> and
                  everything in between. Our discussion blend technical depth
                  with pratical applications.
                </p>
              </div>

              <Image
                src="/images/colabo3.jpg"
                alt="Tech Team"
                className="lg:w-1/2 rounded-lg"
                width={300}
                height={200}
              />
              <div className="col-span-2">some svgs</div>
            </div>
          </section>
          <section>
            <h3>Your tech reading journey</h3>
            <div>
              <div>
                <p>Choose your membership tier</p>
              </div>
              <div>
                <p>Choose your membership tier</p>
              </div>
              <div>
                <p>Choose your membership tier</p>
              </div>
              <div>
                <p>Choose your membership tier</p>
              </div>
            </div>
          </section>

          <section id="services" className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-800">
              Membership options
            </h3>
            <div>
              <div>
                <h4>Starter</h4>
                <p>
                  <strong>$19</strong>/month
                </p>
                <hr></hr>
                <div>
                  svg
                  <p>1 book/month</p>
                </div>
                <div>
                  svg
                  <p>Online forums</p>
                </div>
                <a href="#">SUBSCRIBE NOW</a>
              </div>
              <div>
                <h4>Starter</h4>
                <p>
                  <strong>$19</strong>/month
                </p>
                <hr></hr>
                <div>
                  svg
                  <p>1 book/month</p>
                </div>
                <div>
                  svg
                  <p>Online forums</p>
                </div>
                <a href="#">SUBSCRIBE NOW</a>
              </div>
              <div>
                <h4>Starter</h4>
                <p>
                  <strong>$19</strong>/month
                </p>
                <hr></hr>
                <div>
                  svg
                  <p>1 book/month</p>
                </div>
                <div>
                  svg
                  <p>Online forums</p>
                </div>
                <a href="#">SUBSCRIBE NOW</a>
              </div>
            </div>
          </section>

          <section id="testimony" className="mt-16">
            <h4 className="mt-4 ">
              This book club transformed my technical reading from a solitary
              activit into an enriching community experience. The discussions
              are gold!
            </h4>
            <p className="">Sarah Chen, Software Architect</p>
          </section>
        </main>

        <footer className="bg-gray-200 py-6 mt-16">
          <h3 className="text-2xl font-semibold text-gray-800">
            Ready to debug your reading list?
          </h3>
          <a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          >
            REVIEW MEMBERSHIP OPTIONS
          </a>
          <div>
            <img src="#" alt="placeholder" className="lg:hidden rounded-lg" />
            <img src="#" alt="placeholder" className="lg:hidden rounded-lg" />
            <img src="#" alt="placeholder" className="lg:hidden rounded-lg" />
            <div>
              <div>STARS</div>
              <p>200+ developers joined already</p>
            </div>
          </div>
          <div>
            <p className="text-center text-gray-600">
              &copy; {new Date().getFullYear()} - Tech Book Club. All rights
              reserved.
            </p>
            <div>svgs</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
