import { getResumeDetails,updateResume, deleteResume } from '../../../../queries/resume';

export const GET = async ({ params }) => {
	try {
		if (params.resume_id) {
			console.log(params, '<<<<<< params');
			let result = await getResumeDetails(params.resume_id);
			return new Response(
				JSON.stringify({
					data: result,
					message: 'Test get api connection'
				}),
				{ status: 200 }
			);
		}
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

export const DELETE = async ({ params }) => {
	if (params.resume_id) {
		let response = await deleteResume(params.resume_id)
		if(response)
		return new Response(JSON.stringify({ message: 'Resume Deleted successfully' }), {
			status: 200
		});
	}
};

export const PUT = async ({ request, params }) => {
	let data = await request.json();
	if (params.resume_id) {
		let result = await updateResume(params.resume_id, data)
		return new Response(JSON.stringify({ message: 'put params revied sucessfully' }), {
			status: 200
		});
	}
};
