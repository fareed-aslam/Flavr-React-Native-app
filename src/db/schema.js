import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

 const favoritesSchema = {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  recipeId: integer("recipe_id").notNull(),
  title: text("title").notNull(),
  image: text("image").notNull(),
  cookTime: text("cook_time"),
  servings: text("servings"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
};

export const favoritesTable = pgTable("favorites", favoritesSchema);
