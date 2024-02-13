<script lang="js">
	export let projects = [];
	let defaultProject = {
		title: '',
		description: ''
	};

	function addProject() {
		projects = [...projects, defaultProject];
	}

	$: addButtonClasses = projects.length ? 'justify-end' : 'justify-center';
</script>

<hr class="!border-dashed pb-2" />
<span>Projects</span>
<span>
	{#each projects as project, index}
		<div class="grid grid-cols-1 gap-3 pt-2">
			<label class="label">
				<span>Project Title</span>
				<input class="input" type="text" placeholder="Title" />
			</label>
			<label class="label">
				<span>Project description</span>
				<textarea class="textarea" rows="2" placeholder="Description" />
			</label>
		</div>
	{/each}
	{#if projects.length <= 4}
		<span class="flex mt-4 {addButtonClasses}">
			<button on:click={addProject} class="btn variant-filled">+Add Project</button>
		</span>
	{/if}
</span>
