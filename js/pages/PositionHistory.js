export default {
    name: "PositionHistory",

    data() {
        return {
            levels: [
                "SampleLevel1",
                "SAMPLELEVEL2",
                "Sample_Level_3",
                "SampleLevel4",
                "SAMPLELEVEL5",
                "SAMPLELEVEL6",
                "SAMPLELEVEL7",
                "SAMPLELEVEL8",
                "SAMPLELEVEL9",
                "SAMPLELEVEL10",
                "SAMPLELEVEL11",
                "SAMEPLELEVEL12",
                "SAMPLELEVEL13",
            ],
        };
    },

    template: `
        <main class="page-list">
            <div class="meta">
                <h1>Position History</h1>

                <ul class="level-list">
                    <li
                        v-for="level in levels"
                        :key="level"
                        class="level-item"
                    >
                        {{ level }}
                    </li>
                </ul>
            </div>
        </main>
    `,
};
