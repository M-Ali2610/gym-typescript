import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types"
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");



  return (
    <section 
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      
        {/* IMAGE AND MAIN HEADER */}
        <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            {/* MAIN HEADER */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* HEADINGS */}
                <motion.div
                initial= "hidden"
                whileInView="visible" 
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0}
                }}
                className="md:-mt-20">
                    <div className="relative">
                        <div className="relative before-evolvetext">
                            <img alt="home-page-text" src={HomePageText} />
                        </div>
                    </div>
                    <p className="mt-8 text-sm">
                        Unrivaled Gym. Unparalleled Training Fitness Classes. Push your limits with expert coaching, dynamic workouts, and a supportive community.
                        Achieve your fitness goals with the best training experience designed for all levels!
                    </p>
                </motion.div>

                {/* ACTIONS */}
                <motion.div
                initial= "hidden"
                whileInView="visible" 
                viewport={{once: true, amount: 0.5}}
                transition={{ delay: 0.3, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0}
                }} 
                className="mt-8 flex items-center gap-8">
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}>
                        <p>Learn More</p>
                    </AnchorLink> 
                </motion.div>

            </div>

            {/* IMAGE */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img src={HomePageGraphic} alt="home-pageGraphic" />
            </div>
        </motion.div>

        {/* SPONSORS */}
        {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
                <div className="flex w-3/5 items-center justify-between gap-8">
                    <img src={SponsorRedBull} alt="redbull-sponsor" />
                    <img src={SponsorForbes} alt="forbes-sponsor" />
                    <img src={SponsorFortune} alt="fortune-sponsor" />
                </div>
            </div>
        </div>
        )}
            
        

    </section>
  )
}

export default Home
