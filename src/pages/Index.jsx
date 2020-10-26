import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import { Button } from 'reactstrap';
import { useGetUsers } from '../hooks/users/useGetUsers';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Edit as EditIcon, Add as AddIcon } from "@material-ui/icons";
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


export const Index = ({ }) => {
    const data = useGetUsers();
    let history = useHistory();
    console.log(data);

    const actions = [
        {
            icon: () => <AddIcon />,
            tooltip: "Add User",
            isFreeAction: true,
            onClick: (event, rowData) => {
                history.push('/add-user')
            }
        },
        {
            icon: () => <EditIcon />,
            tooltip: "Edit User",
            onClick: (event, rowData) => {

            }
        }
    ];

    return (
        <header className="App-header">
            {
                <Fragment>
                    <MaterialTable
                        icons={tableIcons}
                        columns={[
                            { title: 'Nombre', field: 'first_name' },
                            { title: 'Apellidos', field: 'last_name' },
                            { title: 'email', field: 'email' },
                            {
                                title: 'avatar', field: 'avatar',
                                render: rowData => <img src={rowData.avatar} style={{ width: 50, borderRadius: '50%' }} />
                            }
                        ]}
                        data={data}
                        actions={actions}
                        title="Users list"
                    />
                </Fragment>

            }

        </header>
    );
};


Index.propTypes = {

}

Index.defaultProps = {

}


