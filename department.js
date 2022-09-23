
const department = {
    template:`
    <div>

        <button 
        type="button" 
        class="btn btn-primary m-2 fload-end" 
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="addClick()"
        >
            Add Department
        </button>
    </div>
    <table class="table table-striped" >
        <thead>
            <tr>
                <th>
                    <div class="d-flex flex-row">
                        <input class="form-control m-2" v-model="DepartmentIdFilter" v-on:keyup="filterFn()" placeholder="filter">
                        <button type="button" class="btn btn-light" @click="sortResult('DepartmenetId', true)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                             <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                        </svg>
                        </button>  
                        
                        
                        <button type="button" class="btn btn-light" @click="sortResult('DepartmenetId', false)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                             <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                        </svg>
                        </button>   
                     </div>
                   DepartmentId
                </th>

                <th>
                <div class="d-flex flex-row">
                  <input class="form-control m-2" v-model="DepartmentNameFilter" v-on:keyup="filterFn()" placeholder="filter">
                  <button type="button" class="btn btn-light" @click="sortResult('DepartmenetName', true)">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                     </svg>
                     </button>  
                     
                     
                     <button type="button" class="btn btn-light" @click="sortResult('DepartmenetName', false)">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                     </svg>
                 </button>   
                </div>
                   DepartmentName
                </th>

                <th>
                   Options
                </th>
            </tr>
        </thead>
        
            <tbody>
                <tr v-for ="dep in departments">
                    <td>{{dep.DepartmentId}} </td>
                    <td>{{ dep.DepartmentName }} </td>
                    <td>
                        <button 
                            type="button" 
                            class="btn btn-light mr-1"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            @click="editClick(dep)"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </button>
                        <button 
                            type="button"
                            @click="deleteClick(dep.DepartmentId)" 
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
                    <div class="input-group mb-3">
                        <span class="input-group-text"> Department Name </span>
                        <input type="text" class="form-control" v-model="DepartmentName">
                    </div>

                    <button  type="button" v-if="DepartmentId == 0" class="btn btn-primary" @click="createClick()">
                        Create
                    </button>

                    <button  type="button" @click="updateClick()" v-if="DepartmentId != 0" class="btn btn-primary">
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
             departments:[], // this empty array will be populated with the get api method
             modalTitle: "",
             DepartmentName: "",
             DepartmentId: 0,
             DepartmentNameFilter: "",
             DepartmentIdFilter: " ",
             departmentsWithoutFilter: []
        }
    },
    methods: {  // This method is used to consume the get API method
        refreshData(){
             axios.get(variables.API_URL + "departments") // we are using axios to consume the API methods
                .then((response) => {
                    this.departments = response.data;
                    this.departmentsWithoutFilter = response.data;
                });
        },
        addClick(){  //We will change the title to add department
            this.modalTitle="Add Department";
            this.DepartmentId= 0;
            this.DepartmentName ="";
        },
        editClick(dep){  //We will change the title to edit department
            this.modalTitle="Edit Department";
            this.DepartmentId= dep.DepartmentId;
            this.DepartmentName = dep.DepartmentName;
        }, 
        createClick() {
            axios.post(variables.API_URL + "department", {
                DepartmentName:this.DepartmentName
            })
            .then((response) => {
                this.refreshData();
                alert(response.data);
            });
        },
        updateClick() {
            axios.put(variables.API_URL + "department", {
                DepartmentId:this.DepartmentId,
                DepartmentName:this.DepartmentName
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
            axios.delete(variables.API_URL + "department/" + id)
            .then((response) =>  {
                this.refreshData();
                alert(response.data);
            });
        },
        filterFn() {
            var DepartmentIdFilter = this.DepartmentIdFilter;
            var DepartmentNameFilter = this.DepartmentNameFilter;

            this.departments = this.departmentsWithoutFilter.filter(
                function(el) {
                   return el.DepartmentId.toString().toLowerCase().includes(    // We are using the includes method to check if the filter text matches with the array data
                      DepartmentIdFilter.toString().trim().toLowerCase()
                   ) && 
                    el.DepartmentName.toString().toLowerCase().includes(    // We are using the includes method to check if the filter text matches with the array data
                      DepartmentNameFilter.toString().trim().toLowerCase()
                    )
                });
                
        },
        sortResult(props, asc) {
            this.departments = this.departmentsWithoutFilter.sort(function(a, b) {
                if (asc) {
                    return (a[props]>b[props]) ?1:((a[props]<b[props])?-1:0);
                } else {
                    return (b[props]>a[props]) ?1:((b[props]<a[props])?-1:0);

                }
            })
        }
    },
    mounted: function() { // This lifecycle Mounted method will be called when the component is in scope
         this.refreshData(); 
        }
}
