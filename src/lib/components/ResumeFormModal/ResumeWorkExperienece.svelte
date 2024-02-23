<script lang="js">
	export let experiences = [];
	let defaultExperience = {
		company: '',
		designation: '',
		joining_date: '',
		worked_till: ''
	};

	function addExpereince() {
		experiences = [...experiences, JSON.parse(JSON.stringify(defaultExperience))];
	}
	$: addButtonClasses = experiences.length ? 'justify-end mt-4' : 'justify-center items-center';

</script>

<hr class="!border-dashed pb-2" />
<span>Work Experiences</span>
<span class="grid">
	{#each experiences as experience, index}
		<div class="grid grid-cols-2 gap-4">
			<label class="label">
				<span>Company</span>
				<input class="input" type="text" bind:value={experience.company} />
			</label>
			<label class="label">
				<span>Designation</span>
				<input class="input" type="text" bind:value={experience.designation} />
			</label>
		</div>
		<div class="flex gap-4 pt-3">
			<label class="label max-w-40">
				<span>Joining Date</span>
				<input class="input" type="text" bind:value={experience.joining_date} />
			</label>
			<label class="label">
				<span>Leaving Date</span>
				<div class="flex items-center space-x-2">
					<input class="input max-w-40" type="text" bind:value={experience.worked_till} />
					<label class="flex items-center space-x-2">
						<input class="checkbox" type="checkbox" />
						<p class="min-w-64">Currently working here</p>
					</label>
				</div>
			</label>
		</div>
	{/each}
	{#if experiences.length <= 4}
		<span class="flex justify-end {addButtonClasses}">
			<button on:click={addExpereince} class="btn variant-filled">+Add Experience</button>
		</span>
	{/if}
</span>
