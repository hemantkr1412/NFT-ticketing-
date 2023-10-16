import React, { useState} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import "./Contact.css";

const Contact = () => {
	const formDetail = [
		{
			label: "Name",
			placeholder: "Andrea",
			key: "Name",
		},
		{
			label: "Email",
			placeholder: "andrea@gmail.com",
			key: "Email",
		},
		{
			label: "Message",
			placeholder: "Your message",
			key: "Message",
		},
	];
	const [open, setOpen] = React.useState(false);
	const [inputDetails, setInputDetails] = useState({
		Name: "",
		Email: "",
		Purpose: "",
		Message: "",
	});

	const handleToClose = (event, reason) => {
		if ("clickaway" == reason) return;
		setOpen(false);
	};

	const inputEvent = (e) => {
		const name = e.target.name;
		const val = e.target.value;
		setInputDetails({ ...inputDetails, [name]: val });
	};

	const submitForm = (event) => {
		event.preventDefault();

		const config = {
			SecureToken: "26802cb0-6999-4fb5-8d33-b75d9d1c7736",
			To: "hello@beimagine.tech",
			From: "hello@beimagine.tech",
			Subject: "Abaad Alkhayal Contact Form",
			Body: `
            Name: ${inputDetails.Name}<br>
            Email: ${inputDetails.Email}<br>
            Purpose: ${inputDetails.Purpose}<br>
            Message: ${inputDetails.Message}
          `,
		};
		if (window.Email) {
			window.Email.send(config)
				.then((data) => {
					setOpen(true);
					setInputDetails({
						Name: "",
						Email: "",
						Purpose: "",
						Message: "",
					});
				})
				.catch((error) => {
					setOpen(true);
				});
		}
	};

	return (
		<>
			<div id="contact"></div>
			<Typography
				variant="h5"
				gutterBottom
				sx={{
					display: { xs: "block", md: "none" },
					fontWeight: "bold",
					textAlign: "center",
					fontSize: "2rem",
				}}
				id="contactHead">
				Feel Free to reach out for further details
			</Typography>
			<Grid
				container
				spacing={{ xs: 3, md: 3 }}
				justifyContent="center"
				sx={{ p: 3 }}
				className="contactDiv">
				<Grid
					item
					xs={1}
					sx={{ display: { xs: "none", lg: "block" } }}></Grid>
				<Grid item xs={12} sm={6} sx={{ p: 5 }} id="contactContainer">
					<Box sx={{ textAlign: "start" }}>
						<Typography
							variant="h4"
							gutterBottom
							sx={{
								fontWeight: "bold",
								display: { xs: "none", md: "block" },
							}}>
							Feel Free to reach out for further details
						</Typography>

						<Box sx={{ mt: 4 }}>
							<p>Email Address</p>
							<a
								href="mailto: hello@beimagine.tech"
								className="contactLink">
								 sales@abaadalkhayal.com
							</a>
						</Box>
						<Box sx={{ mt: 4 }}>
							<p>Address</p>
							<p className="contactInfo">
								Riyadh 2955, Kingdom of Saudi Arabia
							</p>
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={5}
					lg={4}
					className="formOuterDiv">
					<Box component="div" className="formDiv" >
						<Typography
							variant="h5"
							gutterBottom
							sx={{
								fontWeight: "bold",
								marginLeft: "2rem",
								marginTop: "1rem",
								color: "black",
							}}>
							Contact Us
						</Typography>
						<form onSubmit={submitForm}>
							{formDetail.map((elem, id) => {
								return (
									<FormControl
										variant="standard"
										className="inputDiv"
										key={id}
										onSubmit={submitForm}>
										<InputLabel
											htmlFor="component-simple"
											className="inputLabel">
											{elem.label}
										</InputLabel>

										<Input
											id="component-simple"
											placeholder={elem.placeholder}
											className="input"
											onChange={inputEvent}
											name={elem.label}
											value={inputDetails[elem.key]}
										/>
									</FormControl>
								);
							})}
							<Button
								type="submit"
								variant="contained"
								className="formBtn"
								sx={{ margin: "1rem 2rem 0 0" }}>
								Send
							</Button>
						</form>
					</Box>
				</Grid>
				<Grid
					item
					xs={1}
					sx={{ display: { xs: "none", lg: "block" } }}></Grid>
			</Grid>

			<Snackbar
				anchorOrigin={{
					horizontal: "center",
					vertical: "top",
				}}
				open={open}
				autoHideDuration={1500}
				sx={{
					"& .MuiSnackbarContent-root": {
						backgroundColor: "#4caf50",
						color: "#fff",
					},
				}}
				onClose={handleToClose}
				action={
					<React.Fragment>
						<IconButton
							size="small"
							aria-label="close"
							color="inherit"
							onClick={handleToClose}>
							<CancelIcon />
						</IconButton>
					</React.Fragment>
				}
			/>
		</>
	);
};

export default Contact;
