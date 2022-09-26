<template>
    <div class="album-container">
      <div class="album-content" v-for="cameraId in cameraList" :key="cameraId" :id="cameraId">
        <router-link :to="{name: 'CameraSetting', params:{id: cameraId}}">
          <img :src="'http://192.168.2.15:5050/api/1.0/image/' + cameraId + '.jpg'" alt="">
        </router-link>
      </div>
  </div>
  </template>
  
  
  <script>
  export default {
    name: 'Album'
  
  }
  </script>
  
  
  <script setup>
  
      import getCameraList from '../composables/getCameraList'
      const { cameraList, load } = getCameraList()
      load()
          
  </script>
  
  <style>
  .album-container{
    width: 1700px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 70px;
    gap: 50px;
  }
  
  .album-container .album-content{
    background-color: rgb(26, 26, 26);
    border-radius: 8px;
  }
  
  .album-container .album-content img{
    width:100%;
    height: 100%;
    object-fit:cover;
    box-shadow: 6px 10px 3px 2px #383838ab;
    border-radius: 8px;
  }
  
  .album-container .album-content img:hover{
    transition: .3s ease;
    opacity: 0.7;
  }
  
  
  </style>