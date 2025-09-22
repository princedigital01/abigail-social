import Logo from '@/assets/Logo.png'
import Icon from "@/assets/icon.svg"
import Arrow from "@/assets/svgs/arrow.svg"
import RightArrow from "@/assets/svgs/arrow-right.svg"
import Profile from "@/assets/images/profile-sm.png"
import Profile2 from "@/assets/images/profile2.png"
import { Palette, Users, BookOpen, Target, Clock3 } from "lucide-react"

import EbsPortfolio from "@/assets/images/EbsPortfolio.png";
import BossaPortfolio from "@/assets/images/BossaPortfolio.png";
import AfrimentPortfolio from "@/assets/images/AfrimentPortfolio.png";
import PersonalPortfolio from "@/assets/images/PersonalPortfolio.png";

import CLogo1 from "@/assets/images/c-logo1.png";
import CLogo2 from "@/assets/images/c-logo2.png";
import CLogo3 from "@/assets/images/c-logo3.png";


const Images = { Logo, Profile, Profile2 }
const Svg = { Icon, RightArrow, Arrow }

const values = {
    NavLinks: [
        {
            href: "/",
            title: "Home"
        },
        {
            href: "/about",
            title: "About"
        },
        {
            href: "/contact",
            title: "Contact"
        },
        {
            href: "/portfolio",
            title: "Portfolio"
        },

    ],



    experiences: [
        {
            id: 1,
            title: "Community Manager-Bossa",
            subtitle: " Optimized LinkedIn profile, boosted search visibility up to +130%",
            description: "",
            image: BossaPortfolio,
        },
        {
            id: 2,
            title: "Social Media Manager-Afriment",
            subtitle: "Designed a branded Instagram feed mockup demonstrating how I would grow awareness, increase followers",
            description: "",
            image: AfrimentPortfolio,
        },
        {
            id: 3,
            title: "Personal brand visibility",
            subtitle:
                "Optimized my own linkedin profile with strategic keywords, consistently appearing within my target niche.",
            description: "",
            image: PersonalPortfolio,
        },
        {
            id: 4,
            title: "Marketing Intern – Edo Broadcasting Service",
            subtitle:
                "Wrote advertising copy for campaigns. Assisted in marketing research and strategy.",
            description: "",
            image: EbsPortfolio,
        },
    ],


    WorkProcess: [
        {
            id: 1,
            title: "Consistent Visuals",
            description: "A clean, cohesive layout to reflect brand identity and build trust.",
            icon: Palette,
        },
        {
            id: 2,
            title: "Audience-Centric",
            description: "Tailored to natural hair lovers and women looking for hair growth solutions.",
            icon: Users,
        },
        {
            id: 3,
            title: "Content Variety",
            description: "Educational tips, product showcases, testimonials, quotes, and behind-the-scenes.",
            icon: BookOpen,
        },
        {
            id: 4,
            title: "Goal-Driven",
            description: "Designed to attract, engage, and convert through value and authenticity.",
            icon: Target,
        },
    ],

    MyWork: [
        {
            id: 1,
            title: "Social Media Managment",
            description: "instagram,linkedin, facebook",
            //icon: Palette,
        },
        {
            id: 2,
            title: "Ads Management",
            description: "meta ads, google ads",
            //icon: Users,
        },
        {
            id: 3,
            title: "Community Management",
            description: "Engaging audience and building loyalty",
            //icon: BookOpen,
        },
        {
            id: 4,
            title: "Canva designer",
            description: "",
            //icon: Target,
        },
        {
            id: 4,
            title: "Content Writing",
            description: "",
            //icon: Target,
        },
        {
            id: 5,
            title: "Analysis & Report",
            description: ".",
            //icon: Target,
        },

    ],
    CompanyLogo: [
        {
            id: 1,
            image: CLogo1,
        },
        {
            id: 2,
            image: CLogo2,
        },
        {
            id: 3,
            image: CLogo3
        },
    ],
    Testimonies: [
        {
            id: 1,
            description: "Abigail brought fresh creativity and strategy to afriment's  linkedin presence. During her time with us, she consistently delivered quality content, and paid close attentionto analytics, she is hard wprking, resourcefull, and a true teamplayer i strongly recommend her for any social media managgment role.",
            client: "Daniel Ayeni",
            post: "CFO",
            company: "Afriment",
            image: "",
        },
        {
            id: 2,
            description: " Abigail’s attitude to work was remarkable. She was proactive, professional, and always eager to learn. From creating compelling advertising copy to connecting with businesses, she added real value to our marketing team. Any organization would be lucky to have her",
            client: "Mrs. Okudaye",
            post: "Ass Head of Marketing",
            company: "Edo Broadcasting Service",
            image: "",
        },

    ],

    Contact: {
        Linkedin: {
            id: 1,
            name: "Linkedin",
            link: "https://www.linkedin.com/in/abigail-igberaese-140037319",
            icon: "",
        },
        Email: {
            id: 2,
            email: "abigailigberaese0@gmail.com",
            name: "Email",
            link: "mailto:abigailigberaese0@gmail.com",
            icon: "",
        },
        Whatsapp: {
            id: 3,
            name: "Whatsapp",
            phone: "+234-9064-200-994",
            link: "https://wa.me/+2349064200994",
            icon: "",

        }

    }


}



export {
    Images,
    Svg,
    values
}