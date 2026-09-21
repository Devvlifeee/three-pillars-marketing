import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createDemoRequest, subscribeNotify, createDeckRequest } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  leads: router({
    requestDemo: publicProcedure
      .input(
        z.object({
          name: z.string().min(1).max(160),
          email: z.string().email().max(320),
          company: z.string().max(200).optional(),
          phone: z.string().max(32).optional(),
          teamSize: z.string().max(32).optional(),
          message: z.string().max(2000).optional(),
        })
      )
      .mutation(async ({ input }) => {
        await createDemoRequest(input);
        try {
          await notifyOwner({
            title: `New demo request — ${input.name}`,
            content: `${input.name} (${input.email}${input.company ? `, ${input.company}` : ""}) requested a Three Pillars demo.${input.teamSize ? ` Team size: ${input.teamSize}.` : ""}${input.message ? `\n\n"${input.message}"` : ""}`,
          });
        } catch {
          // Notification failure must not block lead capture.
        }
        return { success: true } as const;
      }),

    notifyMe: publicProcedure
      .input(
        z.object({
          email: z.string().email().max(320),
          source: z.string().max(64).default("roadmap"),
        })
      )
      .mutation(async ({ input }) => {
        await subscribeNotify(input.email, input.source);
        return { success: true } as const;
      }),

    requestDeck: publicProcedure
      .input(
        z.object({
          name: z.string().min(1).max(160),
          email: z.string().email().max(320),
          firm: z.string().max(200).optional(),
          note: z.string().max(2000).optional(),
        })
      )
      .mutation(async ({ input }) => {
        await createDeckRequest(input);
        try {
          await notifyOwner({
            title: `Investor deck request — ${input.name}`,
            content: `${input.name} (${input.email}${input.firm ? `, ${input.firm}` : ""}) requested the Three Pillars investor deck.${input.note ? `\n\n"${input.note}"` : ""}`,
          });
        } catch {
          // Notification failure must not block lead capture.
        }
        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
