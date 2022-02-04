<template>
    <div class="students-container">
        <div class="flex">
            <div v-for="student in students" :key="student.id" class="student">
            <p>{{student.id}}</p>
             <p>{{student.name}}</p>
             <p>{{student.location}}</p>
             <p>{{student.program}}</p>
             <p>{{student.age}}</p>
             <p>{{student.sex}}</p>
        </div>
        </div>
        
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
            fetch('http://localhost:${PORT}/api/students')
            .then((res) => res.json())
            .then(data => this.students = data.students)
            .catch(err => console.log(err.message))

            // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/') 
        }
}
</script>

<style scoped>
.flex {
    display: flex;
    justify-content: space-evenly;
}
 .student {
     background: #333;
     color: #f1f1f1;
     padding: 35px 55px;
     margin: 0 10px;
     cursor: pointer;
     -webkit-box-shadow: 5px 5px 15px 5px #E3E3E3; 
box-shadow: 5px 5px 15px 5px #E3E3E3;
 }

 .student:hover {
     background: #E3E3E3;
     color: #333;
 }
</style>