import React from "react";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon, SparklesIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import Sparkles from "@/assets/Sparkles.png"
import AbstractWaves from "@/assets/AbstractWaves.png"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat sapiente laboriosam sunt omnis, laudantium dicta iste adipisci reiciendis, incidunt sint? Quisquam atque reprehenderit, quia autem sed ex? Quasi, facere?"
    },

    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque facere aperiam blanditiis voluptatibus molestiae, dolorum magni alias ea illum tempora beatae consequuntur explicabo inventore, aut vero debitis. Incidunt, ratione natus?"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat sapiente laboriosam sunt omnis, laudantium dicta iste adipisci reiciendis, incidunt sint? Quisquam atque reprehenderit, quia autem sed ex? Quasi, facere?"
    }

    
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits"
            className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>


                {/* HEADER */}
                <motion.div 
                className="md:my-5 md:w-3/5"
                initial= "hidden"
                whileInView="visible" 
                viewport={{once: true, amount: 0.5}}
                transition={{ delay: 0.3, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0}
                }} >
                    <HText>MORE THAN JUST GYM.</HText>
                    <p className="my-5 text-sm">Unlock your full potential with our world-class fitness equipment, designed for peak performance and maximum results. From cutting-edge strength machines to top-tier cardio gear, we bring the best to every workout. Train like a pro with premium facilities that redefine fitness excellence!</p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div 
                className="md:flex items-center justify-between gap-8 mt-5"
                initial = "hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={container}>
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}/>
                    ))}
                </motion.div>

                {/*GRAPHICS AND DESCRIPTION  */}
                
                <div className=" relative flex flex-col md:flex-row justify-between items-center md:items-start gap-20 mt-28">

                    {/* GRAPHICS */}
                    <div className="flex justify-center md:w-1/2">
                    <img 
                        className="w-full h-auto object-contain" 
                        src={BenefitsPageGraphic} 
                        alt="benefits-page-graphic" 
                    />
                    </div>
                        

                    
                    

                    {/* DESCRIPTION */}
                    <div className="md:max-w-1/2 mt-20">
                        {/* TITLE */}
                        <div className="relative z-[2]">
                            <div className="absolute -top-20 z-[-1]">
                                <img src={AbstractWaves} alt="" />
                            </div>
                            <motion.div
                            initial= "hidden"
                            whileInView="visible" 
                            viewport={{once: true, amount: 0.5}}
                            transition={{ delay: 0.3, duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x:-50},
                                visible: {opacity: 1, x: 0}
                            }}
                            >
                            <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                            <span className="text-primary-500">FIT</span>
                            </HText>
                            </motion.div>
                        </div>


                        {/* DESCRIPTION */}
                            <motion.div
                            initial= "hidden"
                            whileInView="visible" 
                            viewport={{once: true, amount: 0.5}}
                            transition={{ delay: 0.2, duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x:-50},
                                visible: {opacity: 1, x: 0}
                            }}>
                                <p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, voluptatum recusandae? Laboriosam dolor dolorem voluptas deleniti earum quae perferendis, veritatis atque asperiores quia reprehenderit, aut quos tempore, cumque repellendus tenetur.
                                Perspiciatis praesentium a nostrum laudantium delectus ab fugit magni eius saepe facilis! Porro ut omnis, maxime natus eius obcaecati repudiandae debitis deserunt possimus reprehenderit quas ad et quod quibusdam nihil.
                                Necessitatibus odit alias nihil dolores accusantium facere ad dolore eum error distinctio fugit velit, rerum voluptate aspernatur quod adipisci provident nemo! A sed modi eos in illum, numquam dicta vitae.
                                Beatae vitae ipsam nisi doloremque. Quae fuga consectetur temporibus, sunt possimus sed corporis iure nemo quisquam aperiam iste voluptatibus dolor ipsa, inventore laboriosam amet adipisci ipsam tempora culpa ex. Eveniet?</p>
                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos unde consequatur id architecto aliquam atque vero laudantium modi dignissimos cum eum maxime explicabo delectus omnis rem, eveniet cupiditate minima!
                                Id, soluta magnam. Ipsam esse similique et, amet rerum dolore laboriosam consectetur provident, cum quos veniam excepturi! Nisi ipsum aliquid dignissimos voluptatem qui magni, ratione ad totam facere atque quo.
                                Molestias, nobis quis in fugit rem beatae eos obcaecati laborum velit, vitae doloribus ut. Ducimus aperiam, excepturi temporibus repellendus dolorem aliquam autem minus culpa commodi, eaque dolorum harum asperiores quos?</p>
                            </motion.div>

                        {/*BUTTON  */}
                        <div className="relative mt-16 z-[2]">
                            <div className="absolute -bottom-20 md:right-40 right-10 z-[-1]">
                                <img src={Sparkles} alt="" />
                            </div>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                        Join Now
                            </ActionButton>

                        </div>
                    </div>

                </div>

            </motion.div>

        </section>
    )
}

export default Benefits
