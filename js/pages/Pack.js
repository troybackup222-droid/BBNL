<template>
  <div class="packs-page">
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
  </div>
</template>

<script>
export default {
  name: "PacksPage",
  data() {
    return {
      tiers: [
        {
          name: "Iron",
          packs: [
            {
              name: "GD Remake I",
              levels: ["Eruption Nerfed", "Tiny Sparks"]
            },
            {
              name: "Blaze Pack",
              levels: ["Mini Blaze", "Spark Rush"]
            }
          ]
        },
        {
          name: "Bronze",
          packs: [
            {
              name: "Firestorm Pack",
              levels: ["Firestorm", "Voltix"]
            }
          ]
        }
        // Add more tiers/packs here
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
  margin-bottom: 40px;
}

.tier-section h2 {
  font-size: 22px;
  margin-bottom: 12px;
}

.pack-section {
  margin-bottom: 20px;
}

.pack-section h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

/* Columns for levels inside each pack */
.level-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.level {
  flex: 1 1 180px; /* column width */
  padding: 10px 12px;
  border-radius: 8px;
  background: linear-gradient(135deg, #1f1f1f, #2a2a2a);
  text-align: center;
  font-weight: 600;
  font-size: 14px;
}
</style>
