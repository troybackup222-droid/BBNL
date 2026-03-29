// main.js (full ready-to-use)
import { store } from "../main.js";
import { embed, localize } from "../util.js";
import { score } from "../score.js";
import { fetchEditors, fetchList, fetchLeaderboard } from "../content.js";

// Components
import Spinner from "../components/Spinner.js";
import LevelAuthors from "../components/List/LevelAuthors.js";
import Btn from "../components/Btn.js";

// Pages
import ListPage from "./ListPage.js";
import LeaderboardPage from "./LeaderboardPage.js";
import RoulettePage from "./RoulettePage.js";
import PositionHistoryPage from "./PositionHistoryPage.js";
import PacksPage from "./PacksPage.js"; // <-- Added PacksPage import

// Vue Router setup
const routes = {
  '/': ListPage,
  '/leaderboard': LeaderboardPage,
  '/roulette': RoulettePage,
  '/position-history': PositionHistoryPage,
  '/packs': PacksPage, // <-- Added Packs route
};

// Simple router-view handling
const app = Vue.createApp({
  data() {
    return {
      currentRoute: window.location.pathname,
    };
  },
  computed: {
    CurrentPage() {
      return routes[this.currentRoute] || ListPage;
    },
  },
  render() {
    return Vue.h(this.CurrentPage);
  },
  mounted() {
    // Update currentRoute when URL changes
    window.addEventListener('popstate', () => {
      this.currentRoute = window.location.pathname;
    });
  },
});

// Mount Vue app
app.mount('#app');
