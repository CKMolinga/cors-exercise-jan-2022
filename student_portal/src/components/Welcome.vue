<template>
    <div class="students">
        <h2>Student List</h2>
        <div v-for="student in students" :key="student.id" class="student"></div>
        <!-- <router-link >
            <h2>{{ student.name }}</h2>
        </router-link> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            students: []
        }
    },
     mounted() {
            fetch('http://localhost:8080/')
            .then((res) => res.json())
            .then(data => this.students = data)
            .catch(err => console.log(err.message))
        }
}
</script>