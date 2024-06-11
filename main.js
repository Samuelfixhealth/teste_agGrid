var xhttp = new XMLHttpRequest();

xhttp.onload = function() {
    var receiveRequest = JSON.parse(this.responseText);
    
    // Atualize o gridOptions.rowData com os dados recebidos
    gridOptions.api.setRowData(receiveRequest);
    
    // Opcional: log os dados para verificação
    receiveRequest.forEach(function(item) {
        console.log(item.id);
        console.log(item.first_name);
        console.log(item.last_name);
        console.log(item.email);
        console.log(item.phone);
        console.log(item.password);
    });
}
xhttp.open('GET', 'data.php', true);
xhttp.send();

// Grid Options: Contains all of the data grid configurations
const gridOptions = {
    // Initially, rowData can be empty
    rowData: [],
    
    // Column Definitions: Defines the columns to be displayed.
    columnDefs: [
        { field: "id", headerName: "ID" },
        { field: "first_name", headerName: "Firstname" },
        { field: "last_name", headerName: "Lastname" },
        { field: "email", headerName: "Email" },
        { field: "phone", headerName: "Phone" },
        { field: "password", headerName: "Senha" }
    ],
    pagination: true,  // Habilita a paginação
    paginationPageSize: 10,  // Número de linhas por página
    serverSideStoreType: 'partial',
    serverSidePagination: true,
};

// Your Javascript code to create the data grid
const myGridElement = document.querySelector('#myGrid');
new agGrid.Grid(myGridElement, gridOptions);