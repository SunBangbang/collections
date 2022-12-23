<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView'
}
</script>
<!-- <template>
  <div class="about">
    <h1>This is an about page</h1> 
  </div>
</template>

<script>

import { defineComponent,onMounted,ref, } from 'vue'
import { doLogin } from '@/http/user/index.js';

export default defineComponent({
  name:'About',
  setup(){
    const route = useRoute();
    const userName = ref();

    onMounted( () => {
      init()
    })

    const init = () => {
      console.log('init')
    }
    const handleLogin = () => {
       doLogin().then(res=> {

        })
        .catch(error=>{
            console.log(error)
        });
    }
  }
})

</script>

<style lang="less">
</style> -->
