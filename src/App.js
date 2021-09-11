import { Button,Container,Fab,Typography,FormControl,RadioGroup,Radio,FormControlLabel, TextField,Select,InputLabel,MenuItem,FormLabel,FormGroup,Checkbox } from '@material-ui/core'
import {useState} from 'react'
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import './App.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createBfa } from './graphql/mutations'
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const useStyles = makeStyles((theme) => ({
    root: {
      width:'100%',
      display:'flex',
      flexDirection:'column'
    },
    margin: {
      height: theme.spacing(3),
    },
    itemTitle:{
        width:'30%',
        fontWeight:700,
        fontSize:20
    },
    item:{
        display:'flex',
        flexWrap:'wrap',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        
        
    },
    slides:{
        width:'30%'
    }
 
  }));


const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },

  ];


 function BfaForm(props){
   const classes = useStyles()
   const [height,setheight] = useState("")

   
   const [weight,setweight] = useState("")

   const [sex,setsex] = useState("")
   const [restingbp,setrestingbp] = useState("")


   const [restinghr,setrestinghr] = useState("")


   const [maxhr,setmaxhr] = useState("")


   const [recoveryhr,setrecoveryhr] = useState("")


   const [fitnesscategory,setfitnesscategory] = useState("")


   const [pelvisleft,setpelvisleft] = useState("")

   const [pelvisright,setpelvisright] = useState("")


   const [kneepositionleft,setkneepositionleft] = useState("")
   const [kneepositionright,setkneepositionright] = useState("")

   const [trunkpositionleft,settrunkpositionleft] = useState("")
   const [trunkpositionright,settrunkpositionright] = useState("")

   const [steadystanceleft,setsteadystanceleft] = useState("")
   const [steadystanceright,setsteadystanceright] = useState("")


   const [armstrategyleft,setarmstrategyleft] = useState("")
   const [armstrategyright,setarmstrategyright] = useState("")


   const [scoliosisadams,setscoliosisadams] = useState("")


   const [ribhump,setribhump] = useState("")


   const [ribarea,setribarea] = useState("")


   const [fordwardbending,setfordwardbending] = useState("")

   const [kneeflexionleft, setkneeflexionleft] = useState("")
   const [kneeflexionright, setkneeflexionright] = useState("")  
   const [kneeflexionleft2, setkneeflexionleft2] = useState("")  
   const [kneeflexionright2, setkneeflexionright2] = useState("")
   const [knees,setknees] = useState("")

   const [genurecurvatumleft, setgenurecurvatumleft] = useState("")
   const [scapularwingingleft, setscapularwingingleft] = useState("")
   const [footalignmentleft, setfootalignmentleft] = useState("")
   const [halluxvalgusleft, sethalluxvalgusleft] = useState("")
   const [genurecurvatumright, setgenurecurvatumright] = useState("")
   const [scapularwingingright, setscapularwingingright] = useState("")
   const [footalignmentright, setfootalignmentright] = useState("")
   const [halluxvalgusright, sethalluxvalgusright] = useState("")


   const [goodalignment,setgoodalignment] = useState("")


   const [valgusvarus,setvalgusvarus] = useState("")


   const [range,setrange] = useState("")


   const [sufficientupwardrotationleft,setsufficientupwardrotationleft] = useState("")


   const [jitteringleft,setjitteringleft] = useState("")


   const [wingingleft,setwingingleft] = useState("")
   
   const [sufficientupwardrotationright,setsufficientupwardrotationright] = useState("")


   const [jitteringright,setjitteringright] = useState("")


   const [wingingright,setwingingright] = useState("")


   const [passivedfleft,setpassivedfleft] = useState("")


   const [passivedfright,setpassivedfright] = useState("")


   const [passiveappleft,setpassiveappleft] = useState("")


   const [passiveappright,setpassiveappright] = useState("")


   const [hyperextensionelbowleft,sethyperextensionelbowleft] = useState("")


   const [hyperextensionelbowright,sethyperextensionelbowright] = useState("")


   const [stpostitionturnoutleft,set1stpostitionturnoutleft] = useState(0)


   const [stpostitionturnoutright,set1stpostitionturnoutright] = useState(0)


   const [firstpositiondiscsleft,setfirstpositiondiscsleft] = useState(0)


   const [firstpositiondiscsright,setfirstpositiondiscsright] = useState(0)


   const [thomastestleft,setthomastestleft] = useState([])


   const [thomastestright,setthomastestright] = useState([])


   const [hipgrindleft,sethipgrindleft] = useState("")


   const [hipgrindright,sethipgrindright] = useState("")


   const [slrhsleft,setslrhsleft] = useState("")


   const [slrhsright,setslrhsright] = useState("")


   const [kneehyperextensionleft,setkneehyperextensionleft] = useState("")


   const [kneehyperextensionright,setkneehyperextensionright] = useState("")


   const [pronehipirleft,setpronehipirleft] = useState("")


   const [pronehipirright,setpronehipirright] = useState("")


   const [pronehiperleft,setpronehiperleft] = useState("")


   const [pronehiperright,setpronehiperright] = useState("")


   const [plantarflexionaromleft,setplantarflexionaromleft] = useState("")


   const [plantarflexionaromright,setplantarflexionaromright] = useState("")


   const [stmtpdorsiflexionleft,set1stmtpdorsiflexionleft] = useState("")


   const [stmtpdorsiflexionright,set1stmtpdorsiflexionright] = useState("")


   const [leglength,setleglength] = useState("")


   const [hipabductionleft,sethipabductionleft] = useState("")


   const [hipabductionright,sethipabductionright] = useState("")


   const [hipadductionleft,sethipadductionleft] = useState("")


   const [hipadductionright,sethipadductionright] = useState("")


   const [hiperleft,sethiperleft] = useState("")


   const [hiperright,sethiperright] = useState("")


   const [kneeflexion,setkneeflexion] = useState("")
   const [hipabductionleft2, sethipabductionleft2] = useState("")
const [hipabductionright2, sethipabductionright2] = useState("")
const [hipadductionleft2, sethipadductionleft2] = useState("")
const [hipadductionright2, sethipadductionright2] = useState("")
const [hiperleft2, sethiperleft2] = useState("")
const [hiperright2, sethiperright2] = useState("")
const [kneeflexion2, setkneeflexion2] = useState("")


   const [singlelegstanceleft,setsinglelegstanceleft] = useState("")


   const [singlelegstanceright,setsinglelegstanceright] = useState("")


   const [anteriorleft1,setanteriorleft1] = useState("")


   const [anteriorleft2,setanteriorleft2] = useState("")


   const [anteriorleft3,setanteriorleft3] = useState("")


   const [anteriorright1,setanteriorright1] = useState("")


   const [anteriorright2,setanteriorright2] = useState("")


   const [anteriorright3,setanteriorright3] = useState("")


   const [posteromedialleft1,setposteromedialleft1] = useState("")


   const [posteromedialleft2,setposteromedialleft2] = useState("")


   const [posteromedialleft3,setposteromedialleft3] = useState("")


   const [posteromedialright1,setposteromedialright1] = useState("")


   const [posteromedialright2,setposteromedialright2] = useState("")


   const [posteromedialright3,setposteromedialright3] = useState("")


   const [posterolateralleft1,setposterolateralleft1] = useState("")


   const [posterolateralleft2,setposterolateralleft2] = useState("")


   const [posterolateralleft3,setposterolateralleft3] = useState("")


   const [posterolateralright1,setposterolateralright1] = useState("")


   const [posterolateralright2,setposterolateralright2] = useState("")


   const [posterolateralright3,setposterolateralright3] = useState("")


   const [singlelegreleveleft,setsinglelegreleveleft] = useState("")


   const [singlelegreleveright,setsinglelegreleveright] = useState("")


   const [singlelegbridgeleft,setsinglelegbridgeleft] = useState("")


   const [singlelegbridgeright,setsinglelegbridgeright] = useState("")


   const [sideplankhipableft,setsideplankhipableft] = useState("")


   const [sideplankhipabright,setsideplankhipabright] = useState("")


   const [powerhoptestleft,setpowerhoptestleft] = useState("")


   const [powerhoptestright,setpowerhoptestright] = useState("")


   const [ckcuest,setckcuest] = useState("")

   const [submited, setSubmited] = useState(true)
   const [beightonscore,setBeightonScore] = useState(0)

   const [singlelimbsquat,setSingleLimbSquat] = useState(0)

   function valueScoliosis(value){
       setscoliosisadams(value)
        return value
   }

   function handleheight(e){
    e.preventDefault()   
    setheight(e.target.value)
}


function handleweight(e){
    e.preventDefault()
    setweight(e.target.value)
}


function handlerestingbp(e){
    e.preventDefault()
    setrestingbp(e.target.value)
}


function handlerestinghr(e){
    e.preventDefault()
    setrestinghr(e.target.value)
}


function handlemaxhr(e){
    e.preventDefault()
    setmaxhr(e.target.value)
}


function handlerecoveryhr(e){
    e.preventDefault()
    setrecoveryhr(e.target.value)
}


function handlefitnesscategory(e){
    e.preventDefault()
    setfitnesscategory(e.target.value)
}


function handlepelvisleft(e){
    e.preventDefault()
    setpelvisleft(e.target.value)
}

function handlepelvisright(e){
    e.preventDefault()
    setpelvisright(e.target.value)
}

function handlekneepositionleft(e){
    e.preventDefault()
    setkneepositionleft(e.target.value)
}


function handlekneepositionright(e){
    e.preventDefault()
    setkneepositionright(e.target.value)
}


function handletrunkpositionleft(e){
    e.preventDefault()
    settrunkpositionleft(e.target.value)
}


function handletrunkpositionright(e){
    e.preventDefault()
    settrunkpositionright(e.target.value)
}


function handlesteadystanceleft(e){
    e.preventDefault()
    setsteadystanceleft(e.target.value)
}


function handlesteadystanceright(e){
    e.preventDefault()
    setsteadystanceright(e.target.value)
}


function handlearmstrategyleft(e){
    e.preventDefault()
    setarmstrategyleft(e.target.value)
}


function handlearmstrategyright(e){
    e.preventDefault()
    setarmstrategyright(e.target.value)
}


function handleribhump(e){
    e.preventDefault()
    setribhump(e.target.value)
}


function handleribarea(e){
    e.preventDefault()
    setribarea(e.target.value)
}


function handlefordwardbending(e){
    e.preventDefault()
    setfordwardbending(e.target.value)
}


function handleknees(e){
    e.preventDefault()
    setknees(e.target.value)
}


function handlegenurecurvatumleft(e){
  e.preventDefault()
  setgenurecurvatumleft(e.target.value)
}


function handlescapularwingingleft(e){
  e.preventDefault()
  setscapularwingingleft(e.target.value)
}


function handlefootalignmentleft(e){
  e.preventDefault()
  setfootalignmentleft(e.target.value)
}


function handlehalluxvalgusleft(e){
  e.preventDefault()
  sethalluxvalgusleft(e.target.value)
}


function handlegenurecurvatumright(e){
  e.preventDefault()
  setgenurecurvatumright(e.target.value)
}


function handlescapularwingingright(e){
  e.preventDefault()
  setscapularwingingright(e.target.value)
}


function handlefootalignmentright(e){
  e.preventDefault()
  setfootalignmentright(e.target.value)
}
function handlekneeflexionleft2(e){
  e.preventDefault()
  setkneeflexionleft2(e.target.value)
}


function handlekneeflexionright2(e){
  e.preventDefault()
  setkneeflexionright2(e.target.value)
}
function handlekneeflexionleft(e){
  e.preventDefault()
  setkneeflexionleft(e.target.value)
}


function handlekneeflexionright(e){
  e.preventDefault()
  setkneeflexionright(e.target.value)
}

function handlehalluxvalgusright(e){
  e.preventDefault()
  sethalluxvalgusright(e.target.value)
}


function handlegoodalignment(e){
    e.preventDefault()
    setgoodalignment(e.target.value)
}


function handlevalgusvarus(e){
    e.preventDefault()
    setvalgusvarus(e.target.value)
}


function handlerange(e){
    e.preventDefault()
    setrange(e.target.value)
}


function handlesufficientupwardrotationleft(e){
    e.preventDefault()
    setsufficientupwardrotationleft(e.target.value)
}


function handlejitteringleft(e){
    e.preventDefault()
    setjitteringleft(e.target.value)
}


function handlewingingleft(e){
    e.preventDefault()
    setwingingleft(e.target.value)
}


function handlesufficientupwardrotationright(e){
    e.preventDefault()
    setsufficientupwardrotationright(e.target.value)
}


function handlejitteringright(e){
    e.preventDefault()
    setjitteringright(e.target.value)
}


function handlewingingright(e){
    e.preventDefault()
    setwingingright(e.target.value)
}


function handlepassivedfleft(e){
    e.preventDefault()
    setpassivedfleft(e.target.value)
}


function handlepassivedfright(e){
    e.preventDefault()
    setpassivedfright(e.target.value)
}


function handlepassiveappleft(e){
    e.preventDefault()
    setpassiveappleft(e.target.value)
}


function handlepassiveappright(e){
    e.preventDefault()
    setpassiveappright(e.target.value)
}


function handlehyperextensionelbowleft(e){
    e.preventDefault()
    sethyperextensionelbowleft(e.target.value)
}


function handlehyperextensionelbowright(e){
    e.preventDefault()
    sethyperextensionelbowright(e.target.value)
}


function handle1stpostitionturnoutleft(e){
    e.preventDefault()
    set1stpostitionturnoutleft(e.target.value)
}


function handle1stpostitionturnoutright(e){
    e.preventDefault()
    set1stpostitionturnoutright(e.target.value)
}


function handlefirstpositiondiscsleft(e){
    e.preventDefault()
    setfirstpositiondiscsleft(e.target.value)
}


function handlefirstpositiondiscsright(e){
    e.preventDefault()
    setfirstpositiondiscsright(e.target.value)
}
function handlehipabductionleft2(e){
  e.preventDefault()
  sethipabductionleft2(e.target.value)
}

function handlethomastestleft(event){
    event.preventDefault()
    if(!thomastestleft.includes(event.target.name)){
        setthomastestleft([...thomastestleft, event.target.name])
      }
      else if(thomastestleft.filter(item => item===event.target.name).length === 1){
      setthomastestleft(thomastestleft.filter(item=>item!==event.target.name));
      }
}


function handlethomastestright(event){
    event.preventDefault()
    if(!thomastestright.includes(event.target.name)){
        setthomastestright([...thomastestright, event.target.name])
      }
      else if(thomastestright.filter(item => item===event.target.name).length === 1){
      setthomastestright(thomastestright.filter(item=>item!==event.target.name));
      }
}


function handlehipgrindleft(e){
    e.preventDefault()
    sethipgrindleft(e.target.value)
}
function handlesex(e){
  e.preventDefault()
  setsex(e.target.value)
}

function handlehipgrindright(e){
    e.preventDefault()
    sethipgrindright(e.target.value)
}


function handleslrhsleft(e){
    e.preventDefault()
    setslrhsleft(e.target.value)
}


function handleslrhsright(e){
    e.preventDefault()
    setslrhsright(e.target.value)
}


function handlekneehyperextensionleft(e){
    e.preventDefault()
    setkneehyperextensionleft(e.target.value)
}


function handlekneehyperextensionright(e){
    e.preventDefault()
    setkneehyperextensionright(e.target.value)
}


function handlepronehipirleft(e){
    e.preventDefault()
    setpronehipirleft(e.target.value)
}


function handlepronehipirright(e){
    e.preventDefault()
    setpronehipirright(e.target.value)
}


function handlepronehiperleft(e){
    e.preventDefault()
    setpronehiperleft(e.target.value)
}


function handlepronehiperright(e){
    e.preventDefault()
    setpronehiperright(e.target.value)
}


function handleplantarflexionaromleft(e){
    e.preventDefault()
    setplantarflexionaromleft(e.target.value)
}


function handleplantarflexionaromright(e){
    e.preventDefault()
    setplantarflexionaromright(e.target.value)
}


function handle1stmtpdorsiflexionleft(e){
    e.preventDefault()
    set1stmtpdorsiflexionleft(e.target.value)
}


function handle1stmtpdorsiflexionright(e){
    e.preventDefault()
    set1stmtpdorsiflexionright(e.target.value)
}


function handleleglength(e){
    e.preventDefault()
    setleglength(e.target.value)
}


function handlehipabductionleft(e){
    e.preventDefault()
    sethipabductionleft(e.target.value)
}


function handlehipabductionright(e){
    e.preventDefault()
    sethipabductionright(e.target.value)
}


function handlehipadductionleft(e){
    e.preventDefault()
    sethipadductionleft(e.target.value)
}


function handlehipadductionright(e){
    e.preventDefault()
    sethipadductionright(e.target.value)
}


function handlehiperleft(e){
    e.preventDefault()
    sethiperleft(e.target.value)
}


function handlehiperright(e){
    e.preventDefault()
    sethiperright(e.target.value)
}


function handlekneeflexion(e){
    e.preventDefault()
    setkneeflexion(e.target.value)
}
function handlehipabductionright2(e){
  e.preventDefault()
  sethipabductionright2(e.target.value)
}


function handlehipadductionleft2(e){
  e.preventDefault()
  sethipadductionleft2(e.target.value)
}


function handlehipadductionright2(e){
  e.preventDefault()
  sethipadductionright2(e.target.value)
}


function handlehiperleft2(e){
  e.preventDefault()
  sethiperleft2(e.target.value)
}


function handlehiperright2(e){
  e.preventDefault()
  sethiperright2(e.target.value)
}


function handlekneeflexion2(e){
  e.preventDefault()
  setkneeflexion2(e.target.value)
}

function handlesinglelegstanceleft(e){
    e.preventDefault()
    setsinglelegstanceleft(e.target.value)
}


function handlesinglelegstanceright(e){
    e.preventDefault()
    setsinglelegstanceright(e.target.value)
}


function handleanteriorleft1(e){
    e.preventDefault()
    setanteriorleft1(e.target.value)
}


function handleanteriorleft2(e){
    e.preventDefault()
    setanteriorleft2(e.target.value)
}


function handleanteriorleft3(e){
    e.preventDefault()
    setanteriorleft3(e.target.value)
}


function handleanteriorright1(e){
    e.preventDefault()
    setanteriorright1(e.target.value)
}


function handleanteriorright2(e){
    e.preventDefault()
    setanteriorright2(e.target.value)
}


function handleanteriorright3(e){
    e.preventDefault()
    setanteriorright3(e.target.value)
}


function handleposteromedialleft1(e){
    e.preventDefault()
    setposteromedialleft1(e.target.value)
}


function handleposteromedialleft2(e){
    e.preventDefault()
    setposteromedialleft2(e.target.value)
}


function handleposteromedialleft3(e){
    e.preventDefault()
    setposteromedialleft3(e.target.value)
}


function handleposteromedialright1(e){
    e.preventDefault()
    setposteromedialright1(e.target.value)
}


function handleposteromedialright2(e){
    e.preventDefault()
    setposteromedialright2(e.target.value)
}


function handleposteromedialright3(e){
    e.preventDefault()
    setposteromedialright3(e.target.value)
}


function handleposterolateralleft1(e){
    e.preventDefault()
    setposterolateralleft1(e.target.value)
}


function handleposterolateralleft2(e){
    e.preventDefault()
    setposterolateralleft2(e.target.value)
}


function handleposterolateralleft3(e){
    e.preventDefault()
    setposterolateralleft3(e.target.value)
}


function handleposterolateralright1(e){
    e.preventDefault()
    setposterolateralright1(e.target.value)
}


function handleposterolateralright2(e){
    e.preventDefault()
    setposterolateralright2(e.target.value)
}


function handleposterolateralright3(e){
    e.preventDefault()
    setposterolateralright3(e.target.value)
}


function handleposterolateralright3(e){
    e.preventDefault()
    setposterolateralright3(e.target.value)
}


function handlesinglelegreleveleft(e){
    e.preventDefault()
    setsinglelegreleveleft(e.target.value)
}


function handlesinglelegreleveright(e){
    e.preventDefault()
    setsinglelegreleveright(e.target.value)
}


function handlesinglelegbridgeleft(e){
    e.preventDefault()
    setsinglelegbridgeleft(e.target.value)
}


function handlesinglelegbridgeright(e){
    e.preventDefault()
    setsinglelegbridgeright(e.target.value)
}


function handlesideplankhipableft(e){
    e.preventDefault()
    setsideplankhipableft(e.target.value)
}


function handlesideplankhipabright(e){
    e.preventDefault()
    setsideplankhipabright(e.target.value)
}


function handlepowerhoptestleft(e){
    e.preventDefault()
    setpowerhoptestleft(e.target.value)
}


function handlepowerhoptestright(e){
    e.preventDefault()
    setpowerhoptestright(e.target.value)
}


function handleckcuest(e){
    e.preventDefault()
    setckcuest(e.target.value)
    if(Number(ckcuest)>=25){setckcuest("100")}
    else if(Number(ckcuest)<25&&Number(ckcuest)>=20){setckcuest("75")}
    else if(Number(ckcuest)<20&&Number(ckcuest)>=15){setckcuest("25")}
    else if(Number(ckcuest)<15){setckcuest("0")}
   
}
async function submitdata(e){
  e.preventDefault()
  setSubmited(true)

  let data = {
    "height":height,
"weight":weight,
"restingbp":restingbp,
"restinghr":restinghr,
"maxhr":maxhr,
"recoveryhr":recoveryhr,
"fitnesscategory":fitnesscategory,
"pelvisleft":pelvisleft,
"pelvisright":pelvisright,
"kneepositionleft":kneepositionleft,
"kneepositionright":kneepositionright,
"trunkpositionleft":trunkpositionleft,
"trunkpositionright":trunkpositionright,
"steadystanceleft":steadystanceleft,
"steadystanceright":steadystanceright,
"armstrategyleft":armstrategyleft,
"armstrategyright":armstrategyright,
"scoliosisadams":scoliosisadams,
"ribhump":ribhump,
"ribarea":ribarea,
"fordwardbending":fordwardbending,
"knees":knees,
"genurecurvatumleft":genurecurvatumleft,
"scapularwingingleft":scapularwingingleft,
"footalignmentleft":footalignmentleft,
"halluxvalgusleft":halluxvalgusleft,
"genurecurvatumright":genurecurvatumright,
"scapularwingingright":scapularwingingright,
"footalignmentright":footalignmentright,
"halluxvalgusright":halluxvalgusright,
"goodalignment":goodalignment,
"valgusvarus":valgusvarus,
"range":range,
"sufficientupwardrotationleft":sufficientupwardrotationleft,
"jitteringleft":jitteringleft,
"wingingleft":wingingleft,
"sufficientupwardrotationright":sufficientupwardrotationright,
"jitteringright":jitteringright,
"wingingright":wingingright,
"passivedfleft":passivedfleft,
"passivedfright":passivedfright,
"passiveappleft":passiveappleft,
"passiveappright":passiveappright,
"hyperextensionelbowleft":hyperextensionelbowleft,
"hyperextensionelbowright":hyperextensionelbowright,
"1stpostitionturnoutleft":stpostitionturnoutleft,
"1stpostitionturnoutright":stpostitionturnoutright,
"firstpositiondiscsleft":firstpositiondiscsleft,
"firstpositiondiscsright":firstpositiondiscsright,
"thomastestleft":thomastestleft,
"thomastestright":thomastestright,
"hipgrindleft":hipgrindleft,
"hipgrindright":hipgrindright,
"slrhsleft":slrhsleft,
"slrhsright":slrhsright,
"kneehyperextensionleft":kneehyperextensionleft,
"kneehyperextensionright":kneehyperextensionright,
"pronehipirleft":pronehipirleft,
"pronehipirright":pronehipirright,
"pronehiperleft":pronehiperleft,
"pronehiperright":pronehiperright,
"plantarflexionaromleft":plantarflexionaromleft,
"plantarflexionaromright":plantarflexionaromright,
"1stmtpdorsiflexionleft":stmtpdorsiflexionleft,
"1stmtpdorsiflexionright":stmtpdorsiflexionright,
"leglength":leglength,
"hipabductionleft":hipabductionleft,
"hipabductionright":hipabductionright,
"hipadductionleft":hipadductionleft,
"hipadductionright":hipadductionright,
"hiperleft":hiperleft,
"hiperright":hiperright,
"kneeflexionleft":kneeflexionleft,
"kneeflexionright":kneeflexionright,
"hipabductionleft2":hipabductionleft2,
"hipabductionright2":hipabductionright2,
"hipadductionleft2":hipadductionleft2,
"hipadductionright2":hipadductionright2,
"hiperleft2":hiperleft2,
"hiperright2":hiperright2,
"kneeflexionleft2":kneeflexionleft2,
"kneeflexionright2":kneeflexionright2,
"singlelegstanceleft":singlelegstanceleft,
"singlelegstanceright":singlelegstanceright,
"anteriorleft1":anteriorleft1,
"anteriorleft2":anteriorleft2,
"anteriorleft3":anteriorleft3,
"anteriorright1":anteriorright1,
"anteriorright2":anteriorright2,
"anteriorright3":anteriorright3,
"posteromedialleft1":posteromedialleft1,
"posteromedialleft2":posteromedialleft2,
"posteromedialleft3":posteromedialleft3,
"posteromedialright1":posteromedialright1,
"posteromedialright2":posteromedialright2,
"posteromedialright3":posteromedialright3,
"posterolateralleft1":posterolateralleft1,
"posterolateralleft2":posterolateralleft2,
"posterolateralleft3":posterolateralleft3,
"posterolateralright1":posterolateralright1,
"posterolateralright2":posterolateralright2,
"posterolateralright3":posterolateralright3,
"singlelegreleveleft":singlelegreleveleft,
"singlelegreleveright":singlelegreleveright,
"singlelegbridgeleft":singlelegbridgeleft,
"singlelegbridgeright":singlelegbridgeright,
"sideplankhipableft":sideplankhipableft,
"sideplankhipabright":sideplankhipabright,
"powerhoptestleft":powerhoptestleft,
"powerhoptestright":powerhoptestright,
"ckcuest":ckcuest
  }
await API.graphql(graphqlOperation(createBfa, {input: data}))
}
function returnhome(e){
  e.preventDefault()
  setSubmited(false)
}

    return(
    <Container className="App">
      <Typography className={classes.itemTitle}>BFA FORM</Typography>
    {submited===false?
    <div style={{border:'2px black solid', margin:"10px 0"}}>
      
      <div className={classes.item} >
        <Typography className={classes.itemTitle}>Station 1</Typography>


      <Typography htmlFor="height">Enter your height (cm)</Typography>
      <TextField variant="outlined" id="height" onChange={handleheight}/>

      <Typography htmlFor="weight">Enter your weight (lbs)</Typography>
      <TextField variant="outlined" id="weight"  onChange={handleweight}/>
      
      <Typography htmlFor="height">Enter your Resting BP</Typography>
      <TextField variant="outlined" id="restingbp" onChange={handlerestingbp}/>

      <Typography htmlFor="weight">Enter your Resting HR)</Typography>
      <TextField variant="outlined" id="restinghr" onChange={handlerestinghr}/>
      </div>
      <div style={{border:'2px black solid', margin:"10px 0"}}>
        <div className={classes.item}>
        
        <Typography  className={classes.itemTitle}>Station 2</Typography>
        <div className={classes.item} >

      <Typography >Enter your Max HR</Typography>
      <TextField variant="outlined" onChange={handlemaxhr}/>
      
      <Typography >Enter your Recovery HR</Typography>
      <TextField variant="outlined" onChange={handlerecoveryhr}/>

      <Typography >Enter your Fitness Category</Typography>
      <TextField variant="outlined" onChange={handlefitnesscategory}/>
      </div>
   
        <Typography className={classes.itemTitle}>Single Limb Squat	</Typography>
        <div className={classes.item}>
        <div>
      <Typography><Typography className={classes.itemTitle}>Pelvis	</Typography>	</Typography>
      <Typography>left</Typography>
        <FormControl id='plantarArom' component="fieldset" >
        <RadioGroup onChange={handlepelvisleft} >
        <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
        <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
        </RadioGroup>
        <Typography>right</Typography>
        <RadioGroup onChange={handlepelvisright}>
        <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
        <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
        </RadioGroup>
        </FormControl>

        <Typography><Typography className={classes.itemTitle}>Knee Position		</Typography>	</Typography>
      <Typography>left</Typography>
        <FormControl  component="fieldset">
        <RadioGroup onChange={handlekneepositionleft} >
        <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
        <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
        </RadioGroup>
        <Typography>right</Typography>
        <RadioGroup onChange={handlekneepositionright} >
        <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
        <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
        </RadioGroup>
        </FormControl>

        <Typography><Typography className={classes.itemTitle}>Trunk Position	</Typography>	</Typography>
      <Typography>left</Typography>
        <FormControl id='plantarArom' component="fieldset">
        <RadioGroup onChange={handletrunkpositionleft}>
        <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
        <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
        </RadioGroup>
        <Typography>right</Typography>
        <RadioGroup onChange={handletrunkpositionright}>
        <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
        <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
        </RadioGroup>
        </FormControl>

        <Typography><Typography className={classes.itemTitle}>Steady Stance		</Typography>	</Typography>
      <Typography>left</Typography>
        <FormControl id='plantarArom' component="fieldset">
        <RadioGroup  onChange={handlesteadystanceleft}>
        <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
        <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
        </RadioGroup  >
        <Typography>right</Typography>
        <RadioGroup onChange={handlesteadystanceright}>
        <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
        <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
        </RadioGroup>
        </FormControl>

        <Typography><Typography className={classes.itemTitle}>Arm Strategy	</Typography>	</Typography>
      <Typography>left</Typography>
        <FormControl id='plantarArom' component="fieldset">
        <RadioGroup onChange={handlearmstrategyleft}>
        <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
        <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
        </RadioGroup>
        <Typography>right</Typography>
        <RadioGroup onChange={handlearmstrategyright}>
        <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
        <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
        </RadioGroup>
        </FormControl>
        </div>
        </div>
        </div>
        <div className={classes.item} style={{border:'2px black solid', margin:"10px 0"}}><Typography  className={classes.itemTitle}>Station 3A</Typography>
      <div style={{margin:"10px auto"}}>
      <Typography  className={classes.itemTitle}>
        1. Scoliosis: Adams's Forward Bending
      </Typography>
      <div className={classes.slides}> 
     <Slider
      min={0}
      max={2}
      defaultValue={0}
      valueLabelFormat={valueScoliosis}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks} 
      />
      </div>
      </div>
  
      <div className={classes.slides}>
 
      </div>
      <div>
      <Typography>Rib Hump</Typography>
        <FormControl id='Rib Hump' component="fieldset">
        <RadioGroup aria-label="Rib Hump" name="Rib Hump" onChange={handleribhump} >
        <FormControlLabel value="Left" control={<Radio />} label="Left" />
        <FormControlLabel value="Right" control={<Radio />} label="Right" />
        </RadioGroup>
        </FormControl>
        </div>

        <div>
      <Typography>Area</Typography>
        <FormControl id='Area' component="fieldset">
        <RadioGroup aria-label="Are" name="Area" onChange={handleribarea} >
        <FormControlLabel value="Thoracic" control={<Radio />} label="Thoracic" />
        <FormControlLabel value="Lumbar" control={<Radio />} label="Lumbar" />
        </RadioGroup>
        </FormControl>
        </div>
        <div>
        <Typography >2. Forward Bending - Finger Tips to...</Typography>
        <FormControl  variant="outlined" >
      
        <Select onChange={handlefordwardbending}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          //value={ethnicity}
          //onChange={handleEthnicity}
          label="Ethnicity"
        >
                <MenuItem value="Leg"> Leg </MenuItem>
                <MenuItem value="Toes ">Toes </MenuItem>
                <MenuItem value="Floor"> Floor </MenuItem>
                <MenuItem value="Palms to Floor"> Palms to Floor </MenuItem>
                <MenuItem value="Palms behind feet">Palms behind Feet</MenuItem>
        </Select>
      </FormControl>
      </div>
    <div className={classes.item}>
        
        <div>
      <Typography>3. Knees</Typography>
        <FormControl id='knees' component="fieldset">
        <RadioGroup aria-label="knees" name="knees" onChange={handleknees} >
        <FormControlLabel value="Genu Varus" control={<Radio />} label="Genu Varus" />
        <FormControlLabel value="Genu Valgus" control={<Radio />} label="Genu Valgus" />
        </RadioGroup>
        </FormControl>
        </div>
        <div>
      <Typography>Genu Recurvatum</Typography>
      <Typography>Left</Typography>
        <FormControl id='genuRecurvatum' component="fieldset">
        <RadioGroup aria-label="genuRecurvatum" name="genuRecurvatum" onChange={handlegenurecurvatumleft} >
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>
        <Typography>Right</Typography>
        <FormControl id='genuRecurvatum' component="fieldset">
        <RadioGroup aria-label="genuRecurvatum" name="genuRecurvatum" onChange={handlegenurecurvatumright} >
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>
        </div>


    <div>
      <Typography>Scapular Winging</Typography>
      <Typography>Left</Typography>
        <FormControl id='Scapular Winging' component="fieldset">
        <RadioGroup aria-label="Scapular Winging" name="Scapular Winging" onChange={handlescapularwingingleft} >
        <FormControlLabel value="0" control={<Radio />} label="0" />
        <FormControlLabel value="1" control={<Radio />} label="1" />
        <FormControlLabel value="2" control={<Radio />} label="2" />
        </RadioGroup>
        </FormControl>
        <Typography>Right</Typography>
        <FormControl id='Scapular Winging' component="fieldset">
        <RadioGroup aria-label="Scapular Winging" name="Scapular Winging" onChange={handlescapularwingingright} >
        <FormControlLabel value="0" control={<Radio />} label="0" />
        <FormControlLabel value="1" control={<Radio />} label="1" />
        <FormControlLabel value="2" control={<Radio />} label="2" />
        </RadioGroup>
        </FormControl>
        </div>


    <div>
      <Typography>Foot Alinment</Typography>
      <Typography>Left</Typography>
        <FormControl  component="fieldset">
        <RadioGroup  onChange={handlefootalignmentleft} >
        <FormControlLabel value="cavus" control={<Radio />} label="cavus" />
        <FormControlLabel value="normal" control={<Radio />} label="normal" />
        <FormControlLabel value="pronation" control={<Radio />} label="pronation" />
        </RadioGroup>
        </FormControl>
        <Typography>Right</Typography>
        <FormControl  component="fieldset">
        <RadioGroup  onChange={handlefootalignmentright} >
        <FormControlLabel value="cavus" control={<Radio />} label="cavus" />
        <FormControlLabel value="normal" control={<Radio />} label="normal" />
        <FormControlLabel value="pronation" control={<Radio />} label="pronation" />
        </RadioGroup>
        </FormControl>
        </div>


    <div>
      <Typography>Hallux Valgus</Typography>
      <Typography>Left</Typography>
        <FormControl  component="fieldset">
        <RadioGroup  onChange={handlehalluxvalgusleft} >
        <Typography>Left:</Typography>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>
        <Typography>Right</Typography>
        <FormControl  component="fieldset">
        <RadioGroup  onChange={handlehalluxvalgusright} >
        <Typography>Left:</Typography>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>
        </div>
    
        <div className={classes.item}>
  

   
</div>
      

<Typography className={classes.itemTitle}>Knees: Primitive Squat (Feet Hip Width apart, heels on floor)</Typography>
    <div>
      <Typography>Good Alignment</Typography>
        <FormControl id='Good Alignment' component="fieldset">
        <RadioGroup aria-label="Good Alignment" name="Good Alignment" onChange={handlegoodalignment} >
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>
        </div>


    <div>
      <Typography>Neuromotor control – Knees</Typography>
        <FormControl id='Neuromotor control – Knees' component="fieldset">
        <RadioGroup aria-label="Neuromotor control – Knees" name="Neuromotor control – Knees"  onChange={handlevalgusvarus}>
        <FormControlLabel value="Varus" control={<Radio />} label="Varus" />
        <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
        <FormControlLabel value="Valgus" control={<Radio />} label="Valgus" />
        </RadioGroup>
        </FormControl>
        </div>


    <div>
      <Typography>Range</Typography>
        <FormControl id='Range' component="fieldset">
        <RadioGroup aria-label="Range" name="Range" onChange={handlerange} >
        <FormControlLabel value="full" control={<Radio />} label="full" />
        <FormControlLabel value="other" control={<Radio />} label="other" />
        </RadioGroup>
        </FormControl>
        </div>
      
<div>
        <Typography>Scapula - Port de bras </Typography>
        <div>
        <Typography>Left </Typography>
        <div>
      <Typography>Sufficient upward rotation</Typography>
        <FormControl id='Sufficient upward rotation' component="fieldset">
        <RadioGroup aria-label="Sufficient upward rotation" name="Sufficient upward rotation" onChange={handlesufficientupwardrotationleft} >
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>
        </div>

        <div>
      <Typography>Jittering</Typography>
        <FormControl id='Sufficient upward rotation' component="fieldset">
        <RadioGroup aria-label="Sufficient upward rotation" name="Sufficient upward rotation" onChange={handlejitteringleft}  >
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>
        </div>

        <div>
      <Typography>Winging</Typography>
        <FormControl id='Sufficient upward rotation' component="fieldset">
        <RadioGroup aria-label="Sufficient upward rotation" name="Sufficient upward rotation" onChange={handlewingingleft} >
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>
        </div>
        </div>

        <div>
        <Typography>Right </Typography>
        <div>
      <Typography>Sufficient upward rotation</Typography>
        <FormControl id='Sufficient upward rotation' component="fieldset">
        <RadioGroup aria-label="Sufficient upward rotation" name="Sufficient upward rotation" onChange={handlesufficientupwardrotationright}  >
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>
        </div>

        <div>
      <Typography>Jittering</Typography>
        <FormControl id='Sufficient upward rotation' component="fieldset">
        <RadioGroup aria-label="Sufficient upward rotation" name="Sufficient upward rotation" onChange={handlejitteringright} >
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>
        </div>

        <div>
      <Typography>Winging</Typography>
        <FormControl id='Sufficient upward rotation' component="fieldset">
        <RadioGroup aria-label="Sufficient upward rotation" name="Sufficient upward rotation" onChange={handlewingingright} >
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>
        </div>
        </div>
        
        </div>
    </div>
</div>

    <Typography className={classes.itemTitle}>station 3B</Typography>
    <div style={{margin:'5%',display:'flex',flexDirection:'column'}}>
    <label for="upperExtremity"><b>Upper Extremity (Beighton Score)</b></label>
            <label for="passiveDF">Passive DF of 5th finger MCP beyond 90 degrees</label>
            <label for="leftPassiveDF">Left: </label>
            <FormControl>
            <RadioGroup id="leftPassiveDF" onChange={handlepassivedfleft}>
                <FormControlLabel label="Yes" control={<Radio />} value="Yes">Yes</FormControlLabel>
                <FormControlLabel label="No" control={<Radio />} value="No">No</FormControlLabel>
            </RadioGroup>
            <label for="rightPassiveDF">Right: </label>
            <RadioGroup id="rightPassiveDF" onChange={handlepassivedfright}>
                <FormControlLabel label="Yes" control={<Radio />} value="Yes">Yes</FormControlLabel>
                <FormControlLabel label="No" control={<Radio />} value="No">No</FormControlLabel>
            </RadioGroup>
            <label for="passiveApposition">Passive apposition of thumb to flexor aspect of forearm</label>
            <label for="leftPassiveApp">Left: </label>
            <RadioGroup id="leftPassiveApp" onChange={handlepassiveappleft}>
                <FormControlLabel label="Yes" control={<Radio />} value="Yes">Yes</FormControlLabel>
                <FormControlLabel label="No" control={<Radio />} value="No">No</FormControlLabel>
            </RadioGroup>
            <label for="rightPassiveApp">Right: </label>
            <RadioGroup id="rightPassiveApp" onChange={handlepassiveappright}>
                <FormControlLabel label="Yes" control={<Radio />} value="Yes">Yes</FormControlLabel>
                <FormControlLabel label="No" control={<Radio />} value="No">No</FormControlLabel>
            </RadioGroup>
            <label for="hyperextension">Hyperextension of elbow beyond 10 degrees</label>
            <label for="leftHyperextension">Left: </label>
            <RadioGroup id="leftHyperextension" onChange={handlehyperextensionelbowleft}>
                <FormControlLabel label="Yes" control={<Radio />} value="Yes">Yes</FormControlLabel>
                <FormControlLabel label="No" control={<Radio />} value="No">No</FormControlLabel>
            </RadioGroup><label for="rightHyperextension">Right: </label>
            <RadioGroup id="rightHyperextension" onChange={handlehyperextensionelbowright}>
                <FormControlLabel label="Yes" control={<Radio />} value="Yes">Yes</FormControlLabel>
                <FormControlLabel label="No" control={<Radio />} value="No">No</FormControlLabel>
            </RadioGroup>
            </FormControl>

            <Typography>TURNOUT – 3B	</Typography>
            <Typography>1ST POSITION TURNOUT (FLOOR)	</Typography>
            <Typography>left	</Typography>
        <TextField  variant="outlined" onChange={handle1stpostitionturnoutleft} />
        <Typography>right	</Typography>
        <TextField  variant="outlined"  onChange={handle1stpostitionturnoutright}/>
        <Typography>1ST POSITION - DISCS 	</Typography>
        <Typography>left	</Typography>
        <TextField  variant="outlined"  onChange={handlefirstpositiondiscsleft}/>
        <Typography>right	</Typography>
        <TextField  variant="outlined" onChange={handlefirstpositiondiscsright} />
            </div>


            <div style={{border:'2px black solid', margin:"10px 0"}}>

    <div className={classes.item}>
    <Typography className={classes.itemTitle}>station 4</Typography>

    <Typography className={classes.itemTitle}>Thomas Test</Typography>
    <FormControl required id='Thomas Test' component="fieldset">
        <FormLabel component="legend">Left</FormLabel>
        <FormGroup>
        <FormControlLabel
        control={<Checkbox onChange={handlethomastestleft}  name="PSOAS" />} 
        label="PSOAS"/>
           <FormControlLabel
        control={<Checkbox onChange={handlethomastestleft}   name="RF" />} 
        label="RF"/>
           <FormControlLabel
        control={<Checkbox onChange={handlethomastestleft}   name="ITB" />} 
        label="ITB"/>
        </FormGroup>
        <FormLabel component="legend">Right</FormLabel>
        <FormGroup>
        <FormControlLabel
        control={<Checkbox onChange={handlethomastestright}   name="PSOAS" />} 
        label="PSOAS"/>
           <FormControlLabel
        control={<Checkbox onChange={handlethomastestright}  name="RF" />} 
        label="RF"/>
           <FormControlLabel
        control={<Checkbox  onChange={handlethomastestright} name="ITB" />} 
        label="ITB"/>
        </FormGroup>
      </FormControl>

      <div>
      <Typography>Hip Grind</Typography>
      <Typography>left</Typography>
        <FormControl id='Hip Grind' component="fieldset">
        <RadioGroup aria-label="Hip Grind" name="Hip Grind" onChange={handlehipgrindleft} >
        <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
        <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
        </RadioGroup>
        <Typography>right</Typography>
        <RadioGroup aria-label="Hip Grind" name="Hip Grind" onChange={handlehipgrindright} >
        <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
        <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
        </RadioGroup>
        </FormControl>
        </div>
        <div>
        <Typography>SLR HS (2nd LE straight)	</Typography>
            <Typography>left	</Typography>
        <TextField  variant="outlined" onChange={handleslrhsleft} />
        <Typography>right	</Typography>
        <TextField  variant="outlined" onChange={handleslrhsright} />
        </div>
        <div>
        <Typography>Knee Hyperextension	</Typography>
            <Typography>left	</Typography>
        <TextField  label="" variant="outlined" onChange={handlekneehyperextensionleft} />
        <Typography>right	</Typography>
        <TextField  label="" variant="outlined"  onChange={handlekneehyperextensionright}/>
        </div>
        <div>
        <Typography>Prone hip IR	</Typography>
            <Typography>left	</Typography>
        <TextField  label="" variant="outlined"  onChange={handlepronehipirleft}/>
        <Typography>right	</Typography>
        <TextField  label="" variant="outlined" onChange={handlepronehipirright} />
        </div>
        <div>
        <Typography>Prone hip ER	</Typography>
            <Typography>left	</Typography>
        <TextField  label="" variant="outlined" onChange={handlepronehiperleft} />
        <Typography>right	</Typography>
        <TextField  label="" variant="outlined" onChange={handlepronehiperright}  />
        </div>
        <div>
      <Typography>Plantar flexion AROM (talus parallel to tibia)	</Typography>
      <Typography>left</Typography>
        <FormControl id='plantarArom' component="fieldset">
        <RadioGroup onChange={handleplantarflexionaromleft}>
        <FormControlLabel value="Limited" control={<Radio />} label="Limited" />
        <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
        </RadioGroup>
        <Typography>right</Typography>
        <RadioGroup onChange={handleplantarflexionaromright} >
        <FormControlLabel value="Limited" control={<Radio />} label="Limited" />
        <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
        </RadioGroup>
        </FormControl>
        </div>

        <div>
      <Typography>1st MTP Dorsiflexion	</Typography>
      <Typography>left</Typography>
        <FormControl id='plantarArom' component="fieldset">
        <RadioGroup onChange={handle1stmtpdorsiflexionleft}>
        <FormControlLabel value="<90 ˚ " control={<Radio />} label="<90 ˚ " />
        <FormControlLabel value="90 ˚ +" control={<Radio />} label="90 ˚ +" />
        </RadioGroup>
        <Typography>right</Typography>
        <RadioGroup onChange={handle1stmtpdorsiflexionright}>
        <FormControlLabel value="<90 ˚ " control={<Radio />} label="<90 ˚ " />
        <FormControlLabel value="90 ˚ +" control={<Radio />} label="90 ˚ +" />
        </RadioGroup>
        </FormControl>
        </div>

        
        </div>
        </div>
        
        <div style={{border:'2px black solid', margin:"10px 0"}}>
    <Typography className={classes.itemTitle}>Station 5:  HANDHELD DYNAMOMETRY</Typography>


    <Typography>Leg length: ASIS to medial malleolus (CM):	</Typography>
        <TextField  label="" variant="outlined"  onChange={handleleglength}/>

        <div>
        <Typography>Hip Abduction 	</Typography>
            <Typography>left	</Typography>
        <TextField  label="" variant="outlined" onChange={handlehipabductionleft} />
        <TextField  label="" variant="outlined" onChange={handlehipabductionleft2} />
        <Typography>right	</Typography>
        <TextField  label="" variant="outlined" onChange={handlehipabductionright} />
        <TextField  label="" variant="outlined"  onChange={handlehipabductionright2}/>
        </div>

        <div>
        <Typography>Hip Adduction	</Typography>
            <Typography>left	</Typography>
        <TextField  label="" variant="outlined" onChange={handlehipadductionleft} />
        <TextField  label="" variant="outlined" onChange={handlehipadductionleft2}  />
        <Typography>right	</Typography>
        <TextField  label="" variant="outlined" onChange={handlehipadductionright} />
        <TextField  label="" variant="outlined" onChange={handlehipadductionright2} />
        </div>

        <div>
        <Typography>Hip ER		</Typography>
            <Typography>left	</Typography>
        <TextField  label="" variant="outlined"  onChange={handlehiperleft}/>
        <TextField  label="" variant="outlined"  onChange={handlehiperleft2}/>
        <Typography>right	</Typography>
        <TextField  label="" variant="outlined" onChange={handlehiperright} />
        <TextField  label="" variant="outlined" onChange={handlehiperright2} />
        </div>
        <div>
        <Typography>Knee flexion	</Typography>
            <Typography>left	</Typography>
        <TextField  label="" variant="outlined"  onChange={handlekneeflexionleft}/>
        <TextField  label="" variant="outlined"  onChange={handlekneeflexionleft2} />
        <Typography>right	</Typography>
        <TextField  label="" variant="outlined"   onChange={handlekneeflexionright}/>
        <TextField  label="" variant="outlined"   onChange={handlekneeflexionright2}/>
        </div>
</div>
<div style={{border:'2px black solid', margin:"10px 0"}}>
    <Typography className={classes.itemTitle}>Station 6: Balance</Typography>
<div className={classes.item}>
<div>
      <Typography>Single Leg stance eyes closed	(Seconds)</Typography>
      <Typography>left</Typography>
        <FormControl id='plantarArom' component="fieldset">
        <RadioGroup  onChange={handlesinglelegstanceleft}>
        <FormControlLabel value="T" control={<Radio />} label="T" />
        <FormControlLabel value="B" control={<Radio />} label="B" />
        <FormControlLabel value="H" control={<Radio />} label="H" />
        </RadioGroup>
        <Typography>right</Typography>
        <RadioGroup onChange={handlesinglelegstanceright}>
        <FormControlLabel value="T" control={<Radio />} label="T" />
        <FormControlLabel value="B" control={<Radio />} label="B" />
        <FormControlLabel value="H" control={<Radio />} label="H" />
        </RadioGroup>
        </FormControl>
        </div>
<Typography>*Y - Balance Test</Typography>
        <div>
        <Typography>Anterior	</Typography>
            <Typography>left	</Typography>
        <TextField  label="" variant="outlined"  onChange={handleanteriorleft1} />
        <TextField  label="" variant="outlined"  onChange={handleanteriorleft2} />
        <TextField  label="" variant="outlined"  onChange={handleanteriorleft3} />
        <Typography>right	</Typography>
        <TextField  label="" variant="outlined"  onChange={handleanteriorright1} />
        <TextField  label="" variant="outlined"   onChange={handleanteriorright2}/>
        <TextField  label="" variant="outlined"   onChange={handleanteriorright3}/>
        </div>
        <div>
        <Typography>Posteromedial		</Typography>
            <Typography>left	</Typography>
        <TextField  label="" variant="outlined"   onChange={handleposteromedialleft1}/>
        <TextField  label="" variant="outlined" onChange={handleposteromedialleft2} />
        <TextField  label="" variant="outlined" onChange={handleposteromedialleft3} />
        <Typography>right	</Typography>
        <TextField  label="" variant="outlined" onChange={handleposteromedialright1} />
        <TextField  label="" variant="outlined"  onChange={handleposteromedialright2}/>
        <TextField  label="" variant="outlined" onChange={handleposteromedialright3} />
        </div>
        <div>
        <Typography>Posterolateral		</Typography>
            <Typography>left	</Typography>
        <TextField  label="" variant="outlined"  onChange={handleposterolateralleft1}/>
        <TextField  label="" variant="outlined" onChange={handleposterolateralleft2} />
        <TextField  label="" variant="outlined"  onChange={handleposterolateralleft3}/>
        <Typography>right	</Typography>
        <TextField  label="" variant="outlined" onChange={handleposterolateralright1} />
        <TextField  label="" variant="outlined" onChange={handleposterolateralright2} />
        <TextField  label="" variant="outlined" onChange={handleposterolateralright3} />
        </div>
        </div>
            
        </div>    
            
        <div style={{border:'2px black solid', margin:"10px 0"}}>
    <Typography className={classes.itemTitle}>Station 7- LOWER EXTREMITY ENDURANCE </Typography>

            <div>
        <Typography>Single leg relevé (35 reps)</Typography>
            <Typography>left	</Typography>
        <TextField  label="" variant="outlined" onChange={handlesinglelegreleveleft} />
        
        <Typography>right	</Typography>
        
        <TextField  label="" variant="outlined" onChange={handlesinglelegreleveright} />
        </div>

        <div>
        <Typography>Single leg bridge (25 reps)	</Typography>
            <Typography>left	</Typography>
        <TextField  label="" variant="outlined"  onChange={handlesinglelegbridgeleft}/>
        
        <Typography>right	</Typography>
        
        <TextField  label="" variant="outlined"  onChange={handlesinglelegbridgeright}  />
        </div>

        <div>
        <Typography>Side plank w/ hip abduction (45 sec)		</Typography>
            <Typography>left	</Typography>
        <TextField  label="" variant="outlined"   onChange={handlesideplankhipableft}/>
        
        <Typography>right	</Typography>
        
        <TextField  label="" variant="outlined"  onChange={handlesideplankhipabright} />
        </div>

        <div>
        <Typography>Power: Hop Test (cm)		</Typography>
            <Typography>left	</Typography>
        <TextField  label="" variant="outlined"  onChange={handlepowerhoptestleft} />
        
        <Typography>right	</Typography>
        
        <TextField  label="" variant="outlined"  onChange={handlepowerhoptestright}  />

        </div>
       <div>
          <Typography>Select your Sex</Typography>
        <FormControl  component="fieldset">
        <RadioGroup  onChange={handlesex}  >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
        </FormControl>
       </div>

        <div>
        <Typography>CKCUEST (15 sec)	</Typography>
 
        <TextField  label="" variant="outlined"   onChange={handleckcuest}/>
        
     
        </div>
        </div>

<div style={{margin:'10px'}}> <Fab variant="extended" color="primary"><Button onClick={submitdata}> SUBMIT</Button></Fab></div>
</div>
</div>
:
<div id="results" className={classes.item}>
  <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
<CheckCircleIcon  style={{borderRadius:"50%",fontSize:"100px"}} />
        <h3>Your Response has been Successfully Submitted.</h3>
        </div>
<Typography className={classes.itemTitle}>RESULTS:</Typography>
<Typography className={classes.itemTitle}>Station 2</Typography>
{pelvisleft==="Negative"?setSingleLimbSquat(singlelimbsquat+1):null}
{pelvisright==="Negative"?setSingleLimbSquat(singlelimbsquat+1):null}
{kneepositionleft==="Negative"?setSingleLimbSquat(singlelimbsquat+1):null}
{kneepositionright==="Negative"?setSingleLimbSquat(singlelimbsquat+1):null}
{trunkpositionleft==="Negative"?setSingleLimbSquat(singlelimbsquat+1):null}
{trunkpositionright==="Negative"?setSingleLimbSquat(singlelimbsquat+1):null}
{steadystanceleft==="Negative"?setSingleLimbSquat(singlelimbsquat+1):null}
{steadystanceright==="Negative"?setSingleLimbSquat(singlelimbsquat+1):null}
{armstrategyleft==="Negative"?setSingleLimbSquat(singlelimbsquat+1):null}
{armstrategyright==="Negative"?setSingleLimbSquat(singlelimbsquat+1):null}
<div>{singlelimbsquat>=2?`Single Limb Squat Score: ${singlelimbsquat}`:null}</div>
<Typography className={classes.itemTitle}>Station 3A</Typography>
<div>{fordwardbending.toLowerCase()==="floor"||fordwardbending.toLowerCase()==="palms to floor"||fordwardbending.toLowerCase()==="palms behind feet"?<Typography>{`Foward Bending Problem: ${fordwardbending}`}</Typography>:null}</div>
<div>{scapularwingingleft>0?`Left Scapular winging problem`:null}</div>
<div>{scapularwingingright>0?`Right Scapular winging problem`:null}</div>
<div>{footalignmentleft.toLocaleLowerCase()==="cavus"||footalignmentleft.toLocaleLowerCase()==="pronation"?`Left foot alignment problem`:null}</div>
<div>{footalignmentright.toLocaleLowerCase()==="cavus"||footalignmentright.toLocaleLowerCase()==="pronation"?`Right foot alignment problem`:null}</div>
<div>{halluxvalgusleft==="Yes"?`Left Hallux Valgus problem`:null}</div>
<div>{halluxvalgusright==="Yes"?`Right Hallux Valgus problem`:null}</div>
<div>{goodalignment==="No"?`Good Alignment problem`:null}</div>
<div>{sufficientupwardrotationleft==="No"?`Left Sufficient rotation problem`:null}</div>
<div>{sufficientupwardrotationright==="No"?`Right Sufficient rotation problem`:null}</div>
<div>{jitteringleft==="Yes"?`Right jittering problem`:null}</div>
<div>{jitteringright==="Yes"?`Right jittering problem`:null}</div>
<div>{wingingleft==="Yes"?`Left winging problem`:null}</div>
<div>{wingingright==="Yes"?`Right winging problem`:null}</div>
<Typography className={classes.itemTitle}>Station 3B</Typography>
<div>{passivedfleft==="No"?setBeightonScore(beightonscore+1):null}</div>
<div>{passivedfright==="No"?setBeightonScore(beightonscore+1):null}</div>
<div>{hyperextensionelbowleft==="No"?setBeightonScore(beightonscore+1):null}</div>
<div>{hyperextensionelbowright==="No"?setBeightonScore(beightonscore+1):null}</div>
<div>{fordwardbending==="floor"||fordwardbending==="palms to floor"||fordwardbending==="palms behind feet"?setBeightonScore(beightonscore+1):null}</div>
<div>{kneehyperextensionleft>=10?setBeightonScore(beightonscore+1):null}</div>
<div>{kneehyperextensionright>=10?setBeightonScore(beightonscore+1):null}</div>
<div>{`Beighton Score: ${beightonscore}`}</div>
<div>{`1st Position Turnout: ${stpostitionturnoutleft+stpostitionturnoutright}`}</div>
<div>{`1st Position Discs ${firstpositiondiscsleft+firstpositiondiscsright}`}</div>

<Typography className={classes.itemTitle}>Station 4</Typography>
<div>{thomastestleft.length<1?thomastestleft.map(item=>`Left ${item} Problem`):null}</div>
<div>{thomastestright.length<1?thomastestright.map(item=>`Right ${item} Problem`):null}</div>
<div>{hipgrindleft.toLowerCase()==="positive"?`Left Hip problem`:null}</div>
<div>{hipgrindright.toLowerCase()==="positive"?`Right Hip problem`:null}</div>
<div>{Number(slrhsleft)<90&&Number(slrhsleft)>0?`Left SLR HS problem`:null}</div>
<div>{Number(slrhsright)<90&&Number(slrhsright)>0?`Right SLR HS problem`:null}</div>
<div>{Number(kneehyperextensionleft)>10?`Left Knee hyper-extension problem`:null}</div>
<div>{Number(kneehyperextensionright)>10?`Right Knee hyper-extension problem`:null}</div>
<div>{Number(pronehipirleft)<30&&Number(pronehipirleft)>0?"Left Prone hip IR problem":null}</div>
<div>{Number(pronehipirright)<30&&Number(pronehipirright)>0?"Right Prone hip IR problem":null}</div>
<div>{Number(pronehiperleft)<45&&Number(pronehiperleft)>0?"Left Prone hip ER problem":null}</div>
<div>{Number(pronehiperright)<45&&Number(pronehiperright)>0?"Right Prone hip ER problem":null}</div>
<div>{plantarflexionaromleft.toLowerCase()==="limited"?`left Plantar flexion AROM`:null}</div>
<div>{plantarflexionaromright.toLowerCase()==="limited"?`right Plantar flexion AROM`:null}</div>
<div>{stmtpdorsiflexionleft==="<90 ˚ "?`left 1st MTP problem`:null}</div>
<div>{stmtpdorsiflexionright==="<90 ˚ "?`right 1st MTP problem`:null}</div>
<Typography className={classes.itemTitle}>Station 5</Typography>
<div>{`Hip Abduction AVG Left:${Number(hipabductionleft)+Number(hipabductionleft2)/2}`}</div>
<div>{`Hip Abduction AVG Right:${Number(hipabductionright)+Number(hipabductionright2)/2}`}</div>
<div>{`Hip Adduction AVG Left:${Number(hipadductionleft)+Number(hipadductionleft2)/2}`}</div>
<div>{`Hip Adduction AVG Right:${Number(hipadductionright)+Number(hipadductionright2)/2}`}</div>
<div>{`Hip ER AVG Left:${Number(hiperleft)+Number(hiperleft2)/2}`}</div>
<div>{`Hip ER AVG Right:${Number(hiperright)+Number(hiperright2)/2}`}</div>
<div>{`Knee Flexion AVG Left:${Number(kneeflexionleft)+Number(kneeflexionleft2)/2}`}</div>
<div>{`Knee Flexion  AVG Right:${Number(kneeflexionright)+Number(kneeflexionright2)/2}`}</div>
<div>{Number(singlelegstanceleft)<60?`Single leg stace eyes closed left problem`:null}</div>
<div>{Number(singlelegstanceright)<60?`Single leg stace eyes closed right problem`:null}</div>
<Typography className={classes.itemTitle}>Station 6</Typography>

<Typography className={classes.itemTitle}>Station 7</Typography>
{singlelegreleveleft>=35?setsinglelegreleveleft("Excellent"):
singlelegreleveleft<35&&singlelegreleveleft>=25?setsinglelegreleveleft("Very Good"):
singlelegreleveleft<25&&singlelegreleveleft>=16?setsinglelegreleveleft("Good"):
singlelegreleveleft<16?setsinglelegreleveleft("Needs Work"):null}

{singlelegreleveright>=35?setsinglelegreleveright("Excellent"):
singlelegreleveright<35&&singlelegreleveright>=25?setsinglelegreleveright("Very Good"):
singlelegreleveright<25&&singlelegreleveright>=16?setsinglelegreleveright("Good"):
singlelegreleveright<16?setsinglelegreleveright("Needs Work"):null}


{singlelegbridgeleft>=30?setsinglelegbridgeleft("Excellent"):
singlelegbridgeleft<30&&singlelegbridgeleft>=25?setsinglelegbridgeleft("Good"):
singlelegbridgeleft<25&&singlelegbridgeleft>=20?setsinglelegbridgeleft("Above average"):
singlelegbridgeleft<=19&&singlelegbridgeleft>=10?setsinglelegbridgeleft("Average"):
singlelegbridgeleft<10?setsinglelegbridgeleft("Needs Work"):null}

{singlelegbridgeright>=30?setsinglelegbridgeright("Excellent"):
singlelegbridgeright<30&&singlelegbridgeright>=25?setsinglelegbridgeright("Good"):
singlelegbridgeright<25&&singlelegbridgeright>=20?setsinglelegbridgeright("Above average"):
singlelegbridgeright<=19&&singlelegbridgeright>=10?setsinglelegbridgeright("Average"):
singlelegbridgeright<10?setsinglelegbridgeright("Needs Work"):null}

{sideplankhipableft>=45?setsideplankhipableft("Excellent"):
sideplankhipableft<45&&sideplankhipableft>=30?setsideplankhipableft("Very Good"):
sideplankhipableft<30&&sideplankhipableft>=20?setsideplankhipableft("Average"):
sideplankhipableft<20?setsideplankhipableft("Needs Work"):null}

{sideplankhipabright>=45?setsideplankhipabright("Excellent"):
sideplankhipabright<45&&sideplankhipabright>=30?setsideplankhipabright("Very Good"):
sideplankhipabright<30&&sideplankhipabright>=20?setsideplankhipabright("Average"):
sideplankhipabright<20?setsideplankhipabright("Needs Work"):null}

{sex==='male'?
(powerhoptestleft>=202?setpowerhoptestleft("Good"):
powerhoptestleft<202&&powerhoptestleft>=182?setpowerhoptestleft("Average"):
powerhoptestleft<182?setpowerhoptestleft("Poor"):null)

(powerhoptestright>=202?setpowerhoptestright("Good"):
powerhoptestright<202&&powerhoptestright>=182?setpowerhoptestright("Average"):
powerhoptestright<182?setpowerhoptestright("Poor"):null
)
:
sex==='female'?
(powerhoptestleft>=159?setpowerhoptestleft("Good"):
powerhoptestleft<159&&powerhoptestleft>=139?setpowerhoptestleft("Average"):
powerhoptestleft<139?setpowerhoptestleft("Poor"):null)

(powerhoptestright>=159?setpowerhoptestright("Good"):
powerhoptestright<159&&powerhoptestright>=139?setpowerhoptestright("Average"):
powerhoptestright<139?setpowerhoptestright("Poor"):null
)
:null
 }



<div>{`Single Leg Releve left: ${singlelegreleveleft}, Single Leg Releve right: ${singlelegreleveright}`}</div>
<div>{`Single Leg Releve left: ${singlelegbridgeleft}, Single Leg Releve right: ${singlelegbridgeright}`}</div>
<div>{`Single Leg Releve left: ${sideplankhipableft}, Single Leg Releve right: ${sideplankhipabright}`}</div>
<div>{`Single Leg Releve left: ${powerhoptestleft}, Single Leg Releve right: ${powerhoptestright}`}</div>
<div>{`CKCUEST: ${ckcuest}`}</div>
<div></div>
<div style={{margin:'10px'}}> <Fab variant="extended" color="secondary"><Button onClick={returnhome}> Go Back</Button></Fab></div>
<Typography style={{color:'#00f'}} className={classes.itemTitle}>Please take a screenshot and save it for your own records</Typography>


</div>
    }
    </Container>
    );
}
export default BfaForm;