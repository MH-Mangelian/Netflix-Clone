import React from "react";
import { MdLanguage } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-col col-1 items-center min-h-[30vh] m-auto pb-10 ">
        
      <div className="flex space-y-2 md:space-y-10 mb-5">
        <h3 className="text-sm md:text-base text-zinc-400">
          Questions? Call 0800-000-7969
        </h3>
      </div>

      <div className="flex items-center  space-y-2 md:space-y-10">
        <div className="flex justify-between space-x-5 md:space-x-20 sm:text-sm sm:space-x-0.5">
          {/* -----------Col1--------------- */}
          <div className="flex flex-col">
            <ul className="space-y-1 md:space-y-4 max-sm:hidden">
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Help Center</a>
              </li>
              <li>
                <a href="/">Investor Relations</a>
              </li>
              <li>
                <a href="/">Redeem Gift Cards</a>
              </li>
              <li>
                <a href="/">Terms of Use</a>
              </li>
              <li>
                <a href="/">Impressure</a>
              </li>
              <li>
                <a href="/">Legal Guarantee</a>
              </li>
            </ul>
          </div>
          {/* -----------Col2--------------- */}
          <div className="flex flex-col ">
            <ul className="space-y-1 md:space-y-4 ">
              <li>
                <a href="/">Gift Card Terms</a>
              </li>
              <li>
                <a href="/">Account</a>
              </li>
              <li>
                <a href="/">Jobs</a>
              </li>
              <li>
                <a href="/">Buy Gift Cards</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Legal Notices</a>
              </li>
            </ul>
          </div>
          {/* -----------Col3--------------- */}
          <div className="flex flex-col">
            <ul className="space-y-1 md:space-y-4 ">
              <li>
                <a href="/">Cancel Membership</a>
              </li>
              <li>
                <a href="/">Media Center</a>
              </li>
              <li>
                <a href="/">Netflix Shop</a>
              </li>
              <li>
                <a href="/">Ways to Watch</a>
              </li>
              <li>
                <a href="/">Cookie Preferences</a>
              </li>
              <li>
                <a href="/">Speed Test</a>
              </li>
              <li>
                <a href="/">Only on Netflix</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex justify-between">
            <MdLanguage className="h-11 w-11 text-white/90 flex justify-center py-3 mx-auto" />
            <select
              className="bg-[hsl(0,0%,8%)] py-2 px-2 -ml-3.5"
              name="language"
              id="language"
            >
              <option className="text-white/70" value="English">
                English
              </option>
            </select>
          </div>

          <div className="flex space-y-2 md:space-y-10 py-3 px-5">
            <h3 className="text-sm md:text-base text-zinc-400">
              Netflix Germany
            </h3>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
