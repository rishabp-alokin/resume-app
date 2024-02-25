<script>
	import { onMount } from 'svelte';

	import ResumeViewOne from '$lib/components/ResumeFormModal/ResumeViewOne.svelte';
	import ResumeViewTwo from '$lib/components/ResumeFormModal/ResumeViewTwo.svelte';
	import ResumeViewThree from '$lib/components/ResumeFormModal/ResumeViewThree.svelte';
	export let data;

	let resumeData = {
		name: '',
		designation: '',
		email: '',
		phone: '',
		summary: '',
		template_design_type: '1',
		address: {
			address: '',
			city: '',
			state: '',
			country: '',
			postal_code: ''
		},
		social_media: [],
		education: [],
		projects: [],
		work_experience: [],
		certifications: [],
		skills: {},
		languages: []
	};

	onMount(async () => {
		resumeData = { ...resumeData, ...data.data };
	});

	function printDiv() {
		var printContents = document.getElementById('resume').innerHTML;
		var originalContents = document.body.innerHTML;

		document.body.innerHTML = printContents;

		window.print();

		document.body.innerHTML = originalContents;
	}
</script>

<div class="flex flex-col justify-center items-center">
	<div class="resume" id="resume">
		{#if resumeData.template_design_type == '1'}
			<ResumeViewOne data={resumeData} />
		{:else if resumeData.template_design_type == '2'}
			<ResumeViewTwo data={resumeData} />
		{:else if resumeData.template_design_type == '3'}
			<ResumeViewThree data={resumeData} />
		{/if}
	</div>
	<button type="button" class="btn variant-filled w-[20%] mt-6" on:click={() => printDiv()}>
		<span>Print</span>
	</button>
</div>
