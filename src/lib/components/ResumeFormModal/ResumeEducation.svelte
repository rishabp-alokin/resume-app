<script lang="js">
	$: educations = [
		{
			course: '',
			institution: '',
			marks: '',
			passout_year: ''
		}
	];
	let defaultEducation = {
		course: '',
		institution: '',
		marks: '',
		passout_year: ''
	};

	function addEducation() {
		educations = [...educations, defaultEducation];
	}
</script>

<hr class="!border-dashed pb-2" />
<span>Education</span>
<span class="grid">
	{#each educations as education, index}
		<div class="grid grid-cols-2 gap-4">
			<label class="label">
				<span>Course</span>
				<input class="input" type="text" placeholder="Course" />
			</label>
			<label class="label">
				<span>Institution</span>
				<input class="input" type="text" placeholder="Institution" />
			</label>
			<label class="label">
				<span>Marks</span>
				<input class="input" type="text" placeholder="Marks" />
			</label>
			<label class="label">
				<span>Passout Year</span>
				<input class="input" type="text" placeholder="Passout year" />
			</label>
		</div>
	{/each}
	{#if educations.length <= 4}
		<span class="flex justify-end mt-4">
			<button on:click={addEducation} class="btn variant-filled">+Add Education</button>
		</span>
	{/if}
</span>
