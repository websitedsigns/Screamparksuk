
import React,{useMemo,useState} from "react";
import {createRoot} from "react-dom/client";
import {Ghost,Search,Trophy,MapPin,ChevronRight,X,RotateCcw,SlidersHorizontal,CalendarDays,Clock3,Utensils,Users,Landmark,ArrowUpDown} from "lucide-react";
import "./styles.css";

const PARKS=[
{id:"tulleys",name:"Tulleys Shocktober Fest",location:"West Sussex",category:"Scream Park",dates:"October 2026",description:"Festival-style scream park with multiple scare attractions, street food, bars, live music and shows.",mazes:["The Chop Shop","The Haunted Hayride","The Creepy Cottage","The Cellar Returns","Electrick Circus","Doom Town","Wastelands","Purgatory","Appleton County Farm","ChopShop","Coven of 13","Hellements" ]},
{id:"farmaggedon",name:"Farmaggedon",location:"Lancashire",category:"Scream Park",dates:"October 2026",description:"Five award-winning scare houses with street theatre, live music, food, bars and Fear Go Round.",mazes:["Beast of Terror","Meat Locker","The Facility","Maze of Death","Hellucination"]},
{id:"drfrights",name:"Dr. Frights",location:"Northamptonshire",category:"Scream Park",dates:"October 2026",description:"Seven award-winning scare houses with street theatre, live music, food, bars and Fear Go Round.",mazes:["Black Death","Maid to Kill","Lights Out","Blood Bayou","Trick or Treat Street","Terror Below","Killer Clowns: Super Happy Fun World"]},
{id:"thorpe",name:"Thorpe Park Fright Nights",location:"Surrey",category:"Theme Park Halloween",dates:"2 Oct – 1 Nov 2026",description:"25 Years of Fear with five scare mazes, scare zones, shows and rides after dark.",mazes:["Tenement","Trailers","DeadBeat","Stitches","Survival Games"]},
{id:"alton",name:"Alton Towers Scarefest",location:"Staffordshire",category:"Theme Park Halloween",dates:"26 Sep – 1 Nov 2026",description:"Large Halloween event mixing thrill mazes, family experiences, rides in darkness and live entertainment.",mazes:["Final Exhibit","Edge of the Forest","Altonville Mine Tours: Tiny's Revenge","COMPOUND"]},
{id:"fear",name:"FEAR Scream Park",location:"Avon Valley",category:"Scream Park",dates:"October",description:"A dedicated scare attraction experience with multiple horror mazes and Halloween entertainment.",mazes:["Seeds of Evil","Malefica: Into Darkness","X4","The Core","Vita Nova"]},
{id:"cursed",name:"Village of the Cursed",location:"Essex",category:"Scream Park",dates:"October",description:"Essex’s No.1 Horror Experience",mazes:["DOOMentia","HMP Strangleways","INN-ForMassMurder","Tainted Blood","The Final Cut","The Inner Sanctum","The Station",]},
{id:"primevil",name:"PrimEvil",location:"Newcastle",category:"Scream Park",dates:"October",description:"Multi-maze Halloween scare event.",mazes:["The Asylum","The Haunting","The Woods"]},
{id:"psychopath",name:"Psychopath",location:"Norfolk",category:"Scream Park",dates:"October",description:"Multi-maze Halloween scare event.",mazes:["I Scream","Psycho Torium","One last Rampage", "Isolation", "Dolls House: The Factory", "Flight Path 666", "Psychopath VR", "Crawl Space", "Vandalised", "Origin of Evil", "The Darkness", "Cutthroat Island"]},
{id:"scarekingdom",name:"Scare Kingdom Scream Park",location:"Lancashire",category:"Scream Park",dates:"October",description:"Halloween scare park with immersive attractions and entertainment.",mazes:["ManorMortis","Gothica","Warehouse 669","Interrogation", "Body Snatchers", "Carnihell", ,]},
{id:"screamfest",name:"Screamfest",location:"Staffordhshire",category:"Scream Park",dates:"October",description:"Halloween scare event with multiple attractions.",mazes:["Mutation Damnation","Hellcatraz","Insomnia","Freakout On Tour","Hellboy Joes Zombie tour","Area 52"]},
{id:"howl",name:"The Howl Scream Park",location:"Bedfordshire",category:"Scream Park",dates:"October",description:"Immersive horror experience with multiple scare attractions.",mazes:["Shriek Easy","Red","Howl Valley High","Noxious Alley", "Full Moon Manor", "The Shed", "Squealers Yard"]},
{id:"xtreme",name:"Xtreme Scream Park",location:"Leicestershire",category:"Scream Park",dates:"October",description:"Halloween scare attraction with multiple themed experiences.",mazes:["The Witches of Hardluck wood","The Village","Spores","The Pie Factory","Ashhell Penitentiary","Circus Vs Circused","BlutLust", "The Village"]},
{id:"york",name:"York Maze Hallowscream",location:"Yorkshire",category:"Scream Park",dates:"October",description:"Halloween attraction combining maze-based scares and seasonal entertainment.",mazes:["Necropolis","The Singularity","Cornys Cornevils","Corntagion","The FleshPot", "Rednecks Revenge"]},
{id:"scaregrounds",name:"Yorkshire Scaregrounds",location:"Yorkshire",category:"Scream Park",dates:"October",description:"Halloween attraction combining maze-based scares and seasonal entertainment.",mazes:["Mutation: Be Afraid>","Body Stitchers","House of Bourbon","Old Mercy: Dead on Arrival","Carnival of Carnage"]},
{id:"blackpool",name:"Blackpool Pleasure Beach Journey To Hell",location:"Lancashire",category:"Theme Park Halloween",dates:"October",description:"Halloween season at the famous seaside theme park.",mazes:["Twisted Tunnels","Abyss","New Attraction 1","New Attraction 2"]},
{id:"leeds",name:"Leeds Scare Maze",location:"Yorkshire",category:"Scream Park",dates:"October",description:"Halloween attraction combining maze-based scares and seasonal entertainment.",mazes:["Horror Motel"]},
{id:"Stourbridge",name:"Stourbridge Scare Maze",location:"Midlands",category:"Scream Park",dates:"October",description:"Halloween attraction combining maze-based scares and seasonal entertainment.",mazes:["Stourbridge Scare Maze"]},
{id:"Walsall",name:"Walsall Scare Maze",location:"Midlands",category:"Scream Park",dates:"October",description:"Halloween attraction combining maze-based scares and seasonal entertainment.",mazes:["Walsall Scare Maze"]},
{id:"scarecity",name:"Scare City",location:"Lancashire",category:"Scream Park",dates:"October",description:"Halloween attraction combining maze-based scares and seasonal entertainment.",mazes:["Cutthroat","Devils Orphanage","Carnevalley","The Skinning Shed", "RestBite"]},
{id:"realm",name:"The Nightmare Realm",location:"London",category:"Scream Park",dates:"October",description:"Halloween attraction combining maze-based scares and seasonal entertainment.",mazes:["Avery Hill"]},
{id:"horrormania",name:"Horrormania",location:"Cambridgeshire",category:"Scream Park",dates:"October",description:"Halloween attraction combining maze-based scares and seasonal entertainment.",mazes:["Taylor Swift Goes Nuts","Camp Crystal Lake","Grindhouse","Stinkyface World","Twenty Eight Years Later","Peppa Pig with Chainsaws","Clown City", "Undead Vikings", "Children of the Corn", "Deadflix and Kills", "The House"]},


];

