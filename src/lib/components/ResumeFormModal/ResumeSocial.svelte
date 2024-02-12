<script lang="js">
	$: socials = [
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
		socials = [...socials, defaultSocial];
	}
</script>

<span class="grid">
	{#each socials as social, index}
		<div class="grid grid-cols-2 gap-4 pt-2">
			<label class="label">
				<input class="input" type="text" placeholder="Platform" />
			</label>
			<label class="label">
				<input class="input" type="text" placeholder="Url" />
			</label>
		</div>
	{/each}
	{#if socials.length <= 2}
		<span class="flex justify-end mt-4">
			<button on:click={addExtraSocial} class="btn variant-filled">+Add Social</button>
		</span>
	{/if}
</span>
