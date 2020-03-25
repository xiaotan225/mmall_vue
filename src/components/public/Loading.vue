<template>
    <div class="loading-cont">
        <div class="loading">{{msg}}</div>
    </div>
</template>
<script>
export default {
    props:['msg']
}
</script>

<style lang="css" scoped>

.loading{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content:center;
    align-items: center;
    z-index: 999;
    font-size: 20px;
}
</style>