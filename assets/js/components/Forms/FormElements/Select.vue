<template>
    <div class="formItem__input mb-3">
        <Label 
        :labeltext="label" 
        :labelfor="labelFor" />
        <select 
        @change="($event) => $emit('inputData', {item: 'enquiryType', value: $event.target.value})"
        class="form-select"
        :id="labelFor">
            <option disabled selected>Please select ...</option>
            <option 
            v-for="(option, index) in options" 
            :key="index" 
            :value="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
// Helpers
import { noSpaceLowercase } from '~/assets/js/helpers/general'

// Child components
import Label from './Label.vue'
export default {
    props: {
        options: {
            required: true,
            type: Array
        },
        label: {
            required: true,
            type: String
        }
    },
    computed: {
        labelFor() {
            // Remove spaces from label and convert to lowercase
            return noSpaceLowercase(this.label)
        }
    },
    components: {
        Label
    }
}
</script>