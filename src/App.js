import logo from './logo.svg';
import './App.css';
import characterData from './characterData.json';

import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import html2canvas from 'html2canvas';

const imgContainerStyle = { position: "relative", borderRadius: "15%", border: "5px solid #fff", width: "150px", height: "150px", backgroundColor: "#fff", display: "inline-block", margin: "4px" }
const imgStyle = { width: "100%", borderRadius: "13%" }
const imgTextStyle = { position: "absolute", bottom: "0px", left: "0px", borderBottomLeftRadius: "15%", borderBottomRightRadius: "15%", border: "4px solid #fff", backgroundColor: "#fff", width: "100%", paddingHorizontal: "6px", paddingBottom: "2px", fontWeight: "600", color: "#424242" }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.defaultSort = (
      <div id="print">
        <Table style={{ border: "none", boxShadow: "none" }}>
          <TableBody>
            <TableRow style={{ backgroundColor: "#ffadad", height: "180px" }}>
              <TableCell style={{}}>
                {characterData.map((json) => json.mainColor == "red" && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#ffd6a5", height: "180px" }}>
              <TableCell>
                {characterData.map((json) => json.mainColor == "orange" && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#fdffb6", height: "180px" }}>
              <TableCell>
                {characterData.map((json) => json.mainColor == "yellow" && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#caffbf", height: "180px" }}>
              <TableCell style={{ width: "100%" }}>
                {characterData.map((json) => json.mainColor == "green" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#bee2ff", height: "180px" }}>
              <TableCell>
                {characterData.map((json) => json.mainColor == "blue" && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#bdb2ff", height: "180px" }}>
              <TableCell>
                {characterData.map((json) => json.mainColor == "purple" && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#ffc7f0", height: "180px" }}>
              <TableCell style={{ width: "100%" }}>
                {characterData.map((json) => json.mainColor == "pink" && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#8a7167", height: "180px" }}>
              <TableCell>
                {characterData.map((json) => json.mainColor == "brown" && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#ebebeb", height: "180px" }}>
              <TableCell>
                {characterData.map((json) => json.mainColor == "white" && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#2b2b2b", height: "180px" }}>
              <TableCell>
                {characterData.map((json) => json.mainColor == "black" && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )

    this.defaultSortMetals = (
      <div id="print">
        <Table style={{ border: "none", boxShadow: "none" }}>
          <TableBody>
            <TableRow style={{ backgroundColor: "#ffadad", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38", borderTop: "10px solid #c98f38" }}>
                {characterData.map((json) => json.mainColor == "red" &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499", borderTop: "10px solid #909499" }}>
                {characterData.map((json) => json.mainColor == "red" && (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#ffd6a5", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.mainColor == "orange" &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.mainColor == "orange" &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#fdffb6", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.mainColor == "yellow" &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.mainColor == "yellow" &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#caffbf", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.mainColor == "green" &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.mainColor == "green" &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#bee2ff", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.mainColor == "blue" &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.mainColor == "blue" &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#bdb2ff", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.mainColor == "purple" && (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.mainColor == "purple" && (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#ffc7f0", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.mainColor == "pink" &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.mainColor == "pink" &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#8a7167", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.mainColor == "brown" &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.mainColor == "brown" &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#ebebeb", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.mainColor == "white" &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.mainColor == "white" &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#2b2b2b", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38", borderBottom: "10px solid #c98f38" }}>
                {characterData.map((json) => json.mainColor == "black" &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499", borderBottom: "10px solid #909499" }}>
                {characterData.map((json) => json.mainColor == "black" &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )

    this.defaultSortTemp = (
      <div id="print">
        <Table style={{ border: "none", boxShadow: "none" }}>
          <TableBody>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#ffbcad", width: "50%", borderLeft: "10px solid #a11c0d", borderRight: "10px solid #a11c0d", borderTop: "10px solid #a11c0d" }}>
                {characterData.map((json) => json.mainColor == "red" && json.temp == "warm" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#fab6c6", width: "50%", borderLeft: "10px solid #b8002e", borderRight: "10px solid #b8002e", borderTop: "10px solid #b8002e" }}>
                {characterData.map((json) => json.mainColor == "red" && json.temp == "cool" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#fcd895", width: "50%", borderLeft: "10px solid #b84a00", borderRight: "10px solid #b84a00" }}>
                {characterData.map((json) => json.mainColor == "orange" && json.temp == "warm" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#f2c9b6", width: "50%", borderLeft: "10px solid #b03310", borderRight: "10px solid #b03310" }}>
                {characterData.map((json) => json.mainColor == "orange" && json.temp == "cool" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#faebb6", width: "50%", borderLeft: "10px solid #a88007", borderRight: "10px solid #a88007" }}>
                {characterData.map((json) => json.mainColor == "yellow" && json.temp == "warm" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#fcfbc2", width: "50%", borderLeft: "10px solid #757027", borderRight: "10px solid #757027" }}>
                {characterData.map((json) => json.mainColor == "yellow" && json.temp == "cool" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#d7ffb8", width: "50%", borderLeft: "10px solid #3b4d08", borderRight: "10px solid #3b4d08" }}>
                {characterData.map((json) => json.mainColor == "green" && json.temp == "warm" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#b9fad1", width: "50%", borderLeft: "10px solid #09472a", borderRight: "10px solid #09472a" }}>
                {characterData.map((json) => json.mainColor == "green" && json.temp == "cool" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#b5fffd", width: "50%", borderLeft: "10px solid #054f4d", borderRight: "10px solid #054f4d" }}>
                {characterData.map((json) => json.mainColor == "blue" && json.temp == "warm" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#b8c5ff", width: "50%", borderLeft: "10px solid #0e093d", borderRight: "10px solid #0e093d" }}>
                {characterData.map((json) => json.mainColor == "blue" && json.temp == "cool" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#efb6fc", width: "50%", borderLeft: "10px solid #52054a", borderRight: "10px solid #52054a" }}>
                {characterData.map((json) => json.mainColor == "purple" && json.temp == "warm" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#c5b0f7", width: "50%", borderLeft: "10px solid #35094d", borderRight: "10px solid #35094d" }}>
                {characterData.map((json) => json.mainColor == "purple" && json.temp == "cool" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#fcb8e6", width: "50%", borderLeft: "10px solid #70033d", borderRight: "10px solid #70033d" }}>
                {characterData.map((json) => json.mainColor == "pink" && json.temp == "warm" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#fac0f9", width: "50%", borderLeft: "10px solid #610758", borderRight: "10px solid #610758" }}>
                {characterData.map((json) => json.mainColor == "pink" && json.temp == "cool" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#cfab93", width: "50%", borderLeft: "10px solid #573e25", borderRight: "10px solid #573e25" }}>
                {characterData.map((json) => json.mainColor == "brown" && json.temp == "warm" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#ad9a92", width: "50%", borderLeft: "10px solid #4a4633", borderRight: "10px solid #4a4633" }}>
                {characterData.map((json) => json.mainColor == "brown" && json.temp == "cool" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#e8e4dc", width: "50%", borderLeft: "10px solid #8a8986", borderRight: "10px solid #8a8986" }}>
                {characterData.map((json) => json.mainColor == "white" && json.temp == "warm" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#ebebeb", width: "50%", borderLeft: "10px solid #8c8c8c", borderRight: "10px solid #8c8c8c" }}>
                {characterData.map((json) => json.mainColor == "white" && json.temp == "cool" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#242322", width: "50%", borderLeft: "10px solid #171010", borderRight: "10px solid #171010", borderBottom: "10px solid #171010" }}>
                {characterData.map((json) => json.mainColor == "black" && json.temp == "warm" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#2b2b2b", width: "50%", borderLeft: "10px solid #000000", borderRight: "10px solid #000000", borderBottom: "10px solid #000000" }}>
                {characterData.map((json) => json.mainColor == "black" && json.temp == "cool" && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )

    this.manyColorsSort = (
      <div id="print">
        <Table style={{ border: "none", boxShadow: "none" }}>
          <TableBody>
            <TableRow style={{ backgroundColor: "#ffadad", height: "180px" }}>
              <TableCell style={{}}>
                {characterData.map((json) => json.colors.includes("red") && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#ffd6a5", height: "180px" }}>
              <TableCell>
                {characterData.map((json) => json.colors.includes("orange") && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#fdffb6", height: "180px" }}>
              <TableCell>
                {characterData.map((json) => json.colors.includes("yellow") && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#caffbf", height: "180px" }}>
              <TableCell style={{ width: "100%" }}>
                {characterData.map((json) => json.colors.includes("green") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#bee2ff", height: "180px" }}>
              <TableCell>
                {characterData.map((json) => json.colors.includes("blue") && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#bdb2ff", height: "180px" }}>
              <TableCell>
                {characterData.map((json) => json.colors.includes("purple") && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#ffc7f0", height: "180px" }}>
              <TableCell style={{ width: "100%" }}>
                {characterData.map((json) => json.colors.includes("pink") && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#8a7167", height: "180px" }}>
              <TableCell>
                {characterData.map((json) => json.colors.includes("brown") && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#ebebeb", height: "180px" }}>
              <TableCell>
                {characterData.map((json) => json.colors.includes("white") && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#2b2b2b", height: "180px" }}>
              <TableCell>
                {characterData.map((json) => json.colors.includes("black") && [<div style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></div>])}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )

    this.manyColorsSortMetals = (
      <div id="print">
        <Table style={{ border: "none", boxShadow: "none" }}>
          <TableBody>
            <TableRow style={{ backgroundColor: "#ffadad", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38", borderTop: "10px solid #c98f38" }}>
                {characterData.map((json) => json.colors.includes("red") &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499", borderTop: "10px solid #909499" }}>
                {characterData.map((json) => json.colors.includes("red") && (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#ffd6a5", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.colors.includes("orange") &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.colors.includes("orange") &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#fdffb6", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.colors.includes("yellow") &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.colors.includes("yellow") &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#caffbf", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.colors.includes("green") &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.colors.includes("green") &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#bee2ff", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.colors.includes("blue") &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.colors.includes("blue") &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#bdb2ff", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.colors.includes("purple") && (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.colors.includes("purple") && (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#ffc7f0", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.colors.includes("pink") &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.colors.includes("pink") &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#8a7167", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.colors.includes("brown") &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.colors.includes("brown") &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#ebebeb", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38" }}>
                {characterData.map((json) => json.colors.includes("white") &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499" }}>
                {characterData.map((json) => json.colors.includes("white") &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#2b2b2b", height: "180px" }}>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #c98f38", borderRight: "10px solid #c98f38", borderBottom: "10px solid #c98f38" }}>
                {characterData.map((json) => json.colors.includes("black") &&  (json.metal == "gold" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ width: "50%", borderLeft: "10px solid #909499", borderRight: "10px solid #909499", borderBottom: "10px solid #909499" }}>
                {characterData.map((json) => json.colors.includes("black") &&  (json.metal == "silver" || json.metal == "both") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )

    this.manyColorsSortTemp = (
      <div id="print">
        <Table style={{ border: "none", boxShadow: "none" }}>
          <TableBody>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#ffbcad", width: "50%", borderLeft: "10px solid #a11c0d", borderRight: "10px solid #a11c0d", borderTop: "10px solid #a11c0d" }}>
                {characterData.map((json) => json.tempcolors.includes("warmred") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#fab6c6", width: "50%", borderLeft: "10px solid #b8002e", borderRight: "10px solid #b8002e", borderTop: "10px solid #b8002e" }}>
                {characterData.map((json) => json.tempcolors.includes("coolred") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#fcd895", width: "50%", borderLeft: "10px solid #b84a00", borderRight: "10px solid #b84a00" }}>
                {characterData.map((json) => json.tempcolors.includes("warmorange") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#f2c9b6", width: "50%", borderLeft: "10px solid #b03310", borderRight: "10px solid #b03310" }}>
                {characterData.map((json) => json.tempcolors.includes("coolorange") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#faebb6", width: "50%", borderLeft: "10px solid #a88007", borderRight: "10px solid #a88007" }}>
                {characterData.map((json) => json.tempcolors.includes("warmyellow") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#fcfbc2", width: "50%", borderLeft: "10px solid #757027", borderRight: "10px solid #757027" }}>
                {characterData.map((json) => json.tempcolors.includes("coolyellow") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#d7ffb8", width: "50%", borderLeft: "10px solid #3b4d08", borderRight: "10px solid #3b4d08" }}>
                {characterData.map((json) => json.tempcolors.includes("warmgreen") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#b9fad1", width: "50%", borderLeft: "10px solid #09472a", borderRight: "10px solid #09472a" }}>
                {characterData.map((json) => json.tempcolors.includes("coolgreen") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#b5fffd", width: "50%", borderLeft: "10px solid #054f4d", borderRight: "10px solid #054f4d" }}>
                {characterData.map((json) => json.tempcolors.includes("warmblue") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#b8c5ff", width: "50%", borderLeft: "10px solid #0e093d", borderRight: "10px solid #0e093d" }}>
                {characterData.map((json) => json.tempcolors.includes("coolblue") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#efb6fc", width: "50%", borderLeft: "10px solid #52054a", borderRight: "10px solid #52054a" }}>
                {characterData.map((json) => json.tempcolors.includes("warmpurple") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#c5b0f7", width: "50%", borderLeft: "10px solid #35094d", borderRight: "10px solid #35094d" }}>
                {characterData.map((json) => json.tempcolors.includes("coolpurple") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#fcb8e6", width: "50%", borderLeft: "10px solid #70033d", borderRight: "10px solid #70033d" }}>
                {characterData.map((json) => json.tempcolors.includes("warmpink") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#fac0f9", width: "50%", borderLeft: "10px solid #610758", borderRight: "10px solid #610758" }}>
                {characterData.map((json) => json.tempcolors.includes("coolpink") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#cfab93", width: "50%", borderLeft: "10px solid #573e25", borderRight: "10px solid #573e25" }}>
                {characterData.map((json) => json.tempcolors.includes("warmbrown") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#ad9a92", width: "50%", borderLeft: "10px solid #4a4633", borderRight: "10px solid #4a4633" }}>
                {characterData.map((json) => json.tempcolors.includes("coolbrown") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#e8e4dc", width: "50%", borderLeft: "10px solid #8a8986", borderRight: "10px solid #8a8986" }}>
                {characterData.map((json) => json.tempcolors.includes("warmwhite") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#ebebeb", width: "50%", borderLeft: "10px solid #8c8c8c", borderRight: "10px solid #8c8c8c" }}>
                {characterData.map((json) => json.tempcolors.includes("coolwhite") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
            <TableRow style={{ height: "180px" }}>
              <TableCell style={{ backgroundColor: "#242322", width: "50%", borderLeft: "10px solid #171010", borderRight: "10px solid #171010", borderBottom: "10px solid #171010" }}>
                {characterData.map((json) => json.tempcolors.includes("warmblack") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
              <TableCell style={{ maxwidth: "0px", padding: "0px" }}>
              </TableCell>
              <TableCell style={{ backgroundColor: "#2b2b2b", width: "50%", borderLeft: "10px solid #000000", borderRight: "10px solid #000000", borderBottom: "10px solid #000000" }}>
                {characterData.map((json) => json.tempcolors.includes("coolblack") && [<span style={imgContainerStyle}><img src={json.filepath} style={imgStyle}></img> <Text style={imgTextStyle}>{json.name}</Text></span>])}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )

    this.state = {
      render: this.defaultSort
    }

    this.handleDownloadImage = this.handleDownloadImage.bind(this);

    this.setDefault = this.handleDefaultSort.bind(this);
    this.setManyColors = this.handleManyColorsSort.bind(this);
    this.setDefaultMetal = this.handleDefaultMetalSort.bind(this);
    this.setManyColorsMetal = this.handleManyColorsMetalSort.bind(this);
    this.setDefaultTemp = this.handleDefaultTempSort.bind(this);
    this.setManyColorsTemp = this.handleManyColorsTempSort.bind(this);

  }

  handleDefaultSort() {
    this.setState({ render: this.defaultSort })
  }

  handleManyColorsSort() {
    this.setState({ render: this.manyColorsSort })
  }

  handleDefaultMetalSort() {
    this.setState({ render: this.defaultSortMetals })
  }

  handleManyColorsMetalSort() {
    this.setState({ render: this.manyColorsSortMetals })
  }

  handleDefaultTempSort() {
    this.setState({ render: this.defaultSortTemp })
  }

  handleManyColorsTempSort() {
    this.setState({ render: this.manyColorsSortTemp })
  }

  async handleDownloadImage() {
    let element = document.getElementById('print');
    let canvas = await html2canvas(element);
    let data = canvas.toDataURL('image/jpg');
    let link = document.createElement('a');

    link.href = data;
    link.download = 'character-comparison.jpg';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log(link);

  }

  render() {
    return (
      [(
        <div>
          <div>
            <center>
              <h3>Sorting Methods</h3>
              <Table>
                <TableRow>
                  <TableCell style={{ width: "33%" }}>
                    <center>
                      <button type="button" onClick={this.setDefault} style={{ width: "90%", margin: "4px", padding: "4px" }}>Main Color</button>
                    </center>
                  </TableCell>
                  <TableCell style={{ width: "33%" }}>
                    <center>
                      <button type="button" onClick={this.setManyColors} style={{ width: "90%", margin: "4px", padding: "4px" }}>All Colors</button>
                    </center>
                  </TableCell>
                  <TableCell style={{ width: "33%" }}>
                    <center>
                      <button type="button" onClick={this.setHairColors} style={{ width: "90%", margin: "4px", padding: "4px" }}>Hair Colors</button>
                    </center>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "33%" }}>
                    <center>
                      <button type="button" onClick={this.setDefaultMetal} style={{ width: "45%", margin: "4px", padding: "4px" }}>Main Color + Metal</button>
                      <button type="button" onClick={this.setDefaultTemp} style={{ width: "45%", margin: "4px", padding: "4px" }}>Main Color + Temperature</button>
                    </center>
                  </TableCell>
                  <TableCell style={{ width: "33%" }}>
                    <center>
                      <button type="button" onClick={this.setManyColorsMetal} style={{ width: "45%", margin: "4px", padding: "4px" }}>All Colors + Metal</button>
                      <button type="button" onClick={this.setManyColorsTemp} style={{ width: "45%", margin: "4px", padding: "4px" }}>All Colors + Temperature</button>
                    </center>
                  </TableCell>
                  <TableCell style={{ width: "33%" }}>
                    <center>
                      <button type="button" onClick={this.setManyColors} style={{ width: "90%", margin: "4px", padding: "4px" }}>Hair Color + Length</button>
                    </center>
                  </TableCell>
                </TableRow>
              </Table>
            </center>
          </div>
          <button type="button" onClick={this.handleDownloadImage} style={{ width: "100%" }}>Download as Image</button>
        </div>
      ),
      this.state.render]
    )
  };
}

export default App;
