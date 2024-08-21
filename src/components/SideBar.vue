<template>
    <div class="sidebar" id="sideBar" v-click-away="away" @click="click">
      <nav>
        
        <ul @click="handleClick($event)">
          <li>
            <a href="/">หน้าแรก</a>
            <svg class="btn mx-1 btn-sm closeBtn" @click="closeBtn" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </li>
          <hr>
          <li>
            <a href="/แหล่งรวมค่ายฮิต">แหล่งรวมค่ายฮิต</a>
          </li>
          <hr>
          <li>
            <a href="/เกมส์ออนไลน์">เกมส์ออนไลน์</a>
          </li>
          <hr>
          <li>
            <a href="/กีฬาออนไลน์">กีฬาออนไลน์</a>
          </li>
          <hr>
          <li>
            <a href="/เทคนิคนักเสี่ยง">เทคนิคนักเสี่ยง</a>
          </li>
          <hr>
          <li>
            <a href="/ลิงค์รับทรัพย์">ลิงค์รับทรัพย์</a>
          </li>
          <hr>
          <li>
            <a href="/บทความ">บทความ</a>
          </li>
          <hr>
          <li>
            <a href="/วงล้อลุ้นโชค">วงล้อลุ้นโชค</a>
          </li>
          <hr>
          <li>
            <a href="/เกี่ยวกับเรา">เกี่ยวกับเรา</a>
          </li>
          <hr>
        </ul>
      </nav>
    </div>
    <div class=" sidebar-backdrop" id="sidebar-backdrop" style="height: 100%;">
    </div>
  </template>
  
  <script>
  export default {
    emits: ["link-clicked"],
  
    methods: {
      handleClick(e) {
        if (e.target.localName !== "a") return;
  
        this.$emit("link-clicked");
      },
      closeBtn() {
        document.getElementById("sideBar").style.display = "none";
        document.getElementById("sidebar-backdrop").style.display = "none";
      },
      click: function() {
    },
    away: function() {
      this.closeBtn()
    },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    top: 0px;
    background-color: black;
    height: 100%;
    width: 300px;
  }
  
  .sidebar ul {
    list-style: none;
  }

  ul {
    padding-left: 0px;
  }

  li {
    padding-left: 2rem;
    border-bottom: 1rem aquamarine;
    margin: 1rem !important;
  }
  
  .sidebar li {
    width: 100%;
    text-align: left;
  }

  a{
    color: white;
    font-size: 20px !important;
    
  }
  a:hover{
    color: #ffca23;
    text-decoration: underline;
  }
  
  .sidebar a {
    text-decoration: none;
    font-size: 2rem;
    text-transform: uppercase;
  }

  .sidebar-backdrop {
    position: fixed;
    top: 0px;
    background-color: rgb(0 0 0 / 75%);
    height: 100%;
    width: 300px;
    margin-left: 300px;
}

.closeBtn{
  background-color: #ffca23;
  float: right;
  margin-right: 10% !important;
}
  </style>
  