import React from "react";
import { Background } from "../background/Background";
import Form from "../form/Form";
import { Section } from "../layout/Section";

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="font-fjalla sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <Form />
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a
                  className="text-indigo-500"
                  href="mailto:friendsofudsummerstage@gmail.com"
                >
                  friendsofudsummerstage@gmail.com
                </a>
                <p className="leading-normal my-5">
                  P.O.Box 707
                  <br />
                  Drexel Hill, PA 19026
                  <br />
                  Phone: 610-394-1580
                </p>
                <span className="inline-flex">
                  <a
                    className="text-gray-500"
                    href="https://www.facebook.com/UDSummerStage"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    className="ml-4 text-gray-500"
                    href="https://www.youtube.com/c/UDPACmagic"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z" />
                    </svg>
                  </a>
                  <a
                    href="http://instagram.com/UDSummerStage"
                    className="ml-4 text-gray-500"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  </Background>
);

export { Footer };
