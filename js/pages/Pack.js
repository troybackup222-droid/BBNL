// packs.js
const tiers = [
  {
    name: "Iron",
    packs: [
      { name: "GD Remake I", levels: ["Eruption Nerfed", "Tiny Sparks"] },
      { name: "Blaze Pack", levels: ["Mini Blaze", "Spark Rush"] }
    ]
  },
  {
    name: "Bronze",
    packs: [
      { name: "Firestorm Pack", levels: ["Firestorm", "Voltix"] }
    ]
  },
  {
    name: "Silver",
    packs: [
      { name: "Inferno Pack", levels: ["Inferno", "Pyroblast"] }
    ]
  }
];

// Function to render packs page
function renderPacksPage(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // clear previous content

  const title = document.createElement("h1");
  title.textContent = "Packs by Tier";
  container.appendChild(title);

  tiers.forEach(tier => {
    const tierSection = document.createElement("div");
    tierSection.className = "tier-section";

    const tierTitle = document.createElement("h2");
    tierTitle.textContent = `${tier.name} Tier`;
    tierSection.appendChild(tierTitle);

    tier.packs.forEach(pack => {
      const packSection = document.createElement("div");
      packSection.className = "pack-section";

      const packTitle = document.createElement("h3");
      packTitle.textContent = pack.name;
      packSection.appendChild(packTitle);

      const levelsContainer = document.createElement("div");
      levelsContainer.className = "level-columns";

      pack.levels.forEach(level => {
        const levelDiv = document.createElement("div");
        levelDiv.className = "level";
        levelDiv.textContent = level;
        levelsContainer.appendChild(levelDiv);
      });

      packSection.appendChild(levelsContainer);
      tierSection.appendChild(packSection);
    });

    container.appendChild(tierSection);
  });
}
