<script>
	import { AppBar, getModalStore, getToastStore } from '@skeletonlabs/skeleton';
	import ResumeCard from '$lib/components/ResumeFormModal/ResumeCard.svelte';
	import { onMount, onDestroy } from 'svelte';

	export let data;

	onMount(async () => {
		console.log('mounted here');
		// await getResumes();
	});

	const modalStore = getModalStore();
	const toastStore = getToastStore();

	async function getResumes() {
		let response = await fetch('/api/resume');
		data.resumes = await response.json();
	}

	function openModal(resumeId) {
		modalStore.trigger({
			type: 'component',
			component: 'ResumeFormModal',
			backdropClasses: '!p-0',
			meta: { resumeId: resumeId ?? '' },
			response: async (r) => await triggerGet(resumeId)
		});
	}
	async function triggerGet(id) {
		toastStore.trigger({
			message: id ? 'Resume Updated Sucessfully.' : 'Resume Created Sucessfully'
		});
		await getResumes();
	}

	async function openDeleteModal(resumeId) {
		modalStore.trigger({
			type: 'confirm',
			title: 'Delete Resume !',
			body: 'Are you sure you want to Delete?',
			response: async (r) => await deleteResume(r, resumeId)
		});
	}

	async function deleteResume(status, id) {
		if (status) {
			let response = await fetch(`/api/resume/${id}`, {
				method: 'DELETE'
			});
			await getResumes();
			toastStore.trigger({
				message: 'Resume Deleted Sucessfully.'
			});
		}
	}
</script>

<div>
	<AppBar gridColumns="grid-cols-2" slotDefault="place-self-left" slotTrail="place-content-end">
		Resumes
		<svelte:fragment slot="trail">
			<button type="button" class="btn-icon btn-lg variant-filled" on:click={() => openModal()}>
				<img
					width="64"
					height="64"
					src="https://img.icons8.com/pastel-glyph/64/plus--v1.png"
					alt="plus--v1"
				/>
			</button>
		</svelte:fragment>
	</AppBar>
	<div class="grid gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 p-4">
		{#each data.resumes as resume}
			<ResumeCard
				cardDetails={resume}
				on:edit={(event) => openModal(event.detail)}
				on:delete={(event) => openDeleteModal(event.detail)}
			/>
		{/each}
	</div>
</div>
