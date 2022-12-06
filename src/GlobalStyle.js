import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }
button {
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  padding: 3px;
  width:300px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
}


button {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  transition: 300ms;
}

button:hover span {
  background: none;
}
h3{
  font-size:35px;
  font-weight:900;
  color:#00DDEB;
  text-align:center;
}
.section-center{
  padding:100px;
  display:flex;
  flex-direction: column;
  align-items:center;
}
.items{
  width: 400px;
  display:flex;
  justify-content:space-around;
  align-items:center;
}
article{
  margin-top: 100px;
  padding:15px 25px;
  font-size:25px;
  width: 100%;
  height:auto;
  background-color:#686262;
  color:white;
}
input{
  font-size:25px;
  background-color:black;
  color:white;
  padding:10px 15px;
}
p{
  margin-top: 15px;
}
`;
export default GlobalStyle;
<button class="button-64" role="button">
  <span class="text">Button 64</span>
</button>;