const blank=()=>({mazes:{},food:0,entertainment:0,feel:0,parkQuality:0,visitDate:"",review:""});
const load=()=>{try{return JSON.parse(localStorage.getItem("spuk-v2")||"{}")}catch{return{}}};
const save=x=>localStorage.setItem("spuk-v2",JSON.stringify(x));
const avg=a=>{const v=a.map(Number).filter(x=>x>0);return v.length?v.reduce((x,y)=>x+y,0)/v.length:0};

function calc(r,p){
 const mazeScores=p.mazes.map(n=>{const m=r?.mazes?.[n]; if(!m||!(m.scare&&m.actors&&m.theming))return 0; return (m.scare+m.actors+m.theming)/3}).filter(Boolean);
 const maze=avg(mazeScores);
 const park=avg([r?.food,r?.entertainment,r?.feel]);
 const overall=maze&&park?(maze+park)/2:0;
 return {maze,park,overall,percent:overall*10,complete:mazeScores.length};
}

function Pumpkin({value,set}){
 return <div className="pumpkins">{Array.from({length:10},(_,i)=><button key={i} className={i<value?"on":""} onClick={()=>set(i+1)}>🎃</button>)}<b>{value?`${value}/10`:"—"}</b></div>
}
function Stars({value,set}){
 return <div className="stars">{Array.from({length:5},(_,i)=><button key={i} className={i<value?"on":""} onClick={()=>set(i+1)}>★</button>)}<b>{value?`${value}/5`:"—"}</b></div>
}
function Slider({label,value,set}){return <div className="slider"><div><b>{label}</b><strong>{value||"—"}/10</strong></div><input type="range" min="0" max="10" value={value||0} onChange={e=>set(+e.target.value)}/></div>}

