import routes from './routes.js';

export const store = Vue.reactive({
    dark: JSON.parse(localStorage.getItem('dark')) || false,
    toggleDark() {
        this.dark = !this.dark;
        localStorage.setItem('dark', JSON.stringify(this.dark));
    },
});

const app = Vue.createApp({
    data: () => ({ store }),
});
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

app.use(router);

app.mount('#app');

// Packs you want to appear (demo only)
const packs = [
    "Hell Pack",
    "Temple Pack 1",
    "Temple Pack 2",
    "Apocalyptic Trilogy Pack",
    "Corridor Pack",
    "Top 1 Pack"
];

// Simulated "added" packs
const addedPacks = [
    "Hell Pack",
    "Temple Pack 1",
    "Top 1 Pack"
];

const container = document.getElementById("packContainer");

packs.forEach(pack => {
    const div = document.createElement("div");
    div.className = "pack";
    div.textContent = pack;

    if (addedPacks.includes(pack)) {
        div.classList.add("added");
    }

    container.appendChild(div);
});
