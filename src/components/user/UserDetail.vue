<template>
<div>
    <h3>Some User Details</h3>
    <p>User no:{{$route.params.id}}</p>
    <button class="ui teal button" v-on:click="gotoedit">
        Go Edit
    </button>
    </div>
</template>
<script>
export default{
    methods:{
        gotoedit(){
            this.$router.push('/user/'+ this.$route.params.id +'/edit');
        }
    }
}
</script>