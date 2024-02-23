<script>
	import { onMount } from 'svelte';

	import ResumeViewOne from '$lib/components/ResumeFormModal/ResumeViewOne.svelte';

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
</script>

<div class="w-full h-full">
	<ResumeViewOne data={resumeData} />
	<!-- <div class="grid grid-cols-3">
		<div class="col-span-2">{resumeData.name}</div>
		<div class=""></div>
	</div> -->
</div>
