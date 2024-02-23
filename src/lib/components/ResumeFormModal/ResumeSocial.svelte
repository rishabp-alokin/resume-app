<script lang="js">
	export let socials = [
		{
			platform: '',
			url: ''
		}
	];
	let defaultSocial = {
		platform: '',
		url: ''
	};

	function addExtraSocial() {
		socials = [...socials, JSON.parse(JSON.stringify(defaultSocial))];
	}
	$: addButtonClasses = socials.length ? 'justify-end mt-4' : 'justify-center items-center';
</script>

<span class="grid">
	{#each socials as social, index}
		<div class="grid grid-cols-2 gap-4 pt-2">
			<label class="label">
				<input class="input" type="text" placeholder="Platform" bind:value={social.platform} />
			</label>
			<label class="label">
				<input class="input" type="text" placeholder="Url" bind:value={social.url} />
			</label>
		</div>
	{/each}
	{#if socials.length <= 2}
		<span class="flex justify-end {addButtonClasses}">
			<button on:click={addExtraSocial} class="btn variant-filled">+Add Social</button>
		</span>
	{/if}
</span>
