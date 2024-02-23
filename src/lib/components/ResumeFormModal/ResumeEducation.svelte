<script lang="js">
	export let educations = [];
	let defaultEducation = {
		course: '',
		institution: '',
		marks: '',
		passout_year: ''
	};

	function addEducation() {
		educations = [...educations, JSON.parse(JSON.stringify(defaultEducation))];
	}
	$: addButtonClasses = educations.length ? 'justify-end mt-4' : 'justify-center items-center';

</script>

<hr class="!border-dashed pb-2" />
<span>Education</span>
<span class="grid">
	{#each educations as education, index}
		<div class="grid grid-cols-2 gap-4">
			<label class="label">
				<span>Course</span>
				<input class="input" type="text" placeholder="Course" bind:value={education.course} />
			</label>
			<label class="label">
				<span>Institution</span>
				<input
					class="input"
					type="text"
					placeholder="Institution"
					bind:value={education.institution}
				/>
			</label>
			<label class="label">
				<span>Marks</span>
				<input class="input" type="text" placeholder="Marks" bind:value={education.marks} />
			</label>
			<label class="label">
				<span>Passout Year</span>
				<input
					class="input"
					type="text"
					placeholder="Passout year"
					bind:value={education.passout_year}
				/>
			</label>
		</div>
	{/each}
	{#if educations.length <= 4}
		<span class="flex justify-end {addButtonClasses}">
			<button on:click={addEducation} class="btn variant-filled">+Add Education</button>
		</span>
	{/if}
</span>
