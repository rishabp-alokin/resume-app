<script lang="js">
	export let projects = [];
	let defaultProject = {
		title: '',
		description: ''
	};

	function addProject() {
		projects = [...projects, JSON.parse(JSON.stringify(defaultProject))];
	}

	$: addButtonClasses = projects.length ? 'justify-end mt-4' : 'justify-center';
</script>

<hr class="!border-dashed pb-2" />
<span>Projects</span>
<span>
	{#each projects as project, index}
		<div class="grid grid-cols-1 gap-3 pt-2">
			<label class="label">
				<span>Project Title</span>
				<input class="input" type="text" placeholder="Title" bind:value={project.title} />
			</label>
			<label class="label">
				<span>Project description</span>
				<textarea
					class="textarea"
					rows="2"
					placeholder="Description"
					bind:value={project.description}
				/>
			</label>
		</div>
	{/each}
	{#if projects.length <= 4}
		<span class="flex {addButtonClasses}">
			<button on:click={addProject} class="btn variant-filled">+Add Project</button>
		</span>
	{/if}
</span>
