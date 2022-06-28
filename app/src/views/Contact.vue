<template>
  <div>
    <HeaderView />
    <div class="main__pic">
      <img class="imggg" src="../assets/view.png" />
    </div>

    <div class="contact__form">
      <div class="left__div">
        <b-form class="contact__form-form">
          <h3>Get in touch</h3>
          <div class="form-input__inline mt-5">
            <b-input
              v-model="contact.name"
              placeholder="Name"
              class="inputs__form"
            />
            <b-input
              v-model="contact.email"
              placeholder="Email"
              class="inputs__form"
            />
          </div>
          <b-input
            v-model="contact.subject"
            placeholder="Subject"
            style="height: 50px"
            class="mt-4"
          />
          <b-textarea
            v-model="contact.message"
            placeholder="Message"
            rows="7"
            no-resize
            class="mt-4"
          />
          <div style="display: flex; justify-content: space-between">
            <b-button
              type="submit"
              class="mt-3"
              style="height: 50px; font-family: 'Anek Latin', sans-serif"
              variant="primary"
              >Send Message</b-button
            >
            <div class="mt-3">
              <button class="button" @click.prevent="clearData()">
                <div class="icon">
                  <svg class="top">
                    <use xlink:href="#top" />
                  </svg>
                  <svg class="bottom">
                    <use xlink:href="#bottom" />
                  </svg>
                </div>
                <div class="text">Delete</div>
              </button>

              <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
                <symbol
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="top"
                >
                  <path
                    d="M15,3.75 C15.5522847,3.75 16,4.19771525 16,4.75 L16,5.75 L18.25,5.75 C18.6642136,5.75 19,6.08578644 19,6.5 C19,6.91421356 18.6642136,7.25 18.25,7.25 L5.75,7.25 C5.33578644,7.25 5,6.91421356 5,6.5 C5,6.08578644 5.33578644,5.75 5.75,5.75 L8,5.75 L8,4.75 C8,4.19771525 8.44771525,3.75 9,3.75 L15,3.75 Z M14,5 L10,5 C9.72385763,5 9.5,5.22385763 9.5,5.5 C9.5,5.74545989 9.67687516,5.94960837 9.91012437,5.99194433 L10,6 L14,6 C14.2761424,6 14.5,5.77614237 14.5,5.5 C14.5,5.25454011 14.3231248,5.05039163 14.0898756,5.00805567 L14,5 Z"
                  ></path>
                </symbol>
                <symbol
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="bottom"
                >
                  <path
                    d="M7.02498527,8.25 L16.9751371,8.25 C17.5411532,8.25 18,8.69771525 18,9.25 C18,9.2951932 17.9968602,9.34033442 17.9906022,9.3851132 L16.6878729,18.7066989 C16.6389095,19.0569074 16.4041276,19.3558931 16.0703039,19.4931212 C14.8428392,19.9977071 13.4860916,20.25 12.0000612,20.25 C10.5140229,20.25 9.1572688,19.9977044 7.92979891,19.4931132 C7.59597391,19.3558774 7.36118974,19.0568881 7.31224574,18.7066728 L6.00952014,9.3851132 C5.93304388,8.83789281 6.32568685,8.33379079 6.88651275,8.25916983 C6.93240487,8.25306363 6.97866843,8.25 7.02498527,8.25 Z"
                  ></path>
                </symbol>
              </svg>
            </div>
          </div>
        </b-form>
      </div>
      <div class="right__div">
        <div class="right__div-infos">
          <h3
            style="font-family: 'Anek Latin', sans-serif"
            class="right__div-title"
          >
            Contact us
          </h3>
          <div>
            <div class="address__contact">
              <div class="circle">
                <i style="font-size: 23px" class="el-icon-location-outline"></i>
              </div>
              <p class="text-address__contact">
                <b>Address:</b> 198 West 21th Street, Suite 721 New York NY
                10016
              </p>
            </div>
            <div class="address__contact mt-3">
              <div class="circle">
                <i style="font-size: 23px" class="el-icon-phone"></i>
              </div>
              <p style="align-self: center" class="text-address__contact">
                <b>Phone:</b> +38345123456
              </p>
            </div>

            <div class="address__contact mt-3">
              <div class="circle">
                <i style="font-size: 23px" class="el-icon-s-promotion"></i>
              </div>
              <p style="align-self: center" class="text-address__contact">
                <b>Email:</b> info@hotmail.com
              </p>
            </div>

            <div class="address__contact mt-3">
              <div class="circle">
                <globe-icon size="1.5x" class="custom-class"></globe-icon>
              </div>
              <p style="align-self: center" class="text-address__contact">
                <b>Website:</b> voyager.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SERVICE CHAT -->

    <div class="service__chat">
      <div class="service__chat-content">
        <div class="first__div">
          <p class="first__text">Service Chat</p>
          <p style="font-weight: 600" class="second__text">
            Get instant help whenever you need it
          </p>
        </div>

        <div class="services">
          <div class="single__service">
            <div class="single__service-icons">
              <img
                style="width: 30px; height: 30px"
                src="../assets/hotel.png"
              />
              <p style="margin-left: 5px">Hotels</p>
            </div>
            <i
              style="font-size: 23px; margin-right: 15px"
              class="el-icon-arrow-right"
            ></i>
          </div>

          <div class="single__service">
            <div class="single__service-icons">
              <img
                style="width: 30px; height: 30px"
                src="../assets/plane.png"
              />
              <p style="margin-left: 5px">Flights</p>
            </div>
            <i
              style="font-size: 23px; margin-right: 15px"
              class="el-icon-arrow-right"
            ></i>
          </div>

          <div class="single__service">
            <div class="single__service-icons">
              <img
                style="width: 30px; height: 30px"
                src="../assets/train.png"
              />
              <p style="margin-left: 5px">Trains</p>
            </div>
            <i
              style="font-size: 23px; margin-right: 15px"
              class="el-icon-arrow-right"
            ></i>
          </div>

          <div class="single__service">
            <div class="single__service-icons">
              <img style="width: 30px; height: 30px" src="../assets/car.png" />
              <p style="margin-left: 5px">Car Rentals</p>
            </div>
            <i
              style="font-size: 23px; margin-right: 15px"
              class="el-icon-arrow-right"
            ></i>
          </div>

          <div class="single__service">
            <div class="single__service-icons">
              <img
                style="width: 30px; height: 30px"
                src="../assets/airport.png"
              />
              <p style="margin-left: 5px">Airport Transfers</p>
            </div>
            <i
              style="font-size: 23px; margin-right: 15px"
              class="el-icon-arrow-right"
            ></i>
          </div>

          <div class="single__service">
            <div class="single__service-icons">
              <img
                style="width: 30px; height: 30px"
                src="../assets/tours.png"
              />
              <p style="margin-left: 5px">Tours & Tickets</p>
            </div>
            <i
              style="font-size: 23px; margin-right: 15px"
              class="el-icon-arrow-right"
            ></i>
          </div>
        </div>

        <div class="last__div">
          <div class="single__serivce-last">
            <headphones-icon size="1.5x" class="custom-class"></headphones-icon>
            <p style="margin-left: 5px">Chat</p>
          </div>

          <div class="single__serivce-last">
            <phone-icon size="1.5x" class="custom-class"></phone-icon>
            <p style="margin-left: 5px">Call Us</p>
          </div>

          <div class="single__serivce-last">
            <mail-icon size="1.5x" class="custom-class"></mail-icon>
            <p style="margin-left: 5px">Email Us</p>
          </div>

          <div style="border: none" class="single__serivce-last">
            <info-icon size="1.5x" class="custom-class"></info-icon>
            <p style="margin-left: 5px">FAQ</p>
          </div>
        </div>
      </div>
      <FooterView />
    </div>

    <!-- SERVICE CHAT -->
  </div>
