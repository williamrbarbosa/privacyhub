import { ConsentRepository } from "./consent.repository";

export class ConsentService {
  constructor(private repo: ConsentRepository) {}

  async create(data: { analytics: boolean; marketing: boolean }) {
    return this.repo.create(data);
  }

  async getAnalytics() {
    const total = await this.repo.countAll();
    const analyticsAccepted = await this.repo.countAnalyticsAccepted();

    return {
      total,
      analyticsAccepted,
      acceptanceRate: total ? analyticsAccepted / total : 0,
    };
  }
}
