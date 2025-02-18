import React from "react";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText";
import EvolveText from "@/assets/EvolveText.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
  const {
    register,
    trigger,
    formState: {errors}
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
        e.preventDefaut()
    }
  }

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/*HEADER  */}
        <motion.div
        className="md:w-3/5"
        initial= "hidden"
        whileInView="visible" 
        viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0}
        }}>
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>

          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, cumque accusamus, odio, porro ipsum laudantium esse voluptatem et omnis quis similique reiciendis placeat non repellendus quam fuga possimus accusantium nobis.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">

            <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial= "hidden"
            whileInView="visible" 
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0}
            }}>

             <form target="_blank"
             onSubmit={onSubmit}
             action="https://formsubmit.co/9f59ef385a714d7c01a9f812cd6d0382"
             method="POST"
             >
                
                <input className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                    required: true,
                    maxLength: 100,
                })}/>
                {errors.name && (
                    <p className="mt-1 text-primary-500">
                        {errors.name.type === "required" && "This field is required"}
                        {errors.name.type === "maxLength" && "Max Length is 100 characters"}
                    </p>
                )}

                <input className={inputStyles}
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}/>
                {errors.email && (
                    <p className="mt-1 text-primary-500">
                        {errors.email.type === "required" && "This field is required"}
                        {errors.email.type === "pattern" && "invalid email address"}
                    </p>
                )}

                <textarea className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                    required: true,
                    maxLength: 2000,
                })}/>
                {errors.message && (
                    <p className="mt-1 text-primary-500">
                        {errors.message.type === "required" && "This field is required"}
                        {errors.message.type === "maxLength" && "Max Length is 2000 characters"}
                    </p>
                )}

                <button
                type="submit"
                className=" cursor-pointer mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
                    Submit
                </button>
                
            </form> 

            </motion.div>

            <motion.div className="relative mt-16 basis-2/5 md:mt-0"
            initial= "hidden"
            whileInView="visible" 
            viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0}
            }}
            >
                <div className="relative w-full z-[3]">
                    <div className="absolute -bottom-20 -right-10 z-[-1] hidden md:block">
                        <img src={EvolveText} alt="" />
                    </div>
                    <img
                    className="w-full" 
                    src={ContactUsPageGraphic}
                    alt="contact-us-page-graphic" />
                </div>
            </motion.div>

        </div>

      </motion.div>
    </section>
  );
};

export default ContactUs;