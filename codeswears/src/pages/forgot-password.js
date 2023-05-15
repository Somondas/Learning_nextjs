import Link from 'next/link'
import React from 'react'

function Forgot() {
    return (
        <div>
            <section class="bg-gray-50 ">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link href={"#"} class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                        <img class="w-9 h-8 mr-2" src="/logo.png" alt="logo" />
                        CODESWEAR
                    </Link>
                    <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  ">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5   " placeholder="name@company.com" required="" />
                                </div>


                                <button type="submit" class="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Continue</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Forgot