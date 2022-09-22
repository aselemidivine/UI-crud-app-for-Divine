
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
                   DepartmentId
                </th>
            
                <th>
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

                    <button class="btn btn-primary" type="button" v-if="DepartmentId == 0">
                        Create
                    </button>

                    <button class="btn btn-primary" type="button" v-if="DepartmentId != 0">
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
             modalTitle: "",
             DepartmentName: "",
             DepartmentId: 0
        }
    },
    methods: {  // This method is used to consume the get API method
        refreshData(){
             axios.get(variables.API_URL + "departments") // we are using axios to consume the API methods
                .then((response) => {
                    this.departments= response.data;
                });
        },
        addClick(){  //We will change the title to add department
            this.modalTitle="Add Department";
            this.DepartmentId= 0;
            this.DepartmentName ="";
        },
        editClick(dep){  //We will change the title to add department
            this.modalTitle="Edit Department";
            this.DepartmentId= dep.DepartmentId;
            this.DepartmentName = dep.DepartmentName;
        }
    },
    mounted: function() { // This lifecycle Mounted method will be called when the component is in scope
         this.refreshData(); 
        }
}
