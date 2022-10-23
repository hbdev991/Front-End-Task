<template>
    <form class="formItems__formItem formItem card mb-4 mt-4">
        <div class="formItem__card card-body">
            <!-- Title with select -->
            <FormTitle
            :title="item.name"
            :options="item.options"
            :opened="opened"
            :showToggle="showToggle"
            @formData="(data) => formData[data['item']] = data['value']"
            @closeaccordion="closeAccordion"
            @openaccordion="openAccordion" />
            <!-- Collapsible content -->
            <FormCollapse 
            :ref="collapseReference"
            :radioOptions="item.contact"
            @formData="(data) => formData[data['item']] = data['value']"
            class="collapse" />
        </div>
    </form>
</template>

<script>
import { Collapse as Collapse } from 'bootstrap'; // Bootstrap accordion dependancy

// Child Components
import FormTitle from './FormTitle.vue'
import FormCollapse from './FormCollapse.vue'
export default {
    data() {
        return {
            formData: {
                enquiryType: ''
            },
            opened: false
        }
    },
    props: {
        item: {
            required: true,
            type: Object
        },
        index: {
            required: true,
            type: Number
        }
    },
    computed: {
        collapseReference() {
            return `collapse${this.index}`
        },
        showToggle() {
            return this.formData.enquiryType !== '' ? true : false
        }
    },
    methods: {
        openAccordion() {
            if (!this.opened) {
                this.opened = true
                /*
                Pass in reference to vue component and grab its dom element if $el exists (optional chaining)
                */
                new Collapse(this.$refs[this.collapseReference]?.$el)
            }
        },
        closeAccordion() {
            this.opened = !this.opened
            new Collapse(this.$refs[this.collapseReference]?.$el)
        }
    },
    components: {
        FormTitle,
        FormCollapse
    }
}
</script>

<style lang="scss" scoped>
.formItem {
    &__title {
        position:relative;
    }
}
</style>