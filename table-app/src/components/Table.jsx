import React, { useState } from "react";
import {
    FormGroup,
    FormLabel,
    TextField,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core';

import MUIDataTable from "mui-datatables"
// import CustomFooter from "./CustomFooter";
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';


/* Styles of foooter count */
const useStyles = makeStyles(theme => ({
    footerCell: {
        backgroundColor: theme.palette.background.paper,
        borderBottom: 'none',
    },
    stickyFooterCell: {
        position: 'sticky',
        bottom: 0,
        zIndex: 100,
    },
}));
export default function Table() {

    const [ageFilterChecked, setAgeFilterChecked] = useState(false);

    const classes = useStyles();

    /* Class to footer count */
    const footerClasses = clsx({
        [classes.footerCell]: true,
        [classes.stickyFooterCell]: true,
    });

    const columns = [
        { name: 'name', label: 'Name', filter: 'true' },
        {
            name: 'age', label: 'Age', options: {
                filter: true,
                filterType: 'custom',
                customFilterListOptions: {
                    render: v => {
                        if (v[0] && v[1] && ageFilterChecked) {
                            return [`Min Age: ${v[0]}`, `Max Age: ${v[1]}`];
                        } else if (v[0] && v[1] && !ageFilterChecked) {
                            return `Min Age: ${v[0]}, Max Age: ${v[1]}`;
                        } else if (v[0]) {
                            return `Min Age: ${v[0]}`;
                        } else if (v[1]) {
                            return `Max Age: ${v[1]}`;
                        }
                        return [];
                    },
                    update: (filterList, filterPos, index) => {
                        console.log('customFilterListOnDelete: ', filterList, filterPos, index);

                        if (filterPos === 0) {
                            filterList[index].splice(filterPos, 1, '');
                        } else if (filterPos === 1) {
                            filterList[index].splice(filterPos, 1);
                        } else if (filterPos === -1) {
                            filterList[index] = [];
                        }
                        return filterList;
                    },
                },
                filterOptions: {
                    names: [],
                    logic(age, filters) {
                        if (filters[0] && filters[1]) {
                            return age < filters[0] || age > filters[1];
                        } else if (filters[0]) {
                            return age < filters[0];
                        } else if (filters[1]) {
                            return age > filters[1];
                        }
                        return false;
                    },
                    display: (filterList, onChange, index, column) => (
                        <div>
                            <FormLabel>Age</FormLabel>
                            <FormGroup row>
                                <TextField
                                    label='min'
                                    value={filterList[index][0] || ''}
                                    onChange={event => {
                                        filterList[index][0] = event.target.value;
                                        onChange(filterList[index], index, column);
                                    }}
                                    style={{ width: '45%', marginRight: '5%' }}
                                />
                                <TextField
                                    label='max'
                                    value={filterList[index][1] || ''}
                                    onChange={event => {
                                        filterList[index][1] = event.target.value;
                                        onChange(filterList[index], index, column);
                                    }}
                                    style={{ width: '45%' }}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={ageFilterChecked}
                                            onChange={event => setAgeFilterChecked(event.target.checked)}
                                        />
                                    }
                                    label='Separate Values'
                                    style={{ marginLeft: '0px' }}
                                />
                            </FormGroup>
                        </div>
                    ),
                },
                print: false,
            },
        },
        { name: 'email', label: 'Email', filter: 'true' },
        {
            name: 'salary', label: 'Salary',
        }
        /* See if put more colms */
    ];

    const data = [
        { id: 1, email: "email1@test.com", salary: 1000, name: 'John McQueen', age: 35 },
        { id: 2, email: "email2@test.com", salary: 1000, name: 'Mary Stones', age: 25 },
        { id: 3, email: "email3@test.com", salary: 1000, name: 'Robert Fil', age: 27 },
        { id: 4, email: "email4@test.com", salary: 1000, name: 'Roger Robson', age: 81 },
        { id: 5, email: "email5@test.com", salary: 1000, name: 'Billary Konwik', age: 18 },
        { id: 6, email: "email6@test.com", salary: 1000, name: 'Bob Martin', age: 18 },
        { id: 7, email: "email7@test.com", salary: 1000, name: 'Matthew Richardson', age: 54 },
        { id: 8, email: "email8@test.com", salary: 1000, name: 'Ritchie Peterson', age: 54 },
        { id: 9, email: "email9@test.com", salary: 1000, name: 'Bryan Martin', age: 40 },
        { id: 10, email: "email10@test.com", salary: 1000, name: 'Mark Martin', age: 44 },
        { id: 11, email: "email11@test.com", salary: 1000, name: 'Michelle Sebastian', age: 24 },
        { id: 12, email: "email12@test.com", salary: 1000, name: 'Michelle Sullivan', age: 61 },
        { id: 13, email: "email13@test.com", salary: 1000, name: 'Jordan Bike', age: 16 },
        { id: 14, email: "email14@test.com", salary: 1000, name: 'Nelson Ford', age: 34 },
        { id: 15, email: "email15@test.com", salary: 1000, name: 'Tim Cheap', age: 3 },
        { id: 16, email: "email16@test.com", salary: 1000, name: 'Robert Carlson', age: 31 },
        { id: 17, email: "email17@test.com", salary: 1000, name: 'Johny Perterson', age: 40 },
    ];
    
    const options = {
        filter: true,
        filterType: 'multiselect',
        responsive: 'vertical',
        /* tableBodyHeight: '500px', */
        rowsPerPage: 50,
        pagination: 'false',
        selectableRows: false,
        customTableBodyFooterRender: function (opts) {
            let totalSalary =
                opts.data.reduce((accu, item) => {
                    return accu + item.data[3];
                }, 0);

            totalSalary = Math.round(totalSalary);

            return (
                <TableFooter className={footerClasses}>
                    <TableRow>
                        {opts.columns.map((col, index) => {
                            if (col.display === 'true') {
                                if (col.name === 'salary') {
                                    return (
                                        <TableCell key={index} className={footerClasses}>
                                            Total Salary: {totalSalary}
                                        </TableCell>
                                    );
                                } else {
                                    return <TableCell key={index} className={footerClasses} />;
                                }
                            }
                            return null;
                        })}
                    </TableRow>
                </TableFooter>
            );
        },
    };


    return (
        <div className="mb-3">
            <MUIDataTable
                title={"Employee List"}
                data={data}
                columns={columns}
                options={options}
            />
        </div>
    )
}

