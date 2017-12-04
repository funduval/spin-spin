import React, { Component } from 'react';
import axios            from 'axios';
import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {fade}        from 'material-ui/src/styles/colorManipulator';
// import SugrTheme from './utils/uiTheme.js';
import {teal900, 
        cyan700, cyan500, 
        white, darkBlack, fullBlack,
        pinkA200, 
        grey100, grey300, grey400, grey500,} from 'material-ui/styles/colors';

import Header       from './components/Children/Header';
import Logo         from './components/Children/Logo';
import LpSearch     from './components/Children/LpSearch';
import CurrentModal from './components/Children/CurrentModal';
import SearchDspl   from './components/Children/SearchDspl';
import dashboard    from './dashboard';


// import API          from './utils/API'

// Material-ui custom themes =========================================================
const muiTheme = getMuiTheme({
  fontFamily: 'Monserrat, sans-serif',
  palette: {
    primary1Color: teal900,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: teal900,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    shadowColor: fullBlack,
  },
  TextField:
  {"width":"100%",},
});

//================================================================================




//================================================================================
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: {
        fullname:'',
        email:'',
        password:'',
        profilePict:'',
      },
      Search: {
        SearchItem:'',
        foodType: [],
        showResults: false,
      },
      CurrentModal: null,

    };
      
    this.inputChange = this.inputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clickSearch = this.clickSearch.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onShowResult = this.onShowResult.bind(this);
  }

    handleClick = (clickVal) => {
      // console.log('clicking')
      // console.log(this)
      this.setState({
        CurrentModal: clickVal
      })
    }

    onSubmit = () => {
      // console.log("submitting")
    }
  
// modal activation sign-in / signup / no display =============================
  handleClick = (clickVal) => {
    // console.log(this)
    this.setState({
      CurrentModal: clickVal
    })
  }

  closeModal = () => {
    this.handleClick("null");
  }

// input value state change for all input fields ==============================
    inputChange = (value, key ) => {
      this.setState({
        [key]: value
      })
      console.log('value: ',value, 'key: ' ,key)
    };

// // fernando's bad login logic

// login() {
//   auth.signInWithPopup(provider) 
//     .then((result) => {
//       const user = result.user;
//       this.setState({
//         user
//       });
//       console.log("============================" + user)
//     });
// }

// login() {
//   auth.signInWithEmailAndPassword(this.props.email, this.props.password); 
//     .then((result) => {
//       // const user = result.user;
//       // this.setState({
//       //   user
//       // });
//     });
//     console.log("user")
// }



// landing page api call for searchbar on landing page and dashboard =========
clickSearch = () => {
  const BASEURL = 'https://api.nutritionix.com/v1_1/search/';
  const APIKEY = '5234f7f1&appKey=c6da7cb3302759d1e20f3793daa4b711';
  const foodSearch = this.state.SearchItem
  const queryURL =  BASEURL + this.state.SearchItem + '?results=0:20&fields=item_name,brand_name,nf_sugars&appId=' + APIKEY;

  return axios.get(queryURL)
    .then(resp => {
      this.setState({
        foodType: resp.data.hits,
      })  
    console.log('food by name response: ',resp.data.hits); 
    this.mapAllFood(this.state.foodType);
    this.setState({ showResults: true });
    console.log("this is show state: ",this.state.showResults)
    this.onShowResult();
  }) 
} 

  mapAllFood = (foods) => {
    foods.map(food => {
      console.log("Item Name: ",food.fields.item_name)
      console.log("Brand Name: ",food.fields.brand_name)
      console.log("sugars: ",food.fields.nf_sugars+"g")
      console.log("serving size: ",food.fields.nf_serving_size_qty)
      console.log("id: ",food._id)
      console.log('****************************')
    })
  }

  // lshows results from search on landing page and/or dashboard =========
  onShowResult = () => {
    this.setState({
      top: 0,
    });
  }

  // =====================================================================
    render() {
     
      console.log('in render showing overall state: ',this.state)
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header
            handleClick = { this.handleClick } 
            CurrentModal = { this.state.CurrentModal } />

          <CurrentModal 
            handleClick = { this.handleClick }
            closeModal = { this.closeModal }
            inputChange = { this.inputChange }
            CurrentModal = { this.state.CurrentModal } 
            onSumbit = {this.onSubmit}
            handleClick  = { this.handleClick } />


          <CurrentModal 
            handleClick  = { this.handleClick }
            closeModal   = { this.closeModal }
            inputChange  = { this.inputChange }
            CurrentModal = { this.state.CurrentModal } />

          <LpSearch 
            clickSearch = { this.clickSearch }
            inputChange = { this.inputChange } />

          <SearchDspl
            foodType = { this.state.foodType } />
            <div className="resultsWrapper">
            { this.state.showResults ? ( 
          
          <SearchDspl
                top = { this.state.top }
                foodType = { this.state.foodType } /> ) : (null )}
            </div>


        </div>
        </MuiThemeProvider>
      );
    }
  }

