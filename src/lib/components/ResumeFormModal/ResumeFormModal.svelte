<script>
	import { Stepper, Step, InputChip, getModalStore } from '@skeletonlabs/skeleton';

	import { onMount } from 'svelte';

	const modalStore = getModalStore();

	import ResumeAddressSocials from './ResumeAddressSocials.svelte';
	import ResumeEducation from './ResumeEducation.svelte';
	import ResumeProjects from './ResumeProjects.svelte';
	import ResumeCertifications from './ResumeCertifications.svelte';
	import ResumeWorkExperienece from './ResumeWorkExperienece.svelte';
	import ResumeLanguages from './ResumeLanguages.svelte';
	const cBase =
		'bg-surface-100-800-token w-screen h-screen p-4 flex flex-col justify-center items-center relative';

	let data = {
		name: 'rishab',
		designation: 'me it sme',
		email: 'hehe@gg.com',
		phone: '',
		summary: '',
		address: {
			address: '',
			city: '',
			state: '',
			country: '',
			pin_code: ''
		},
		social_media: [
			{
				platform: '',
				url: ''
			}
		],
		eduaction: [
			{
				course: '',
				institution: '',
				marks: '',
				passout_year: ''
			}
		],
		projects: [],
		work_experience: [
			{
				course: '',
				institution: '',
				marks: '',
				passout_year: ''
			}
		],
		certifications: [
			{
				certification_name: '',
				certification_url: ''
			}
		],
		skills: [],
		languages: [
			{
				language: '',
				proficiency: ''
			}
		]
	};

	onMount(async () => {
		if (resumeId) {
			Object.keys(data).forEach(async (item, index) => {
				if (index + 1 === Object.keys(data).length) await getResumeDetails();
			});
		}
	});

	function closeModal() {
		modalStore.close();
	}

	let resumeId = $modalStore[0].meta.resumeId;

	// if (resumeId) {
	// 	Object.keys(data).forEach(async (item, index) => {
	// 		if (index + 1 === Object.keys(data).length) await getResumeDetails();
	// 	});
	// 	console.log(data, ".........")
	// }

	async function getResumeDetails() {
		let response = await fetch(`/api/resume/${resumeId}`);
		let resumeData = await response.json();
		data = { ...data, ...resumeData.data };
		console.log(data, '.........');
	}
</script>

<div class={cBase}>
	<div class="absolute top-4 right-4">
		<button type="button" class="btn-icon btn-lg" on:click={() => closeModal()}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="48"
				height="48"
				viewBox="0,0,256,256"
				style="fill:#000000;"
			>
				<g
					fill="#ffffff"
					fill-rule="nonzero"
					stroke="none"
					stroke-width="1"
					stroke-linecap="butt"
					stroke-linejoin="miter"
					stroke-miterlimit="10"
					stroke-dasharray=""
					stroke-dashoffset="0"
					font-family="none"
					font-weight="none"
					font-size="none"
					text-anchor="none"
					style="mix-blend-mode: normal"
					><g transform="scale(4,4)"
						><path
							d="M16,14c-0.512,0 -1.02306,0.19494 -1.41406,0.58594c-0.781,0.781 -0.781,2.04712 0,2.82812l14.58594,14.58594l-14.58594,14.58594c-0.781,0.781 -0.781,2.04713 0,2.82812c0.391,0.391 0.90206,0.58594 1.41406,0.58594c0.512,0 1.02306,-0.19494 1.41406,-0.58594l14.58594,-14.58594l14.58594,14.58594c0.781,0.781 2.04713,0.781 2.82812,0c0.781,-0.781 0.781,-2.04713 0,-2.82812l-14.58594,-14.58594l14.58594,-14.58594c0.781,-0.781 0.781,-2.04712 0,-2.82812c-0.781,-0.781 -2.04713,-0.781 -2.82812,0l-14.58594,14.58594l-14.58594,-14.58594c-0.391,-0.391 -0.90206,-0.58594 -1.41406,-0.58594z"
						></path></g
					></g
				>
			</svg>
		</button>
	</div>
	<Stepper>
		<Step>
			<hr class="!border-dashed pb-2" />

			<svelte:fragment slot="header">Basic Information</svelte:fragment>
			<div class="grid grid-cols-2 gap-4">
				<label class="label">
					<span>Name</span>
					<input class="input" type="text" placeholder="Name" value={data.name} />
				</label>
				<label class="label">
					<span>Designation</span>
					<input class="input" type="text" placeholder="Designation" value={data.designation} />
				</label>
				<label class="label">
					<span>Email</span>
					<input class="input" type="email" placeholder="Email" value={data.email} />
				</label>
				<label class="label">
					<span>Phone</span>
					<input class="input" type="number" placeholder="Phone" value={data.email} />
				</label>
			</div>
			<label class="label">
				<span>Summary</span>
				<textarea
					name="summary"
					id="summary"
					rows="4"
					class="textarea"
					placeholder="Summary"
					value={data.summary}
				/>
			</label>
		</Step>
		<Step>
			<svelte:fragment slot="header">Address & Socials</svelte:fragment>
			<ResumeAddressSocials address={data.address} social_media={data.social_media} />
		</Step>
		<Step>
			<svelte:fragment slot="header">Education & Projects</svelte:fragment>
			<ResumeEducation educations={data.eduaction} />
			<ResumeProjects projects={data.projects} />
		</Step>
		<Step>
			<svelte:fragment slot="header">Work Experiences & Certificates</svelte:fragment>
			<ResumeWorkExperienece experiences={data.work_experience} />
			<ResumeCertifications certificates={data.certifications} />
		</Step>
		<Step>
			<svelte:fragment slot="header">Skills & Lauguages</svelte:fragment>
			<hr class="!border-dashed pb-2" />
			<span>Skills</span>
			<InputChip bind:value={data.skills} name="Skills" placeholder="Enter Skills Here" max="7" />
			<ResumeLanguages languages={data.languages} />
		</Step>
	</Stepper>
</div>
