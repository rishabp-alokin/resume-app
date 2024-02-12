<script>
	import ResumeSocial from './ResumeSocial.svelte';
</script>

<hr class="!border-dashed pb-2" />
<div>
	<label class="label">
		<span>Address</span>
		<textarea rows="2" class="textarea" placeholder="Address" />
	</label>
	<div class="grid grid-cols-2 gap-4 pt-2 pb-4">
		<label class="label">
			<span>City</span>
			<input class="input" type="text" placeholder="City" />
		</label>
		<label class="label">
			<span>State</span>
			<input class="input" type="text" placeholder="State" />
		</label>
		<label class="label">
			<span>Country</span>
			<input class="input" type="text" placeholder="Country" />
		</label>
		<label class="label">
			<span>Postal Code</span>
			<input class="input" type="text" placeholder="Postal Code" />
		</label>
	</div>
	<hr class="!border-dashed pb-2" />
	<span>Socials</span>
	<ResumeSocial />
</div>
