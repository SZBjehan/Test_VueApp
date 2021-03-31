<template>
    <section>
        <table border="1">
            <tr class="title">
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
            <tr v-for="item in userData" v-bind:key="item.id" >
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.id }}</td>
                <td>{{ item.id }}</td>
            </tr>
        </table>
    </section>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Showlists',
    data(){
      return {userData:undefined}
      },
    mounted(){
        axios.get('http://127.0.0.1:8000/api/post')
            .then(response => {
                
                this.userData = response.data;
            });
    }
      
      
}
</script>

<style>
    section{
        background-color: antiquewhite; 
    }
    table{
        margin-top: 5px;
        margin-bottom: 5px;
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
    
</style>
