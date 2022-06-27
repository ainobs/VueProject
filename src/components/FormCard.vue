<template>
    <div class="formCard">
       
        <form @submit.prevent="handleSubmit" :class="isVisible ? 'd-block' : 'hidden'">
             <h2 class="text-sm sm:text-3xl font-bold underline">APPLY NOW</h2>
        <p class="mt-8">Fill this form if you wish to apply for
             the position of {{ name }} for {{ company }}
        </p>
        <p class="mt-8">
            Upon submission of this form, we will access your 
            suitability for this role and you will receive an email 
            from us outlining the next steps
        </p>
            <label class="label">
                <font-awesome-icon icon="fa-solid fa-video" color="#bdbfbe" class="icon" />
                 <input class="inputField" type="text" placeholder="Your First Name" v-model="firstName" required>
            </label>

            <label class="label">
                <font-awesome-icon icon="fa-solid fa-video" color="#bdbfbe" class="icon" />
                <input class="inputField" type="text" placeholder="Your Last Name" v-model="lastName" required>
            </label>

            <label class="label">
                <font-awesome-icon icon="fa-solid fa-video" color="#bdbfbe" class="icon" />
                <input class="inputField" type="email" placeholder="Your Email Address" v-model="email" required>
            </label>
             
            <label class="label">
                <font-awesome-icon icon="fa-solid fa-video" color="#bdbfbe" class="icon" />
                <input class="inputField" type="number" placeholder="Your Mobile Number" v-model="number" required>
            </label>
            <div id="scroll" class="form-checkbox label">
                  <font-awesome-icon icon="fa-solid fa-star-half-stroke" color="#bdbfbe" class="check-box-icon" />
                  <!-- <input type="checkbox" id="terms" v-model="terms" class="form-check-input" required> -->
                   <b-form-checkbox id="terms" v-model="terms" name="check-box" class="checkbox" required></b-form-checkbox>
                  <label for="terms" class="text-left">
                      Text for Terms and conditions and link to the privacy 
                      policy of shine and all that comes with submitting this information
                  </label>
            </div>
            <div>
                <button class="applyBtn">APPLY</button>
            </div>
        </form>
        <div :class="success ? 'd-block' : 'hidden'" class="success-page">
             <h2 class="text-sm sm:text-3xl font-bold underline">APPLICATION COMPLETE</h2>
             <div class="flex justify-center content-center">
                 <div class="mt-48">
                      <font-awesome-icon icon="fa-solid fa-circle-check" size="3x" />
                      <p class="mt-3">You have applied for this job</p>
                 </div>  
             </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data() {
        return {
            company: this.$route.params.company,
            name: this.$route.params.name,
            firstName: '',
            lastName: '',
            email: '',
            number: '',
            terms: false,
            isVisible: true,
            success: false
        }
    },
    methods: {
        handleSubmit() {
            axios.post(
                'https://jsonplaceholder.typicode.com/posts',
                {firstName: this.firstName, lastName: this.lastName, email: this.email, number: this.number, terms: this.terms},
                )
                .then( res => {
                    console.log(res);
                    if(res.status == 201) {
                        this.isVisible = !this.isVisible;
                        //display success page 
                        this.success = !this.success;                  
                    } else {
                        this.isVisible = true;
                    }
                })
                .catch((err) => {
                    err.response.status
                })
        },
    },
}
</script>


<style scoped>
input:focus {
    outline: none;
}
.formCard {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    width: 35%;
    padding: 30px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
    font-size: 14px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #e1e3e6;
    height: fit-content;
}
.inputField {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom: 1px solid gray;
    margin-top: 20px;
    width: 90%
}
.applyBtn {
    background-color:#ff7e00;
    height: 60px;
    width: 140px;
    padding: 20px;
    color: #fff;
    border: none;
    font-weight: bold;
    margin-top: 90px;
    margin-bottom: 40px;
}
.form-checkbox {
    margin-top: 30px;
    height: auto;
}
.icon {
    margin-top: 20px
}
.label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.checkbox {
    margin-top: -51px
}
.check-box-icon {
    margin-top: -50px;
    margin-right: 15px;
}
.success-page {
    height: 600px;
}

@media  screen and (max-width: 1100px) {
    .formCard {
        width: 100%;
    }
    .checkbox {
        margin-top: -30px
    }
    .check-box-icon {
        margin-top: -30px;
    }
}

@media screen and (max-width: 520px) {
      .checkbox {
         margin-top: -65px
    }
    .check-box-icon {
        margin-top: -65px;
    }
}
</style>