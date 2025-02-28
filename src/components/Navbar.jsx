import  logo  from "../assets/logo.jpg"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

export const  Navbar = () =>{

    return <div className="mb-20 flex items-center justify-between py-6">
        <motion.div 
        whileHover={{ scale: 1.7}}
        initial={{ scale: 1}}
        transition={{ duration: 0.5}}
        className="flex flex-shrink-0 items-center"> 
            <a href="#"><img className="mx-2 w-10 rounded" src={logo} alt="logo"/></a>
        </motion.div>
        <div  className="m-8 gap-4 flex items-center justify-center text-2xl">
            <motion.a 
            whileHover={{ scale: 1.3}}
            initial={{ scale: 1}}
            transition={{ duration: 0.5}}
            href="https://www.linkedin.com/in/deep-gupta-a25359253"><FaLinkedinIn/></motion.a>
            <motion.div
            whileHover={{ scale: 1.3}}
            initial={{ scale: 1}}
            transition={{ duration: 0.5}}
            ><a href="https://www.github.com/deepgupta6"><FaGithub /></a></motion.div>
            <motion.div
            whileHover={{ scale: 1.3}}
            initial={{ scale: 1}}
            transition={{ duration: 0.5}}
            >
            <a href="https://leetcode.com/u/deepgupta6/"><SiLeetcode /></a>
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.3}}
            initial={{ scale: 1}}
            transition={{ duration: 0.5}}
            >
            <a href="https://www.instagram.com/deep__guptaa/"><FaInstagram /></a>
            </motion.div>
           
        </div>
    </div>

}