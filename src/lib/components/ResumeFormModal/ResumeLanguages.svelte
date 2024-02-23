<script lang="js">
	export let languages = [];
	let defaultLanguage = {
		language: '',
		proficiency: ''
	};

	function addExtra() {
		languages = [...languages, JSON.parse(JSON.stringify(defaultLanguage))];
	}
	$: addButtonClasses = languages.length ? 'justify-end mt-4' : 'justify-center';
</script>

<hr class="!border-dashed pb-2" />
<span>Languages</span>
<span class="">
	{#each languages as languageData, index}
		<div class="grid grid-cols-2 gap-4 pt-2" id="{index}id">
			<label class="label">
				<input
					class="input"
					type="text"
					placeholder="Language"
					bind:value={languageData.language}
				/>
			</label>
			<label class="label">
				<input
					class="input"
					type="text"
					placeholder="Proficiency"
					bind:value={languageData.proficiency}
				/>
			</label>
		</div>
	{/each}
	{#if languages.length <= 2}
		<span class="flex {addButtonClasses}">
			<button on:click={addExtra} class="btn variant-filled">+Add Language</button>
		</span>
	{/if}
</span>
