<template>
    <section>        
        <form method="POST" action="#">
            Name: <br> <input type="text" name="name" placeholder="enter name" value=""> <br>
            Email: <br> <input type="email" name="email" placeholder="enter email" value=""> <br>
            Photo: <br> <input type="file" @change="onFileSelected">
            <img :src="avatar" alt="">
            <button @click="onUpload">Upload</button>
            <input type="submit" value="Submit">

        </form>
    </section>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Add',
  data() {
      return {
          avatar: null
      }
  },
  methods:{
      onFileSelected(event) {
          console.log(event)
          //this.selectedFile = event.target.files[0]
          let image = event.target.files[0]
          let reader = new FileReader();
          reader.readAsDataURL(image);
          reader.onload = event => {
              console.log(event)
              this.avatar = event.target.result
          }

      },
//      upload(){
//          axios.post('http://127.0.0.1:8000/api/post', {image}:this.avatar)
//      }

      onUpload() {
          const fd = new FormData();
          fd.append('image', this.selectedFile, this.selectedFile.image)
          axios.post('http://127.0.0.1:8000/api/post', fd, {
              onUploadProgress: uploadEvent => {
                  console.log(' Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%')
              }
          })
            .then(res => {
                console.log(res)
            })
      }
  }
          
}
</script>

<style>
    section{
        background-color: antiquewhite; 
    }
    table{
        margin-top: 5%;
        width: 100%;
        position: center;

    }
    .title{
        font-style: bold;
        font-family: Georgia;
        font-size: 20px;
    }
    h2{
        color: saddlebrown;
    }
    a{
        color: rgb(6, 88, 109);
    }
    a:hover{
        color: red;

    }
</style>
