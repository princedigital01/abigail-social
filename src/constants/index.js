import Logo from '@/assets/Logo.png'
import Icon from "@/assets/icon.svg"
import RightArrow from "@/assets/svgs/arrow-right.svg"
import Profile from "@/assets/images/profile-sm.png"
import Profile2 from "@/assets/images/profile2.png"
import { Palette, Users, BookOpen, Target } from "lucide-react";

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