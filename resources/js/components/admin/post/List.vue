<template>
    <div>
        <section class="content">
            <div class="row justify-content-around" >
                <div class="col-12 ">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Post List</h3>

                            <div class="card-tools">
                                <button class="btn btn-primary fright">
                                      <router-link to="/add-post"> Add New Post </router-link>
                                </button>
                            </div>
                        </div>

                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                <tr>

                                    <th>Sl</th>
                                    <th>User</th>
                                    <th>Category</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Photo</th>
                                    <th>Action</th>

                                </tr>
                                </thead>
                                <tbody>
 									   <tr v-for="(post,index) in allpost">
                                    <td>{{index+1}}</td>
                                    <td v-if="post.user">{{post.user.name}}</td>
                                    <td v-if="post.category">{{post.category.cat_name}}</td>
                                    <td>{{post.title | sortlength(20,"---")}}</td>
                                    <td>{{post.description | sortlength(40,"....")}}</td>
                                     <td><img :src="ourImage(post.photo)" alt="" width="40" height="50"></td>
                                    <td>
                                        <router-link :to="`edit-post/${post.id}`">Edit</router-link>
                                        <a href="" @click.prevent = "deletePost(post.id)" >Delete</a>

                                    </td>
                                </tr>
                                </tbody>


                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>

                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
    export default {
        name: "List",
        mounted(){
            this.$store.dispatch('gelAllPost')
        },
        computed:{
            allpost(){
                return this.$store.getters.getAllPost
            }
        },
        methods:{
            ourImage(img){
                return "uploadimage/"+img;
            },
            deletePost(id){
               axios.get('/delete/'+id)
                   .then(()=>{
                       this.$store.dispatch('gelAllPost')
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