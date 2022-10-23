<template>
    <div class="formItem__body">
        <br>
        <p>
            <strong>Please fill in the form below</strong>
        </p>
        <Input
        :label="'Name'"
        :formDataName="'name'"
        @inputData="(data) => $emit('formData', data)" 
        />
        <Input
        :type="'email'"
        :label="'Email Address'"
        :formDataName="'email'"
        @inputData="(data) => $emit('formData', data)" 
        />
        <Input
        :type="'telephone'"
        :label="'Telephone Number'"
        :formDataName="'telephone'"
        @inputData="(data) => $emit('formData', data)" 
        />
        <Textarea
        :type="'message'"
        :label="'Message'"
        :formDataName="'message'"
        @inputData="(data) => $emit('formData', data)" 
        />
        <RadioGroup
        v-if="radioOptions"
        :title="'How should we contact you?'"
        :formDataName="'contact'"
        :groupName="'contact'"
        :options="radioOptions"
        @inputData="(data) => $emit('formData', data)" 
        />
        <Submit
        :value="'Submit'"
        />
    </div>
</template>

<script>
// Child components
import Input from './FormElements/Input.vue'
import Textarea from './FormElements/Textarea.vue'
import RadioGroup from './FormElements/RadioGroup.vue'
import Submit from './FormElements/Submit.vue'
export default {
    props: {
        radioOptions: {
            required: false,
            type: Array,
            default: []
        }
    },
    components: {
        Input,
        Textarea,
        RadioGroup,
        Submit
    }
}
</script>