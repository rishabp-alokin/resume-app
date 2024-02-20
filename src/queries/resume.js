import * as edgedb from 'edgedb';
import e from '../../dbschema/edgeql-js';

const client = edgedb.createClient();

export async function fetchAllResumeBasicDetails() {
	let result = await e
		.select(e.basic_details, () => ({
			...e.basic_details['*']
		}))
		.run(client);

	return result;
}

export async function createResume(data) {


	console.log(data, "??????????????????????????")
	const query = e.params({ items: e.json }, (params) => {
		return e.for(e.json_array_unpack(params.items), (item) => {
			return e.insert(e.basic_details, {
				name: e.cast(e.str, item.name),
				email: e.cast(e.str, item.email),
				phone: e.cast(e.str, item.phone),
				designation: e.cast(e.str, item.designation),
				summary: e.cast(e.str, item.summary),
				template_design_type: e.cast(e.str, item.template_design_type),
				address: e.insert(e.address, {
					address: e.cast(e.str, item.address.address),
					city: e.cast(e.str, item.address.city),
					country: e.cast(e.str, item.address.country),
					state: e.cast(e.str, item.address.state),
					postal_code: e.cast(e.str, item.address.postal_code)
				}),
				skills: e.insert(e.skills, {
					skills: e.cast(e.str, item.skills.skills)
				}),
				social_media: e.assert_distinct(
					e.for(e.json_array_unpack(item.social_media), (sm) => {
						return e.insert(e.social_media, {
							platform: sm.platform ? e.cast(e.str, sm.platform) : null,
							url: sm.url ? e.cast(e.str, sm.url) : null
						});
					})
				),
				education: e.assert_distinct(
					e.for(e.json_array_unpack(item.education), (edu) => {
						return e.insert(e.education, {
							institution: e.cast(e.str, edu.institution),
							course: e.cast(e.str, edu.course),
							passout_year: e.cast(e.str, edu.passout_year),
							marks: e.cast(e.str, edu.marks)
						});
					})
				),
				work_experience: e.assert_distinct(
					e.for(e.json_array_unpack(item.work_experience), (we) => {
						return e.insert(e.work_experience, {
							company: e.cast(e.str, we.company),
							designation: e.cast(e.str, we.designation),
							joining_date: e.cast(e.str, we.joining_date),
							worked_till: e.cast(e.str, we.worked_till)
						});
					})
				),
				projects: e.assert_distinct(
					e.for(e.json_array_unpack(item.projects), (proj) => {
						return e.insert(e.projects, {
							title: e.cast(e.str, proj.title),
							description: e.cast(e.str, proj.description)
						});
					})
				),
				certifications: e.assert_distinct(
					e.for(e.json_array_unpack(item.certifications), (cert) => {
						return e.insert(e.certifications, {
							certification_name: e.cast(e.str, cert.certification_name),
							certification_url: e.cast(e.str, cert.certification_url)
						});
					})
				),
				languages: e.assert_distinct(
					e.for(e.json_array_unpack(item.languages), (lang) => {
						return e.insert(e.languages, {
							language: e.cast(e.str, lang.language),
							proficiency: e.cast(e.str, lang.proficiency)
						});
					})
				)
			});
		});
	});

	const result = await query.run(client, { items: Array.isArray(data) ? data : [data] });

	return result;
}

export async function getResumeDetails(resumeId = '') {
	if (resumeId) {
		let result = await e
			.select(e.basic_details, () => ({
				...e.basic_details['*'],
				address: () => ({
					...e.address['*']
				}),
				social_media: () => ({
					...e.social_media['*']
				}),
				education: () => ({
					...e.education['*']
				}),
				work_experience: () => ({
					...e.work_experience['*']
				}),
				skills: () => ({
					...e.skills['*']
				}),
				projects: () => ({
					...e.projects['*']
				}),
				certifications: () => ({
					...e.certifications['*']
				}),
				languages: () => ({
					...e.languages['*']
				}),
				filter_single: { id: resumeId }
			}))
			.run(client);

		return result;
	}
}

