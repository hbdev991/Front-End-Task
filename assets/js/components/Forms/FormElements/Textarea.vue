<template>
    <div class="formItem__input mb-3">
        <Label 
        :labeltext="label" 
        :labelfor="labelFor" />
        <textarea 
        :placeholder="label"
        class="form-control"
        @input="($event) => $emit('inputData', {item: `${formDataName}`, value: $event.target.value})" 
        :id="labelFor"></textarea>
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
        type: {
            required: false,
            default: 'text'
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