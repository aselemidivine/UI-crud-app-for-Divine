
    
const employee = {
    template:`
    <div>

        <button 
        type="button" 
        class="btn btn-primary m-2 fload-end" 
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="addClick()"
        >
            Add Employee
        </button>
    </div>
    <table class="table table-striped" >
        <thead>
            <tr>
                <th>
                  Employee ID
                </th>
                <th>
                  Employee Name
                </th>
            
                <th>
                   DepartmentName
                </th>
                <th>
                   DOJ
                </th>
            
                <th>
                   Options
                </th>
            </tr>
        </thead>
        
            <tbody>
                <tr v-for ="emp in employees">
                    <td>{{ emp.EmployeeId }} </td>
                    <td>{{ emp.EmployeeName }} </td>
                    <td>{{ emp.Department }} </td>
                    <td>{{ emp.DateOfJoining }} </td>
                    <td>
                        <button 
                            type="button" 
                            class="btn btn-light mr-1"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            @click="editClick(emp)"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </button>
                        <button 
                            type="button"
                            @click="deleteClick(emp.EmployerId)" 
                            class="btn btn-light mr-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
    </table>

    <div class="modal fade" id="exampleModel" tabindex="-1" aria-labelledby="exampleModelLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">{{ modalTitle }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close">
                    </button>
                </div>
                <div class="modal-body">
                    <div class="d-flex flex-row bd-highlight mb-3"> 
                        <div class="p-2 w-50 bd-highlight">
                            <div class="input-group mb-3">
                                <span class="input-group-text"> Name </span>
                                <input type="text" class="form-control" v-model="EmployeeName">
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text"> Department </span>
                                <select class="form-select" v-model="Department">
                                    <option v-for="dep in departments">
                                        {{ dep.DepartmentName }}
                                    </option>
                                </select>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text"> DOJ </span>
                                <input type="date" class="form-control" v-model="DateOfJoining">
                            </div>
                        </div>
                        <div class="p-2 w-50 bd-highlight"> 
                            <img width="250px" height="250px"
                                :src="PhotoPath+PhotoFileName"/>
                            <input class="m-2" type="file" @change="imageUpload">
                        </div>
                    </div>        
                </div>
                    <button  type="button" v-if="EmployeeId == 0" class="btn btn-primary" @click="createClick()">
                        Create
                    </button>

                    <button  type="button" @click="updateClick()" v-if="EmployeeId != 0" class="btn btn-primary">
                        Update
                    </button>
                </div>
            </div> 
            
        </div>
        
    </div>
    
    `,

    // consuming the GET method and displaying the data in a grid
    data(){
        return {
             departments:[], // this empty array will be populated with the get ape method
             employees:[],
             modalTitle: "",
             EmployeeId: 0.,
             EmployeeName: "",
             Department: "",
             DateOfJoining: "",
             PhotoFileName: "anonymous.png",
             PhotoPath: variables.PHOTO_URL
        }
    },
    methods: {  // This method is used to consume the get API method
        refreshData(){
             axios.get(variables.API_URL + "employee") // we are using axios to consume the API methods
                .then((response) => {
                    this.employees= response.data;
                });
             axios.get(variables.API_URL + "department") // we are using axios to consume the API methods
                .then((response) => {
                    this.departments= response.data;
                });
        },
        addClick() {  //We will change the title to add department
            this.modalTitle="Add Employee";
            this.EmploymentId= 0;
            this.EmployeeName ="";
            this.Department= "",
            this.DateOfJoining = "",
            this.PhotoFileName = "anonymous.png"
        },
        editClick(emp) {  //We will change the title to edit employee
            this.modalTitle="Edit Employee";
            this.EmploymentId= emp.EmployeeId;
            this.EmployeeName = emp.EmployeeName;
            this.Department= emp.Department,
            this.DateOfJoining = emp.DateOfJoining,
            this.PhotoFileName = emp.PhotoFileName
        }, 
        createClick() {
            axios.post(variables.API_URL + "employee", {
                EmployeeName:this.EmployeeName,
                Department: this.Department,
                DateOfJoining: this.DateOfJoining,
                PhotoFileName: this.PhotoFileName
            })
            .then((response) => {
                this.refreshData();
                alert(response.data);
            });
        },
        updateClick() {
            axios.put(variables.API_URL + "employee", {
                EmployeeId: this.EmployeeId,
                EmployeeName:this.EmployeeName,
                Department: this.Department,
                DateOfJoining: this.DateOfJoining,
                PhotoFileName: this.PhotoFileName
            })
            .then((response) => {
                this.refreshData();
                alert(response.data);
            });
        },
        deleteClick(id) {
            if(!confirm("Are you sure?")) {  //taking the confirmation before calling the API
                return;
            } 
            axios.delete(variables.API_URL + "employee/" + id)
            .then((response) =>  {
                this.refreshData();
                alert(response.data);
            });
        },
        imageUpload(event) {
            let formData = new formData();
            formData.append('file', event.target.files[0]);
            axios.post(variables.API_URL + "employee/savefile", formData)
                .then((response) => {
                    this.PhotoFileName = response.data;
                });
        }
    },
    mounted: function() { // This lifecycle Mounted method will be called when the component is in scope
         this.refreshData(); 
        }
}

