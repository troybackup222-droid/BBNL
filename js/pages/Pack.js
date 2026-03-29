<template>
  <div class="packs-page">
    <h1>Packs by Tier</h1>

    <div v-for="tier in tiers" :key="tier.name" class="tier-section">
      <h2>{{ tier.name }} Tier</h2>

      <div class="tier-columns">
        <div v-for="pack in tier.packs" :key="pack" class="pack">
          {{ pack }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PacksPage",
  data() {
    return {
      tiers: [
        {
          name: "Iron Tier",
          packs: ["GD Remake I", "Tiny Sparks", "Mini Blaze"]
        },
        {
          name: "Bronze Tier",
          packs: ["Blaze Fury", "Spark Rush"]
        },
        {
          name: "Silver Tier",
          packs: ["Firestorm", "Eruption", "Voltix"]
        },
        {
          name: "Gold Tier",
          packs: ["Inferno", "Pyroblast"]
        },
        {
          name: "Platinum Tier",
          packs: ["Ultimate Blaze"]
        }
      ]
    };
  }
};
</script>

<style>
.packs-page {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: 'Lexend Deca', sans-serif;
  color: white;
}

.tier-section {
  margin-bottom: 30px;
}

.tier-section h2 {
  font-size: 22px;
  margin-bottom: 12px;
}

.tier-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.pack {
  flex: 1 1 180px; /* column width */
  padding: 10px 12px;
  border-radius: 8px;
  background: linear-gradient(135deg, #1f1f1f, #2a2a2a);
  text-align: center;
  font-weight: 600;
  font-size: 14px;
}
</style>
