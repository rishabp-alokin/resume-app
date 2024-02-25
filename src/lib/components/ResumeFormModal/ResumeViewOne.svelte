<script>
	import { onMount, beforeUpdate } from 'svelte';

	export let data = {};

	onMount(async () => {});

	beforeUpdate(() => {
		data.skills.skills = data.skills.skills ?? [];
	});
</script>

<div class="page bg-white min-w-[826px] max-w-[826px] text-black">
	<!-- 1. Header -->
	<header class="w-[100%] px-8">
		<div
			class="border-double border-b-4 border-black mb-6 py-6 justify-center item-center flex flex-col"
		>
			<h1 class="text-5xl uppercase flex justify-center">
				{data.name}
			</h1>
			<span class="flex justify-center items-center">
				<span class="material-symbols-outlined px-1"> smartphone </span>
				{data.phone}
				<span class="material-symbols-outlined px-1"> mail </span>
				{data.email}
			</span>
		</div>
		<span class="py-2 px-4 text-2xl font-mono font-bold">{data.designation}</span>
		<div class="pt-2 px-4 text-justify">{data.summary}</div>
	</header>
	<!-- 2a. Resume Content -->
	<div class="p-12 pt-6">
		<section class="resume_content">
			<article>
				<h2 class="pt-6 text-2xl uppercase font-mono border-b-2 border-slate-300 mb-4">
					Education
				</h2>
				<div class="flex flex-col gap-2">
					{#each data.education as education}
						<section class="flex flex-col p-4 rounded-lg bg-slate-100">
							<div class="flex justify-between">
								<strong>{education.course}</strong>
								<span class="time">
									<time>Marks:{education.marks}</time>
								</span>
							</div>
							<hr class="!border-dashed" />
							<div class="flex justify-between">
								<span>{education.institution} </span>
								<span class="text-sm">Pass Out Year: {education.passout_year}</span>
							</div>
						</section>
					{/each}
				</div>

				<h2 class="pt-6 text-2xl uppercase font-mono border-b-2 border-slate-300 mb-4">
					Experience
				</h2>
				<div class="flex flex-col gap-2">
					{#each data.work_experience as experience}
						<section class="flex flex-col p-4 rounded-lg bg-slate-100">
							<div class="flex justify-between">
								<strong>{experience.designation}</strong>
								<span class="time">
									<time datetime={experience.joining_date} class="start"
										>{experience.joining_date}</time
									>
									&#8211; {experience.worked_till}
								</span>
							</div>
							<hr class="!border-dashed" />
							<p>{experience.company}</p>
						</section>
					{/each}
				</div>

				<h2 class="pt-6 text-2xl uppercase font-mono border-b-2 border-slate-300 mb-4">Projects</h2>
				<div class="flex flex-col gap-2">
					{#each data.projects as project}
						<section class="flex flex-col p-4 rounded-lg bg-slate-100">
							<strong class="text-base">
								{project.title}
							</strong>
							<hr class="!border-dashed" />
							<p class="text-justify w-full text-mono tracking-tight">{project.description}</p>
						</section>
					{/each}
				</div>

				<h2 class="pt-6 text-2xl uppercase font-mono border-b-2 border-slate-300 mb-2">
					Certifications
				</h2>
				<div class="flex flex-col gap-2">
					{#each data.certifications as certification}
						<section class="flex flex-col p-4 rounded-lg bg-slate-100">
							<div class="flex justify-between items-center">
								<span>{certification.certification_name}</span>
								<span>
									<img
										id="barcode"
										alt=""
										src="https://api.qrserver.com/v1/create-qr-code/?data={certification.certification_url}&amp;size=50x50"
										title="HELLO"
										width="50"
										height="50"
									/>
								</span>
							</div>
						</section>
					{/each}
				</div>
			</article>
		</section>
		<!-- 2b. Resume Technical Knowledge/Skills -->
		<div class="mt-4">
			<hr class="!border-dashed px-4" />

			<div class="flex gap-4 pt-2 justify-between">
				{#if data.skills}
					<section class="w-[50%] p-2 my-2 bg-slate-100 rounded-md">
						<span class="text-xl uppercase font-mono border-b-2 border-slate-300">Skills</span>
						<div class="pt-2">
							{#each data.skills.skills as skill}
								<li class="capitalize pl-3">{skill}</li>
							{/each}
						</div>
					</section>
				{/if}

				<section class="w-[50%] p-2 my-2 bg-slate-100 rounded-md">
					<span class="text-xl uppercase font-mono border-b-2 border-slate-300 mb-2">
						Proficent Languages
					</span>
					<div class="pt-2">
						{#each data.languages as language}
							<li class="pl-3">
								<span class="pr-2">{language.language}</span> |
								<span class="pl-2">{language.proficiency}</span>
							</li>
						{/each}
					</div>
				</section>
			</div>

			<div class="flex gap-4 justify-between">
				<section class="w-[50%] p-2 my-2 bg-slate-100 rounded-md">
					<span class="text-xl uppercase font-mono border-b-2 border-slate-300 mb-2">Address</span>
					<p class="capitalize text-wrap pt-2 px-4">
						{data.address.address},<br />
						{data.address.city}, {data.address.state},<br />
						{data.address.country}
						{data.address.postal_code}
					</p>
				</section>

				<section class="w-[50%] p-2 my-2 bg-slate-100 rounded-md">
					<span class="text-xl uppercase font-mono border-b-2 border-slate-300 mb-2">Socials</span>
					<div class="">
						{#each data.social_media as social}
							<div class="px-4 flex justify-between pt-2 items-center">
								<span>{social.platform}</span>
								<span
									><img
										id="barcode"
										alt=""
										src="https://api.qrserver.com/v1/create-qr-code/?data={social.url}&amp;size=30x30"
										title="HELLO"
										width="30"
										height="30"
									/></span
								>
							</div>
						{/each}
					</div>
				</section>
			</div>
		</div>
	</div>
</div>

<style>
	.material-symbols-outlined {
		font-size: 20px !important;
		line-height: normal;
	}
</style>
