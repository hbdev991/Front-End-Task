<template>
    <FormWrapper v-if="jsonData">
        <FormItem v-for="(item, index) in jsonData" :key="index" :item="item" :index="index" />
    </FormWrapper>
</template>

<script>
// Helper modules
import { getFormData } from '~/assets/js/helpers/getFormData'

// Child components
import FormWrapper from './FormWrapper.vue'
import FormItem from './FormItem.vue'
export default {
    data() {
        return {
            jsonData: {}
        }
    },
    methods: {
        async getJsonData() {
            this.jsonData = await getFormData()
            .then(data => data.forms)
            .catch(e => {
                /*
                currently outputting an error to the console but
                in a real world scenario should reflect an error message
                to the end user
                */
                console.log(e.message)
            })
        },
    },
    async created() {
        await this.getJsonData()
    },
    components: {
        FormWrapper,
        FormItem
    }
}
</script>