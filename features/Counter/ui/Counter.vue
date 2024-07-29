<script setup>
const store = useCounterStore()

const { count } = storeToRefs(store)

const { increment } = store

onMounted(() => {
  increment()
})
</script>

<template>
  <div>
    Current Count: {{ count }}
  </div>
</template>
