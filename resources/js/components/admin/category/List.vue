<template>
    <div>
		
<section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Category List</h3>
                 <button type="button" class="btn btn-primary fright" ><router-link to="/add-category"> Add Category</router-link></button>
              </div>

		 <div class="card-body">
                <table class="table table-bordered">
                  <thead>                  
                    <tr>
                      <th style="width: 10px"></th>
                      <th>#</th>
                      <th>Category Name</th>
                       <th>Date</th>
                      <th style="width: 40px">Edit/Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(category,index) in getallCategory" :key="category.id">
                     <td><!--input type="checkbox" v-model="categoryItem" :value="category.id" --></td>
                                    <td>{{index+1}}</td>
                                    <td>{{category.cat_name}}</td>
                                    <td>{{category.created_at | timeformat}}</td>
                                    <td>
                                        <router-link :to="`/edit-category/${category.id}`">Edit</router-link> /
                                        <a href="" @click.prevent = "deletecategory(category.id)" >Delete</a>
                                    </td>
                    </tr>
                    
                    
                  </tbody>
                </table>
              </div>
 </div> </div> </div> </div>   </section>  



    </div>
</template>


<script>
	export default {

		name: "List",

		 mounted(){
            this.$store.dispatch("allCategory")
        },

        computed:{
          	getallCategory(){
            return this.$store.getters.getCategory
           }
        },

        methods:{
          deletecategory(id){
               axios.get('/category/'+id)
                   .then(()=>{
                       this.$store.dispatch("allCategory")
                        swal({
            						  title: "Good job!",
            						  text: "You clicked the button!",
            						  icon: "success",
            						  button: "Aww yiss!",
            						  toast: true,
            						    position: 'top-end',
            						    showConfirmButton: false,
            						    timer: 2000
            						});
                   })
                   .catch(()=>{

                   })
            }
        }


	}



</script>


<style scoped>
.fright{float:right;}
.fright a{color:#fff;}
</style>