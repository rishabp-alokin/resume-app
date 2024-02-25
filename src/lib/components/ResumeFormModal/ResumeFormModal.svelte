<script>
	import {
		Stepper,
		Step,
		InputChip,
		getModalStore,
		RadioGroup,
		RadioItem
	} from '@skeletonlabs/skeleton';

	import { onMount } from 'svelte';

	const modalStore = getModalStore();

	import ResumeAddressSocials from './ResumeAddressSocials.svelte';
	import ResumeEducation from './ResumeEducation.svelte';
	import ResumeProjects from './ResumeProjects.svelte';
	import ResumeCertifications from './ResumeCertifications.svelte';
	import ResumeWorkExperienece from './ResumeWorkExperienece.svelte';
	import ResumeLanguages from './ResumeLanguages.svelte';
	import ResumeTemplate from './ResumeTemplate.svelte';
	const cBase =
		'bg-surface-100-800-token items-center relative md:w-3/4 sm:w-full lg:w-3/5 xl:w-2/5';

	let data = {
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

	let skills = [];

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

	async function getResumeDetails() {
		let response = await fetch(`/api/resume/${resumeId}`);
		let resumeData = await response.json();
		data = { ...data, ...resumeData.data };
		console.log(data, '<<<<<<<<<<<<<<<<<<<<<<<');
		data.skills['skills'] = JSON.parse(data.skills?.skills ?? []);
	}

	async function createResume(data) {
		let body = JSON.parse(JSON.stringify(data));
		body.skills.skills = JSON.stringify(body.skills.skills);
		let response = await fetch(`/api/resume/`, {
			method: 'POST',
			body: JSON.stringify(body)
		});
		let resumeData = await response.json();
		$modalStore[0].response({ status: true });
	}

	async function editResume(data) {
		let body = JSON.parse(JSON.stringify(data));
		body.skills.skills = JSON.stringify(body.skills.skills);
		let response = await fetch(`/api/resume/${data.id}`, {
			method: 'PUT',
			body: JSON.stringify(body)
		});
		let resumeData = await response.json();
		$modalStore[0].response({ status: true });
	}

	let stepStatus = {
		step1: true,
		step2: false,
		step3: false,
		step4: false,
		step5: false
	};

	function nameUpdated(name, email, phone) {
		if (name && email && phone) stepStatus.step1 = false;
	}

	$: nameUpdated(data.name, data.email, data.phone);

	async function saveResumeData() {
		if (data.id) {
			await editResume(data);
		} else {
			await createResume(data);
		}
		closeModal();
	}
</script>

<div class={cBase}>
	<div class="flex pl-4 py-2 justify-between">
		<span class="text-xl font-semibold flex items-center">Create/Edit Resume</span>
		<div class="mr-3" on:click={() => closeModal()}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="30"
				height="30"
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
		</div>
	</div>
	<div class="p-4 max-h-[80vh] overflow-auto">
		<Stepper on:complete={saveResumeData}>
			<Step locked={stepStatus.step1}>
				<hr class="!border-dashed pb-2" />

				<svelte:fragment slot="header">Basic Information</svelte:fragment>
				<div class="grid grid-cols-2 gap-4 max-h-[60vh] overflow-auto">
					<label class="label">
						<span>Name</span>
						<input
							class="input"
							type="text"
							placeholder="Name"
							bind:value={data.name}
							name="name"
						/>
					</label>
					<label class="label">
						<span>Designation</span>
						<input
							class="input"
							type="text"
							placeholder="Designation"
							bind:value={data.designation}
						/>
					</label>
					<label class="label">
						<span>Email</span>
						<input class="input" type="email" placeholder="Email" bind:value={data.email} />
					</label>
					<label class="label">
						<span>Phone</span>
						<input class="input" type="text" placeholder="Phone" bind:value={data.phone} />
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
						bind:value={data.summary}
					/>
				</label>
			</Step>
			<Step locked={stepStatus.step2}>
				<svelte:fragment slot="header">Address & Socials</svelte:fragment>
				<div class="max-h-[60vh] overflow-auto">
					<ResumeAddressSocials bind:address={data.address} bind:social_media={data.social_media} />
				</div>
			</Step>
			<Step locked={stepStatus.step3}>
				<svelte:fragment slot="header">Education & Projects</svelte:fragment>
				<div class="max-h-[60vh] overflow-auto">
					<ResumeEducation bind:educations={data.education} />
					<ResumeProjects bind:projects={data.projects} />
				</div>
			</Step>
			<Step locked={stepStatus.step4}>
				<svelte:fragment slot="header">Work Experiences & Certificates</svelte:fragment>
				<div class="max-h-[60vh] overflow-auto">
					<ResumeWorkExperienece bind:experiences={data.work_experience} />
					<ResumeCertifications bind:certificates={data.certifications} />
				</div>
			</Step>
			<Step locked={stepStatus.step5}>
				<svelte:fragment slot="header">Skills & Languages</svelte:fragment>
				<div class="max-h-[60vh] overflow-auto">
					<hr class="!border-dashed pb-2" />
					<span>Skills</span>
					<InputChip
						bind:value={data.skills.skills}
						name="Skills"
						placeholder="Enter Skills Here"
						max="7"
					/>
					<ResumeLanguages bind:languages={data.languages} />
				</div>
			</Step>
			<Step>
				<svelte:fragment slot="header">Resume Design Style</svelte:fragment>
				<ResumeTemplate bind:style={data.template_design_type} />
			</Step>
		</Stepper>
	</div>
</div>
