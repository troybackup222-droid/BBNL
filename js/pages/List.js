import { store } from "../main.js";
import { embed } from "../util.js";
import { score } from "../score.js";
import { fetchEditors, fetchList } from "../content.js";

import Spinner from "../components/Spinner.js";
import LevelAuthors from "../components/List/LevelAuthors.js";

const roleIconMap = {
    owner: "crown",
    admin: "user-gear",
    helper: "user-shield",
    dev: "code",
    trial: "user-lock",
};

export default {
    components: { Spinner, LevelAuthors },

    template: `
    <main v-if="loading">
        <Spinner />
    </main>

    <main v-else class="page-list">
        <div class="list-container">
            <table class="list" v-if="list.length">
                <tr v-for="([level, err], i) in list" :key="i">
                    <td class="rank">
                        <p class="type-label-lg">
                            {{ i + 1 <= 6 ? '#' + (i + 1) : 'Legacy' }}
                        </p>
                    </td>

                    <td class="level" :class="{ active: selected === i, error: !level }">
                        <button @click="selected = i">
                            <span class="type-label-lg">
                                {{ level ? level.name : \`Error (\${err}.json)\` }}
                            </span>
                        </button>
                    </td>
                </tr>
            </table>

            <!-- Position History -->
            <div v-if="level && level.positionHistory?.length">
                <h2>Position History</h2>
                <table class="position-history">
                    <tr>
                        <th>Position</th>
                        <th>Change</th>
                        <th>Cause</th>
                        <th>Date</th>
                    </tr>

                    <tr v-for="entry in level.positionHistory" :key="entry.date">
                        <td>{{ entry.position }}</td>
                        <td>{{ entry.change }}</td>
                        <td>{{ entry.cause }}</td>
                        <td>{{ entry.date }}</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="level-container">
            <div class="level" v-if="level">
                <h1>{{ level.name }}</h1>

                <LevelAuthors
                    :author="level.author"
                    :creators="level.creators"
                    :verifier="level.verifier"
                />

                <iframe class="video" :src="video" frameborder="0"></iframe>

                <ul class="stats">
                    <li>
                        <div class="type-title-sm">Points</div>
                        <p>{{ score(selected + 1, 100, level.percentToQualify) }}</p>
                    </li>
                    <li>
                        <div class="type-title-sm">ID</div>
                        <p>{{ level.id }}</p>
                    </li>
                    <li>
                        <div class="type-title-sm">Password</div>
                        <p>{{ level.password || 'Free to Copy' }}</p>
                    </li>
                    <li>
                        <div class="type-title-sm">Handcam</div>
                        <p>{{ level.handcam || 'Not Required' }}</p>
                    </li>
                </ul>

                <h2>Records</h2>

                <p v-if="selected + 1 <= 75">
                    <strong>{{ level.percentToQualify }}%</strong> or better
                </p>
                <p v-else-if="selected + 1 <= 150">
                    <strong>100%</strong> required
                </p>
                <p v-else>No new records accepted</p>

                <table class="records">
                    <tr v-for="(record, i) in level.records" :key="i">
                        <td>{{ record.percent }}%</td>
                        <td>
                            <a :href="record.link" target="_blank">
                                {{ record.user }}
                            </a>
                        </td>
                        <td>
                            <img
                                v-if="record.mobile"
                                :src="\`/assets/phone-landscape\${store.dark ? '-dark' : ''}.svg\`"
                            />
                        </td>
                        <td>{{ record.hz }}Hz</td>
                    </tr>
                </table>
            </div>

            <div v-else class="level empty">
                <p>(ノಠ益ಠ)ノ彡┻━┻</p>
            </div>
        </div>

        <div class="meta-container">
            <div class="meta">
                <div v-if="errors.length">
                    <p v-for="(error, i) in errors" :key="i" class="error">
                        {{ error }}
                    </p>
                </div>

                <p>
                    Website layout by
                    <a href="https://tsl.pages.dev/" target="_blank">
                        TheShittyList
                    </a>
                </p>

                <div v-if="editors">
                    <h3>List Editors</h3>
                    <ol>
                        <li v-for="(editor, i) in editors" :key="i">
                            <img
                                :src="\`/assets/\${roleIconMap[editor.role]}\${store.dark ? '-dark' : ''}.svg\`"
                            />
                            <a v-if="editor.link" :href="editor.link" target="_blank">
                                {{ editor.name }}
                            </a>
                            <span v-else>{{ editor.name }}</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </main>
    `,

    data() {
        return {
            list: [],
            editors: [],
            loading: true,
            selected: 0,
            errors: [],
            toggledShowcase: false,
            roleIconMap,
            store
        };
    },

    computed: {
        level() {
            return this.list[this.selected]?.[0] || null;
        },

        video() {
            if (!this.level) return "";

            return embed(
                this.level.showcase && this.toggledShowcase
                    ? this.level.showcase
                    : this.level.verification
            );
        }
    },

    async mounted() {
        this.list = await fetchList();
        this.editors = await fetchEditors();

        if (!this.list) {
            this.errors.push("Failed to load list.");
        } else {
            this.errors.push(
                ...this.list
                    .filter(([_, err]) => err)
                    .map(([_, err]) => `Failed to load (${err}.json)`)
            );
        }

        if (!this.editors) {
            this.errors.push("Failed to load editors.");
        }

        this.loading = false;
    },

    methods: {
        embed,
        score
    }
};
