<template>
    <section>
        <div>
            <h2>Navigation Bar</h2>
            <ul>
              <li><a v-on:click="navigate1()">Show Table</a></li>
              <li><a v-on:click="navigate2()">Add to List</a></li>
            </ul>
            <router-link to="/Page2">Add To List </router-link>
        </div>
        
    </section>
</template>
<script>
//import axios from 'axios'
import router from '../router'

export default {
  name: 'Navi',
  methods: {
      navigate1() {
          router.push({ name: "Page1" });
      },
        navigate2() {
        router.push({ name: "Page2" });
      }
  }      
}
</script>

<style>
    section{
        background-color: antiquewhite; 
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
    ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;;
    align-items: center;
  }
  
  li {
    float: left;
    
  }
  
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  /* Change the link color to #111 (black) on hover */
  li a:hover {
    background-color: #111;
  }
</style>
