export const load = async ({ fetch }) => {
	const fetchData = async () => {
		const data = await fetch('/api/resume');
		const resumeData = await data.json();
		return resumeData;
	};

	return { resumes: await fetchData() };
};
