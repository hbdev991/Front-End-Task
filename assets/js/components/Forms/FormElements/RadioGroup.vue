<template>
    <div class="formItem__input mb-3">
        <p v-if="title">{{ title }}</p>
        <div class="form-check" v-for="(option, index) in options" :key="index">
            <input 
            class="form-check-input" 
            type="radio" 
            :value="option" 
            :name="groupName" 
            :id="getId(option)"
            @change="($event) => $emit('inputData', {item: `${formDataName}`, value: $event.target.value})" >
            <Label 
            :visible="true" 
            :labeltext="option" 
            :labelfor="getId(option)" 
            class="form-check-label" />
        </div>
    </div>
</template>

<script>
// Helpers
import { noSpaceLowercase } from '~/assets/js/helpers/general'

// Child components
import Label from './Label.vue'
export default {
    props: {
        formDataName: {
            required: true,
            type: String
        },
        options: {
            required: true,
            type: Array
        },
        groupName: {
            required: false,
            default: 'contact'
        },
        title: {
            required: false,
            type: String
        }
    },
    methods: {
        getId(item) {
            return noSpaceLowercase(item)
        }
    },
    components: {
        Label
    }
}
</script>