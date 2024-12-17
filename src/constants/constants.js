// import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { ReviewImg, CountReps, LogExercise, TrackProgress, Gym, fitness, boxing, yoga, b1, g3, b3, g2, g1, b2} from "../assets/assets";

export const navLinks = [
    { href: "#Features", label: "Features" },
    { href: "/", label: "Diet plans" },
    { href: "/", label: "Workout plans" },
    { href: "#Pricing", label: "Pricing"},
    { href: "#FAQs", label: "FAQs"},
    { href: "#ContactUs", label: "Contact Us"},
];

export const HeroConstant = [
    {
        imgURL: Gym,
        name: "Gym",
    },
    {
        imgURL: fitness,
        name: "Fitness",
    },
    {
        imgURL: boxing,
        name: "Boxing",
    },
    {
        imgURL: yoga,
        name: "Yoga",
    },
]

export const FeaturesConstant = [
    {
        imgURL: LogExercise,
        name: "Log your exercises",
    },
    {
        imgURL: CountReps,
        name: "Count your reps",
    },
    {
        imgURL: TrackProgress,
        name: "Track your progress",
    },
    {
        imgURL: ReviewImg,
        name: "Review your progress",
    },
];

export const PricingConstants = [
    {
      title: "Basic",
      price: "Free",
      description: "For individuals looking to get started and explore basic features.",
      features: [
        "Access to core features",
        "Limited usage (10 sessions/month)",
        "Basic progress tracking",
        "Standard customer support",
        "Access on 1 device",
      ],
      buttonText: "Get Started",
      buttonVariant: "primary",
    },
    {
      title: "Pro",
      price: "$20/month",
      description: "Perfect for growing enthusiasts or professionals needing advanced tools.",
      features: [
        "Everything in Basic",
        "Unlimited usage",
        "Advanced analytics and insights",
        "Multi-device access (3 devices)",
        "Personalized recommendations",
        "Priority customer support",
      ],
      buttonText: "Upgrade Now",
      buttonVariant: "secondary",
      highlight: true,
    },
    {
      title: "Premium",
      price: "$50/month",
      description: "Unlock the ultimate experience with exclusive features for teams or businesses.",
      features: [
        "Everything in Pro",
        "Unlimited devices and users",
        "Dedicated account manager",
        "Early access to new features",
        "Custom analytics reports",
        "24/7 priority support",
      ],
      buttonText: "Contact Us",
      buttonVariant: "outline",
    },
  ];

  export const testimonialConstants = [
    {
      id: 1,
      name: "Neeraj Singh",
      position: "Fitness Enthusiast",
      review:
        "This platform has completely transformed my fitness journey. The tools are intuitive and the experience is fantastic!",
      image: b1,  
    },
    {
      id: 2,
      name: "Kruthika",
      position: "Yoga Instructor",
      review:
        "I love how this platform helps my clients achieve their wellness goals with ease. The features are user-friendly and efficient!",
      image: g3, 
    },
    {
      id: 3,
      name: "Kevin",
      position: "Personal Trainer",
      review:
        "Tracking progress has never been easier. This platform delivers everything I need to stay motivated and organized.",
      image: b2,  
    },
    {
      id: 4,
      name: "Mohammed Affan",
      position: "Nutrition Specialist",
      review:
        "The nutrition tracking feature has been a game-changer for my clients. It's intuitive and provides valuable insights!",
      image: b3,  
    },
    {
      id: 5,
      name: "Samantha",
      position: "Fitness Coach",
      review:
        "The analytics feature helps in making data-driven decisions for workouts. It’s a must-have for anyone serious about fitness!",
      image: g1,  
    },
    {
      id: 6,
      name: "Rashmika",
      position: "Physical Therapist",
      review:
        "The platform supports comprehensive therapy sessions. The ease of accessibility and the helpful community make it unbeatable!",
      image: g2,  
    }
  ];
  

  export const faqConstants = [
    {
      id: 1,
      question: "How do I create a new account?",
      answer: "To create a new account, click on the 'Sign Up' button on the homepage and fill in the required details.",
    },
    {
      id: 2,
      question: "Can I track my progress over time?",
      answer: "Yes, you can easily track your progress using the analytics section, which provides insights into your fitness journey.",
    },
    {
      id: 3,
      question: "Is there a mobile app available?",
      answer: "Currently, our platform is available as a web application. We are working on a mobile app to enhance user experience.",
    },
    {
      id: 4,
      question: "How can I cancel my subscription?",
      answer: "To cancel your subscription, navigate to 'Account Settings' and select 'Manage Subscription' to cancel anytime.",
    },
    {
      id: 5,
      question: "Are my data and progress secure?",
      answer: "Yes, we prioritize user privacy and data security. Your information is encrypted and stored securely.",
    }
  ];
  
  
  

// export const services = [
//     {
//         imgURL: truckFast,
//         label: "Free shipping",
//         subtext: "Enjoy seamless shopping with our complimentary shipping service."
//     },
//     {
//         imgURL: shieldTick,
//         label: "Secure Payment",
//         subtext: "Experience worry-free transactions with our secure payment options."
//     },
//     {
//         imgURL: support,
//         label: "Love to help you",
//         subtext: "Our dedicated team is here to assist you every step of the way."
//     },
// ];

// export const reviews = [
//     {
//         imgURL: customer1,
//         customerName: 'Morich Brown',
//         rating: 4.5,
//         feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
//     },
//     {
//         imgURL: customer2,
//         customerName: 'Lota Mongeskar',
//         rating: 4.5,
//         feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
//     }
// ];


// export const footerLinks = [
//     {
//         title: "Products",
//         links: [
//             { name: "Air Force 1", link: "/" },
//             { name: "Air Max 1", link: "/" },
//             { name: "Air Jordan 1", link: "/" },
//             { name: "Air Force 2", link: "/" },
//             { name: "Nike Waffle Racer", link: "/" },
//             { name: "Nike Cortez", link: "/" },
//         ],
//     },
//     {
//         title: "Help",
//         links: [
//             { name: "About us", link: "/" },
//             { name: "FAQs", link: "/" },
//             { name: "How it works", link: "/" },
//             { name: "Privacy policy", link: "/" },
//             { name: "Payment policy", link: "/" },
//         ],
//     },
//     {
//         title: "Get in touch",
//         links: [
//             { name: "customer@nike.com", link: "mailto:customer@nike.com" },
//             { name: "+92554862354", link: "tel:+92554862354" },
//         ],
//     },
// ];

// export const socialMedia = [
//     { src: facebook, alt: "facebook logo" },
//     { src: twitter, alt: "twitter logo" },
//     { src: instagram, alt: "instagram logo" },
// ];
