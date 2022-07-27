<template>
  <div>
    <Header />
    <div class="maindivv"></div>
    <div class="flights">
      <h2>Flights</h2>
      <div class="tabela">
        <table style="" class="styled-table">
          <thead>
            <tr>
              <th>Date of Flight</th>
              <th>Name</th>
              <th>Price</th>
              <th>To</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2020-05-03</td>
              <td>Delta</td>
              <td>350 $</td>
              <td>Los Angeles</td>
            </tr>
            <tr class="active-row">
              <td>2021-19-07</td>
              <td>Lufthansa</td>
              <td>150 $</td>
              <td>Germany</td>
            </tr>
            <!-- and so on... -->
            <tr>
              <td>2022-05-04</td>
              <td>Emirates</td>
              <td>189 $</td>
              <td>France</td>
            </tr>
            <tr class="active-row">
              <td>2016-05-01</td>
              <td>American Airlines</td>
              <td>400 $</td>
              <td>USA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div>
      <Footer />
    </div>
  </div>
</template>

<script src="//unpkg.com/vue@2/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.15.8/lib/index.js"></script>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
// var Main = {
//       data() {
//         return {
//           tableData: [{
//             date: '2016-05-03',
//             name: 'Tom',
//             address: 'No. 189, Grove St, Los Angeles'
//           }, {
//             date: '2016-05-02',
//             name: 'Tom',
//             address: 'No. 189, Grove St, Los Angeles'
//           }, {
//             date: '2016-05-04',
//             name: 'Tom',
//             address: 'No. 189, Grove St, Los Angeles'
//           }, {
//             date: '2016-05-01',
//             name: 'Tom',
//             address: 'No. 189, Grove St, Los Angeles'
//           }]
//         }
//       }
//     }
// var Ctor = Vue.extend(Main)
// new Ctor().$mount('#app')

export default {
  //  data() {
  //         return {
  //           tableData: [{
  //             date: '2020-05-03',
  //             name: 'Delta',
  //             address: '350',
  //             to:'Los Angeles'
  //           }, {
  //             date: '2021-19-07',
  //             name: 'Lufthansa',
  //             address: '150',
  //             to:'Germany'
  //           }, {
  //             date: '2022-05-04',
  //             name: 'Emirates',
  //             address: '189',
  //             to:'France'
  //           },  {
  //             date: '2016-05-04',
  //             name: 'Airitaly',
  //             address: '200',
  //             to:'Italy'
  //           },{
  //             date: '2016-05-01',
  //             name: 'American Airlines',
  //             address: '400',
  //             to:'USA'
  //           }]
  //         }
  //       },

  components: {
    Header,
    Footer,
  },

  //   methods: {
  //     goToTickets() {
  //       this.$router.push({
  //         name: "tickets",
  //       });
  //     },

  //   },
};
</script>
<style>
@import url("//unpkg.com/element-ui@2.15.8/lib/theme-chalk/index.css");
.maindivv {
  /* flex: 2; */
  /* background-size: cover;  */
  background-image: url("../assets/fligtsss.jpeg");
  /* background-repeat: no-repeat; */
  background-size: cover;
  width: 100%;
  height: 700px;
}

.flights {
  align-self: middle;
  align-items: middle;
  padding: 20px;
}
.maindivv {
  align-items: middle;
}

.tabela {
  padding: 20px;
  display: flex;
  width: 100%;
  height: 100%;
}
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 300px;
}
.styled-table thead tr {
  background-color: #a85cb8;
  color: #ffffff;
  text-align: left;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #a85cb8;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #a85cb8;
}
</style>
