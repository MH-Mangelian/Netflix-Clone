import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const login = () => {
  return (
    <div>
      <Head>
        <title>NetFlix - Home</title>
        <link rel="icon" href="/Netflix_icon.svg" />
      </Head>
      <Header />
      <main>
        <div className="container mx-auto flex justify-center items-center min-h-screen">

          {/* ---------------color bg---------------- */}
          <div className="-z-30 absolute h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-70"></div>
          {/* ---------------color bg---------------- */}


          <div className="flex flex-col py-5 px-5 h-[350px] w-[250] border-2 rounded border-gray-500">
            <img
              src="https://rb.gy/ulxxee"
              width={80}
              height={80}
              className="cursor-pointer object-contain mx-auto "
              alt="NetFlix"
            />

            <div className="my-5 ">
              <div>
                <h3 className="text-sm md:text-base text-zinc-400">User</h3>
                <input type="email" className="bg-neutral-800 rounded-sm" />
              </div>

              <div>
                <h3 className="text-sm md:text-base text-zinc-400">Password</h3>
                <input type="password" className="bg-neutral-800 rounded-sm" />
              </div>
            </div>

            <div className="my-5 justify-center items-center mx-auto">
              <button className="bg-gradient-to-r from-red-800 to-pink-900/40 rounded-sm py-1 px-1.5 mx-1">
                <Link href="/login" className="text-stone-300">
                  Sign Up
                </Link>
              </button>
              <button className="bg-gradient-to-r from-red-800 to-pink-900/40 rounded-sm py-1 px-2 mx-1">
                <Link href="/login" className="text-stone-300">
                  Login
                </Link>
              </button>
            </div>

            <div className="my-5 justify-center items-center mx-auto cursor-pointer transition ">
              <p className="text-stone-300 text-[12px] transition hover:text-sky-700 hover:underline hover:text-sm">forgot password ?</p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default login;
