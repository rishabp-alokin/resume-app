<script>
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { Modal,Toast, storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// form modal components
	import ResumeFormModal from '$lib/components/ResumeFormModal/ResumeFormModal.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();

	const modalComponemts = {
		ResumeFormModal: { ref: ResumeFormModal }
	};
</script>

<slot />
<Modal
	components={modalComponemts}
	position="items-center"
	shadow="shadow-xl"
	regionHeader="text-2xl font-bold"
/>

<Toast/>
