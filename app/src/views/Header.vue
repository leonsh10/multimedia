<template>
  <div>
    <div class="line"></div>
    <div class="flexed">
      <div>
        <img
          src="../assets/voyager.png"
          style="width: 100px; margin-left: 10px"
          @click="goToHome()"
        />
      </div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="white"
        active-text-color="graz"
      >
        <div class="flexed">
          
          <el-menu-item index="2" @click="goToAboutUs()">About us</el-menu-item>
          <el-menu-item index="3" @click="goToContact()"
            >Contact Us</el-menu-item
          >
          <el-submenu index="4">
            <template slot="title">Packages</template>
            <el-menu-item @click="goToPackage()" index="4-1"
              >Family Pack</el-menu-item
            >
            <el-menu-item @click="goToPackage()" index="4-2"
              >Business Pack</el-menu-item
            >
            <el-menu-item @click="goToPackage()" index="4-3"
              >Single Pack</el-menu-item
            >
            <el-menu-item @click="goToPackage()" index="4-3"
              >HoneyMoon Pack</el-menu-item
            >
          </el-submenu>
          <!-- <el-menu-item index="5" @click="goToTickets()">Tickets</el-menu-item> -->
           <el-menu-item index="5" @click="goToBooking()">Booking</el-menu-item>
          
          
          <el-menu-item index="2" @click="gotoResorts()">Resorts</el-menu-item>

        </div>
      </el-menu>
      <div style="margin-right: 10px">
        <el-dropdown>
          <span class="el-dropdown-link">
            abc@hotmail.com<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Logout</el-dropdown-item>
            <el-dropdown-item @click="goToPackage()"
              >Profile</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    goToHome() {
      this.$router.push({
        name: "home",
      });
    },
    goToContact() {
      this.$router.push({
        name: "contact",
      });
    },
    goToAboutUs() {
      this.$router.push({
        name: "about-us",
      });
    },
    goToPackage() {
      this.$router.push({
        name: "package",
      });
    },
    goToProfile() {
      this.$router.push({
        name: "userprofile",
      });
    },
    goToTickets() {
      this.$router.push({
        name: "tickets",
      });
    },
     goToBooking() {
      this.$router.push({
        name: "booking",
      });
    },
  
    gotoResorts(){
       this.$router.push({
        name: "resorts",
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.el-menu.el-menu--horizontal{
  border:none;
}
.el-menu-demo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flexed {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
::v-deep .el-menu-item {
  color: #6e798c;
  font-family: "Open Sans", sans-serif;
}
::v-deep .el-submenu__title {
  color: #6e798c;
  font-family: "Open Sans", sans-serif;
}
</style>
