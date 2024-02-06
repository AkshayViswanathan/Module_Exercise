<template>
    <UploadForm />
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

  
</template>

<script setup>
import { useDataStore } from '../store/ImageStore';
import UploadForm from './uploadForm.vue'

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

</style>