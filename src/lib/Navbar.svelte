<script lang="ts">
	import { page } from '$app/stores';

	console.log($page.url.href);
</script>

<div class="flex flex-row justify-between px-14 py-8 bg-neutral-800 text-white">
	<div class="text-3xl hover:cursor-default">Logo</div>
	<nav class="text-xl flex flex-row justify-between w-1/4">
		<a href="/">Home</a>
		<a href="/about">About Me</a>
		<a href="/contacts">My Contacts</a>
	</nav>
</div>
