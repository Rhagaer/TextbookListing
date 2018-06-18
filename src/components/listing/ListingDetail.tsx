import * as React from "react"
import { TextbookDetail } from "../textbook/TextbookDetail"
import { Textbook } from "../../model/Textbook";
import { SellerList } from "../seller/SellerList";
import { Typography, Button, Icon, IconButton, List, Dialog, DialogTitle, DialogContentText, Checkbox, FormControlLabel, Select, Input, MenuItem, DialogActions } from "@material-ui/core";
import * as styles from "./ListingDetail.css"
import FilterList from "@material-ui/icons/FilterList";
import ViewList from "@material-ui/icons/ViewList"


let textbook = new Textbook("Name", "Author", "ISBN", 5, "Test")

interface IState {
    showPopup: boolean;
    selectedUniversity: string;

}

export class ListingDetail extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);
        this.state = { showPopup: false, selectedUniversity: "" }
    }


    toggleFilterList = () => {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    handleUniversitySelected = (event: any) => {

        this.setState({ selectedUniversity: event.target.value })
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.state.showPopup}
                    onClose={this.toggleFilterList}>
                    <DialogTitle>Filter Results</DialogTitle>
                    <div className={styles.modalControlsContainer}>
                        <DialogContentText>Filter the results using the options bellow </DialogContentText>
                        <Typography variant="subheading">Filter By Condition </Typography>
                        <FormControlLabel
                            control={
                                <Checkbox />}
                            label="Like New" />
                        <FormControlLabel
                            control={
                                <Checkbox />}
                            label="Very Good" />
                        <FormControlLabel
                            control={
                                <Checkbox />}
                            label="Good" />
                        <FormControlLabel
                            control={
                                <Checkbox />}
                            label="Acceptable" />

                        <Typography variant="subheading" style={{marginTop: 16}}>Filter By University</Typography>
                        <Select
                            fullWidth
                            onChange={this.handleUniversitySelected}
                            placeholder="Chose Universities"
                            value={this.state.selectedUniversity}
                            input={<Input name="name" />}
                        >
                            <MenuItem value="UCT">UCT</MenuItem>
                            <MenuItem value="WITS">WITS</MenuItem>
                            <MenuItem value="Stellies">Stellies</MenuItem>
                        </Select>
                        <DialogActions>
                            <Button onClick={this.toggleFilterList} color="primary">
                                Apply
                            </Button>
                        </DialogActions>

                    </div>
                </Dialog>
                <TextbookDetail textbook={textbook} />
                <div className={styles.controlsContainer}>
                    <Typography variant={"headline"} className={styles.controlsItem}>
                        Sellers
                    </Typography>
                    <div className={styles.controlsItem}>
                        <Button onClick={this.toggleFilterList}>
                            Filter
                    <FilterList />
                        </Button>
                    </div>
                    <IconButton className={styles.controlsItem}>
                        <ViewList />
                    </IconButton>
                </div>
                <SellerList />
            </div >
        )
    }
}


