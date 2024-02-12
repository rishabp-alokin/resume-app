<script lang="js">
	$: certificates = [
		{
			certification_name: '',
			certification_url: ''
		}
	];
	let defaultCertificate = {
		certification_name: '',
		certification_url: ''
	};

	function addProject() {
		certificates = [...certificates, defaultCertificate];
	}

	$: addButtonClasses = certificates.length ? 'justify-end' : 'justify-center';
</script>

<hr class="!border-dashed pb-2" />
<span>Certifications</span>
<span>
	{#each certificates as certificate, index}
		<div class="grid grid-cols-2 gap-3 pt-2">
			<label class="label">
				<span>Certification</span>
				<input class="input" type="text" placeholder="Certification" />
			</label>
			<label class="label">
				<span>Url</span>
				<input class="textarea" type="text" placeholder="Url" />
			</label>
		</div>
	{/each}
	{#if certificates.length <= 3}
		<span class="flex mt-4 {addButtonClasses}">
			<button on:click={addProject} class="btn variant-filled">+Add Certificates</button>
		</span>
	{/if}
</span>
