"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "../../components/Sidebar2/sidebar2";
import React, { useLayoutEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

export default function Page() {
  const [isVerified, setIsVerified] = useState(false);
  useLayoutEffect(() => {
    const verify = getCookie("x-auth-token");
    if (!verify) {
      alert("Please SignIn to access...");
      redirect("/");
    } else {
      setIsVerified(true);
    }
  }, []);
  const names = ["Blowfish"];

  return isVerified ? (
    <>
      <div className="ml-32">
        <Navbar />
      </div>

      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-10 bg-black">
          <section className="welcome-section h-full text-white">
            <div className="flex justify-center h-full ml-60">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-yellow-400">
                  NSS Dashboard
                </h1>
                {names.map((name, index) => (
                  <React.Fragment key={index}>
                    <section className="mb-8">
                      <p className="text-3xl pt-20 pl-10 pr-6">
                        Welcome {name}, we are excited that you are here. This
                        personalized dashboard was designed to provide you with
                        the most immersive experience possible. Let{"'s"} get
                        started.
                      </p>
                    </section>
                    <section className="mb-8 pt-10">
                      <h2 className="text-4xl font-bold text-yellow-400 mb-4">
                        Mission Statement
                      </h2>
                      <p className="text-2xl pt-10">
                        The Noir Soul Syndicate is an innovative music company
                        that empowers artists of color globally. What sets us
                        apart is our use of cutting-edge technology, including
                        AI-Powered 3-D artists and NFTs. It is our mission to
                        revolutionize the music industry. We prioritize
                        diversity, inclusion, and empowerment, creating a unique
                        ecosystem where artists and fans can engage,
                        collaborate, and prosper together. Your participation in
                        our groundbreaking economic and cultural experience is
                        the key to success.
                      </p>
                    </section>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  ) : (
    <div className="text-3xl mx-[50%] my-[50%] font-serif text-blue-500">
      Loading...
    </div>
  );
}
