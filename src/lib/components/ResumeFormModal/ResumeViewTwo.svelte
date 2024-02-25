<script>
	import { onMount, beforeUpdate } from 'svelte';

	export let data = {};

	onMount(async () => {});

	beforeUpdate(() => {
		data.skills.skills = data.skills.skills ?? [];
	});
</script>

<div class="page bg-white min-w-[826px] max-w-[826px] text-black grid grid-cols-3 gap-4 p-12 pl-6">
	<div class="col-span-2 mt-36 mr-8">
		<span class="py-2 text-2xl font-mono font-bold">{data.designation}</span>
		<div class="pt-2 text-justify">{data.summary}</div>

		<section class="resume_content">
			<article>
				<h2 class="pt-6 text-2xl uppercase font-mono border-b-2 border-slate-300 mb-2">
					Education
				</h2>
				<div class="flex flex-col gap-2">
					{#each data.education as education}
						<section class="flex flex-col p-2 bg-slate-100">
							<div class="grid grid-cols-4 gap-4">
								<strong class="col-span-3 text-sm">{education.course}</strong>
								<span class="time flex flex-row-reverse items-center text-xs">
									Marks:{education.marks}
								</span>
							</div>
							<hr class="!border-dashed" />
							<div class="grid grid-cols-4 gap-4">
								<span class="col-span-3 flex items-center text-sm">{education.institution} </span>
								<span class="text-xs flex flex-row-reverse items-center">
									{education.passout_year}
								</span>
							</div>
						</section>
					{/each}
				</div>

				<h2 class="pt-6 text-2xl uppercase font-mono border-b-2 border-slate-300 mb-2">
					Experience
				</h2>
				<div class="flex flex-col gap-2">
					{#each data.work_experience as experience}
						<section class="flex flex-col p-2 bg-slate-100">
							<div class="grid grid-cols-2 gap-4">
								<strong class="text-sm">{experience.designation}</strong>
								<span class="time  flex flex-row-reverse items-center text-xs">
									{experience.joining_date}
									&#8211; {experience.worked_till}
								</span>
							</div>
							<hr class="!border-dashed" />
							<p>{experience.company}</p>
						</section>
					{/each}
				</div>

				<h2 class="pt-6 text-2xl uppercase font-mono border-b-2 border-slate-300 mb-2">Projects</h2>
				<div class="flex flex-col gap-2">
					{#each data.projects as project}
						<section class="flex flex-col p-2 bg-slate-100">
							<strong class="text-base">
								{project.title}
							</strong>
							<hr class="!border-dashed" />
							<p class="text-justify w-full text-mono leading-normal">{project.description}</p>
						</section>
					{/each}
				</div>

				<h2 class="pt-6 text-2xl uppercase font-mono border-b-2 border-slate-300 mb-2">
					Certifications
				</h2>
				<div class="flex flex-col gap-2">
					{#each data.certifications as certification}
						<section class="flex flex-col p-2 bg-slate-100">
							<div class="flex justify-between items-center">
								<span class="text-sm">{certification.certification_name}</span>
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
	</div>
	<div class="bg-gray-100 px-10">
		<div
			class="border-double border-b-4 border-black mb-6 py-6 justify-center item-center flex flex-col"
		>
			<h1 class="text-2xl font-bold uppercase py-4">
				{data.name}
			</h1>
			<span class="flex items-center">
				<span class="material-symbols-outlined pr-1"> smartphone </span>
				{data.phone}
			</span>
			<span class="flex items-center">
				<span class="material-symbols-outlined pr-1"> mail </span>
				{data.email}
			</span>
		</div>

		<section class="bg-slate-100 mb-5">
			<span class="text-xl uppercase font-mono border-b-2 border-slate-300 mb-2">Address</span>
			<p class="capitalize text-wrap pt-2">
				{data.address.address},<br />
				{data.address.city}, {data.address.state},<br />
				{data.address.country}
				{data.address.postal_code}
			</p>
		</section>

		{#if data.skills}
			<section class="bg-slate-100 mb-5">
				<span class="text-xl uppercase font-mono border-b-2 border-slate-300">Skills</span>
				<div class="pt-2">
					{#each data.skills.skills as skill}
						<li class="capitalize pl-2">{skill}</li>
					{/each}
				</div>
			</section>
		{/if}
		<section class="bg-slate-100 mb-5">
			<span class="text-xl uppercase font-mono border-b-2 border-slate-300 mb-2"> Languages </span>
			<div class="pt-2">
				{#each data.languages as language}
					<li>
						<span class="pr-1">{language.language}</span> |
						<span class="pl-1">{language.proficiency}</span>
					</li>
				{/each}
			</div>
		</section>

		<section class="bg-slate-100 mb-5">
			<span class="text-xl uppercase font-mono border-b-2 border-slate-300 mb-2">Socials</span>
			<div class="">
				{#each data.social_media as social}
					<div class="px-2 flex justify-between pt-2 items-center">
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

<style>
	.material-symbols-outlined {
		font-size: 20px !important;
		line-height: normal;
	}
</style>
