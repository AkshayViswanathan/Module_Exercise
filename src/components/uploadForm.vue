
<template>
    <div class="nothing">
    <h3>Upload Images</h3>
</div>
  <div class="upload">
  <el-upload
    list-type="picture-card"
    :on-change="handleUpload"
    :before-upload="beforeUpload"
    class="sec"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>
  <el-button @click="goToDisplayPage" class="nav-btn">Preview Image</el-button>
  </div>
</template>



<script setup>
// import { Plus } from '@element-plus/icons-vue';
import { useDataStore } from "../store/ImageStore";
import { useRouter } from 'vue-router';

const router = useRouter();

const handleUpload = (file) => {   
    console.log(file.name);
  let imageInfo = {
        id:Math.floor(Math.random() * 1000),
        name: file.name,
        
        type: file.type,
        size: file.size,
    }; 
      const reader = new FileReader();
      reader.onload = (e) => {
        imageInfo.url = e.target.result
        const dataStore = useDataStore();
        dataStore.setImages(imageInfo)
      };

      reader.readAsDataURL(file.raw);
      alert("image uploaded successfully")
    }

const beforeUpload = () =>{
      return false;
    }

const goToDisplayPage = () =>{
      router.push('/display');
    }

</script>
