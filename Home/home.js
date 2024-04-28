// Variáveis 
const menu_mobile_ul = document.querySelectorAll("#menu_mobile_ul li");
menu_mobile_ul.forEach((item, index) => {
  item.addEventListener("click", (event)=> {
    const btn_close_menu = document.querySelector("#btn_close_menu");
    btn_close_menu.click();
    
  });
  
});

const diasSemana = new Array ("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");
 const mesesAno = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
// Funções 
function setarDatas() {
 let elemento_Data = document.querySelector(".elemento_Data");
 let elementoDatas = document.querySelector(".elementoDatas");
 

 let data = new Date();

 const objData = {
  year: "numeric",
  month: "long",
  weekday: "long",
  day: "numeric"
 };

 const objDatas = {
  year: "numeric",
  month: "numeric",
  day: "numeric"
 };


 elemento_Data.textContent = `
 ${diasSemana[data.getDay()]}, ${data.getDate() < 10 ? "0" + (data.getDate()) : "" + (data.getDate())} de ${mesesAno[data.getMonth()]} de ${data.getFullYear()} às ${data.getHours() < 10 ? "0" + data.getHours() : "" + data.getHours()}:${data.getMinutes() < 10 ? "0" + data.getMinutes() : "" + data.getMinutes()}:${data.getSeconds() < 10 ? "0" + data.getSeconds() : "" + data.getSeconds()}
 `;

 elementoDatas.textContent = `
 ${diasSemana[data.getDay()]}, 
 ${data.getDate() < 10 ? "0" + (data.getDate()) : "" + (data.getDate())} de ${mesesAno[data.getMonth()]} de ${data.getFullYear()} às ${data.getHours() < 10 ? "0" + data.getHours() : "" + data.getHours()}:${data.getMinutes() < 10 ? "0" + data.getMinutes() : "" + data.getMinutes()}:${data.getSeconds() < 10 ? "0" + data.getSeconds() : "" + data.getSeconds()}`;
}
setarDatas();
setInterval(() => {
 setarDatas();
}, 1000);

