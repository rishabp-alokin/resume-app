<script>
	import { RadioItem, RadioGroup } from '@skeletonlabs/skeleton';
	export let style = '1';
</script>

<hr class="!border-dashed pb-2" />
<div class="justify-center flex">
	<RadioGroup>
		<RadioItem bind:group={style} name="justify" value="1">Style 1</RadioItem>
		<RadioItem bind:group={style} name="justify" value="2">Style 2</RadioItem>
		<RadioItem bind:group={style} name="justify" value="3">Style 3</RadioItem>
	</RadioGroup>
</div>
<div class="style-viewer p-4 flex justify-center gap-4">
	{#if style == '1'}
		<div class="card">
			<section class="card w-64">
				<div class="p-4 space-y-4">
					<div class="placeholder" />
					<div class="grid grid-cols-3 gap-8">
						<div class="placeholder" />
						<div class="placeholder" />
						<div class="placeholder" />
					</div>
					<div class="grid grid-cols-4 gap-4">
						<div class="placeholder" />
						<div class="placeholder" />
						<div class="placeholder" />
						<div class="placeholder" />
					</div>
				</div>
			</section>
		</div>
	{:else if style == '2'}
		<div class="card">
			<section class="card w-64">
				<div class="p-4 gap-3 grid grid-cols-3 items-center">
					<div class="col-span-2 space-y-4">
						<div class="grid grid-cols-2 gap-4">
							<div class="placeholder" />
							<div class="placeholder" />
						</div>
						<div class="grid grid-cols-4 gap-4">
							<div class="placeholder" />
							<div class="placeholder" />
							<div class="placeholder" />
							<div class="placeholder" />
						</div>
						<div class="grid grid-cols-4 gap-4">
							<div class="placeholder" />
							<div class="placeholder" />
							<div class="placeholder" />
							<div class="placeholder" />
						</div>
					</div>
					<div>
						<div class="placeholder rounded-none" />
						<div class="placeholder rounded-none" />
						<div class="placeholder rounded-none" />
						<div class="placeholder rounded-none" />
						<div class="placeholder rounded-none" />
					</div>
				</div>
			</section>
		</div>
	{:else if style == '3'}
		<div class="card">
			<section class="card w-64">
				<div class="p-4 gap-3 grid grid-cols-3 items-center">
					<div>
						<div class="placeholder rounded-none" />
						<div class="placeholder rounded-none" />
						<div class="placeholder rounded-none" />
						<div class="placeholder rounded-none" />
						<div class="placeholder rounded-none" />
					</div>
					<div class="col-span-2 space-y-4">
						<div class="grid grid-cols-2 gap-4">
							<div class="placeholder" />
							<div class="placeholder" />
						</div>
						<div class="grid grid-cols-4 gap-4">
							<div class="placeholder" />
							<div class="placeholder" />
							<div class="placeholder" />
							<div class="placeholder" />
						</div>
						<div class="grid grid-cols-4 gap-4">
							<div class="placeholder" />
							<div class="placeholder" />
							<div class="placeholder" />
							<div class="placeholder" />
						</div>
					</div>
				</div>
			</section>
		</div>
	{/if}
</div>
