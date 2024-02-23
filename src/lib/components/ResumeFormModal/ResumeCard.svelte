<script>
	export let cardDetails = {};
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher()
</script>

<div>
	<div class="card">
		<header class="card-header flex justify-between">
			<div class="flex justify-between items-center px-4">
				<div class="placeholder-circle w-16 mr-3" />
				{cardDetails.name}
			</div>
			<div class="actions grid grid-cols-3 gap-4 px-4 items-center">
				<button type="button" class="btn-icon btn-lg variant-filled" on:click={() => dispatch('edit', cardDetails.id)}>
					<img
						width="24"
						height="24"
						src="https://img.icons8.com/ios-glyphs/30/edit--v1.png"
						alt="edit--v1"
					/>
				</button>
				<button type="button" class="btn-icon btn-lg variant-filled" on:click={() => dispatch('delete', cardDetails.id)}>
					<img
						width="24"
						height="24"
						src="https://img.icons8.com/material-sharp/24/filled-trash.png"
						alt="filled-trash"
					/>
				</button>
				<button type="button" class="btn-icon btn-lg variant-filled" on:click={() => window.location.href = `/resume/${cardDetails.id}`}>
					<img
						width="24"
						height="24"
						src="https://img.icons8.com/pastel-glyph/64/file.png"
						alt="file"
					/>
				</button>
			</div>
		</header>
		<section class="p-4">
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
</div>
