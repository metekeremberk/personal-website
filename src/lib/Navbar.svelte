<script lang="ts">
	import NavLink from './NavLink.svelte';
</script>

<div
	class="flex flex-row items-center justify-between h-[15vh] px-14 bg-navbarBackground text-white"
>
	<div class="text-3xl font-bold hover:cursor-default">metekeremberk</div>
	<nav class="text-xl font-semibold flex flex-row items-center justify-between w-1/4">
		<NavLink href="/" title="Home" />
		<NavLink href="/about" title="About Me" />
		<NavLink href="/contacts" title="Contacts" />
	</nav>
</div>
