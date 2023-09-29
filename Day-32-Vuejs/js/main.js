F8.component("header-component", {
    template: `<h1>HEADER</h1>`,
});

F8.component("counter-app", {
    data: () => ({
            count: 0,
            title: "Counter App",
    }),
    template:`
        <h2 class="title">{{ title }}</h2>
        <h2 class="count">Đã đếm: {{ count }} lần</h2>
        <button v-on:click="count--">-</button>
        <button v-on:click="count++">+</button>
        <button v-on:dblclick="title='Counter App Update'">Change</button>
    `,
});




