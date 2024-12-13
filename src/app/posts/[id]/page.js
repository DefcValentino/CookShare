"use client";

import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Ensure Heroicons is installed

export default function RecipeDetail({ params }) {
  const { id } = params; // Get the dynamic ID from the URL
  const [recipe, setRecipe] = useState(null); // State to store recipe data
  const [error, setError] = useState(false); // State for error handling
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (id) {
      // Fetch the recipe details from the Spoonacular API
      const fetchRecipe = async () => {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=ad3ecd8d3b4f44cc9eb20c5d000f1575`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch recipe");
          }
          const data = await response.json();
          setRecipe(data);
        } catch (error) {
          console.error("Error fetching recipe:", error);
          setError(true);
        }
      };

      fetchRecipe();
    }
  }, [id]);

  // If there's an error
  if (error) {
    return <div className="text-red-600">Failed to load recipe. Please try again later.</div>;
  }

  // If data is still loading
  if (!recipe) {
    return <div>Loading...</div>;
  }

  // Render the recipe details
  return (
    <>
      <nav className="fixed py-5 top-0 w-full bg-black text-white md:fixed md:top-0 md:w-full md:flex md:justify-between
       md:bg-black md:text-white md:py-5 md:px-16 z-50">
        <h1 className="text-lg font-bold flex items-center ">CookShare</h1>
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
        <div
          className={`space-y-6 md:space-y-0 right-0 w-full md:w-auto h-[50vh] md:h-[50px] absolute top-[4.2rem] md:top-0 md:relative bg-gray-400 md:flex md:bg-black text-center md:justify-between transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          } md:opacity-100 md:max-h-full`}
        >
          <ul className="font-bold mt-8 md:mt-0 space-y-6 md:space-y-0 md:flex md:space-x-12 md:items-center md:mr-24">
            <li>
              <a href="/page.js#home" className="hover:underline">
                Home
              </a>
            </li>  
            <li>
              <a href="/page.js#blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="./page.js" className="hover:underline">
                About
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
      <div className="min-h-screen bg-gray-100 p-4 mt-16 md:p-16">
        <h1 className="text-4xl font-bold">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-lg shadow-md my-6 w-full md:w-1/2"
        />
        <p className="text-lg">{recipe.summary}</p>
        <h2 className="text-2xl mt-8">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.extendedIngredients?.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <h2 className="text-2xl mt-8">Instructions</h2>
        <div
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: recipe.instructions }}
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-start justify-center text-center mt-8 py-8 space-y-6 md:gap-28 bg-black text-white px-0">
            {/* Article 1 */}
            <article className="text-center space-y-6 md:space-y-16 md:mt-6">
                <p>About Us</p>
                <p>Follow Us</p>
                <div className="flex justify-center gap-6">
                    <img className="w-6" src="../images/insta.png" alt="Instagram" />
                    <img className="w-6" src="../images/facebook.png" alt="Facebook" />
                    <img className="w-6" src="../images/youtobe.png" alt="YouTube" />
                </div>
            </article>

            {/* Article 2 */}
            <article>
                <p>Blog</p>
            </article>

            {/* Article 3 */}
            <article>
                <p>Contact Us</p>
            </article>

            {/* Article 4 */}
            <article className="p-2 space-y-6 md:space-y-12">
                <h1 className="h1-text font-bold md:text-3xl">
                    Discover Delicious Meals Shared Here
                </h1>
                <p className="text-lg">
                    Join our food sharing community and explore a world of culinary
                    delights
                </p>
                <div className="flex gap-16 justify-center">
                    <input
                        className="border-2 border-white bg-black py-2 px-2 rounded-lg"
                        placeholder="Enter Your Email" />
                    <p className="hover:bg-green-600 cursor-pointer flex py-2 px-5 rounded-lg text-white items-center text-center bg-green-500 w-[100px]">
                        Sign Up
                    </p>
                </div>
            </article>
        </div><div className="bg-black border-t-2 text-white flex flex-col md:flex-row p-6 justify-center md:gap-[15rem] text-center space-y-8 md:space-y-0">
                <p> &#169;2024 CookShare. All rights reserved</p>
                <p>Privacy Policy</p>
                <p>Terms Of Services</p>
            </div>
    </>
  );
}
