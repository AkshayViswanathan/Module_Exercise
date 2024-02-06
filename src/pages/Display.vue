<template>
    <div>
        <div class="row">
            <div class="col-8">

                <div v-if="dataStore.uploadedImg && dataStore.uploadedImg.length > 0" class="previewImange">
                           <div v-for="image in dataStore.uploadedImg" :key="image.url" class="image-card">
                               <img :src="image.url" :alt="image.url" class="images">
                               <div class="btn-sec">
                             <button class="del-btn" @click="dataStore.deleteImages(image.id)">Delete</button>
                        <button class="dwd-btn" @click="downloadable(image.url)">download</button>
                  </div>

            </div>


        </div>
        <div v-else class="nothing">
    <h3>No image uploaded yet</h3>
  </div>
        
  </div>
  </div>
    </div>
     
  </template>
  
  <script setup>
  import { useDataStore } from '../store/ImageStore';
  

  const dataStore = useDataStore();

const downloadable = (url)=>{
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
  
  </script>
  
  <style>
  .images{
  
      width: 300px;
  } 

  .del-btn, .dwd-btn{
    display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
  background-color: #5495da;
  color: #fff;
margin: 30px;
  }

  .dwd-btn:hover {
  opacity: 0.8;
  color: rgb(21, 78, 200);
  background-color: #bfccff;
 

}
  
.del-btn:hover {
  opacity: 0.8;
  color: rgb(255, 0, 0);
  background-color: #ffa4a4;
}
  </style>