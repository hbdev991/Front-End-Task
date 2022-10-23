<template>
    <div class="formItem__submit mt-4">
        <input type="submit" class="btn btn-primary" value="Submit" />
    </div>
</template>

<script>
export default {
    props: {
        value: {
            required: true,
            type: String
        },
    },
}
</script>