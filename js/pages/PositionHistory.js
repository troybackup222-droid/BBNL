export default {
    name: "PositionHistory",

    data() {
        return {
            levels: [
                "test1",
                "test2",
                "test3",
                "test4",
                "test5",
                "test6",
                "test7",
                "test8",
                "test9",
                "test10",
                "test11",
                "test12",
                "test13",
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
