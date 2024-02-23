
export const ssr = false

export const load = async ({fetch, params}) => {
  let resumeId = params.resume_id || ''
  let response = await fetch(`/api/resume/${resumeId}`);
  let data = await response.json();
  data.data.skills['skills'] = data.data.skills?.skills.length ? JSON.parse(data.data.skills?.skills) : [];

  return data
};