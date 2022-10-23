<template>
    <label 
    :class="`${!visible ? 'visually-hidden' : ''}`" 
    :for="labelfor">
    {{ labeltext }}
    </label>
</template>

<script>
export default {
    props: {
        labeltext: {
            required: true,
            type: String
        },
        labelfor: {
            required: true,
            type: String
        },
        visible: {
            default: false,
            type: Boolean,
            required: false
        }
    }
}
</script>