import Logo from '@/assets/Logo.png'
import Icon from "@/assets/icon.svg"
import RightArrow from "@/assets/svgs/arrow-right.svg"
import Profile from "@/assets/images/profile-sm.png"
import Profile2 from "@/assets/images/profile2.png"
import { Palette, Users, BookOpen, Target } from "lucide-react"

import EbsPortfolio from "@/assets/images/EbsPortfolio.png";
import BossaPortfolio from "@/assets/images/BossaPortfolio.png";
import AfrimentPortfolio from "@/assets/images/AfrimentPortfolio.png";
import PersonalPortfolio from "@/assets/images/PersonalPortfolio.png";

const Images = { Logo, Profile, Profile2 }
const Svg = { Icon, RightArrow }
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
    ]


}

export {
    Images,
    Svg,
    values
}