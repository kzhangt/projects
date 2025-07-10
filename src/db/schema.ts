import { relations } from "drizzle-orm";
import { sqliteTable, integer, text, blob } from "drizzle-orm/sqlite-core";

export const projects = sqliteTable("projects", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	date: integer("date", { mode: "timestamp" }).notNull(),
	inResume: integer("inResume", { mode: "boolean" }).notNull(),
})

export const projectMedia = sqliteTable("project_media", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	projectId: integer("project_id").references(() => projects.id, { onDelete: "cascade" }).notNull(),
	media: blob().notNull(),
})

export const projectRelations = relations(projects, ({many}) => ({
	media: many(projectMedia)
}))

export const projectMediaRelations = relations(projectMedia, ({one}) => ({
	project: one(projects, {
		fields: [projectMedia.projectId],
		references: [projects.id]
	})
}))