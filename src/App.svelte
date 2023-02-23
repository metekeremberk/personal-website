<script>
	import { scrollTo, scrollRef } from "svelte-scrolling";
	import AboutCard from "./lib/AboutCard.svelte";
	import AchievementsGrid from "./lib/AchievementsGrid.svelte";
	import ScrollButton from "./lib/ScrollButton.svelte";

	let scrollY = 0;
	let innerHeight = 0;
	let clientHeight = 0;
	// $: scrollPerc = (scrollY * 100) / (clientHeight - innerHeight);
	$: scrollPerc = scrollY * 0.85;
	let scrollPercx = 110;

	if (scrollY) {
	}
</script>

<svelte:window bind:scrollY bind:innerHeight />

<main>
	<div
		class="pattern1"
		bind:clientHeight
		style="--pattern-y: {scrollPerc}px; --pattern-x: {scrollPercx}%;"
	>
		<!-- Navigation buttons -->
		<div class="hidden lg:block">
			<div
				class="absolute top-[37vh] bottom-[80vh] right-10 w-1 rounded-full z-40 bg-backgroundSecondary"
			/>
			<div
				class="fixed right-10 top-[35%] h-[30vh] w-1 py-6 flex flex-col items-center justify-around z-50"
			>
				<ScrollButton scrollRef="home" tooltipText="Top" />
				<ScrollButton scrollRef="about-1" tooltipText="Academic" />
				<ScrollButton scrollRef="about-2" tooltipText="Hobbies" />
				<ScrollButton scrollRef="portfolio" tooltipText="Achievements" />
				<ScrollButton scrollRef="contact" tooltipText="Contacts" />
			</div>
		</div>

		<!-- Parts -->
		<div use:scrollRef={"home"} class="w-screen h-[120vh] bg-backgroundPrimary">
			<img
				src="/assets/background.jpg"
				alt="background"
				class="object-cover w-screen h-[120vh] opacity-30"
			/>
			<h1
				class="absolute top-[75vh] left-1/2 -translate-x-1/2 text-4xl lg:text-7xl font-bold"
			>
				metekeremberk
			</h1>
		</div>
		<div
			use:scrollRef={"about-1"}
			class="w-screen h-screen my-[10vh] flex flex-col items-center justify-evenly"
		>
			<AboutCard
				imageUrl="/assets/about-1.JPG"
				title="study"
				link="https://fens.sabanciuniv.edu/en"
				text={[
					"I am a student in the",
					"Faculty of Engineering and Natural Sciences",
					"at Sabancı University with a passion for computer engineering. I am dedicated to pursuing my goals and working hard to achieve them.",
				]}
			/>
		</div>
		<div
			use:scrollRef={"about-2"}
			class="h-screen my-[10vh] w-screen flex flex-col items-center justify-evenly"
		>
			<AboutCard
				imageUrl="/assets/about-2.JPG"
				title="hobbies"
				text="In my free time, I enjoy playing tennis, staying active with other
			sports, exploring the world of video games and having fun with my
			friends."
			/>
		</div>
		<div use:scrollRef={"portfolio"} class="w-screen h-screen my-[10vh]">
			<div
				class="w-4/5 h-4/5 relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
			>
				<AchievementsGrid />
			</div>
		</div>
		<div
			use:scrollRef={"contact"}
			class="w-screen h-screen mt-[10vh] flex items-end"
		>
			<div
				class="flex flex-col items-center justify-around py-12 w-screen h-1/3 bg-backgroundSecondary lg:text-2xl text-xl"
			>
				<div>metekeremberk@gmail.com</div>
				<div>+90 5** *** ** **</div>
				<div>Social media</div>
			</div>
		</div>
	</div>
</main>

<style>
	.pattern1 {
		background-color: #e5e5f7;
		background-image: repeating-radial-gradient(
				circle at var(--pattern-x) var(--pattern-y),
				transparent 0,
				rgb(2, 8, 38) 100px
			),
			repeating-linear-gradient(rgb(2, 8, 38), rgb(12, 18, 48));
	}
</style>
