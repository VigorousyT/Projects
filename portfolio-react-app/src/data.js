import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";


export const socialIcons = [<a href="https://www.linkedin.com/in/h-a-r-s-h-y-a-d-a-v/"><FaLinkedin /></a>,
<FaTwitter />,
<FaInstagram />,
<BsMedium />,
<FaGithub />,
]

export const bios = [
    {
        id: 1,
        icon: <FaUser />,
        key: "Name",
        value: "Harsh Yadav"
    },
    {
        id: 2,
        icon: <FaPhoneAlt />,
        key: "Phone",
        value: "6307195422"
    },
    {
        id: 3,
        icon: <FaPaperPlane />,
        key: "Email",
        value: "harshyadav082000@gmail.com"
    }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]


export const WebWork = [
    {
        id: 1,
        img: work1,
        name: "project 1",
        category: "web"
    },
    {
        id: 2,
        img: work2,
        name: "project 2",
        category: "web"
    },
    {
        id: 3,
        img: work3,
        name: "project 3",
        category: "web"
    }]

export const DesignWork = [{
    id: 1,
    img: work4,
    name: "project 1",
    category: "design"
},
{
    id: 2,
    img: work5,
    name: "project 2",
    category: 'design'
},
{
    id: 3,
    img: work6,
    name: "project 3",
    category: "design"
}
]




export const workNavs = [
    "Web", "", "Design"
]

export const contacts = [
    {
        id: 1,
        icon: <FaMapMarkerAlt />,
        infoText: ""
    },
    {
        id: 2,
        icon: <FaPaperPlane />,
        infoText: ""
    },
    {
        id: 3,
        icon: <FaPhoneAlt />,
        infoText: ""
    }
]
