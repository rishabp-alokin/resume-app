import * as edgedb from 'edgedb';
import e from '../../dbschema/edgeql-js';
import { filter } from '@skeletonlabs/skeleton';
import { basic_details, social_media } from '../../dbschema/edgeql-js/modules/default';

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
				social_media: e.assert_distinct(
					e.for(e.json_array_unpack(item.social_media), (sm) => {
						return e.insert(e.social_media, {
							platform: sm.platform ? e.cast(e.str, sm.platform) : null,
							url: sm.url ? e.cast(e.str, sm.url) : null
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
		const allSocialMedia = await e
			.select(e.basic_details, () => ({
				id: true,
				social_media: () => ({
					...e.social_media['*']
				}),
				filter_single: { id: resumeId }
			}))
			.run(client) ?? [];

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
				social_media: e.assert_distinct(
					e.set(
						...data.social_media.map((sm, index) => {

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
									url: sm.url,
									basic_details: e.basic_details
								});
						})
					)
				)
			}
		}));
		// social_media: e.assert_distinct(e.for(
		// 	e.op('distinct', e.json_array_unpack(item.social_media)),
		// 	(sm) => {
		// 		if(sm.id) {
		// 			const social= e.select(e.social_media, () => ({
		// 				id:true,
		// 				platform: true,
		// 				url: true
		// 			}))
		// 			if(e.op(sm, "not in", social)) {
		// 				return e.update(e.social_media, () => ({
		// 					filter_single: { id: e.cast(e.uuid, sm.id) },
		// 					set: {
		// 						platform: e.cast(e.str, sm.platform),
		// 						url: e.cast(e.str, sm.url)
		// 					}
		// 				}));
		// 			} else {
		// 				return e.insert(e.social_media, {
		// 					platform: e.cast(e.str, sm.platform),
		// 					url: e.cast(e.str, sm.url)
		// 				});
		// 			}
		// 		}

		// 		// socialMediaExists.find()
		// 		if (Object.keys(socialMediaExists).length) {
		// 			return e.update(e.social_media, () => ({
		// 				filter_single: { id: e.cast(e.uuid, sm.id) },
		// 				set: {
		// 					platform: e.cast(e.str, sm.platform),
		// 					url: e.cast(e.str, sm.url)
		// 				}
		// 			}));
		// 		} else {
		// 			return e.insert(e.social_media, {
		// 				platform: e.cast(e.str, sm.platform),
		// 				url: e.cast(e.str, sm.url)
		// 			});
		// 		}
		// 	}
		// ))

		// social_media: e.for(
		// 	e.op(
		// 		"distinct", e.json_array_unpack(e.json_array_unpack(item.social_media))), (sm) => {
		// 			return e.insert(e.social_media, {
		// 				// id: e.cast(e.uuid, sm.id),
		// 				platform: e.cast(e.str, sm.platform),
		// 				url: e.cast(e.str, sm.url)
		// 			}).unlessConflict((socail) => ({
		// 				on: e.cast(e.uuid, socail.id),
		// 				else: e.update(e.social_media, () => ({
		// 					filter_single: {id: e.cast(e.uuid, socail.id)},
		// 					set: {
		// 						platform: e.cast(e.str, socail.platform),
		// 						url: e.cast(e.str, socail.url)
		// 					}
		// 				}))
		// 			}))
		// 		}
		// )
		const result = await query.run(client);
		client.execute(`
			DELETE social_media
			WHERE NOT EXISTS (
				SELECT basic_details
				FILTER .social_media = social_media
			);
		`);
		

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
