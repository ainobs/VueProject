<template>
  <div>
      <div class="main">
        <JobView />
        <FormCard/>
      </div>
      <button @click="scrollToBottom" class="floating-btn md:invisible">APPLY</button>   
  </div>
</template>

<script>
import FormCard from '../components/FormCard.vue'
import JobView from '../components/JobView.vue'

export default {
    components: {
    FormCard, JobView
  },
  methods: {
   scrollToBottom() {
    let element = document.getElementById("scroll");
    element.scrollIntoView({behavior: "smooth", block: "end"});
    }
},

}
</script>

<style>
.main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 60px;
    background: #e1e3e6;
}
.floating-btn {
  width: 55px;
  height: 55px;
  background: #ff7e00;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  box-shadow: 2px 2px 5px rgb(0,0,0.25);
  position: fixed;
  bottom: 30px;
  right: 40px;
  transition: background 0.25s;
}

.floating-btn:active {
  background: #7a4005;
}

@media screen and (max-width: 1100px) {
  .main {
    flex-direction: column;
    margin: 0 auto;
    padding: 50px;
  }
}

  @media screen and (max-width: 480px) {
  .main {
    padding: 20px;
  }
  
}
</style>