import { fetchAllResumeBasicDetails, createResume } from '../../../queries/resume.js';

export const GET = async () => {
	try {
		let resumes = await fetchAllResumeBasicDetails();
		return new Response(
			JSON.stringify(resumes),
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return new Response(
			JSON.stringify({
				message: 'API Failed'
			}),
			{ status: 400 }
		);
	}
};

export const POST = async ({ request }) => {
	if (request) {
		let requestData = await request.json();
		await createResume(requestData);
		return new Response(
			JSON.stringify({
				message: 'Data Added sucessfully'
			}),
			{ status: 200 }
		);
	} else {
		return new Response(
			JSON.stringify({
				message: 'APi failed'
			}),
			{ status: 200 }
		);
	}
};
