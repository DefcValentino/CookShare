"use client";

import { useState } from "react";
import{ Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline" /// Updated for version2
import Link from "next/link";
import React from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false); /// State to toggle

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); /// Toggle menu state
  }

  return (
    // Hero section //
      <div id="home" className="bg-slate-100 min-h-screen overflow-x-hidden">
       {/* Navigation Bar */}
       <nav className="fixed py-5 top-0 w-full bg-black text-white md:fixed md:top-0 md:w-full md:flex md:justify-between md:bg-black md:text-white md:py-5 md:px-16 z-50">
      <h1 className="text-lg font-bold flex items-center pl-4 md:pl-0 ">CookShare</h1>

      {/* Menu Icon */}
      <button
        className="md:hidden focus:outline-none absolute top-4 right-4"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {menuOpen ? (
          <XMarkIcon className="h-8 w-8 text-white" />
        ) : (
          <Bars3Icon className="h-8 w-8 text-white" />
        )}
      </button>

      {/* Menu */}
      <div
        className={`space-y-6 md:space-y-0 right-0 w-full md:w-auto h-[50vh] md:h-[50px] absolute top-[4.2rem] md:top-0 md:relative bg-gray-400 md:flex md:bg-black text-center md:justify-between transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } md:opacity-100 md:max-h-full`}
      >
        {/* List Items */}
        <ul className="font-bold mt-8 md:mt-0 space-y-6 md:space-y-0 md:flex md:space-x-12 md:items-center md:mr-24">
          <li>
            <a href="#home" className="hover:underline">
               Home
            </a>
          </li>
          
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>

          <li>
            <a href="#blog" className="hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex mx-auto w-[100px] md:w-full flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <button className="btn-primary">SIGN UP</button>
          <button className="border border-white hover:bg-white hover:text-black px-4 py-2 rounded-full">
            LOGIN
          </button>
        </div>
      </div>
    </nav>
       
       {/* Hero Body */}
       <div className='space-y-8 mt-12  md:mt-20 md:flex md:flex-row-reverse px-4 md:px-16 md:py-20 md:justify-between '>
        {/* Hero image */}
        <figure className='mt-20 md:mt-0'>
            <img className='rounded-xl shadow-xl
            'src='/images/fooddinning.jpg' 
            alt='dinning image'
             width={500}
             layout="responsive">

            </img>
        </figure>

          <article className='text-center md:text-left space-y-8 md:flex-col md:space-y-8 md:max-w-[600px] '>
            <h1 className='text-2xl font-bold flex-wrap text-center md:flex md:text-left md:font-bold md:text-6xl'>
                Discover Delicious Recipes for Every Taste
            </h1>
            <p className='text-left md:text-xl'>
              Join our community and start sharing your favorite homemade recipes with food enthusiasts from around the world
            </p>

            {/* Read more Button*/}
            <Link href={`/posts/419357`}>
                <button className="btn-primary mt-6 w-[12rem]">
                    <span>Read More</span>
                </button>
            </Link>
          </article>
       </div>

       {/* Dish display container */}
       <div className='flex flex-col items-center mt-6 md:items-end px-4 space-y-6 py-6 md:px-16 h-full md:h-full'>
        <h1 className="h1-text md:text-4xl">
          Category
        </h1>

        {/* Dishes */}
        <figure className=" flex overflow-x-auto  scrollbar-hidden md:grid-cols-4 space-x-6  ">
          {/* 1st image */}
          <div className="flex-col text-center space-y-6 flex-shrink-0">
            <img className="w-[150px] h-[150px] md:w-[280px] md:h-[280px] shadow-md rounded-full"
             src="./images/2nd dish.jpg">
            </img>
            <p className="text-lg">
              CHICKEN FILLET 
            </p>
          </div>

          {/* 2nd image */}
          <div className="flex-col text-center space-y-6 flex-shrink-0">
            <img className="w-[150px] h-[150px] md:w-[280px] md:h-[280px] shadow-md rounded-full"
             src="./images/cake.jpg">
            </img>
            <p className="text-lg">
              CAKE
            </p>
          </div>

           {/* 3rd image */}
          <div className="flex-col text-center space-y-6 flex-shrink-0">
            <img className="w-[150px] h-[150px] md:w-[280px] md:h-[280px] shadow-md rounded-full"
             src="./images/3rd dish.jpg">
            </img>
            <p className="text-lg">
               GRILLED MEAT
            </p>
          </div>

           {/* 4th image */}
          <div className="flex-col text-center space-y-6 flex-shrink-0 ">
            <img className="w-[150px] h-[150px] md:w-[280px] md:h-[280px] shadow-md rounded-full"
             src="./images/5th dish.jpg">
            </img>
            <p className="text-lg">
             PORK
            </p>
          </div>
        </figure>


        {/* Featured Posts */}
        <div id="blog" className="h-full space-y-12 ">
          <h1 className="h1-text md:text-4xl font-bold  mt-16">
            Featured Post
          </h1>

           {/* 1st post */}
          <article className="flex flex-col-reverse md:flex-row md:space-x-12 bg-lightGreen
                border-black border-2 rounded-lg  p-4 md:items-center">
            {/* Article content */}
            <div className="md:text-lg">
              <h2 className="mt-6 font-bold text-lg md:text-3xl md:space-y-4 md:w-[650px]">
                Garlic Cauliflower Pasta with Crispy Breadcrumbs Breadcrumbs"
              </h2>
               <p className="py-6 md:w-[650px]">
                   A savory pasta dish with roasted cauliflower, fragrant garlic, and golden 
                  crunchy breadcrumbs. Perfect for a cozy, flavor-packed meal. Click to explore the recipe
                </p>

                <div className="">
                  <p>
                    By Micheal
                  </p>
                  <dt>
                    December 7, 2024
                  </dt> 

                  <Link href={`/posts/716429`}>
                    <button className="btn-primary mt-6 w-[12rem]">
                       <span>Read More</span>
                    </button>
                 </Link>
                </div>
            </div>

            <figure className="">
              <img className="rounded-lg"
               src="./images/malechef.jpg">
              </img>
            </figure>
          </article>


           {/* 2nd post */}
           <article className="flex flex-col-reverse md:flex-row-reverse bg-lightGreen border-black 
             border-2 rounded-lg p-4 ">
            {/* Article content */}
            <div className="md:flex-col md:pl-20 md:text-lg md:items-start md:space-y-4">
              <h2 className="mt-6 font-bold text-lg md:text-3xl md:items-center md:w-[650px]">
                   Buttermilk Pecan Pancakes with Maple & Bourbon Butter
              </h2>
               <p className="py-6 md:w-[650px]">
                 Fluffy buttermilk pancakes topped with rich pecans, a dash of bourbon molasses butter,
                  and drizzled with maple syrup. Discover the recipe!
                </p>

                <div className="">
                  <p>
                    By Jackson
                  </p>
                  <dt>
                    June 2, 2024
                  </dt>

                  <Link href={`/posts/324694`}>
                    <button className="btn-primary mt-6 w-[12rem]">
                       <span>Read More</span>
                    </button>
                 </Link>
                </div>
            </div>

            <figure className="">
              <img className="rounded-lg"
               src="./images/tablebreakfast.jpg">
              </img>
            </figure>
          </article>
        </div>


        {/*  LATEST POSTS */}
        <div className="">
          <h1 className="h1-text md:text-4xl mt-16 justify-center md:justify-end flex md:text-right">
            Latest Post
          </h1>

          {/* Latest post container */}
          <div className="flex overflow-x-auto scrollbar-hidden mt-6 space-x-6 md:space-x-8 ">

           {/* Scroll flex.container */}
            <div className="flex w-[370px] md:w-full mb-16 space-x-6 md:space-x-10">
             {/* col-1 */}
            <figure className="space-y-6 flex-shrink-0 shadow-md p-4 w-[230px] md:w-[280px]">
              <img className="w-full h-auto"
               src="./images/prep5.jpg">
              </img>

              <article className="space-y-4">
                <h3 className="md:text-xl font-bold">
                    Grilled Pork with Bold Romesco Flavors
                </h3>
                <p className="text-lg">
                  Enrich taste with grilled pork paired with 
                smoky, tangy Romesco-style seasoning. A dinner idea you don’t want
                 to miss
                </p>

                <div className="flex space-x-4 ">
                  <p className=" text-sm md:text-lg">By Jack tim</p>
                  <dt className="text-sm md:text-lg">October 4, 2024</dt>
                </div>
                <Link href={`/posts/209128`}>
                    <button className="btn-primary mt-6 w-[12rem]">
                       <span>Read More</span>
                    </button>
                 </Link>
              </article>
            </figure>


             {/* col-2 */}
             <figure className="space-y-6 flex-shrink-0 shadow-md p-4 w-[230px] md:w-[280px]">
              <img className="w-full h-auto"
               src="./images/prep1.jpg">
              </img>

              <article className="space-y-4">
                <h3 className="md:text-xl font-bold">
                   Smoky BBQ Chicken Delight
                </h3>
                <p className="text-lg">
                   Juicy, tender chicken grilled to perfection and infused with bold
                    BBQ flavors. A crowd-pleaser for any occasion, discover the recipe now!
                </p>

                <div className="flex space-x-4 ">
                  <p className=" text-sm md:text-lg">By Jack tim</p>
                  <dt className="text-sm md:text-lg">October 4, 2024</dt>
                </div>
                <Link href={`/posts/42569`}>
                    <button className="btn-primary mt-6 w-[12rem]">
                       <span>Read More</span>
                    </button>
                 </Link>
              </article>
            </figure>


             {/* col-3 */}
             <figure className="space-y-6 flex-shrink-0 shadow-md p-4 w-[230px] md:w-[280px]">
              <img className="w-full h-auto"
               src="./images/prep4.jpg">
              </img>

              <article className="space-y-4">
                <h3 className="md:text-xl font-bold">
                  Crispy Chicken BLT Bliss
                </h3>
                <p className="text-lg">
                 Savor the perfect combo of crispy chicken, smoky bacon, fresh lettuce,
                 and juicy tomatoes. A classic favorite with a delicious twist—try the
                  recipe today!
                </p>

                <div className="flex space-x-4 ">
                  <p className=" text-sm md:text-lg">By Jack tim</p>
                  <dt className="text-sm md:text-lg">October 4, 2024</dt>
                </div>
                <Link href={`/posts/83890`}>
                    <button className="btn-primary mt-6 w-[12rem]">
                       <span>Read More</span>
                    </button>
                 </Link>
              </article>
            </figure>


             {/* col-4 */}
             <figure className="space-y-6 flex-shrink-0 shadow-md p-4 w-[230px] md:w-[280px]">
              <img className="w-full h-auto"
               src="./images/prep3.jpg">
              </img>

              <article className="space-y-4">
                <h3 className="md:text-xl font-bold">
                  Golden Crust Chicken Pie
                </h3>
                <p className="text-lg">
                  Indulge in a flaky, buttery crust filled with tender chicken and rich,
                  savory flavors. The ultimate comfort food awaits get the recipe now!
                </p>

                <div className="flex space-x-4 ">
                  <p className=" text-sm md:text-lg">By Jack tim</p>
                  <dt className="text-sm md:text-lg">October 4, 2024</dt>
                </div>
                <Link href={`/posts/737543`}>
                    <button className="btn-primary mt-6 w-[12rem]">
                       <span>Read More</span>
                    </button>
                 </Link>
              </article>
            </figure>
            </div>
          </div>
        </div>


        {/* About Us Section */}
        <div id="about" className="flex flex-col-reverse md:flex-row md:space-x-32 md:space-y-8 px-4 py-6 shadow-md">
          <article className="flex-col justify-center md:w-[600px] space-y-6 mt-6 md:mt-8"> 
            <h1 className="flex h1-text md:text-3xl">
              About Cookshare
            </h1>

            <p className="text-lg">
                CookShare is more than just a recipe-sharing platform; it’s a thriving ecosystem where culture, creativity, 
                 and tradition meet. Through CookShare, food lovers have the opportunity to preserve and pass down cherished 
                 family recipes, celebrate diverse cuisines, and create new favorites to enjoy with loved ones. By fostering 
                 these connections, CookShare transforms cooking from a solitary activity into a collective, celebratory experience.

                The platform also serves as a learning hub for aspiring chefs and home cooks. With step-by-step guides, video
                 tutorials, and interactive features, users can enhance their skills, master new techniques, and tackle ambitious 
                 recipes. 
            </p>
          </article>

          <figure className="">
            <img className="rounded-lg md:w-[500px] md:h-[400px]"
            src="./images/team3.jpg">
            </img>
          </figure>

        </div>


        {/* NEWSLETTER SECTION */}
        <div className="flex flex-col p-2 md:flex-row md:space-x-12">
          <figure className="p-2 mt-16">
            <img className="w-full rounded-lg" src="./images/cheffry.jpg">
            </img>
          </figure>

          <article className=" p-2 mt-16 space-y-6 md:space-y-16">
            <h1 className="h1-text md:text-3xl">
              Discover Delicious Meals Shared Here
            </h1>

            <p className="text-lg">
              Join our food sharing community and explore a world of culinary delights
            </p>
            <div className="flex gap-16">
              <input className=" border-2 border-black py-2 px-2 rounded-lg" 
              placeholder="Enter Your Email">
              </input>
              <p className="hover:bg-green-600 cursor-pointer  flex py-2 px-5 rounded-lg text-white items-center text-center bg-green-500 w-[100px]">
                Sign Up
              </p>
            </div>
          </article>
        </div>
      </div>

      {/*FOOTER SECTION  */}
       <Footer/>

    </div>
  );
}
