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

    this.state = {
      render: this.manyColorsSort
    }

    this.handleDownloadImage = this.handleDownloadImage.bind(this);
    this.setDefault = this.handleDefaultSort.bind(this);
    this.setManyColors = this.handleManyColorsSort.bind(this);

  }

  handleDefaultSort() {
    this.setState({render: this.defaultSort})
  }

  handleManyColorsSort() {
    this.setState({render: this.manyColorsSort})
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
                      <button type="button" onClick={this.setManyColors} style={{ width: "45%", margin: "4px", padding: "4px" }}>Main Color + Metal</button>
                      <button type="button" onClick={this.setManyColors} style={{ width: "45%", margin: "4px", padding: "4px" }}>Main Color + Temperature</button>
                    </center>
                  </TableCell>
                  <TableCell style={{ width: "33%" }}>
                  <center>
                      <button type="button" onClick={this.setManyColors} style={{ width: "45%", margin: "4px", padding: "4px" }}>All Colors + Metal</button>
                      <button type="button" onClick={this.setManyColors} style={{ width: "45%", margin: "4px", padding: "4px" }}>All Colors + Temperature</button>
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
