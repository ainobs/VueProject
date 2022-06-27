<template>
  <div>
      <div v-for="job in jobs" :key="job.id" class="job-card">
            <div class="flex flex-row mt-4">
                <font-awesome-icon icon="fa-solid fa-clipboard-list" color="#ff7e00" size="2x" />
                <h5 class="job-name">{{ job.name }}</h5>
            </div>
            <div class="flex flex-row justify-between">
                <div class="mt-3 md:mt-0">
                        <div class="flex flex-row">
                            <font-awesome-icon icon="fa-solid fa-location-dot" color="#ff7e00" />
                            <p class="ml-2">{{ job.location }}</p>
                        </div>
                        <div class="flex flex-row -mt-2">
                            <font-awesome-icon icon="fa-solid fa-calendar-days" color="#ff7e00" />
                            <p class="ml-2">{{ job.time }}</p>
                        </div>
                </div>
                <router-link :to="{name: 'Job', params: {id: job.id, name: job.name, time: job.time, location: job.location, jobOverview: job.jobOverview, companyOverview: job.companyOverview, contract: job.contract, requirement: job.requirement, company: job.company }}">
                        <button class="viewBtn">View</button>
                </router-link>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['jobs']
}
</script>

<style>
.job-card {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    padding: 10px 15px;
    font-size: 14px;
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid #b4b6b8;
    margin-bottom: 10px;
    height: fit-content;
}
.margin {
    margin-left: 5px;
}
.job-name {
    margin-left: 20px;
    margin-top: 5px;
    font-weight: bold;
    font-size: 20px;
}
.viewBtn {
    background-color:#ff7e00;
    height: 40px;
    width: 120px;
    padding: 10px;
    color: #fff;
    border: none;
    font-weight: bold;
    margin-left: 30px;
    margin-top: 15px;
}
.test {
   
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

@media screen and (max-width: 500px) {
    .job-name {
        font-size: 14px;
}
    .viewBtn {
        padding: 5px;
        width: 50px; 
    }
    .job-card {
        flex-direction: column;
    }
}
</style>