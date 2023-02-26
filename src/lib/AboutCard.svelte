<script>
	export let imageUrl;
	export let title;
	export let text;
	export let link = null;
</script>

<div
	class="flex flex-col items-center justify-evenly lg:w-[30%] md:w-3/5 w-4/5 max-h-[90%] m-auto p-6 bg-backgroundSecondaryLight border-4 border-accentTertiary"
>
	<img
		src={imageUrl}
		alt={title}
		class="object-cover border-accentTertiary border-4 mb-10"
	/>
	{#if link == null}
		<div class="text-textPrimary text-center lg:text-lg md:text-base text-sm">
			{text}
		</div>
	{:else}
		<div class="text-textPrimary text-center lg:text-lg md:text-base text-sm">
			{text[0]}
			<a
				href={link}
				class="underline text-backgroundSecondary hover:text-textPrimary"
			>
				{text[1]}
			</a>
			{text[2]}
		</div>
	{/if}
</div>
