import { createApp } from "vue";
import Forms from "~/assets/js/components/Forms/Forms.vue";

export const init = () => {
    // Mount vue component to helpForms ID
    const app = createApp(Forms);
    app.mount("#helpForms"); 
}  