import React from "react";

const Footer = () => {
    return (
       <><div className="flex flex-col md:flex-row md:items-start justify-center text-center mt-8 py-8 space-y-6 md:gap-28 bg-black text-white px-0">
            {/* Article 1 */}
            <article className="text-center space-y-6 md:space-y-16 md:mt-6">
                <p>About Us</p>
                <p>Follow Us</p>
                <div className="flex justify-center gap-6">
                    <img className="w-6" src="./images/insta.png" alt="Instagram" />
                    <img className="w-6" src="./images/facebook.png" alt="Facebook" />
                    <img className="w-6" src="./images/youtobe.png" alt="YouTube" />
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
            </div></>
    )
};

export default Footer;