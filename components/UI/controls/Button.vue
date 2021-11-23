<template>
    <button
        class="btn"
        :class="btnClass"
        v-on="$listeners"
        v-bind="$attrs"
    >
    <!-- v-on="$listeners - можно подвесить любое событие" -->
    <!-- v-bind="$attrs - можно подвесить привязать любой контекст" -->
        <slot />    
    </button>
</template>
<script>
export default {
    props: {
        btnClass: {
            type: String,
            default: 'btnPrimary'
        }
    }
}
</script>