import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Demo requests captured from the Contact / Book a Demo form.
 * Three Pillars — a product of buildingit. © 2026 buildingit. All rights reserved.
 */
export const demoRequests = mysqlTable("demo_requests", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  company: varchar("company", { length: 200 }),
  phone: varchar("phone", { length: 32 }),
  teamSize: varchar("teamSize", { length: 32 }),
  message: text("message"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type DemoRequest = typeof demoRequests.$inferSelect;
export type InsertDemoRequest = typeof demoRequests.$inferInsert;

/** Notify-me / early-access email subscribers (roadmap + CTA capture). */
export const notifySubscribers = mysqlTable("notify_subscribers", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  source: varchar("source", { length: 64 }).default("roadmap").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type NotifySubscriber = typeof notifySubscribers.$inferSelect;
export type InsertNotifySubscriber = typeof notifySubscribers.$inferInsert;

/**
 * Investor pitch-deck requests captured from the /investors page.
 * Three Pillars — a product of buildingit. © 2026 buildingit. All rights reserved.
 */
export const deckRequests = mysqlTable("deck_requests", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  firm: varchar("firm", { length: 200 }),
  note: text("note"),
  status: mysqlEnum("status", ["new", "sent", "closed"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type DeckRequest = typeof deckRequests.$inferSelect;
export type InsertDeckRequest = typeof deckRequests.$inferInsert;
