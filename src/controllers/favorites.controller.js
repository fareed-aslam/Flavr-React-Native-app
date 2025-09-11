import { and, eq } from "drizzle-orm";
import { db } from "../config/db.js";
import { favoritesTable } from "../db/schema.js";

export const favoritesHandler = async (req, res) => {
  try {
    const { userId, recipeId, title, image, cookTime, servings } = req.body;

    if (!userId || !recipeId || !title) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newFavorite = await db
      .insert(favoritesTable)
      .values({
        userId,
        recipeId,
        title,
        image,
        cookTime,
        servings,
      })
      .returning();

    res.status(201).json(newFavorite[0]);
  } catch (error) {
    console.log("Error getting the favorites", error);
    res.status(500).json({ error: "something went wrong" });
  }
};

export const favoritesDeleteHandler = async (req, res) => {
  try {
    const { userId, recipeId } = req.params;
    await db
      .delete(favoritesTable)
      .where(
        and(
          eq(favoritesTable.userId, userId),
          eq(favoritesTable.recipeId, parseInt(recipeId))
        )
      );

    res.status(200).json({ message: "Favorites Removed Successfully" });
  } catch (error) {
    console.log("Error Removing the favorites", error);
    res.status(500).json({ error: "something went wrong" });
  }
};

export const favoritesGetHandler = async (req, res) => {
  try {
    const { userId } = req.params;

    const userFavorites = await db
      .select()
      .from(favoritesTable)
      .where(eq(favoritesTable.userId, userId));

    res.status(200).json(userFavorites);
  } catch (error) {
    console.log("Error Removing the favorites", error);
    res.status(500).json({ error: "something went wrong" });
  }
};