export async function updateResume(resumeId = '', data) {
	console.log(data, resumeId, '.................');
	if (resumeId) {
		const query = e.update(e.basic_details, () => ({
			filter_single: { id: resumeId },
			set: {
				name: data.name,
				email: data.email,
				phone: data.phone,
				designation: data.designation,
				summary: data.summary,
				template_design_type: data.template_design_type,
				address: e.update(e.address, () => ({
					filter_single: { id: data.address.id },
					set: {
						address: data.address.address,
						city: data.address.city,
						country: data.address.country,
						state: data.address.state,
						postal_code: data.address.postal_code
					}
				})),
				skills: e.update(e.skills, () => ({
					filter_single: { id: data.skills.id },
					set: {
						skills: e.cast(e.str, data.skills.skills)
					}
				})),
				social_media: data.social_media.length ? e.assert_distinct(
					e.set(
						...data.social_media.map((sm) => {
							if (sm.id)
								return e.update(e.social_media, () => ({
									filter_single: { id: sm.id },
									set: {
										platform: sm.platform,
										url: sm.url
									}
								}));
							else
								return e.insert(e.social_media, {
									platform: sm.platform,
									url: sm.url
								});
						})
					)
				) : e.set(),
				education: data.education.length ? e.assert_distinct(
					e.set(
						...data.education.map((edu) => {
							if (edu.id)
								return e.update(e.education, () => ({
									filter_single: { id: edu.id },
									set: {
										institution: edu.institution,
										course: edu.course,
										passout_year: edu.passout_year,
										marks: edu.marks
									}
								}));
							else
								return e.insert(e.education, {
									institution: edu.institution,
									course: edu.course,
									passout_year: edu.passout_year,
									marks: edu.marks
								});
						})
					)
				) : e.set(),
				work_experience: data.work_experience.length ? e.assert_distinct(
					e.set(
						...data.work_experience.map((we) => {
							if (we.id)
								return e.update(e.work_experience, () => ({
									filter_single: { id: we.id },
									set: {
										company: we.company,
										designation: we.designation,
										joining_date: we.joining_date,
										worked_till: we.worked_till
									}
								}));
							else
								return e.insert(e.work_experience, {
									company: we.company,
									designation: we.designation,
									joining_date: we.joining_date,
									worked_till: we.worked_till
								});
						})
					)
				) : e.set(),
				projects: data.projects.length ? e.assert_distinct(
					e.set(
						...data.projects.length ? data.projects.map((proj) => {
							if (proj.id)
								return e.update(e.projects, () => ({
									filter_single: { id: proj.id },
									set: {
										title: proj.title,
										description: proj.description
									}
								}));
							else
								return e.insert(e.projects, {
									title: proj.title,
									description: proj.description
								});
						}) : []
					)
				) : e.set(),
				certifications: data.certifications.length ? e.assert_distinct(
					e.set(
						...data.certifications.map((cert) => {
							if (cert.id)
								return e.update(e.certifications, () => ({
									filter_single: { id: cert.id },
									set: {
										certification_name: cert.certification_name,
										certification_url: cert.certification_url
									}
								}));
							else
								return e.insert(e.certifications, {
									certification_name: cert.certification_name,
									certification_url: cert.certification_url
								});
						})
					)
				) : e.set(),
				languages: data.languages.length ? e.assert_distinct(
					e.set(
						...data.languages.map((lang) => {
							if (lang.id)
								return e.update(e.languages, () => ({
									filter_single: { id: lang.id },
									set: {
										language: lang.language,
										proficiency: lang.proficiency
									}
								}));
							else
								return e.insert(e.languages, {
									language: lang.language,
									proficiency: lang.proficiency
								});
						})
					)
				) : e.set()
			}
		}));

		const result = await query.run(client);
		// client.execute(`
		// DELETE social_media
		// FILTER NOT EXISTS (
		// 		SELECT basic_details
		// 		FILTER social_media.source = basic_details
		// );

		// `);

		return result;
	}
}

export async function deleteResume(resumeId = '') {
	if (resumeId) {
		const query = e.delete(e.basic_details, () => ({
			filter_single: { id: resumeId }
		}));
		return await query.run(client);
	} else return false;
}
