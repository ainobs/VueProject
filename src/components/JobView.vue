<template>
    <div class="jobCard">
        <span class="font-bold text-lg sm:text-3xl">{{ name }}</span>
        <div class="flex">
            <div class="flex flex-row">
                <font-awesome-icon icon="fa-solid fa-calendar-days" color="#ff7e00" class="mt-2 icon" size="2x" />
                <p class="ml-3 mt-2 text-sm md:text-xl">{{ time }}</p>
            </div>
            <div class="flex flex-row margin">
                <font-awesome-icon icon="fa-solid fa-location-dot" color="#ff7e00" class="mt-2 icon" size="2x" />
                <p class="ml-3 mt-2 text-sm md:text-xl">{{ location }}</p>
            </div>
        </div>
        <Accordion title="Job Overview">
            {{ jobOverview }}
        </Accordion>
        <Accordion title="Company Overview">
            <div class="iframe-container">
                    <iframe :src="companyOverview" title="company overview" class="iframe"></iframe>
            </div>
        </Accordion>
        <Accordion title="Contract & Salary">
            {{ contract }}
        </Accordion>
        <Accordion title="Job Requirements">
            {{ requirement }}
        </Accordion>
    </div>
</template>

<script>
import Accordion from './Accordion.vue'
export default {
    data() {
        return {
            name: this.$route.params.name,
            time: this.$route.params.time,
            location: this.$route.params.location,
            jobOverview: this.$route.params.jobOverview,
            companyOverview: this.$route.params.companyOverview,
            contract: this.$route.params.contract,
            requirement: this.$route.params.requirement,
        }
    },
    components: {
        Accordion
    }
}


</script>

<style scoped>
.jobCard {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    width: 60%;
    height: fit-content;
    padding: 30px;
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: 14px;
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid #e1e3e6;
}
.margin {
    margin-left: 30px;
    margin-bottom: 40px;
}
.iframe-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}
.iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}


@media screen and (max-width: 1100px) {
    .jobCard {
        width: 100%;
    }
}
@media screen and (max-width: 700px) {
    .icon {
        font-size: 15px;
    }
}

</style>