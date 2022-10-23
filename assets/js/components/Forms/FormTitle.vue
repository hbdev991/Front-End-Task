<template>
    <div class="formItem__title formTitle">
        <h3>{{ title }}</h3>
        <div class="formTitle__closeAccordion" v-if="showToggle">
            <button @click.prevent="() => $emit('closeaccordion')" class="btn">
                <span>{{ toggleText }}</span> 
                <svg :class="`${!opened ? 'reverse' : ''}`" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"></path>
                </svg>
            </button>
        </div>
        <Select
        v-if="options.length"
        @change="() => $emit('openaccordion')"
        @inputData="(data) => $emit('formData', data)" 
        :label="'Type of enquiry'"
        :options="options" />
    </div>
</template>

<script>
import Select from './FormElements/Select.vue'
export default {
    props: {
        title: {
            required: true,
            type: String
        },
        options: {
            type: Array,
            required: true
        },
        opened: {
            required: true,
            default: false
        },
        showToggle: {
            required: false,
            default: false,
            type: Boolean
        }
    },
    computed: {
        toggleText() {
            return this.opened ? 'Close Form' : 'Open Form'
        }
    },
    components: {
        Select
    }
}
</script>

<style lang="scss" scoped>
.formTitle {
    h3 {
        padding-right:1.875rem;
    }
    &__closeAccordion {
        position:absolute;
        top:0;
        right:0;
    }
    &__closeAccordion span {
        display:none;
        @media(min-width:768px) {
            display:block;
        }
    }
    .btn {
        padding:0;
        display:flex;
        align-items: center;
        gap:0.625rem;
        svg {
            width:1.125rem;
            height:1.125rem;
            transition: transform 0.2s linear;
        }
        svg.reverse {
            transform: rotate(180deg);
        }
    }
}
</style>