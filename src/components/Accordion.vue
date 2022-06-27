<template>
  <div class="accordion-container">
     <div @click="openAccordion(); makeActive()" :class="{orange: isActive}" class="title font-bold p-4 cursor-pointer border-solid border-light-black-500 mb-1">
         {{ title }}
     </div>
     <div class="mt-6 mb-4 p-4" :class="isOpen ? 'd-block' : 'hidden'">
        <slot></slot>
     </div>
  </div>
</template>

<script>
export default {
     data() {
        return {
            isOpen: false,
            isActive: false,
        }
    },
    props: {
        title: String,
    },
    methods: {
        openAccordion() {
            this.isOpen = !this.isOpen;
        },
        makeActive() {
            this.isActive = !this.isActive;
        }
    },
}
</script>

<style>
.title {
    background-color: #c1c2c4;
    font-size: 18px;
    font-weight: bold;
}
.accordion-container {
    border: 1px solid #abadb1;
}
</style>