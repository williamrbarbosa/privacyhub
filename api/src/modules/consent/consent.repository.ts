import { prisma } from "../../lib/prisma";

export class ConsentRepository {
  async create(data: { analytics: boolean; marketing: boolean }) {
    return prisma.consent.create({
      data,
    });
  }

  async countAll() {
    return prisma.consent.count();
  }

  async countAnalyticsAccepted() {
    return prisma.consent.count({
      where: { analytics: true },
    });
  }
}
