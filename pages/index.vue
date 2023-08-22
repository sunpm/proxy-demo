<script setup lang="ts">
onMounted(async () => {
  const {data, error} = await useFetch('https://www.baidu.com/index/index', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: {
      adb: 123,
      adb2: 123,
    },
  })
})
</script>

<template>

</template>

<style scoped>

</style>
