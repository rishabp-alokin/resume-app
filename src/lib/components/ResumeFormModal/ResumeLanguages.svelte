<script lang="js">
	export let languages = [];
	let defaultLanguage = {
		language: '',
		proficiency: ''
	};

	function addExtra() {
		languages = [...languages, defaultLanguage];
	}
	$: addButtonClasses = languages.length ? 'justify-end' : 'justify-center';
</script>

<hr class="!border-dashed pb-2" />
<span>Languages</span>
<span class="">
	{#each languages as language, index}
		<div class="grid grid-cols-2 gap-4 pt-2">
			<label class="label">
				<input class="input" type="text" placeholder="Platform" />
			</label>
			<label class="label">
				<input class="input" type="text" placeholder="Url" />
			</label>
		</div>
	{/each}
	{#if languages.length <= 2}
		<span class="flex mt-4 {addButtonClasses}">
			<button on:click={addExtra} class="btn variant-filled">+Add Language</button>
		</span>
	{/if}
</span>
