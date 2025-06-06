<script>
// @ts-nocheck
import avatar from "../lib/images/avatar.jpg"
import Timeline from '../lib/Timeline.svelte';
import LogoCarousel from "$lib/LogoCarousel.svelte";
import Footer from "$lib/Footer.svelte";

const timelineItems = [
  {
    link: "Robinsons Road Ready",
    url: "https://robinsons-road-ready.vercel.app",
    date: "September, 2024",
    title: "Full-Stack Web Developer",
    description: "Website for a driving school based in Norwich. Includes a custom CMS, booking system, and other information."
  },
  {
    link: "MillionsTrading.com",
    url: "http://millionstrading.com",
    date: "January, 2024",
    title: "Founder",
    description: "An educational trading stream where I broadcast my trading sessions. The application was built using Svelte, has Stripe payments integrated and uses modern best practices for SEO."
  },
  {
    link: "leantoken.org",
    url: "https://leantoken.org",
    date: "November, 2023",
    title: "Founder",
    description: "An ERC20 token I launched on PulseChain which features a liquidity staking protocol."
  },
  {
    link: "Swaine Adeney Brigg",
    url: "https://swaine.london/",
    date: "September, 2020",
    title: "Frontend Developer",
    description: "Minor website modifications, adding features to a pre-existing website built on headless Shopify CMS."
  },
  {
    
    date: "2019 - Present",
    title: "Open Source",
    description: "I sometimes contribute to Open Source on my GitHub."
  }
];
</script>

<div class="flex flex-col w-full max-w-screen-sm mx-auto prose prose-invert">
    <div class="flex flex-row justify-center"> 
        <img src={avatar} alt="jack" class="w-96 mt-0 rounded-xl">
    </div>
    <div class="">
        <h1 data-nosnippet class="mb-0 mt-8 font-bold">About me</h1>
        <p class="text-xl">
          Hi, 🤝 I'm a seasoned developer with a passion for solving problems and shipping fast.
        </p>
        <!-- <p class="text-xl">
        <a href="/projects">Stuff I've made</a>
        </p> -->
        <div class="flex gap-4">
          <a class="w-full" href="/projects">
            <button
            type="submit"
            class="w-full bg-black group hover:bg-white border border-gray-400 py-3 px-6 rounded-lg">
            <h3 class="m-0 text-white font-bold group-hover:text-black">See My Work</h3>
          </button>
        </a>
        <a class="w-full" href="#contact">
          <button
          type="submit"
          class="w-full bg-black group hover:bg-white border border-gray-400 py-3 px-6 rounded-lg">
          <h3 class="m-0 text-white font-bold group-hover:text-black">Contact Me</h3>
        </button>
        </a> 
        
        </div>
        
        <p class="text-xl">
            Follow me <a href="https://x.com/bigjaxcapital">@bigjaxcapital</a> on X.
        </p>
        <p class="text-xl">
            Check out <a href="https://github.com/jaxnalia">my repositories</a> on Github.
        </p>

        <!-- <p class="text-xl">
          Business enquiries: <a href="mailto:hello@jack.sbs">hello@jack.sbs</a>
        </p> -->
    </div>
    <h1 data-nosnippet class="mb-8 mt-8 font-bold">Tools I use</h1>
    <LogoCarousel />
    <h1 data-nosnippet class="mb-0 mt-8 font-bold">History</h1>
    <Timeline items={timelineItems} />
    <h1 id="contact" class="mb-0 mt-8 font-bold">Let's Cook.</h1>
    <Footer />

</div>

<!-- <div class="p-4 flex flex-col w-full mt-0 md:mt-16 max-w-screen-sm mx-auto">
    <div class="flex flex-row justify-center">
        
        <img src={avatar} alt="jack" class="rounded-full w-80 mb-16">
    </div>

    <p class="text-left mt-5 leading-8 text-gray-800">
        👋🏼 I currently work on <a href="https://leantoken.org/" class="underline font-medium text-black">LEAN</a>, which I created and lead day-to-day. I previously led all Consumer engineering at EntryPoint, including building EP, EP Babies, and more.

    </p>

    <p class="text-left mt-5 leading-8 text-gray-800">
        Find me at <a href="/" class="underline font-medium text-black">bigjax.eth</a>
    </p>
    


</div> -->
