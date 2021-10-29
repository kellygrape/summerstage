import { Meta } from "../layout/Meta";
import { Section } from "../layout/Section";
import { AppConfig } from "../utils/AppConfig";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import Link from "next/link";
import React from "react";
import { Button } from "../button/Button";
import { Banner } from "./Banner";
import { useRouter } from "next/router";

const Base = () => {
  const router = useRouter();
  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />

      <Section title="We've Got Magic Up Our Sleeve">
        <div className="mt-4 text-xl md:px-20">
          <p className="mb-4">
            Summer Stage draws over 800 young students, from middle school to
            college age, to participate in all phases of musical theatrical
            production, from acting to set design.
          </p>
          <p>
            The accomplishments of former summer stagers are notable in both
            quantity and quality. In addition to professionals in the performing
            arts, countless alumni are working as educators, community leaders
            and influencers in the non-profit sector. In terms of economic
            impact, the program offers summer employment for up to 130 young
            adults and the Performing Arts Center generates well over $800,000
            in annual ticket sales and sponsorships.
          </p>
        </div>
        <Banner />
        <img
          src={`${router.basePath}/assets/images/42nd-Street--Photo-by-Lauren-Stevenson-Yacina.jpg`}
        />
      </Section>

      <div className="bg-hero-400">
        <Section
          light={true}
          title="Partnership With Upper Darby Arts and Education Foundation"
        >
          <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
              <div className="flex-shrink-0">
                <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                Joint Statement from UDAEF and Summer Stage
              </h3>
              <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                October 11, 2021
              </p>
              <Link href="https://udfoundation.org/wp-content/uploads/2021/10/UDAEF-SummerStage-101121.pdf">
                <a>
                  <Button>Read Full Statement</Button>
                </a>
              </Link>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
              <div className="flex-shrink-0">
                <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M14.601 21.5c0 1.38-1.116 2.5-2.499 2.5-1.378 0-2.499-1.12-2.499-2.5s1.121-2.5 2.499-2.5c1.383 0 2.499 1.119 2.499 2.5zm-2.42-21.5c-4.029 0-7.06 2.693-7.06 8h3.955c0-2.304.906-4.189 3.024-4.189 1.247 0 2.57.828 2.684 2.411.123 1.666-.767 2.511-1.892 3.582-2.924 2.78-2.816 4.049-2.816 7.196h3.943c0-1.452-.157-2.508 1.838-4.659 1.331-1.436 2.986-3.222 3.021-5.943.047-3.963-2.751-6.398-6.697-6.398z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                The Case for an Independent Upper Darby Summer Stage FAQs
              </h3>
              <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                October 11, 2021
              </p>
              <Link href="https://docs.google.com/document/d/1Pk2wEcgv3bDx4ngnh6vu7Tm_LxF9oPZbpldW4HFE2zE/edit?fbclid=IwAR1-g3ikg93kG3muSsYJ0qxYINyYce0iDm6qjKN5YAl4YyBqvoH6GXPwuag">
                <a>
                  <Button>Read Document</Button>
                </a>
              </Link>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6 px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
              <div className="flex-shrink-0">
                <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                Statement of Issues
              </h3>
              <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                October 8, 2021
              </p>
              <Link href="https://drive.google.com/file/d/1mCFmmILyxJQB9t_l3rqoQTkAonNw6tY8/view">
                <a>
                  <Button>Read Document</Button>
                </a>
              </Link>
            </div>
          </div>
        </Section>
      </div>
      {/* <!-- testimonial --> */}
      <div className="flex justify-center items-center w-screen h-screen bg-gray-800">
        <div className="container mx-auto mt-10 mb-10 lg:mb-40 lg:px-20">
          <div className="relative w-full my-4 lg:w-9/12 mr-auto rounded-2xl shadow-2xl">
            <img
              alt="Card"
              src={`${router.basePath}/assets/images/witw.jpg`}
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="relative w-full lg:-mt-96 lg:w-3/6 p-8 ml-auto bg-blue-800 rounded-2xl z-50">
            <div className="flex flex-col text-white">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-indigo-200 fill-current w-12 h-12 md:w-16 md:h-16"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                </svg>
              </div>
              <p className="text-white my-5 px-2">
                Summer Stage is a program in which the participants build
                character, whether on the stage or behind the scenes. It is a
                safe place for students to learn and grow. For some, it is the
                first place where they can be their best, true selves. It is a
                place where personal growth is fostered. Participants have the
                opportunity to build confidence and resiliancy.
              </p>
              <div className="flex justify-between pl-2">
                <h3 className="font-bold text-2xl">Barb Carr</h3>
                <i className="fas fa-quote-right text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { Base };
