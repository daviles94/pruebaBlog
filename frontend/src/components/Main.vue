<template>
    <b-jumbotron header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2" >
    <p>For more information visit website</p>
    <b-btn variant="primary" :to="{ name: 'Formulario', params: { idForm: 123 }}" href="#">Formulario</b-btn>
    </b-jumbotron>
</template>

<script>
export default {
    name: 'Main'
}
</script>