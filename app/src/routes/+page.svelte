<script>
// @ts-nocheck
import avatar from "../lib/images/avatar.jpg"
import Timeline from '../lib/Timeline.svelte';
import LogoCarousel from "$lib/LogoCarousel.svelte";

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
    description: "An educational trading show where I livestreamed my trading sessions. The application was built using Svelte, has Stripe payments integrated and uses modern best practices for SEO."
  },
  {
    link: "leantoken.org",
    url: "https://leantoken.org",
    date: "November, 2023",
    title: "Founder",
    description: "A meme coin that I created which included an on-chain liquidity staking protocol."
  },
  {
    
    date: "2019 - Present",
    title: "Open Source",
    description: "I sometimes contribute to Open Source on my GitHub."
  }
];
</script>

<div class="pb-32 flex flex-col w-full max-w-screen-sm mx-auto prose dark:prose-invert">
    <div class="flex flex-row justify-center"> 
        <img src={avatar} alt="jack" class="w-96 mt-0 rounded-full">
    </div>
    <div class="">
        <h1 class="mb-0 mt-8 font-bold">About me</h1>
        <p class="">
            🤝 I currently work on <a href="https://leantoken.org/" class="">LEAN</a>, a meme coin which I created and lead day-to-day. I previously worked on <a href="http://millionstrading.com">Millions Trading</a>, an educational trading show where I livestream my trading sessions.
        </p>

        <p class="">
            Follow me <a href="https://x.com/bigjaxcapital">@bigjaxcapital</a> on X.
        </p>

        <p class="">
          Business enquiries: <a href="mailto:hello@jack.sbs">hello@jack.sbs</a>
        </p>

    </div>
    <h1 class="mb-8 mt-8 font-bold">Tools I work with</h1>
    <LogoCarousel />
  

  

    <h1 class="mb-0 mt-8 font-bold">History</h1>
    <Timeline items={timelineItems} />
    


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
