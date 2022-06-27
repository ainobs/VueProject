<template>
    <div class="navContainer">
        <img src="https://go.shineinterview.com/img/shine-logo-white.png" class="main-logo" />
        <router-link :to="{ name: 'Home'}">
            <button class="navBtn">
                 <font-awesome-icon icon="fa-solid fa-table-cells" class="icon" />
                VIEW ALL JOBS
            </button>
        </router-link>
        
    </div>
</template>


<style scoped>
.navContainer {
    width: 100%;
    height: 90px;
    background-color: #ff7e00;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    align-content: center;
}
.navBtn {
    background-color: #ff7e00;
    color: #fff;
    height: 45px;
    border: 1px solid #fff;
    font-size: 12px;
    padding: 5px 20px;
    font-weight: bold;
}
    .main-logo {
    height:66px;
    padding:5px;
    border:none;
}
.icon {
    margin-right: 10px;
}
</style>