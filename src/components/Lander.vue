<template>
    <div>
        <!-- lander section -->
        <section class="section">
            <div class="container-fliud">
             <div class="field">
                 <router-link :to="{name:'login'}">Login</router-link>
                            </div>
                <img alt=" logo" class="rounded-cirlce" src="../assets/logo.png" /> 
                <h1>Software Developer</h1>
                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Contact</button>
            </div>
        </section>
        <!-- portfolio section -->
        <section class="protfolio">
            <h1>Portfolio</h1>
            <p>Sample Projects </p>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head">
                                    <h2>web project</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                    </p>
                                    <button type="button" class="btn btn-outline-primary">More</button>
                                </div>
                            </div>
                            <br>
                    </div>
                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head">
                                    <h2>web project</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                    </p>
                                    <button type="button" class="btn btn-outline-primary">More</button>
                                </div>
                            </div>
                        <br>
                    </div>  

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-head">
                                <h2>web project</h2>
                            </div>
                            <hr>
                            <div class="card-body">
                                <p>
                                </p>
                                <button type="button" class="btn btn-outline-primary">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- modal for contact -->
        
        <section class="">
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <talk/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import talk from './Contact.vue'
export default {
    name:'Lander',
    components:{
        talk
    }  
}

</script>

<style lang="css" scoped>
    .section{
        padding-top: 10%;
        padding-bottom: 10%;
    }

    .protfolio{
        background-color: #34345238;
        padding-top: 8%;
        padding-bottom: 15%;
        /* padding:15% */
    }

    .img-custome{
        width: 140px;
        height: 140px;
        margin-top: 15px;
    }

</style>