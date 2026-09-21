/**
 * Tests for the leads router — demo requests and notify-me subscriptions.
 * Three Pillars — a product of buildingit. © 2026 buildingit. All rights reserved.
 */
import { describe, expect, it, vi, beforeEach } from "vitest";

const createDemoRequest = vi.fn();
const subscribeNotify = vi.fn();
const createDeckRequest = vi.fn();
const notifyOwner = vi.fn();

vi.mock("./db", async importOriginal => {
  const actual = await importOriginal<typeof import("./db")>();
  return {
    ...actual,
    createDemoRequest: (...args: unknown[]) => createDemoRequest(...args),
    subscribeNotify: (...args: unknown[]) => subscribeNotify(...args),
    createDeckRequest: (...args: unknown[]) => createDeckRequest(...args),
  };
});

vi.mock("./_core/notification", () => ({
  notifyOwner: (...args: unknown[]) => notifyOwner(...args),
}));

import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

beforeEach(() => {
  createDemoRequest.mockReset().mockResolvedValue(undefined);
  subscribeNotify.mockReset().mockResolvedValue(undefined);
  createDeckRequest.mockReset().mockResolvedValue(undefined);
  notifyOwner.mockReset().mockResolvedValue(undefined);
});

describe("leads.requestDemo", () => {
  it("stores the demo request and notifies the owner", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.leads.requestDemo({
      name: "Priya Sharma",
      email: "priya@example.com",
      company: "Sharma Traders",
      teamSize: "11-50",
      message: "Interested in the Business plan.",
    });

    expect(result).toEqual({ success: true });
    expect(createDemoRequest).toHaveBeenCalledTimes(1);
    expect(createDemoRequest.mock.calls[0][0]).toMatchObject({
      name: "Priya Sharma",
      email: "priya@example.com",
    });
    expect(notifyOwner).toHaveBeenCalledTimes(1);
  });

  it("rejects an invalid email", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.leads.requestDemo({ name: "X", email: "not-an-email" })
    ).rejects.toThrow();
    expect(createDemoRequest).not.toHaveBeenCalled();
  });

  it("still succeeds when owner notification fails", async () => {
    notifyOwner.mockRejectedValueOnce(new Error("notify down"));
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.leads.requestDemo({
      name: "Arun",
      email: "arun@example.com",
    });
    expect(result).toEqual({ success: true });
  });
});

describe("leads.notifyMe", () => {
  it("subscribes an email with a source", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.leads.notifyMe({
      email: "fan@example.com",
      source: "roadmap",
    });
    expect(result).toEqual({ success: true });
    expect(subscribeNotify).toHaveBeenCalledWith("fan@example.com", "roadmap");
  });

  it("rejects an invalid email", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.leads.notifyMe({ email: "nope", source: "cta" })
    ).rejects.toThrow();
    expect(subscribeNotify).not.toHaveBeenCalled();
  });
});

describe("leads.requestDeck", () => {
  it("stores the deck request and notifies the owner", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.leads.requestDeck({
      name: "Kavita Rao",
      email: "kavita@fund.vc",
      firm: "Horizon Ventures",
      note: "Interested in the seed round.",
    });
    expect(result).toEqual({ success: true });
    expect(createDeckRequest).toHaveBeenCalledTimes(1);
    expect(createDeckRequest.mock.calls[0][0]).toMatchObject({
      name: "Kavita Rao",
      email: "kavita@fund.vc",
      firm: "Horizon Ventures",
    });
    expect(notifyOwner).toHaveBeenCalledTimes(1);
  });

  it("rejects an invalid email", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.leads.requestDeck({ name: "X", email: "bad" })
    ).rejects.toThrow();
    expect(createDeckRequest).not.toHaveBeenCalled();
  });

  it("still succeeds when owner notification fails", async () => {
    notifyOwner.mockRejectedValueOnce(new Error("notify down"));
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.leads.requestDeck({
      name: "Dev",
      email: "dev@capital.in",
    });
    expect(result).toEqual({ success: true });
  });
});
