
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

import { patientAction } from '../../_actions';
import Nav from '../../_components/nav';
import AppBar from '../../_components/appbar';

const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
    }, appFrame: {
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    }, appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
    }, 'appBar-left': {
        marginLeft: drawerWidth,
    }, 'appBar-right': {
        marginRight: drawerWidth,
    }, drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    }, toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }, paper: {
        position: 'absolute',
        width: theme.spacing(50),
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
    },
});
class Patient extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(patientAction.getPatient());
    }
    handleChange = event => {
        this.setState({
            anchor: event.target.value,
        });
    };
    handleClick = (event, id) => {
        const { dispatch } = this.props;
        dispatch(patientAction.deletePatientById(id))
    };
    render() {
        const { classes } = this.props;
        const { patient } = this.props.patient;
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar />
                    <Nav />
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Grid container spacing={10}>
                            <Grid item xs={3}>
                                <Typography>{'Patient'}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                            </Grid>
                        </Grid>
                        <Grid container spacing={10}>
                            <Grid item xs={3}>
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                                <Button variant="contained" color="primary" className={classes.button} component='a' href="/add-patient">Add Patient</Button>

                            </Grid>
                        </Grid>
                        <br /><br />
                        <Grid container spacing={1}>
                            <Paper className={classes.root}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell numeric="true">Mobile</TableCell>
                                            <TableCell numeric="true">Phone</TableCell>
                                            <TableCell>Address</TableCell>
                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {patient.map(n => {
                                            return (
                                                <TableRow key={n._id}>
                                                    <TableCell component="th" scope="row">
                                                        {n.name}
                                                    </TableCell>
                                                    <TableCell numeric="true">{n.mobile}</TableCell>
                                                    <TableCell numeric="true">{n.phone_number}</TableCell>
                                                    <TableCell>{n.address}</TableCell>
                                                    <TableCell>
                                                        <IconButton className={classes.button} aria-label="Edit" component='a' href={`/edit-patient/${n._id}`}>
                                                            <EditIcon />
                                                        </IconButton>
                                                        <IconButton className={classes.button} aria-label="Delete" onClick={(event) => this.handleClick(event, n._id)}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Grid>
                    </main>
                </div>
            </div>
        );
    }
} Patient.propTypes = {
    classes: PropTypes.object.isRequired,
}; const mapStateToProps = (state) => {
    return {
        patient: state.patient
    };
}
const connectedPatientPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Patient))); export { connectedPatientPage as Patient };