</template>

<script>
import { GlobeIcon } from "vue-feather-icons";
import { InfoIcon } from "vue-feather-icons";
import { MailIcon } from "vue-feather-icons";
import { PhoneIcon } from "vue-feather-icons";
import { HeadphonesIcon } from "vue-feather-icons";
import HeaderView from "../views/Header.vue";
import FooterView from "../views/Footer.vue";

export default {
  components: {
    GlobeIcon,
    InfoIcon,
    MailIcon,
    PhoneIcon,
    HeadphonesIcon,
    HeaderView,
    FooterView,
  },
  data() {
    return {
      contact: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    clearData() {
      this.contact = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
    },
    abc() {
      document.querySelectorAll(".button").forEach((button) => {
        let text = button.querySelector(".text");
        text.innerHTML =
          "<span>" +
          text.textContent.trim().split("").join("</span><span>") +
          "</span>";
        button.addEventListener("click", (e) => {
          if (!button.classList.contains("delete")) {
            button.classList.add("delete");

            setTimeout(() => button.classList.remove("delete"), 2400);
          }
          e.preventDefault();
        });
      });
    },
  },
  mounted() {
    this.abc();
  },
};
</script>

<style lang="scss">
@use "sass:math";

.button {
  --background: #275efe;
  --background-hover: #1d4fe1;
  --text: #fff;
  --icon: #fff;
  display: flex;
  outline: none;
  cursor: pointer;
  border: 0;
  padding: 9px 20px 9px 12px;
  border-radius: 11px;
  line-height: 24px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  overflow: hidden;
  color: var(--text);
  background: var(--b, var(--background));
  transition: transform 0.3s, background 0.4s;
  transform: scale(var(--scale, 1)) translateZ(0);
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  &:active {
    --scale: 0.95;
  }
  &:hover {
    --b: var(--background-hover);
  }
  .icon,
  .text {
    display: inline-block;
    vertical-align: top;
    transform: translateZ(0);
  }
  .icon {
    width: 24px;
    height: 24px;
    position: relative;
    z-index: 1;
    margin-right: 8px;
    color: var(--text);
    svg {
      width: 96px;
      height: 96px;
      display: block;
      position: absolute;
      left: -36px;
      top: -36px;
      will-change: transform;
      fill: var(--icon);
      transform: scale(0.25) translateZ(0);
      animation: var(--name, var(--name-top, none)) 2400ms ease forwards;
      &.bottom {
        --name: var(--name-bottom, none);
      }
    }
  }
  .text {
    animation: var(--name-text, none) 2400ms ease forwards;
    span {
      display: inline-block;
      vertical-align: top;
      opacity: var(--span-o, 1);
      transform: translate(var(--span-x, 0), var(--span-y, 0))
        rotate(var(--span-r, 0deg)) translateZ(0);
      transition: transform 0.3s ease var(--span-d, 0s),
        opacity 0.2s linear var(--span-o-d, 0.3s);
      $i: 1;
      @while $i < 12 {
        &:nth-child(#{$i}) {
          --span-delay: #{($i / 20 + 0.35 + s)};
          --span-o-d: #{($i / 40 + 0.3 + s)};
        }
        $i: $i + 1;
      }
    }
  }
  &.delete {
    --name-top: trash-top;
    --name-bottom: trash-bottom;
    --name-text: text;
    --span-x: -8px;
    --span-y: 8px;
    --span-r: -40deg;
    --span-o: 0;
    .text {
      span {
        --span-o-d: 1s;
        --span-d: var(--span-delay);
      }
    }
  }
}

@keyframes trash-bottom {
  25%,
  32% {
    transform: translate(32px, 19px) scale(1) translateZ(0);
  }
  70%,
  80% {
    transform: translate(32px, 0) scale(0.25) translateZ(0);
  }
  90% {
    transform: translateX(-2px) scale(0.25) translateZ(0);
  }
  100% {
    transform: scale(0.25) translateZ(0);
  }
}

@keyframes trash-top {
  25%,
  32% {
    transform: translate(38px, 4px) scale(1) rotate(-20deg) translateZ(0);
  }
  70%,
  80% {
    transform: translate(32px, 0) scale(0.25) translateZ(0);
  }
  90% {
    transform: translateX(-2px) scale(0.25) translateZ(0);
  }
  100% {
    transform: scale(0.25) translateZ(0);
  }
}

@keyframes text {
  25% {
    transform: translate(-4px, -6px) rotate(-20deg) translateZ(0);
  }
  70% {
    opacity: 1;
    transform: translate(-12px, 48px) rotate(-80deg) scale(0.2) translateZ(0);
  }
  71% {
    opacity: 0;
  }
  72%,
  90% {
    opacity: 0;
    transform: translateZ(0);
  }
  100% {
    opacity: 1;
  }
}

// Center & dribbble
</style>

<style scoped>
.single__service-icons {
  display: flex;
  align-items: center;
  margin-left: 15px;
}
.single__serivce-last {
  width: 20%;
  height: 40%;
  border-right: 2px solid #f5f7fa;
  text-align: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  /* border:1px solid black; */
}

.single__serivce-last:hover {
  color: #95b1ea;
}

.single__serivce-last p {
  margin: 0;
  font-weight: 500;
  font-size: 14px;
}

.last__div {
  width: 100%;
  height: 70px;
  /* border:1px solid red; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
/* .break {
  width: 100%;
  height: 12px;
  background-color: #f5f7fa;
} */
.single__service {
  width: 26%;
  height: 70px;
  background-color: #f5f7fa;
  margin-right: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.single__service:hover {
  color: #95b1ea;
}

.single__service p {
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
}
.services {
  padding-left: 15px;
  margin-top: 15px;
  width: 100%;
  height: 205px;
  /* border:1px solid white; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.first__text {
  font-weight: 600;
  font-size: 22px;
  margin: 0;
  font-family: "Open Sans", sans-serif;
}
.second__text {
  font-size: 14px;
  margin: 0;
  margin-left: 10px;
  align-self: center;
  color: #4fb4d0;
}

.first__div {
  padding: 10px;
  display: flex;
}

.service__chat {
  margin-top: 7%;
  width: 100%;
  height: 540px;
  /* border:1px solid red; */
  /* background-color:#4e8af2 */
}
.service__chat-content {
  /* padding:15px; */
  width: 65%;
  height: 65%;
  /* border-left: 2px solid #f5f7fa; */
  /* border-right: 4px solid #f5f7fa; */
  background-color: white;
  margin: 0 auto;
  margin-top: 5%;
  /* border-radius:15px; */
  /* border:1px solid black; */
}

.main__pic {
  width: 100%;
  height: 400px;
}
.imggg {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.contact__form {
  margin-top: -3% !important;
  width: 65%;
  height: 550px;
  margin: 0 auto;
  display: flex;
  border-radius: 15px;
}

.left__div {
  width: 60%;
  height: 95%;
  background-color: white;
  /* border: 1px solid green; */
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.right__div {
  width: 40%;
  height: 95%;
  /* border:1px solid green; */
  border-top-right-radius: 10px;
  background-color: #4e8af2;
  border-bottom-right-radius: 10px;
  color: white;
}

.contact__form-form {
  width: 80%;
  height: 90%;
  margin: 0 auto;
  margin-top: 30px;
}

.form-input__inline {
  display: flex;
  justify-content: space-between;
}

.inputs__form {
  width: 47%;
  height: 50px;
}

.inputs__form::placeholder {
  font-size: 18px;
}

.right__div-infos {
  width: 80%;
  height: 90%;
  margin: 0 auto;
  margin-top: 30px;
  /* outline: 1px solid white; */
}

.circle {
  width: 50px;
  height: 50px;
  border-radius: 500px;
  background-color: #5f94f1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.address__contact {
  padding: 10px;
  margin-top: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items:center; */
}

.text-address__contact {
  margin: 0;
  width: 63%;
  margin-left: 15px;
}

.right__div-title {
  font-weight: 500;
}

@media only screen and (max-width: 800px) {
  .contact__form {
    margin-top: -3% !important;
    width: 100%;
    height: fit-content;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .left__div {
    margin: 0 auto;
    width: 80%;
    height: fit-content;
    border-radius: 10px;
  }

  .right__div {
    margin: 0 auto;
    margin-top: 5%;
    width: 80%;
    height: fit-content;
    border-radius: 10px;
  }

  .single__service {
    width: 70%;
    height: 70px;
    background-color: #f5f7fa;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .services {
    height: fit-content;
  }
}
</style>
