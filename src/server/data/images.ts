import 'server-only';

import { db } from "../db";

export async function getUserImages(userId: string) {

    const images = await db
        .query
        .images
        .findMany({
            where: (model, { eq }) => eq(model.userId, userId),
            orderBy: (model, { desc }) => desc(model.id)
        });

    return images;
}