function App(){
 const [ratings,setRatings]=useState(load),[selected,setSelected]=useState(null),[tab,setTab]=useState("home"),[search,setSearch]=useState(""),[sort,setSort]=useState("score"),[filter,setFilter]=useState("All");
 const filtered=useMemo(()=>PARKS.filter(p=>(filter==="All"||p.category===filter)&&`${p.name} ${p.location}`.toLowerCase().includes(search.toLowerCase())).sort((a,b)=>sort==="score"?calc(ratings[b.id],b).overall-calc(ratings[a.id],a).overall:a.name.localeCompare(b.name)),[ratings,search,sort,filter]);
 const ranked=useMemo(()=>PARKS.map(p=>({...p,s:calc(ratings[p.id],p)})).filter(p=>p.s.overall>0).sort((a,b)=>b.s.overall-a.s.overall),[ratings]);
 const current=PARKS.find(p=>p.id===selected), r=current?(ratings[current.id]||blank()):null, s=current?calc(r,current):null;
 const update=(patch)=>{const next={...ratings,[current.id]:{...r,...patch}};setRatings(next);save(next)};
 const mazeUpdate=(name,patch)=>update({mazes:{...r.mazes,[name]:{...(r.mazes[name]||{}),...patch}}});
 const reset=()=>{if(confirm("Reset all Scream Parks UK ratings?")){setRatings({});save({})}};

 return <div className="app">
  <header><div className="header-inner"><button className="brand" onClick={()=>setTab("home")}><span>🎃</span><div><h1>SCREAM PARKS <em>UK</em></h1><small>THE HOME OF YOUR HALLOWEEN RATINGS</small></div></button><button className="reset" onClick={reset}><RotateCcw size={15}/> Reset</button></div></header>
  <nav><button className={tab==="home"?"active":""} onClick={()=>setTab("home")}><Ghost size={17}/> Parks</button><button className={tab==="leaderboard"?"active":""} onClick={()=>setTab("leaderboard")}><Trophy size={17}/> Leaderboard</button></nav>

  {tab==="home"&&<main>
   <section className="hero"><div><label>HALLOWEEN 2026</label><h2>Find the UK's<br/><span>ultimate scream.</span></h2><p>Rate every maze, compare the atmosphere and build your own definitive UK Halloween leaderboard.</p></div><div className="score-explainer"><div><span>01</span><b>MAZES</b><small>Scariness + Actors + Theming</small></div><div><span>02</span><b>PARK</b><small>Food + Entertainment + Feel</small></div><div><span>03</span><b>FINAL</b><small>Average → percentage</small></div></div></section>

   <section className="stats"><div><strong>{PARKS.length}</strong><span>Attractions</span></div><div><strong>{PARKS.reduce((a,p)=>a+p.mazes.length,0)}</strong><span>Mazes listed</span></div><div><strong>{ranked.length}</strong><span>You have rated</span></div><div><strong>{ranked[0]?`${ranked[0].s.percent.toFixed(0)}%`:"—"}</strong><span>Your #1</span></div></section>

   <section className="toolbar"><div className="search"><Search size={17}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search attraction or location"/></div><select value={filter} onChange={e=>setFilter(e.target.value)}><option>All</option><option>Scream Park</option><option>Theme Park Halloween</option><option>Family Halloween</option></select><button className="sort" onClick={()=>setSort(sort==="score"?"name":"score")}><ArrowUpDown size={15}/> {sort==="score"?"Top rated":"A–Z"}</button></section>
   <section className="cards">{filtered.map(p=>{const x=calc(ratings[p.id],p);return <article className="card" key={p.id} onClick={()=>setSelected(p.id)}><div className="card-cover"><span>{p.category}</span><strong>{x.overall?`${x.percent.toFixed(0)}%`:"RATE ME"}</strong></div><div className="card-body"><h3>{p.name}</h3><p><MapPin size={14}/>{p.location}</p><p className="desc">{p.description}</p><div className="chips"><span>🎃 {x.maze?x.maze.toFixed(1):"—"} maze</span><span>★ {x.park?x.park.toFixed(1):"—"} park</span><span>{p.mazes.length} mazes</span></div><footer><span>{p.dates}</span><ChevronRight size={17}/></footer></div></article>})}</section>
  </main>}

  {tab==="leaderboard"&&<main><section className="leader-head"><label>YOUR RATINGS</label><h2>Halloween leaderboard</h2><p>Your parks ranked by the Scream Parks UK scoring system.</p></section>{!ranked.length?<div className="empty"><Trophy size={45}/><h3>Your leaderboard is empty</h3><p>Rate your first attraction to start building it.</p></div>:<div className="leader">{ranked.map((p,i)=><div className="leader-row" key={p.id} onClick={()=>setSelected(p.id)}><b>#{i+1}</b><div><strong>{p.name}</strong><small>{p.location}</small></div><span>🎃 {p.s.maze.toFixed(1)}</span><span>★ {p.s.park.toFixed(1)}</span><strong className="pct">{p.s.percent.toFixed(0)}%</strong></div>)}</div>}</main>}

  {current&&<div className="overlay" onClick={()=>setSelected(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setSelected(null)}><X/></button>
   <div className="modal-top"><div><label>{current.category}</label><p><MapPin size={14}/>{current.location}</p><h2>{current.name}</h2><small>{current.description}</small></div><div className="overall"><strong>{s.overall?`${s.percent.toFixed(0)}%`:"—"}</strong><span>OVERALL</span></div></div>
   <div className="summary"><div><span>MAZE SCORE</span><b>{s.maze?s.maze.toFixed(1):"—"}<small>/10</small></b></div><div><span>PARK SCORE</span><b>{s.park?s.park.toFixed(1):"—"}<small>/10</small></b></div><div><span>COMPLETION</span><b>{s.complete}/{current.mazes.length}<small> mazes</small></b></div></div>
   <div className="section-title"><span>01</span><div><h3>Rate the mazes</h3><p>Each maze contributes equally to your Maze Score.</p></div></div>
   {current.mazes.map((m,i)=>{const q=r.mazes[m]||{};return <div className="maze" key={m}><div className="maze-name"><span>MAZE {String(i+1).padStart(2,"0")}</span><h4>{m}</h4></div><div className="rating-line"><label>🎃 Scariness</label><Pumpkin value={q.scare||0} set={v=>mazeUpdate(m,{scare:v})}/></div><div className="rating-line"><label>Actors</label><Slider label="" value={q.actors||0} set={v=>mazeUpdate(m,{actors:v})}/></div><div className="rating-line"><label>Theming / immersiveness</label><Slider label="" value={q.theming||0} set={v=>mazeUpdate(m,{theming:v})}/></div><div className="maze-score">Maze score <b>{q.scare&&q.actors&&q.theming?((q.scare+q.actors+q.theming)/3).toFixed(1):"—"}/10</b></div></div>})}
   <div className="section-title"><span>02</span><div><h3>Rate the whole park</h3><p>These scores form your Park Score.</p></div></div>
   <div className="park-grid"><Slider label="Food & drink" value={r.food} set={v=>update({food:v})}/><Slider label="Entertainment" value={r.entertainment} set={v=>update({entertainment:v})}/><Slider label="Overall feel / atmosphere" value={r.feel} set={v=>update({feel:v})}/></div>
   <div className="quality"><div><div><b>Overall park quality</b><small>Separate 5-star quality rating</small></div><Stars value={r.parkQuality} set={v=>update({parkQuality:v})}/></div></div>
   <div className="visit"><div><CalendarDays size={17}/><label>Visit date<input type="date" value={r.visitDate} onChange={e=>update({visitDate:e.target.value})}/></label></div><div><Clock3 size={17}/><label>Review<textarea value={r.review} onChange={e=>update({review:e.target.value})} placeholder="What stood out about your visit?"/></label></div></div>
   <div className="final"><div><span>SCREAM PARKS UK FINAL SCORE</span><strong>{s.overall?`${s.percent.toFixed(0)}%`:"Complete your ratings"}</strong></div><div><small>({s.maze?s.maze.toFixed(1):"—"} + {s.park?s.park.toFixed(1):"—"}) ÷ 2</small><b>{s.overall?s.overall.toFixed(1):"—"}/10</b></div></div>
  </div></div>}
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
