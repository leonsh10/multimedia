<template>
    <div>
       <div class="main__pic">
        <HeaderView />
          <el-carousel height="600px" indicator-position="outside" >
            <el-carousel-item v-for="item in img" :key="item">
              <img class="top__image" :src="item" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="row" >
      <div class="col-md-12 width">
     <div class="col-md-6 title" >
        <h4> Book now for the best prices<br><span id="yetId"> yet</span></h4>
      </div>
     
      </div>
    
  </div>
      <div class="all__destinations">
            <div class="single__destination__tokyo">
                <h3 class="single__destination-text">Tokyo</h3>
            </div>

            <div class="single__destination__paris">
                <h3 class="single__destination-text">Paris</h3>

            </div>

            <div class="single__destination__seoul">
                <h3 class="single__destination-text">Seoul</h3>

            </div>

            <div class="single__destination__london">
                <h3 class="single__destination-text">London</h3>

            </div>
        </div>
  <div class="row maincontent">
   <div class="col-md-12 content">
       <div class="row" style="width:100%;height:100%">
       <div class="col-md-4 picture" style="overflow:hidden;border-top-left-radius: 20%;border-bottom-left-radius: 20%;">
            <img src="../assets/HomeRoom.jpg"  class="imageSrc">
       </div>
        <div class="col-md-8" >
        <div class="row"  style="width:104%;height:10%" >
            <div class="col-md-6" >
               <span id="styleL">LONDON</span>
            </div>
             <div class="col-md-6" >
           <span id="date">3 days ago</span>      
            </div>
        </div>
        <div class="row" style="width:104%;height:25%">
            <h3 id="title">   Prince Hotel VIP Line Booking</h3>
         
        </div>
         <div class="row" style="width:104%;height: 56%; overflow:hidden    " >
             <p id="contetText">
                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
             ullamco laboris nisi ut aliquip ex ea commodo consequat. "
             Ut enim ad minim veniam, quis nostrud exercitation 
             ullamco laboris nisi ut aliquip ex ea commodo consequat. "
             Ut enim ad minim veniam, quis nostrud exercitation 
             ullamco laboris nisi ut aliquip ex ea commodo consequat. "
             Ut enim ad minim veniam, quis nostrud exercitation 
             ullamco laboris nisi ut aliquip ex ea commodo consequat. "
             </p>
           
        </div>
        <div class="row"  style="width:104%;height:10%" >
            <div class="col-md-6" >
             <span id="hotel">  Hotel Prince</span>  
            </div>
             <div class="col-md-6" >
              <a href="../details" id="linku"><span class="book">Book Now <i class="el-icon-right"></i></span> </a>    
                  </div>
        </div>
       </div>
       </div>
      </div>
  </div>
        <FooterView />
        </div>
</template>

<script>
import FooterView from "../views/Footer.vue";
import HeaderView from "../views/Header.vue";

export default {
  components: {
    HeaderView,
    FooterView
    },
    data(){
      return{
        img: [require("@/assets/mac.jpg"), require("@/assets/home1.jpeg")],
      }
    }
}
</script>
<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap'); */




  .main__pic {
    width: 100%;
    height: 600px;
  }
.stickytop{
    position: sticky;
      top: 0;

}
.top__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

.tinput{
width: 110%;
    height: 40px;
    margin-left: -12px;
    border: white;
}
::placeholder{
    margin-left:20px;
}
.tinput:focus{
    border-color: #007AE9;
}
.t-button{
        width: 105%;
    margin-left: -12px;
    height: 104%;
}
t-button:hover{
    border-color:#007AE9
}
#links{
    float: right;
      color: #6E798C;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
}
#Maps{
    font-size: 14px;
    margin-left: 5px;
     float: right;
       color:#007AE9;
       font-family: 'Open Sans', sans-serif;
}
a:hover{
    text-decoration: underline #007AE9;
}
.book{
     color:#007AE9;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    float:right;
}
#hotel{
    color:#007AE9;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    padding-left: 11px;
}
#title{
font-family: 'DM Serif Display', serif;
padding-top: 30px;
padding-left: 20px;
}
#contetText{
   font-family: 'Open Sans', sans-serif;
    color: #6E798C;
    font-size: 15px;
    padding-left: 19px;
    padding-right: 51px;
}
#styleL{
    font-family: 'Open Sans', sans-serif;
    color:#6E798C;
    font-weight: 600;
    padding-left: 5px;
    padding-top: 5px;
}
#date{
     font-family: 'Open Sans', sans-serif;
    color:#6E798C;
    font-weight: 400; 
    font-size: 15px;
    float: right;
}

.imageSrc{
        width: 123%;
    height: 109%;
    margin-left: -38px;
    margin-top: -31px;

}

.maincontent{
    /* border:1px solid black; */
    height:600px;
    width:70%;
    margin-left: 15%;
      
}
.content{
    /* border:1px solid black; */
        width:100%;
        height: 400px;
        border-radius:20%
        
}

::placeholder {
  color: gray;
   font-family: 'Open Sans', sans-serif;
}

#yetId{
    margin-left:32%;
    
}
.title{
    margin-top:18%;
    margin-left:10%;
    color:white;
    font-family: 'Open Sans', sans-serif;

}
body{overflow-x:hidden;}

/* .img{
    width:110%;
    height: 800px;
    
} */
/* .width{
    height: 650px;
    overflow: hidden;
    overflow-x: hidden;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/HomePageMainPicture.jpg');
    background-position: 70%;
    background-size: 100% 900px;
    
} */
.divmod{
    height: 100px;
    overflow-x: hidden;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.all__destinations{
    width:99%;
    height:350px;
    /* outline:1px solid red; */
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px 0px 30px;
}
.single__destination__paris{
    width:22%;
    height:300px;
    border-radius:15px;
    background: url('../assets/paris.jpeg');
     background-repeat: no-repeat;
    background-size: cover;
}
.single__destination__tokyo{
    width:22%;
    height:300px;
    border-radius:15px;
    background: url('../assets/tokyo.jpeg');
     background-repeat: no-repeat;
    background-size: cover;
}
.single__destination__seoul{
    width:22%;
    height:300px;
    border-radius:15px;
    background: url('../assets/bali.jpeg');
     background-repeat: no-repeat;
    background-size: cover;
}
.single__destination__london{
    width:22%;
    height:300px;
    border-radius:15px;
    background: url('../assets/london.jpeg');
     background-repeat: no-repeat;
    background-size: cover;
}
.single__destination-text{
    color:white;
    font-family: 'Open Sans', sans-serif;
    font-weight:600;
    height:97%;
    display:flex;
    align-items: end;
    margin-left:10px;
    letter-spacing: 1px;
}
</style>
