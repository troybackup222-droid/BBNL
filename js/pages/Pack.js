// PacksPage.js
import Spinner from '../components/Spinner.js';

export default {
  components: {
    Spinner,
  },
  data: () => ({
    loading: true,
    tiers: [
      {
        name: "Iron",
        packs: [
          { name: "GD Remake I", levels: ["Eruption Nerfed", "Tiny Sparks"] },
          { name: "Blaze Pack", levels: ["Mini Blaze", "Spark Rush"] },
        ],
      },
      {
        name: "Bronze",
        packs: [
          { name: "Firestorm Pack", levels: ["Firestorm", "Voltix"] },
        ],
      },
      {
        name: "Silver",
        packs: [
          { name: "Inferno Pack", levels: ["Inferno", "Pyroblast"] },
        ],
      },
    ],
  }),
  template: `
    <main v-if="loading">
      <Spinner></Spinner>
    </main>
    <main v-else class="packs-page">
      <h1>Packs by Tier</h1>
      <div v-for="tier in tiers" :key="tier.name" class="tier-section">
        <h2>{{ tier.name }} Tier</h2>
        <div v-for="pack in tier.packs" :key="pack.name" class="pack-section">
          <h3>{{ pack.name }}</h3>
          <div class="level-columns">
            <div v-for="level in pack.levels" :key="level" class="level">
              {{ level }}
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
  async mounted() {
    // Simulate loading delay to show Spinner like leaderboard
    setTimeout(() => {
      this.loading = false;
    }, 300); // can be 0 if no delay needed
  },
};
