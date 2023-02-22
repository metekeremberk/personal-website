<script lang="ts">
	import { scrollTo, scrollRef } from 'svelte-scrolling';

	let scrollY = 0;
	let innerHeight = 0;
	let clientHeight = 0;
	// $: scrollPerc = (scrollY * 100) / (clientHeight - innerHeight);
	$: scrollPerc = scrollY * 0.85;
	let scrollPercx = 110;
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div
	class="pattern1"
	bind:clientHeight
	style="--pattern-y: {scrollPerc}px; --pattern-x: {scrollPercx}%;"
>
	<div
		class="fixed right-10 top-[30%] bg-homeBackgroundSecondary h-[40vh] w-1 py-10 rounded-full flex flex-col items-center justify-around z-50"
	>
		<div use:scrollTo={{ ref: 'home', duration: 1000 }} class="w-3 h-3 rounded-full bg-white" />
		<div use:scrollTo={{ ref: 'about-1', duration: 1000 }} class="w-3 h-3 rounded-full bg-white" />
		<div use:scrollTo={{ ref: 'about-2', duration: 1000 }} class="w-3 h-3 rounded-full bg-white" />
		<div use:scrollTo={{ ref: 'scroll', duration: 1000 }} class="w-3 h-3 rounded-full bg-white" />
		<div use:scrollTo={{ ref: 'home', duration: 1000 }} class="w-3 h-3 rounded-full bg-white" />
	</div>
	<div use:scrollRef={'home'} class="w-screen h-[120vh] bg-homeBackground">
		<img
			src="src/assets/background.jpg"
			alt="background"
			class="object-cover w-screen h-[120vh] opacity-30"
		/>
		<h1 class="absolute top-[75vh] left-1/2 -translate-x-1/2 text-7xl font-bold">metekeremberk</h1>
	</div>
	<div
		use:scrollRef={'about-1'}
		class="w-screen h-screen my-[10vh] flex flex-col items-center justify-evenly"
	>
		<div
			class="flex flex-col items-center justify-evenly w-[400px] m-auto p-6 bg-homeBackgroundSecondary border-4 border-homeText"
		>
			<img
				src="src/assets/about-1.jpg"
				alt="study"
				class="object-cover border-homeText border-4 mb-10"
			/>
			<div class="text-center text-lg text-headline">
				I am a student in the
				<a
					href="https://fens.sabanciuniv.edu/en"
					class="underline text-homeLink hover:text-homeText"
				>
					Faculty of Engineering and Natural Sciences
				</a>
				at Sabancı University with a passion for computer engineering. I am dedicated to pursuing my
				goals and working hard to achieve them.
			</div>
		</div>
	</div>
	<div
		use:scrollRef={'about-2'}
		class="h-screen my-[10vh] w-screen flex flex-col items-center justify-evenly"
	>
		<div
			class="flex flex-col items-center justify-evenly w-[400px] m-auto p-6 bg-homeBackgroundSecondary border-4 border-homeText"
		>
			<img
				src="src/assets/about-2.jpg"
				alt="hobbies"
				class="object-cover border-homeText border-4 mb-10"
			/>
			<div class="text-center text-lg text-headline">
				In my free time, I enjoy playing tennis, staying active with other sports, exploring the
				world of video games and having fun with my friends.
			</div>
		</div>
	</div>
	<div use:scrollRef={'scroll'} class="w-screen h-screen my-[10vh] flex items-end">
		You have scrolled {scrollY} out of {clientHeight}
	</div>
</div>

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
