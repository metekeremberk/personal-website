<script>
	import { scrollTo } from "svelte-scrolling";

	export let scrollRef;
	export let tooltipText;
</script>

<div class="flex flex-row group">
	<div
		use:scrollTo={{ ref: scrollRef, duration: 1000 }}
		class="w-3 h-3 rounded-full bg-accentSecondary inline-block relative"
	>
		<div
			class="hidden right-8 bg-backgroundSecondary rounded-md py-1 px-2 absolute top-1/2 -translate-y-1/2 group-hover:block"
		>
			{tooltipText}
		</div>
	</div>
</div>
