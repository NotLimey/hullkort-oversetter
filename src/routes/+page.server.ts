import type { PageServerLoad } from './$types';

export const load = (async () => {

    // ...super heavy logic here

    const data = {
        title: "Kristoffer's hullkort program",
        description: "Oversett meldingen din til hullkort så kristoffer kan lese den",
    }

    return data;
}) satisfies PageServerLoad;