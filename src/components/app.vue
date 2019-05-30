<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand">Test</a>
        </nav>

        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <form v-on:submit.prevent="test">
                                <div class="form-group">
                                    <input class="form-control" type="text">
                                </div>
                                <button type="submit" class="btn btn-primary btn-block">ahre q soy azul</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import { METHODS } from 'http';
export default {
    data(){
        return {

        }
    },
    test(){
        methods: {
            test: (e) => {
                console.log(e)
            }
        }
    }
}
</script>

