<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let title: string;
</script>

<a {href} class:active={$page.url.href == href}>{title}</a>
