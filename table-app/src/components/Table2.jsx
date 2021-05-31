import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter'

const filterValue = [
    { name: 'name', operator: 'startsWith', type: 'string', value: '' },
    { name: 'email', operator: 'startsWith', type: 'string', value: '' },
    { name: 'age', operator: 'gte', type: 'number' },
    { name: 'salary', operator: 'gte', type: 'number' },
    // { name: 'city', operator: 'startsWith', type: 'string', value: '' },
    // {
    //     name: 'birthDate',
    //     operator: 'before',
    //     type: 'date',
    //     value: ''
    // },
    // { name: 'country', operator: 'eq', type: 'select', value: 'ca' }
];

const columns = [
    { name: 'name', header: 'Name', minWidth: 50, defaultFlex: 2 },
    { name: 'age', header: 'Age', maxWidth: 1000, defaultFlex: 1, type: 'number', filterEditor: NumberFilter },
    { name: 'email', header: 'Email', maxWidth: 1000, defaultFlex: 1 },
    { name: 'salary', header: 'Salary', maxWidth: 10000, defaultFlex: 1 },
    /* Ver que campos mas agregar */
];

const summaryReducer = {
    initialValue: 0,
    reducer: (accumulator, item) => accumulator + (item.salary || 0)
};
const footerRows = [
    {
        render: {
            name: <b>Nothing to render here</b>,
            salary: ({ summary }) => <div>Total population: <b>{summary}</b>.</div>
        }
    }
]



const gridStyle = { minHeight: 550 };

const dataSource = [
    { id: 1, email: "email1@test.com", salary: "1000", name: 'John McQueen', age: 35 },
    { id: 2, email: "email2@test.com", salary: "1000", name: 'Mary Stones', age: 25 },
    { id: 3, email: "email3@test.com", salary: "1000", name: 'Robert Fil', age: 27 },
    { id: 4, email: "email4@test.com", salary: "1000", name: 'Roger Robson', age: 81 },
    { id: 5, email: "email5@test.com", salary: "1000", name: 'Billary Konwik', age: 18 },
    { id: 6, email: "email6@test.com", salary: "1000", name: 'Bob Martin', age: 18 },
    { id: 7, email: "email7@test.com", salary: "1000", name: 'Matthew Richardson', age: 54 },
    { id: 8, email: "email8@test.com", salary: "1000", name: 'Ritchie Peterson', age: 54 },
    { id: 9, email: "email9@test.com", salary: "1000", name: 'Bryan Martin', age: 40 },
    { id: 10, email: "email10@test.com", salary: "1000", name: 'Mark Martin', age: 44 },
    { id: 11, email: "email11@test.com", salary: "1000", name: 'Michelle Sebastian', age: 24 },
    { id: 12, email: "email12@test.com", salary: "1000", name: 'Michelle Sullivan', age: 61 },
    { id: 13, email: "email13@test.com", salary: "1000", name: 'Jordan Bike', age: 16 },
    { id: 14, email: "email14@test.com", salary: "1000", name: 'Nelson Ford', age: 34 },
    { id: 15, email: "email15@test.com", salary: "1000", name: 'Tim Cheap', age: 3 },
    { id: 16, email: "email16@test.com", salary: "1000", name: 'Robert Carlson', age: 31 },
    { id: 17, email: "email17@test.com", salary: "1000", name: 'Johny Perterson', age: 40 },
];

const Table = () => {
    return (
        <div className="mb-3">
            <ReactDataGrid
                idProperty="id"
                columns={columns}
                dataSource={dataSource}
                style={gridStyle}
                defaultFilterValue={filterValue}
                summaryReducer={summaryReducer}
                footerRows={footerRows}
            />
        </div>
    )
}

export default Table