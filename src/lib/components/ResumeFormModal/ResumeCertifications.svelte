<script lang="js">
	export let certificates = [];
	let defaultCertificate = {
		certification_name: '',
		certification_url: ''
	};

	function addProject() {
		certificates = [...certificates, JSON.parse(JSON.stringify(defaultCertificate))];
	}

	$: addButtonClasses = certificates.length ? 'justify-end mt-4' : 'justify-center';
</script>

<hr class="!border-dashed pb-2" />
<span>Certifications</span>
<span>
	{#each certificates as certificate, index}
		<div class="grid grid-cols-2 gap-3 pt-2">
			<label class="label">
				<span>Certification</span>
				<input
					class="input"
					type="text"
					placeholder="Certification"
					bind:value={certificate.certification_name}
				/>
			</label>
			<label class="label">
				<span>Url</span>
				<input
					class="textarea"
					type="text"
					placeholder="Url"
					bind:value={certificate.certification_url}
				/>
			</label>
		</div>
	{/each}
	{#if certificates.length <= 3}
		<span class="flex {addButtonClasses}">
			<button on:click={addProject} class="btn variant-filled">+Add Certificates</button>
		</span>
	{/if}
</span>
