// Variáveis
const menu_mobile_ul = document.querySelectorAll("#menu_mobile_ul li");
menu_mobile_ul.forEach((item, index) => {
  item.addEventListener("click", (event)=> {
    const btn_close_menu = document.querySelector("#btn_close_menu");
    btn_close_menu.click();
    
  });
  
});
// LocalStorage
const TasksGet = JSON.parse(localStorage.getItem("Tasks"));
let Tasks = TasksGet !== null ? TasksGet : [];

const CategoriaTaskGet = JSON.parse(localStorage.getItem("CategoriaTask"));
let CategoriaTask = CategoriaTaskGet !== null ? CategoriaTaskGet : [];

const diaSemana = new Array ("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");
 const mesAno = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

// Funções
function setarData() {
 let elementoData = document.querySelector(".js-data");
 let elemento_Data = document.querySelector(".js_data");
 let elemento_Datas = document.querySelector(".js_datas");
 let elementoDatas = document.querySelector(".js-datas");
 // const diaSemana = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
//  const mesAno = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");


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

 elementoData.textContent = data.toLocaleTimeString("pt-BR", objData);
 //elemento_Data.textContent = data.toLocaleTimeString("pt-BR", objData);
 elemento_Data.textContent = `
 ${diaSemana[data.getDay()]}, ${data.getDate() < 10 ? "0" + (data.getDate()) : "" + (data.getDate())} de ${mesAno[data.getMonth()]} de ${data.getFullYear()} às ${data.getHours() < 10 ? "0" + data.getHours() : "" + data.getHours()}:${data.getMinutes() < 10 ? "0" + data.getMinutes() : "" + data.getMinutes()}:${data.getSeconds() < 10 ? "0" + data.getSeconds() : "" + data.getSeconds()}
 `;
 elemento_Datas.textContent = `
 ${diaSemana[data.getDay()]}, ${data.getDate() < 10 ? "0" + (data.getDate()) : "" + (data.getDate())} de ${mesAno[data.getMonth()]} de ${data.getFullYear()} às ${data.getHours() < 10 ? "0" + data.getHours() : "" + data.getHours()}:${data.getMinutes() < 10 ? "0" + data.getMinutes() : "" + data.getMinutes()}:${data.getSeconds() < 10 ? "0" + data.getSeconds() : "" + data.getSeconds()}
 `;
// ${data.getMilliseconds() < 10 ? "0" + data.getMilliseconds() : "" + data.getMilliseconds()}
// elementoDatas.textContent = data.toLocaleTimeString("pt-BR", objDatas);
// elementoDatas.textContent = `
// ${diaSemana[data.getDay()]}, 
// ${data.getDate() < 10 ? "0" + (data.getDate()) : "" + (data.getDate())}/${(data.getMonth()+1) < 10 ? "0" + (data.getMonth()+1) : "" + (data.getMonth()+1)}/${data.getFullYear()} - ${data.getHours() < 10 ? "0" + data.getHours() : "" + data.getHours()}:${data.getMinutes() < 10 ? "0" + data.getMinutes() : "" + data.getMinutes()}:${data.getSeconds() < 10 ? "0" + data.getSeconds() : "" + data.getSeconds()} # ${mesAno[data.getMonth()]}`;
 elementoDatas.textContent = `
 ${diaSemana[data.getDay()]}, 
 ${data.getDate() < 10 ? "0" + (data.getDate()) : "" + (data.getDate())} de ${mesAno[data.getMonth()]} de ${data.getFullYear()} às ${data.getHours() < 10 ? "0" + data.getHours() : "" + data.getHours()}:${data.getMinutes() < 10 ? "0" + data.getMinutes() : "" + data.getMinutes()}:${data.getSeconds() < 10 ? "0" + data.getSeconds() : "" + data.getSeconds()}`;
}
setarData();
setInterval(() => {
 setarData();
}, 1000);

function functionName(index) {
 /*
 index = 0;
 console.log(!Tasks[index].estado);
 const tbody_tarefas = document.querySelector("#tbody_tarefas");
console.log(tbody_tarefas.children.length);

  let fim = "2024-04-02";
	let inicio = "2024-04-01";
	const diffEmMs = new Date(fim) - new Date(inicio);
	const diffEmDays = diffEmMs / (1000 * 60 * 60 * 24);
	 return diffEmDays;
*/
 const categorias = document.querySelector(".categorias");
console.log(categorias);
 if (categorias.children.length >= 0) {
  categorias.innerHTML = `
  <div class="table-responsive"
    style="margin: 2rem 0 0;"
    >
    <table class="table table-md   align-middle text-center">
      <thead class="table-dark">
        <tr>
        <th>Nome</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>Editar</th>
        <th>Apagar</th>
          
        </tr>
      </thead>
      <tbody id="tbody_categorias">
        
        
        
      </tbody>
    </table>
      
    </div>
  `;
  // original
  verCategoria();
  /*
  const categoriasTable = document.querySelector(".categorias div table tbody");
  
  console.log(categoriasTable.children.length);
    verCategoria();
  */
 } else {
  // Remover elementos filhos se existirem
  while (categorias.firstChild) {
   categorias.removeChild(categorias.firstChild);
  }
 }
}
//functionName();
document.querySelector("#btnTestes").addEventListener("click", functionName);

function novo() {
 let tbody_tarefass = document.querySelector("#tbody_tarefas_teste");

 tbody_tarefass.innerHTML = "";
 Tasks.forEach((item, index) => {
  let trs = document.createElement("tr");
  let tds = document.createElement("td");

  trs.innerHTML = `
   <td>${item.nome}</td>
   <td>${item.inicio}</td>
   <td>${item.fim}</td>
   <td>${item.estado}</td>
   <td>${item.status}</td>
   <td>${item.tempo}</td>
   <td>${item.categoria}</td>
   `;
  //trs.appendChild(tds);
  tbody_tarefass.appendChild(trs);
 });
}
// novo();

function datas() {
 let dataInicioValue = document.querySelector("#input_data_inicio");
 let dataFimValue = document.querySelector("#input_data_fim");

 dataInicioValue.value = obterDataReg();
 dataFimValue.value = obterDataReg();
 dataInicioValue.classList.add("is-valid");
 dataFimValue.classList.add("is-valid");
}
datas();

function difDatas(fim, inicio) {
 const input_data_inicio = document.querySelector("#input_data_inicio").value;
 const input_data_fim = document.querySelector("#input_data_fim").value;
 fim = input_data_fim;
 inicio = input_data_inicio;
 const diffInMs = new Date(fim) - new Date(inicio);
 const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

 return diffInDays;
}
function difData(fim, inicio) {
 const input_data_inicio = document.querySelector("#input_data_inicioo").value;
 const input_data_fim = document.querySelector("#input_data_fimm").value;
 fim = input_data_fim;
 inicio = input_data_inicio;
 const diffInMs = new Date(fim) - new Date(inicio);
 const diffInDaysss = diffInMs / (1000 * 60 * 60 * 24);

 return diffInDaysss;
}

function editarCategoria(index) {
 event.preventDefault();
 const input_categoriaEdt = document.querySelector("#input_categoriaEdt").value.trim();

 const categoria = CategoriaTask[index];
 const tarefa = Tasks[index];

 const modalBodyCategoria = document.querySelector("#modal-body-edt-categoria");
 modalBodyCategoria.innerHTML = "";
 CategoriaTask.forEach((item, i) => {
  modalBodyCategoria.innerHTML = `
              <form class="row g-3 needs-validation" novalidate>
      <h1 id="">
        Editar Categoria ${categoria}
      </h1>
    
     <!--Nome da Categoria-->
     <div class="col-md-4 div_categorias">
      <label for="input_categoriaEdt" class="form-label"> Nome da Categoria: </label>
      <input
       type="text"
       class="form-control"
       list="datalistCategorias"
       id="input_categoriaEdt"
       value="${categoria}"
       required
      />
      <datalist id="datalistCategorias">
       <option>...</option>
      </datalist>
     <!--  <div class="valid-feedback">CORRETO</div> -->
      <div class="invalid-feedback">Digite um nome para a categoria</div>
     </div>
     

     <!--Botoes-->
     <div class="col-12" style="margin: 2rem 0 0;">
      <button id="btn_edt_categoria" class="btn btn-success" type="submit" onclick="editedCat(${index}, event)" data-bs-dismiss="modal" aria-label="Close">ENVIAR</button>
     </div>
    </form>
  `;
 });

 const categoriass = document.querySelector(".categorias");

 verCategoria();
 datalistCategorias();
 // validarFormulario();
}

function editedCat(index, event) {
 event.preventDefault();
 const input_categoriaEdt = document.querySelector("#input_categoriaEdt").value.trim();

 // Verificar se o campo de categoria não está vazio
 if (input_categoriaEdt === "") {
  datalistCategorias();
  return;
 }

 // Verifica se a categoria já existe no array (ignorando maiúsculas e minúsculas)
 const catIndex = CategoriaTask.findIndex(cat => cat.toLowerCase() === input_categoriaEdt.toLowerCase());
 if (catIndex > -1 && catIndex !== index) {
  // Adicionado condição para verificar se o índice é diferente do índice atual
  // A categoria já existe no array e não é a categoria atual, portanto, não fazemos nada
  console.log("Categoria já existe");
  return;
 }

 // Armazena a categoria antiga para referência
 const categoriaAntiga = CategoriaTask[index];

 // Atualiza o valor da categoria no array
 CategoriaTask[index] = input_categoriaEdt;

 // Tasks.forEach((item, i) => {
 //   if (item.categoria === categoriaAntiga) {
 //     item.categoriaEditada = input_categoriaEdt;
 //     item.categoria = item.categoriaEditada;
 // localStorage.setItem("Tasks", JSON.stringify(Tasks));
 //   }
 // });
 Tasks.forEach((item, i) => {
  if (item.categoria === categoriaAntiga) {
   item.categoriaEditada = categoriaAntiga;
   item.categoria = input_categoriaEdt;
   localStorage.setItem("Tasks", JSON.stringify(Tasks));
  }
 });
 // verTarefas();
 // Atualiza o localStorage com o novo array CategoriaTask
 localStorage.setItem("CategoriaTask", JSON.stringify(CategoriaTask));

 // Atualiza a lista de categorias exibida

 verCategoriaTable();
 verCategoriaTable();

 // Atualiza a lista de tarefas exibida
 verTarefas();

 // Atualiza a lista de opções no datalist
 datalistCategorias();
}

function datalistCategorias() {
 const listCategorias = document.querySelector("#datalistCategorias");
 listCategorias.innerHTML = "";

 CategoriaTask.forEach((item, index) => {
  const option = document.createElement("option");

  option.innerHTML = `
     ${item}
     `;
  listCategorias.appendChild(option); // Adiciona a opção à lista de categorias
 });

 // Atualiza o localStorage com o novo array CategoriaTask
 localStorage.setItem("CategoriaTask", JSON.stringify(CategoriaTask));
}

datalistCategorias();


function verCategoriaTable() {
 const categorias = document.querySelector(".categorias");
// console.log(categorias.children.length);

 if (categorias.children.length === 0) {
  categorias.innerHTML = `
  <div class="table-responsive"
    style="margin: 2rem 0 0;"
    >
    <table class="table table-md align-middle text-center">
      <thead class="table-dark">
        <tr>
        <th colspan="4">Nome</th>
        <!--
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        -->
        <th>Editar</th>
        <th>Apagar</th>
          
        </tr>
      </thead>
      <tbody id="tbody_categorias">
        
        
        
      </tbody>
    </table>
      
    </div>
  `;
  verCategoria();
 } else {
  // Remover elementos filhos se existirem
  while (categorias.firstChild) {
   categorias.removeChild(categorias.firstChild);
  }
 }
 const filtro = document.querySelector(".filtro");
 filtro.style="display: none"
 
}

function verCategoria() {
 // console.log(categorias.children.length);
// const categorias = document.querySelector(".categorias");
 const tbody_categorias = document.querySelector("#tbody_categorias");
 tbody_categorias.innerHTML = "";
 CategoriaTask.forEach((item, index) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td class="" colspan="4">${item}</td>
          <!--
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          -->
          <td onclick="editarCategoria(${index})" data-bs-toggle="modal" data-bs-target="#modal_edt_categoria">EDITAR</td>
          <td onclick="delCategoriaIndex(${index})" data-bs-toggle="modal" data-bs-target="#modal_apagar_categoria">APAGAR</td>
    `;
  tbody_categorias.appendChild(tr);
 });
}

//verCategoriaTable();

function delCategoria(index, nome) {
 // console.log(CategoriaTask[index]);
 Tasks.forEach((item, i) => {
  if (item.categoria == CategoriaTask[index]) {
   // item.categoria = CategoriaTask[index];
   item.categoria = "";
   item.categoriaRemovida = CategoriaTask[index];
   localStorage.setItem("Tasks", JSON.stringify(Tasks));
   verTarefas();
   // console.log(CategoriaTask[index]);
  }
 });
 // Remover o objeto do array 'Tasks' no índice fornecido

 CategoriaTask.splice(index, 1);
 // console.log("Categoria removida:", CategoriaTask[index]);
 //     console.log("Novo array de categorias:", CategoriaTask);
 localStorage.setItem("CategoriaTask", JSON.stringify(CategoriaTask));

 const categorias = document.querySelector(".categorias");
categorias.innerHTML = "";
 // if (categorias.children.length >= 0) {
//   categorias.innerHTML = `
//   <div class="table-responsive"
//     style="margin: 2rem 0 0;"
//     >
//     <table class="table table-md   align-middle text-center">
//       <thead class="table-dark">
//         <tr>
//         <th>Nome</th>
//         <th></th>
//         <th></th>
//         <th></th>
//         <th></th>
//         <th>Editar</th>
//         <th>Apagar</th>
//           
//         </tr>
//       </thead>
//       <tbody id="tbody_categorias">
//         
//         
//         
//       </tbody>
//     </table>
//       
//     </div>
//   `;
//   verCategoria();
//  } else {
//   // Remover elementos filhos se existirem
//   while (categorias.firstChild) {
//    categorias.removeChild(categorias.firstChild);
//   }
//  }

 datalistCategorias();
 verTarefas();
}

function delCategoriaIndex(index) {
  const modalBody = document.querySelector("#modal-body-apagar-categoria");
  const modalFooter = document.querySelector("#modal-footer-apagar-categoria");
  modalBody.innerHTML = `
  <div class="alert alert-danger text-danger" role="alert">
  <span class="badge text-dark" style="padding: 0; margin: 0 0 16px;">
    *essa ação não pode ser desfeita!
    </span>
    <br>
   
    Tem certeza que deseja remover a categoria
    <br>
  <span class="text-dark">
    " ${CategoriaTask[index]} "
  </span> da sua lista de categorias ? 
    
  </div>
  `;
  modalFooter.innerHTML = `
  
  <button type="button" class="btn btn-primary" onclick="delCategoria(${index}, '${CategoriaTask[index]}')" data-bs-dismiss="modal">
    SIM
  </button>
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="verCategoriaTable()">
    NÃO 
  </button>
  `;
  
 // Remover o objeto do array 'Tasks' no índice fornecido
// Tasks.splice(index, 1);
 //   console.log("Tarefa removida:", Tasks[index]);
 //     console.log("Novo array de tarefas:", Tasks);
// localStorage.setItem("Tasks", JSON.stringify(Tasks));
// datalistCategorias();
// verTarefas();
}

function clickBtnFiltro() {
 const clickFiltro = document.querySelector(".clickFiltro");
 clickFiltro.click();
}

function tabelas() {
 const tarefas = document.querySelector(".tarefas");
 tarefas.innerHTML = "";
 if (tarefas.children.length === 0) {
  tarefas.innerHTML = `
      <div class="container-md align-middle text-center text-white justify-content-center" style="margin: 2rem 0 .5rem;">
      <h1 style="margin: 2rem 0 .5rem;">
       
    LISTA DE TAREFAS 
    
      </h1>
    </div>
      <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modal_add_tarefa"
      style="margin: 1rem 0 .5rem;">
       + Tarefa
     </button>
     
      <button type="button" onclick="verCategoriaTable()" class="btn btn-success" 
      style="margin: 1rem 1rem .5rem; ">
       Categorias
     </button>
     <!--
      <button type="button" onclick="verTarefasFiltradas()" class="btn btn-success" 
      style="margin: 1rem 1rem .5rem 0; ">
       Filtrar
     </button>
     -->
     
      <button type="button" data-bs-toggle="modal" data-bs-target="#modal_filtro_tarefa" class="btn btn-success clickFiltro" 
      style="margin: 1rem 1rem .5rem 0; " onclick="fecharTarefasFiltradas()">
       Filtrar
     </button>
     
    <div class="table-responsive table-wrapper"
    style="overflow-y: auto; height: 358px;"
    
    >
     
    <table class="table table-md table-striped table-bordered align-middle text-center"
    style="margin: 0;">
      <thead id="thead_tarefas" class="table-dark"
      style="position: sticky;
        top: 0; z-index: 1;">
        <tr>
        <th>Nome</th>
        <th>Início</th>
        <th>Fim</th>
        <th>Estado</th>
        <th>Prazo</th>
        <th>Tempo</th>
        <th>Categoria</th>
        <th>Editar</th>
        <th>Apagar</th>
        </tr>
      </thead>
      <tbody id="tbody_tarefas">

        
        
      </tbody>
    </table>
      
    </div>
  `;
 } else {
  // Remover elementos filhos se existirem
  while (tarefas.firstChild) {
   tarefas.removeChild(tarefas.firstChild);
  }
 }
}

function tabelasFiltro() {
 const filtro = document.querySelector(".filtro");
 filtro.innerHTML = "";
 if (filtro.children.length === 0) {
  filtro.innerHTML = `
      <div class="container-md align-middle text-center text-white justify-content-center" style="margin: 2rem 0 .5rem;">
      <h1 style="margin: 2rem 0 .5rem;">
       
    LISTA DE TAREFAS 
    
      </h1>
    </div>
      <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modal_add_tarefa"
      style="margin: 1rem 0 .5rem;  ">
       Adicionar Tarefa
     </button>
     
      <button type="button" onclick="verCategoriaTable()" class="btn btn-success" 
      style="margin: 1rem 1rem .5rem; ">
       Ver Categorias
     </button>
     
    <div class="table-responsive table-wrapper"
    style=" overflow-y: auto;"
    
    >
     
    <table class="table table-md table-striped table-bordered align-middle text-center"
    style="margin: 0;">
      <thead class="table-dark"
      style="position: sticky;
        top: 0; z-index: 1;">
        <tr>
        <th>Nome</th>
        <th>Início</th>
        <th>Fim</th>
        <th>Estado</th>
        <th>Prazo</th>
        <th>Tempo</th>
        <th>Categoria</th>
        <th>Opções</th>
          
        </tr>
      </thead>
      <tbody id="tbody_tarefas">

        
      </tbody>
    </table>
      
    </div>
  `;
 } else {
  // Remover elementos filhos se existirem
  while (filtro.firstChild) {
   filtro.removeChild(filtro.firstChild);
  }
 }
}

function delTarefa(index) {
 // Remover o objeto do array 'Tasks' no índice fornecido
 Tasks.splice(index, 1);
 //   console.log("Tarefa removida:", Tasks[index]);
 //     console.log("Novo array de tarefas:", Tasks);
 localStorage.setItem("Tasks", JSON.stringify(Tasks));
 datalistCategorias();
 verTarefas();
}

function delTarefaIndex(index) {
  const modalBody = document.querySelector("#modal-body-apagar-tarefa");
  const modalFooter = document.querySelector("#modal-footer-apagar-tarefa");
  modalBody.innerHTML = `
  <div class="alert alert-danger text-danger" role="alert">
  <span class="badge text-dark" style="padding: 0; margin: 0 0 16px;">
    *essa ação não pode ser desfeita!
    </span>
    <br>
   
    Tem certeza que deseja remover a tarefa
    <br>
  <span class="text-dark">
    " ${Tasks[index].nome} "
  </span> da sua lista de tarefas ? 
    
  </div>
  `;
  modalFooter.innerHTML = `
  
  <button type="button" class="btn btn-primary" onclick="delTarefa(${index})" data-bs-dismiss="modal">
    SIM
  </button>
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
    NÃO 
  </button>
  `;
  const categorias = document.querySelector(".categorias");
categorias.innerHTML = "";
 // Remover o objeto do array 'Tasks' no índice fornecido
// Tasks.splice(index, 1);
 //   console.log("Tarefa removida:", Tasks[index]);
 //     console.log("Novo array de tarefas:", Tasks);
// localStorage.setItem("Tasks", JSON.stringify(Tasks));
// datalistCategorias();
// verTarefas();
}

function mudarEstado(index) {
 if (!Tasks[index].estado) {
  Tasks[index].estado = true;
  Tasks[index].concluida = obterDataReg();
  // Tasks[index].status = "Tarefa concluída " + dataStatus + " dia(s) antes do prazo";
 } else {
  Tasks[index].estado = false;
  Tasks[index].concluida = "";
  // Tasks[index].status = "";
 }

 let fim = Tasks[index].fim;
 let inicio = obterDataReg();
 const diffInMs = new Date(fim) - new Date(inicio);
 const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

 if (diffInDays == -1 && !Tasks[index].estado) {
  Tasks[index].tempo = `Atrasada ${Math.abs(diffInDays)} dia`;
 } else if (diffInDays < -1 && !Tasks[index].estado) {
  Tasks[index].tempo = `Atrasada ${Math.abs(diffInDays)} dias`;
 } else if (diffInDays == 0 && !Tasks[index].estado) {
  Tasks[index].tempo = `Último dia do prazo!`;
 } else if (diffInDays > 0 && diffInDays < 2 && !Tasks[index].estado) {
  Tasks[index].tempo = `${Math.abs(diffInDays)} dia antes do prazo!`;
 } else if (diffInDays > 1 && !Tasks[index].estado) {
  Tasks[index].tempo = `${Math.abs(diffInDays)} dias antes do prazo!`;
 }

 if (diffInDays == -1 && Tasks[index].estado) {
  Tasks[index].tempo = `Concluída com ${Math.abs(diffInDays)} dia de atraso!`;
 } else if (diffInDays < -1 && Tasks[index].estado) {
  Tasks[index].tempo = `Concluída ${Math.abs(diffInDays)} dias atrasada!`;
 } else if (diffInDays == 0 && Tasks[index].estado) {
  Tasks[index].tempo = `Tarefa concluída no prazo!`;
 } else if (diffInDays > 0 && diffInDays < 2 && Tasks[index].estado) {
  Tasks[index].tempo = `Concluída ${Math.abs(diffInDays)} dia antes do prazo!`;
 } else if (diffInDays > 1 && Tasks[index].estado) {
  Tasks[index].tempo = `Concluída ${Math.abs(diffInDays)} dias antes do prazo!`;
 }

 

 // Salva as alterações no armazenamento local
 localStorage.setItem("Tasks", JSON.stringify(Tasks));

 // Atualiza a visualização das tarefas na interface do usuário
 verTarefas();
 // todas();
 // verTarefasFiltradas();
 fecharTarefasFiltradas();
}

// const indexed = this.getAttribute("data-index");
 // const indexed = document.querySelector(`.tar${index}`).getAttribute("data-index");
//  console.log(indexed);

// function editarTarefaNova(dataIndex) {
// const tarefas = Tasks[dataIndex];
// const btnEditarTarefaNova = document.querySelector('button[data-bs-target="#modal_edt_tarefas"]');
// const modal_header_h1 = document.querySelector("#modal_edt_tarefas .modalEdtTasks_edt h1");
//   // const nome = document.querySelector("#input_tarefas_edt");
//   // const categoria =  document.querySelector("#input_categoriass_edt");
//   // const dataInicio = document.querySelector("#input_data_inicioo_edt");
//   // const dataFim = document.querySelector("#input_data_fimm_edt");
//   // nome.value = tarefas.nome;
//   // categoria.value = tarefas.categoria;
//   // dataInicio.value = tarefas.inicio;
//   // dataFim.value = tarefas.fim;
// modal_header_h1.innerHTML = "Editar Tarefa ";
// modal_header_h1.innerHTML += tarefas.nome;
//   event.preventDefault();
// // Acessar os novos valores fornecidos pelo usuário
// let novoNome = document.querySelector("#input_tarefas_edt").value.trim();
// let novoNomE = document.querySelector("#input_tarefass_edt");
// const novaCategoria = document.querySelector("#input_categoriass_edt").value.trim();
// let novaDataInicio = document.querySelector("#input_data_inicioo_edt").value;
// let novaDataFim = document.querySelector("#input_data_fimm_edt").value;
// novoNome.value = tarefas.nome;
//   novaCategoria.value = tarefas.categoria;
//   novaDataInicio.value = tarefas.inicio;
//   novaDataFim.value = tarefas.fim;

// if (novaCategoria === "") {
//   datalistCategorias();
//   return;
// }
// if (novoNome === "") {
//   return;
// }
// // Verifica se o campo de categoria não está vazio
// const catIndex = CategoriaTask.findIndex(cat => cat.toLowerCase() == novaCategoria.toLowerCase());
// let categoriaVal = "";
// if (!catIndex) {
//   categoriaVal = CategoriaTask[catIndex];
// } else {
//   categoriaVal = novaCategoria;
// }

// if (novaCategoria !== "") {
//   // Verifica se a categoria já existe no array (ignorando maiúsculas e minúsculas)

//   if (!CategoriaTask.some(categoria => categoria.toLowerCase() === novaCategoria.toLowerCase())) {
//   // Adiciona a categoria ao array
//   CategoriaTask.push(novaCategoria);
//   // Atualiza o localStorage com o novo array CategoriaTask
//   localStorage.setItem("CategoriaTask", JSON.stringify(CategoriaTask));
//   }
// }

// let fim = novaDataFim;
// let inicio = novaDataInicio;
// const diffInMs = new Date(fim) - new Date(inicio);
// const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

// let prazo = "";
// if (difData(fim, inicio) >= 0 && difData(fim, inicio) < 1) {
//   prazo = difData(fim, inicio);
// } else if (difData(fim, inicio) > 0 && difData(fim, inicio) < 2) {
//   prazo = difData(fim, inicio);
// } else if (difData(fim, inicio) > 1) {
//   prazo = difData(fim, inicio);
// }

// if (difData(fim, inicio) == 0) {
//   Tasks[index].status = "Concluir no mesmo dia!";
//   verTarefas();
// } else if (difData(fim, inicio) > 0 && difData(fim, inicio) < 2) {
//   Tasks[index].status = difData(fim, inicio) + " dia para concluir!";
//   verTarefas();
// } else if (difData(fim, inicio) > 1) {
//   Tasks[index].status = difData(fim, inicio) + " dias para concluir!";
//   verTarefas();
// }

// let hoje = obterDataReg();
// const diffInMili = new Date(fim) - new Date(hoje);
// const diffInDayTempo = diffInMili / (1000 * 60 * 60 * 24);

// if (obterDataReg() > fim && !Tasks[index].estado) {
//   Tasks[index].tempo = `Atrasada ${Math.abs(diffInDayTempo)} dia(s)`;
// } else if (obterDataReg() > fim && Tasks[index].estado) {
//   Tasks[index].tempo = `Concluída ${Math.abs(diffInDayTempo)} dia(s) atrasada!`;
// }
// if (obterDataReg() < fim && !Tasks[index].estado) {
//   Tasks[index].tempo = `${Math.abs(diffInDayTempo)} dia(s) antes do prazo!`;
// } else if (obterDataReg() < fim && Tasks[index].estado) {
//   Tasks[index].tempo = `Concluída ${Math.abs(diffInDayTempo)} dia(s) antes do prazo!`;
// }
// if (obterDataReg() == fim && !Tasks[index].estado) {
//   Tasks[index].tempo = `Ultimo dia para concluir!`;
// } else if (obterDataReg() == fim && Tasks[index].estado) {
//   Tasks[index].tempo = `Tarefa concluída no prazo!`;
// }

// // Converter as datas para objetos Date
// const dataInicio = new Date(novaDataInicio);
// const dataFim = new Date(novaDataFim);

// // Verificar se a diferença entre as datas é menor que 0
// if (difDatas(dataFim, dataInicio) < 0) {
//   // Se for, limpar os valores dos campos de data
//   novaDataFim.value = "";
//   // Manter o valor da data fim e definir a data início como um dia antes da data fim
//   const dataFinalMenosUmDia = new Date(dataFim);
//   dataFinalMenosUmDia.setDate(dataFinalMenosUmDia.getDate() - 1);

//   novaDataInicio.value = ""; // Formatar a data para o formato yyyy-mm-dd
//   //  novaDataInicio.value = dataFinalMenosUmDia.toISOString().split("T")[0]; // Formatar a data para o formato yyyy-mm-dd

//   // Exibir uma mensagem de alerta
//   alert("A data de início deve ser anterior à data de fim.");
//   return;
// }

// let final = novaDataFim;
// let inicial = obterDataReg();
// const diffInMss = new Date(final) - new Date(inicial);
// const diffInDaysTempo = diffInMss / (1000 * 60 * 60 * 24);
// /*
 
 
 
// */

// let tempo = "";
// if (diffInDaysTempo == -1 && !Tasks[index].estado) {
//   tempo = `Atrasada ${Math.abs(diffInDaysTempo)} dia`;
// } else if (diffInDaysTempo < -1 && !Tasks[index].estado) {
//   tempo = `Atrasada ${Math.abs(diffInDaysTempo)} dias`;
// } else if (diffInDaysTempo == 0 && !Tasks[index].estado) {
//   tempo = `Último dia do prazo!`;
// } else if (diffInDaysTempo > 0 && diffInDaysTempo < 2 && !Tasks[index].estado) {
//   tempo = `${Math.abs(diffInDaysTempo)} dia antes do prazo!`;
// } else if (diffInDaysTempo > 1 && !Tasks[index].estado) {
//   tempo = `${Math.abs(diffInDaysTempo)} dias antes do prazo!`;
// }

// if (diffInDaysTempo == -1 && Tasks[index].estado) {
//   tempo = `Concluída ${Math.abs(diffInDaysTempo)} dia atrasada!`;
// } else if (diffInDaysTempo < -1 && Tasks[index].estado) {
//   tempo = `Concluída ${Math.abs(diffInDaysTempo)} dias atrasada!`;
// } else if (diffInDaysTempo == 0 && Tasks[index].estado) {
//   tempo = `Tarefa concluída no prazo!`;
// } else if (diffInDaysTempo > 0 && diffInDaysTempo < 2 && Tasks[index].estado) {
//   tempo = `Concluída ${Math.abs(diffInDaysTempo)} dia antes do prazo!`;
// } else if (diffInDaysTempo > 1 && Tasks[index].estado) {
//   tempo = `Concluída ${Math.abs(diffInDaysTempo)} dias antes do prazo!`;
// }
// // Atualizar os valores no array 'Tasks' pelo índice fornecido

// Tasks[index].inicio = novaDataInicio;
// Tasks[index].fim = novaDataFim;
// Tasks[index].tempo = tempo;
// Tasks[index].nome = novoNome;
// Tasks[index].categoria = novaCategoria;

// localStorage.setItem("Tasks", JSON.stringify(Tasks));
// const categorias = document.querySelector(".categorias");

// datalistCategorias();
// verTarefas();
// }

// function editarTarefaNova(dataIndex) {
// const tarefas = Tasks[dataIndex];
// const btnEditarTarefaNova = document.querySelector('button[data-bs-target="#modal_edt_tarefas"]');
// const modal_header_h1 = document.querySelector("#modal_edt_tarefas .modalEdtTasks_edt h1");
// const nome = document.querySelector("#input_tarefas_edt");
// nome.value = tarefas.nome;
// const categoria =  document.querySelector("#input_categoriass_edt");
// categoria.value = tarefas.categoria;
//   const dataInicio = document.querySelector("#input_data_inicioo_edt");
//   dataInicio.value = tarefas.inicio;
//   const dataFim = document.querySelector("#input_data_fimm_edt");
//   dataFim.value = tarefas.fim;
// modal_header_h1.innerHTML = "Editar Tarefa ";
// modal_header_h1.innerHTML += tarefas.nome;



// //console.log(tarefas.nome);
// // 
// // localStorage.setItem("Tasks", JSON.stringify(Tasks));
// // verTarefas();
// // datalistCategorias();
// // Adicione um manipulador de evento para o botão de envio no modal de edição
// document.getElementById('btn_edtTarefas_edt').addEventListener('click', function(event) {
//     event.preventDefault(); // Evita o comportamento padrão do envio de formulário
// const dataIndex = document.querySelector('.edit-icon').getAttribute('data-index');
//     const index = parseInt(dataIndex);
//     // Obtenha os valores dos campos de edição
//     const nome = document.getElementById('input_tarefas_edt').value;
//     const categoria = document.getElementById('input_categoriass_edt').value;
//     const dataInicio = document.getElementById('input_data_inicioo_edt').value;
//     const dataFim = document.getElementById('input_data_fimm_edt').value;
    
//     if (categoria === "") {
//   datalistCategorias();
//   return;
// }
// if (nome === "") {
//   return;
// }
// // Verifica se o campo de categoria não está vazio
// const catIndex = CategoriaTask.findIndex(cat => cat.toLowerCase() == categoria.toLowerCase());
// let categoriaVal = "";
// if (!catIndex) {
//   categoriaVal = CategoriaTask[catIndex];
// } else {
//   categoriaVal = categoria;
// }

// if (categoria !== "") {
//   // Verifica se a categoria já existe no array (ignorando maiúsculas e minúsculas)

//   if (!CategoriaTask.some(categorias => categorias.toLowerCase() === categoria.toLowerCase())) {
//   // Adiciona a categoria ao array
//   CategoriaTask.push(categoria);
//   // Atualiza o localStorage com o novo array CategoriaTask
//   localStorage.setItem("CategoriaTask", JSON.stringify(CategoriaTask));
//   }
// }

// let fim = dataFim;
// let inicio = dataInicio;
// const diffInMs = new Date(fim) - new Date(inicio);
// const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

// let prazo = "";
// if (difData(fim, inicio) >= 0 && difData(fim, inicio) < 1) {
//   prazo = difData(fim, inicio);
// } else if (difData(fim, inicio) > 0 && difData(fim, inicio) < 2) {
//   prazo = difData(fim, inicio);
// } else if (difData(fim, inicio) > 1) {
//   prazo = difData(fim, inicio);
// }

// if (difData(fim, inicio) == 0) {
//   Tasks[index].status = "Concluir no mesmo dia!";
//   verTarefas();
// } else if (difData(fim, inicio) > 0 && difData(fim, inicio) < 2) {
//   Tasks[index].status = difData(fim, inicio) + " dia para concluir!";
//   verTarefas();
// } else if (difData(fim, inicio) > 1) {
//   Tasks[index].status = difData(fim, inicio) + " dias para concluir!";
//   verTarefas();
// }

// let hoje = obterDataReg();
// const diffInMili = new Date(fim) - new Date(hoje);
// const diffInDayTempo = diffInMili / (1000 * 60 * 60 * 24);

// if (obterDataReg() > fim && !Tasks[index].estado) {
//   Tasks[index].tempo = `Atrasada ${Math.abs(diffInDayTempo)} dia(s)`;
// } else if (obterDataReg() > fim && Tasks[index].estado) {
//   Tasks[index].tempo = `Concluída ${Math.abs(diffInDayTempo)} dia(s) atrasada!`;
// }
// if (obterDataReg() < fim && !Tasks[index].estado) {
//   Tasks[index].tempo = `${Math.abs(diffInDayTempo)} dia(s) antes do prazo!`;
// } else if (obterDataReg() < fim && Tasks[index].estado) {
//   Tasks[index].tempo = `Concluída ${Math.abs(diffInDayTempo)} dia(s) antes do prazo!`;
// }
// if (obterDataReg() == fim && !Tasks[index].estado) {
//   Tasks[index].tempo = `Ultimo dia para concluir!`;
// } else if (obterDataReg() == fim && Tasks[index].estado) {
//   Tasks[index].tempo = `Tarefa concluída no prazo!`;
// }

// // Converter as datas para objetos Date
// const DataInicio = new Date(dataInicio);
// const DataFim = new Date(dataFim);

// // Verificar se a diferença entre as datas é menor que 0
// if (difDatas(DataFim, DataInicio) < 0) {
//   // Se for, limpar os valores dos campos de data
//   dataFim.value = "";
//   // Manter o valor da data fim e definir a data início como um dia antes da data fim
//   const dataFinalMenosUmDia = new Date(dataFim);
//   dataFinalMenosUmDia.setDate(dataFinalMenosUmDia.getDate() - 1);

//   dataInicio.value = ""; // Formatar a data para o formato yyyy-mm-dd
//   //  novaDataInicio.value = dataFinalMenosUmDia.toISOString().split("T")[0]; // Formatar a data para o formato yyyy-mm-dd

//   // Exibir uma mensagem de alerta
//   alert("A data de início deve ser anterior à data de fim.");
//   return;
// }

// let final = dataFim;
// let inicial = obterDataReg();
// const diffInMss = new Date(final) - new Date(inicial);
// const diffInDaysTempo = diffInMss / (1000 * 60 * 60 * 24);
// /*
 
 
 
// */

// let tempo = "";
// if (diffInDaysTempo == -1 && !Tasks[index].estado) {
//   tempo = `Atrasada ${Math.abs(diffInDaysTempo)} dia`;
// } else if (diffInDaysTempo < -1 && !Tasks[index].estado) {
//   tempo = `Atrasada ${Math.abs(diffInDaysTempo)} dias`;
// } else if (diffInDaysTempo == 0 && !Tasks[index].estado) {
//   tempo = `Último dia do prazo!`;
// } else if (diffInDaysTempo > 0 && diffInDaysTempo < 2 && !Tasks[index].estado) {
//   tempo = `${Math.abs(diffInDaysTempo)} dia antes do prazo!`;
// } else if (diffInDaysTempo > 1 && !Tasks[index].estado) {
//   tempo = `${Math.abs(diffInDaysTempo)} dias antes do prazo!`;
// }

// if (diffInDaysTempo == -1 && Tasks[index].estado) {
//   tempo = `Concluída ${Math.abs(diffInDaysTempo)} dia atrasada!`;
// } else if (diffInDaysTempo < -1 && Tasks[index].estado) {
//   tempo = `Concluída ${Math.abs(diffInDaysTempo)} dias atrasada!`;
// } else if (diffInDaysTempo == 0 && Tasks[index].estado) {
//   tempo = `Tarefa concluída no prazo!`;
// } else if (diffInDaysTempo > 0 && diffInDaysTempo < 2 && Tasks[index].estado) {
//   tempo = `Concluída ${Math.abs(diffInDaysTempo)} dia antes do prazo!`;
// } else if (diffInDaysTempo > 1 && Tasks[index].estado) {
//   tempo = `Concluída ${Math.abs(diffInDaysTempo)} dias antes do prazo!`;
// }
    

//     // Obtenha o índice da tarefa que está sendo editada
//   //  const dataIndex = document.querySelector('.edit-icon').getAttribute('data-index');
// //     const index = parseInt(dataIndex);

//     // Atualize o objeto no array Tasks com os novos valores
//     Tasks[index].nome = nome;
//     Tasks[index].categoria = categoria;
//     Tasks[index].inicio = dataInicio;
//     Tasks[index].fim = dataFim;

//     // Salve os dados atualizados no armazenamento local ou onde quer que você esteja armazenando seus dados
//     localStorage.setItem("Tasks", JSON.stringify(Tasks));

//     // Atualize a exibição das tarefas
//     verTarefas();
// datalistCategorias();
//     // Feche o modal de edição
//     // const modalEdicao = new bootstrap.Modal(document.getElementById('modal_edt_tarefas'));
// //     modalEdicao.hide();
// });

// }


  


function editarTarefa(index) {
 const tarefas = Tasks[index];

 const modalBodyTarefa = document.querySelector("#modal-body-tarefa");
 modalBodyTarefa.innerHTML = "";
 Tasks.forEach((item, i) => {
  modalBodyTarefa.innerHTML = `
  
  <form class="row g-3 needs-validation modalEdtTasks" novalidate>
      <h1 id="">
        Deseja Editar a Tarefa: 
        '<span class="text-danger">${tarefas.nome}</span>' ?!
      </h1>
      <!--Nome da Tarefa-->
      <div class="col-md-12 div_tarefas">
      <label for="input_tarefass" class="form-label"> Nome da Tarefa: </label>
      <input type="text" class="form-control is-valid" id="input_tarefass" value='${tarefas.nome}' maxlength="40" required />
     
      <div class="invalid-feedback">
      Digite um nome para a tarefa
      </div>
      </div>
  
    
      <!--Nome da Categoria-->
      <div class="col-md-12 div_categorias">
      <label for="input_categoriass" class="form-label"> Nome da Categoria: </label>
      <input
        type="text"
        class="form-control ${tarefas.categoria == "" ? "is-invalid" : "is-valid"}"
        list="datalistCategorias"
        id="input_categoriass"
        
        value='${tarefas.categoria}' 
        maxlength="20"
        required
      />
      <datalist id="datalistCategorias">
      </datalist>
     
      <div class="invalid-feedback">Digite um nome para a categoria</div>
      </div>
      
    
      <!--Datas-->
      <div class="col-md-12 div_datas">
      <div class="row g-3">
        <div class="col col-md-6">
        <label for="input_data_inicioo" class="form-label">Data Início</label>
        <input type="date" class="form-control is-valid" id="input_data_inicioo" value='${tarefas.inicio}'  required />
        <div class="invalid-feedback">Data inicial é superior a data final.</div>
        
        </div>

        <div class="col col-md-6">
        <label for="input_data_fimm" class="form-label">Data Fim</label>
        <input type="date" class="form-control is-valid" id="input_data_fimm" value='${tarefas.fim}'   required />
        <div class="invalid-feedback">Data final é inferior a data inicial.</div>
        
        </div>
      </div>
      </div>
 
    <div class="col-md-12 text-center align-items-center justify-content-center">
    <div class="alert alert-danger text-center align-items-center justify-content-center" role="alert" style="margin: 6px auto 10px;">
  <span class="badge text-dark" style="padding: 0; margin: 0;">
    *essa ação não pode ser desfeita!
    </span>
    </div>
    </div>
    
      <!--Botoes-->
      <div class="modal-footer container col-12 justify-content-around" style="margin: .5rem 0 0; padding: 10px 6px 0; display: flex;
 flex-flow: row wrap;
 justify-content: space-around;">
    
    
    
    
      <button id="btn_edtTarefas" class="btn btn-primary" type="submit" onclick='editarTarefasArray(${index})'>SALVAR</button>
      
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
      FECHAR
    </button>
      </div>
    </form>
   
  `;
  validaFormulario();

  const btnEnviar = document.querySelector("#btn_edtTarefas");
  btnEnviar.addEventListener("click", event => {
   // Impedir o envio padrão do formulário
   event.preventDefault();

   // Verificar se há campos inválidos
   const invalidFields = document.querySelectorAll(".is-invalid");
   if (invalidFields.length === 0) {
    // Se não houver campos inválidos, pode fechar o modal e submeter o formulário
    const btnFecharModal = document.querySelector(".edt-tarefa-close");
    btnFecharModal.click();
    //  document.querySelector(".modalEdtTasks").submit();
   } else {
    // Se houver campos inválidos, manter o modal aberto
    // Você pode adicionar aqui alguma mensagem de erro para o usuário, se desejar
    return;
   }
  });
 });

 localStorage.setItem("Tasks", JSON.stringify(Tasks));
 verTarefas();
 datalistCategorias();
}

function editarTarefasArray(index) {
 event.preventDefault();
 // Acessar os novos valores fornecidos pelo usuário
 
 let novoNome = document.querySelector("#input_tarefass").value.trim();
 let novoNomE = document.querySelector("#input_tarefa");
 const novaCategoria = document.querySelector("#input_categoriass").value.trim();
 let novaDataInicio = document.querySelector("#input_data_inicioo").value;
 let novaDataFim = document.querySelector("#input_data_fimm").value;

 if (novaCategoria === "") {
  datalistCategorias();
  return;
 }
 if (novoNome === "") {
  return;
 }
 // Verifica se o campo de categoria não está vazio
 const catIndex = CategoriaTask.findIndex(cat => cat.toLowerCase() == novaCategoria.toLowerCase());
 let categoriaVal = "";
 if (!catIndex) {
  categoriaVal = CategoriaTask[catIndex];
 } else {
  categoriaVal = novaCategoria;
 }

 if (novaCategoria !== "") {
  // Verifica se a categoria já existe no array (ignorando maiúsculas e minúsculas)

  if (!CategoriaTask.some(categoria => categoria.toLowerCase() === novaCategoria.toLowerCase())) {
   // Adiciona a categoria ao array
   CategoriaTask.push(novaCategoria);
   // Atualiza o localStorage com o novo array CategoriaTask
   localStorage.setItem("CategoriaTask", JSON.stringify(CategoriaTask));
  }
 }

 let fim = novaDataFim;
 let inicio = novaDataInicio;
 const diffInMs = new Date(fim) - new Date(inicio);
 const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
 if (diffInMs < 0 || inicio === "" || fim === "") {
   return;
 }

 let prazo = "";
 if (difData(fim, inicio) >= 0 && difData(fim, inicio) < 1) {
  prazo = difData(fim, inicio);
 } else if (difData(fim, inicio) > 0 && difData(fim, inicio) < 2) {
  prazo = difData(fim, inicio);
 } else if (difData(fim, inicio) > 1) {
  prazo = difData(fim, inicio);
 }

 if (difData(fim, inicio) == 0) {
  Tasks[index].status = "Concluir no mesmo dia!";
  verTarefas();
 } else if (difData(fim, inicio) > 0 && difData(fim, inicio) < 2) {
  Tasks[index].status = difData(fim, inicio) + " dia para concluir!";
  verTarefas();
 } else if (difData(fim, inicio) > 1) {
  Tasks[index].status = difData(fim, inicio) + " dias para concluir!";
  verTarefas();
 }

 let hoje = obterDataReg();
 const diffInMili = new Date(fim) - new Date(hoje);
 const diffInDayTempo = diffInMili / (1000 * 60 * 60 * 24);

 if (obterDataReg() > fim && !Tasks[index].estado) {
  Tasks[index].tempo = `Atrasada ${Math.abs(diffInDayTempo)} dia(s)`;
 } else if (obterDataReg() > fim && Tasks[index].estado) {
  Tasks[index].tempo = `Concluída ${Math.abs(diffInDayTempo)} dia(s) atrasada!`;
 }
 if (obterDataReg() < fim && !Tasks[index].estado) {
  Tasks[index].tempo = `${Math.abs(diffInDayTempo)} dia(s) antes do prazo!`;
 } else if (obterDataReg() < fim && Tasks[index].estado) {
  Tasks[index].tempo = `Concluída ${Math.abs(diffInDayTempo)} dia(s) antes do prazo!`;
 }
 if (obterDataReg() == fim && !Tasks[index].estado) {
  Tasks[index].tempo = `Ultimo dia para concluir!`;
 } else if (obterDataReg() == fim && Tasks[index].estado) {
  Tasks[index].tempo = `Tarefa concluída no prazo!`;
 }

 // Converter as datas para objetos Date
 const dataInicio = new Date(novaDataInicio);
 const dataFim = new Date(novaDataFim);

 // Verificar se a diferença entre as datas é menor que 0
 if (difDatas(dataFim, dataInicio) < 0) {
   
  // Se for, limpar os valores dos campos de data
  novaDataFim.value = "";
  // Manter o valor da data fim e definir a data início como um dia antes da data fim
  const dataFinalMenosUmDia = new Date(dataFim);
  dataFinalMenosUmDia.setDate(dataFinalMenosUmDia.getDate() - 1);

  novaDataInicio.value = ""; // Formatar a data para o formato yyyy-mm-dd
  //  novaDataInicio.value = dataFinalMenosUmDia.toISOString().split("T")[0]; // Formatar a data para o formato yyyy-mm-dd

  // Exibir uma mensagem de alerta
  alert("A data de início deve ser anterior à data de fim.");
  return;
 }

 let final = novaDataFim;
 let inicial = obterDataReg();
 const diffInMss = new Date(final) - new Date(inicial);
 const diffInDaysTempo = diffInMss / (1000 * 60 * 60 * 24);
 /*
 
 
 
 */

 let tempo = "";
 if (diffInDaysTempo == -1 && !Tasks[index].estado) {
  tempo = `Atrasada ${Math.abs(diffInDaysTempo)} dia`;
 } else if (diffInDaysTempo < -1 && !Tasks[index].estado) {
  tempo = `Atrasada ${Math.abs(diffInDaysTempo)} dias`;
 } else if (diffInDaysTempo == 0 && !Tasks[index].estado) {
  tempo = `Último dia do prazo!`;
 } else if (diffInDaysTempo > 0 && diffInDaysTempo < 2 && !Tasks[index].estado) {
  tempo = `${Math.abs(diffInDaysTempo)} dia antes do prazo!`;
 } else if (diffInDaysTempo > 1 && !Tasks[index].estado) {
  tempo = `${Math.abs(diffInDaysTempo)} dias antes do prazo!`;
 }

 if (diffInDaysTempo == -1 && Tasks[index].estado) {
  tempo = `Concluída ${Math.abs(diffInDaysTempo)} dia atrasada!`;
 } else if (diffInDaysTempo < -1 && Tasks[index].estado) {
  tempo = `Concluída ${Math.abs(diffInDaysTempo)} dias atrasada!`;
 } else if (diffInDaysTempo == 0 && Tasks[index].estado) {
  tempo = `Tarefa concluída no prazo!`;
 } else if (diffInDaysTempo > 0 && diffInDaysTempo < 2 && Tasks[index].estado) {
  tempo = `Concluída ${Math.abs(diffInDaysTempo)} dia antes do prazo!`;
 } else if (diffInDaysTempo > 1 && Tasks[index].estado) {
  tempo = `Concluída ${Math.abs(diffInDaysTempo)} dias antes do prazo!`;
 }
 // Atualizar os valores no array 'Tasks' pelo índice fornecido

 Tasks[index].inicio = novaDataInicio;
 Tasks[index].fim = novaDataFim;
 Tasks[index].tempo = tempo;
 Tasks[index].nome = novoNome;
 Tasks[index].categoria = novaCategoria;

 localStorage.setItem("Tasks", JSON.stringify(Tasks));
 const categorias = document.querySelector(".categorias");
categorias.innerHTML = "";
 datalistCategorias();
 verTarefas();
}

// function verTarefas() {
//     tabelas();

//     const tbody_tarefas = document.querySelector("#tbody_tarefas");
//     const modal_opcoes_tarefas = document.querySelector("#modal_opcoes_tarefas");
//     tbody_tarefas.innerHTML = "";
//     modal_opcoes_tarefas.innerHTML = "";

//     Tasks.forEach((item, index) => {
//         const tr = document.createElement("tr");
//         const trs = document.createElement("tr");
//         trs.style = "background-color: #fff; border: none;";

//         trs.innerHTML = `
//             <td style="background-color: #fff; border: none; border-left: 0.571429px solid  rgb(222,226,230);"></td>
//             <td style="background-color: #fff; border: none;"></td>
//             <td style="background-color: #fff; border: none;"></td>
//             <td style="background-color: #fff; border: none;"></td>
//             <td style="background-color: #fff; border: none;"></td>
//             <td style="background-color: #fff; border: none;"></td>
//             <td style="background-color: #fff; border: none;"></td>
//             <td style="background-color: #fff; border: none; border-right: 0.571429px solid rgb(222,226,230);"></td>
//         `;

//         tr.innerHTML = `
//             <td>${item.nome}</td>
//             <td>${item.inicio.split("-").reverse().join("/")}</td>
//             <td>${item.fim.split("-").reverse().join("/")}</td>
//             <td style="padding: 0; margin: 0; ${
//                 item.estado == false ? "background-color: red;" : "background-color: green;"
//             }">
//                 <label class="label_estado" for='check_task${index}' style="display: block; width: 100%; height: 100%;  padding: 5px; margin: 0;">
//                     ${item.estado == false ? "Incompleta" : "Completa"}
//                     <input type="checkbox" name="" id='check_task${index}' style="display: none;" onclick="mudarEstado(${index})"/>
//                 </label>
//             </td>
//             <td>${item.status}</td>
//             <td>${item.tempo}</td>
//             <td>${item.categoria !== "" ? item.categoria : `"${item.categoriaRemovida}"` + " EXCLUÍDA"}</td>
//             <td class="edit-icon" data-bs-toggle="modal" data-bs-target="#modal_opcoes_tarefas" data-index="${index}">
//                 <i class="bi bi-gear "></i>
//             </td>
//         `;

//       //  tbody_tarefas.appendChild(trs);
// //         tbody_tarefas.appendChild(tr);
//         const opcoes = document.createElement("div");
// modal_opcoes_tarefas.innerHTML = `
// <div class="modal-dialog">
// <div class="modal-content container">
//   <div class="modal-header">
//   <h1 class="modal-title fs-5" id="exampleModalLabel">Alterar Tarefa
   
//   </h1>
//   <button type="button" class="btn-close edt-tarefa-close_edt" data-bs-dismiss="modal" aria-label="Close"></button>
//   </div>
//   <div class="modal-body  row justify-content-around text-center" id="modal-body-tarefa_opcoes">
//     <label class="container col-4 align-items-center label_opcoes" for="icone-editar${index}" >
//       EDITAR
// <i id="icone-editar${index}" class="bi bi-pencil-square justify-content-center " style="background:;"  data-bs-toggle="modal" data-bs-target="#modal_edt_tarefas"></i>

 
//     </label>

//     <label class="container col-4 align-items-center label_opcoes" for="icone-apagar" style="color: #e80000;">
//       EXCLUIR 
// <i id="icone-apagar" class="bi bi-trash justify-content-center" style=" background: ;"></i>
//     </label>
//   </div>
//   <div class="modal-footer">
//     <button type="button" class="btn btn-secondary container col-12" data-bs-dismiss="modal">
//       FECHAR 
//     </button>
    
//   </div>
// </div>
// </div>
// `;
// tbody_tarefas.appendChild(trs);
//         tbody_tarefas.appendChild(tr);
// modal_opcoes_tarefas.appendChild(opcoes);

//         const label_opcoes = document.querySelectorAll('.label_opcoes');
//         label_opcoes.forEach(icone => {
//             icone.addEventListener("click", (event) => {
//                 const dataIndex = icone.getAttribute('data-index');
//                 editarTarefaNova(dataIndex);
//         // console.log(dataIndex);
//             });
//         });
//         const editIcons = document.querySelectorAll('.edit-icon');
//         editIcons.forEach(icon => {
//             icon.addEventListener("click", (event) => {
//                 const dataIndex = icon.getAttribute('data-index');
//                 editarTarefaNova(dataIndex);
//         // console.log(dataIndex);
//             });
//         });
//     });
// }
/*

function verTarefas() {
tabelas();

const tbody_tarefas = document.querySelector("#tbody_tarefas");
const modal_opcoes_tarefas = document.querySelector("#modal_opcoes_tarefas");
tbody_tarefas.innerHTML = "";
 modal_opcoes_tarefas.innerHTML = "";
Tasks.forEach((item, index) => {
  const tr = document.createElement("tr");
  const trs = document.createElement("tr");
  trs.style = "background-color: #fff; border: none;";
  const teste = CategoriaTask.forEach((itens, i) => {
  return itens;
  });

  trs.innerHTML = `
    <td style="background-color: #fff; border: none; border-left: 0.571429px solid  rgb(222,226,230);"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none; border-right: 0.571429px solid rgb(222,226,230);"></td>
  
  `;
  tr.innerHTML = `
    <td>${item.nome}</td>
          <td>${item.inicio.split("-").reverse().join("/")}</td>
          <td>${item.fim.split("-").reverse().join("/")}</td>
          <td style="padding: 0; margin: 0; ${
          item.estado == false ? "background-color: red;" : "background-color: green;"
          }">
    <label class="label_estado" for='check_task${index}' style="display: block; width: 100%; height: 100%;  padding: 5px; margin: 0;">
        ${item.estado == false ? "Incompleta" : "Completa"}
        <input type="checkbox" name="" id='check_task${index}' style="display: none;" onclick="mudarEstado(${index})"/>
    </label>
</td>
<td>${item.status}</td>
<td>${item.tempo}</td>


<td>${item.categoria !== "" ? item.categoria : `"${item.categoriaRemovida}"` + " EXCLUÍDA"}</td>

<!--
<td style="padding: 0; display:none;">
  <label class="editarTarefaLabel${index}"
  data-bs-toggle="modal" data-bs-target="#modal_edt_tarefa"
  style="background-color: blue; width: 100%; height: 100%;" onclick="editarTarefa(${index})">
    Editar

  </label> 

  
  <label id="apagarTarefaLabel" style="margin: 16px 0 0; background-color: #fa0053; width: 100%; height: 100%;"
  onclick="delTarefa(${index})"
  >
    Apagar
  </label>
</td>

  
  <td data-bs-toggle="modal" data-bs-target="#modal_opcoes_tarefas">
<i class="bi bi-gear"></i>
  
  </td>
  -->
   <td data-bs-toggle="modal" data-bs-target="#modal_opcoes_tarefas" data-index="${index}">
    <i class="bi bi-gear"></i>
</td>

   
    `;
  tbody_tarefas.appendChild(trs);
  tbody_tarefas.appendChild(tr);
 
const tdIndex = document.querySelector(`td[data-index="${index}"]`);
// const tdIndexed = document.querySelector(`.tar${index}`);


// tdIndex.forEach((item, index) => {
  
// });
// if (tdIndex.click() == tdIndex.target) {
  
// }
const opcoes = document.createElement("div");
 modal_opcoes_tarefas.innerHTML = `
 <div class="modal-dialog">
 <div class="modal-content container">
  <div class="modal-header">
   <h1 class="modal-title fs-5" id="exampleModalLabel">Alterar Tarefa
   
   </h1>
   <button type="button" class="btn-close edt-tarefa-close_edt" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body  row justify-content-around text-center" id="modal-body-tarefa_opcoes">
    <label class="container col-4 align-items-center label_opcoes" for="icone-editar">
      EDITAR
<i id="icone-editar" class="bi bi-pencil-square justify-content-center" style="background:;" onclick="editarTarefaNova(${index})" data-bs-toggle="modal" data-bs-target="#modal_edt_tarefas" data-index="${index}">n</i>

 
    </label>

    <label class="container col-4 align-items-center label_opcoes" for="icone-apagar" style="color: #e80000;">
      EXCLUIR 
<i id="icone-apagar" class="bi bi-trash justify-content-center" style=" background: ;"></i>
    </label>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary container col-12" data-bs-dismiss="modal">
      FECHAR 
    </button>
    
  </div>
 </div>
</div>
 `;
 modal_opcoes_tarefas.appendChild(opcoes);
 const iconeEditar = document.querySelector(`i[data-bs-target="#modal_edt_tarefas"][data-index="${index}"]`);
iconeEditar.addEventListener("click", () => {
    editarTarefaNova(index);
});

// tdIndex.addEventListener("click", (e) => {
//   e = event.target;
//   const tar = event.target;
// console.log(e);
  
// })
});


// Tasks.forEach((item, index) => {
//   const opcoes = document.createElement("div");
// modal_opcoes_tarefas.innerHTML = `
// <div class="modal-dialog">
// <div class="modal-content container">
//   <div class="modal-header">
//   <h1 class="modal-title fs-5" id="exampleModalLabel">Opções Tarefas 
   
//   </h1>
//   <button type="button" class="btn-close edt-tarefa-close_edt" data-bs-dismiss="modal" aria-label="Close"></button>
//   </div>
//   <div class="modal-body  row justify-content-around text-center" id="modal-body-tarefa_opcoes">
//     <label class="container col-4 align-items-center label_opcoes" for="icone-editar">
//       EDITAR
// <i id="icone-editar" class="bi bi-pencil-square justify-content-center" style=" background: ;"
// onclick="editarTarefaNova(${index})" 
//   data-bs-toggle="modal" 
//   data-bs-target="#modal_edt_tarefas"
//   ></i>
//     </label>

//     <label class="container col-4 align-items-center label_opcoes" for="icone-apagar" style="color: #e80000;">
//       EXCLUIR 
// <i id="icone-apagar" class="bi bi-trash justify-content-center" style=" background: ;"></i>
//     </label>
//   </div>
//   <div class="modal-footer">
//     <button type="button" class="btn btn-secondary container col-12" data-bs-dismiss="modal">
//       FECHAR 
//     </button>
    
//   </div>
// </div>
// </div>
// `;
// modal_opcoes_tarefas.appendChild(opcoes);
// });
}
*/
function verTarefas() {
tabelas();

const tbody_tarefas = document.querySelector("#tbody_tarefas");
tbody_tarefas.innerHTML = "";

Tasks.forEach((item, index) => {
  const tr = document.createElement("tr");
  tr.classList.add("taskItem");
  const trs = document.createElement("tr");
  trs.style = "background-color: #fff; border: none;";
  const teste = CategoriaTask.forEach((itens, i) => {
  return itens;
  });

  trs.innerHTML = `
    <td style="background-color: #fff; border: none; border-left: 0.571429px solid  rgb(222,226,230);"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none; border-right: 0.571429px solid rgb(222,226,230);"></td>
  
  `;
  tr.innerHTML = `
    <td>${item.nome}</td>
          <td>${item.inicio.split("-").reverse().join("/")}</td>
          <td>${item.fim.split("-").reverse().join("/")}</td>
          <td style="padding: 0; margin: 0; ${
          item.estado == false ? "background-color: red;" : "background-color: green;"
          }" onclick="mudarEstado(${index})">
    <label class="label_estado" for='check_task${index}' style="display: flex; justify-content: center;
 align-items: center; width: 100%; height: 100%;  padding: 5px; margin: 0;">
        ${item.estado == false ? "Concluir <i class='bi bi-x-circle' style='padding: 5px;'></i>" : "Concluída <i class='bi bi-check-circle' style='padding: 5px;'></i>"}
        <input type="checkbox" name="" id='check_task${index}' style="display: none;" />
    </label>
</td>
<td>${item.status}</td>
<td>${item.tempo}</td>


<td>${item.categoria !== "" ? item.categoria : `"${item.categoriaRemovida}"` + " EXCLUÍDA"}</td>

<!--
<td style="padding: 0;">
  <label
  data-bs-toggle="modal" data-bs-target="#modal_edt_tarefa"
  style="background-color: blue; width: 100%; height: 100%;" onclick="editarTarefa(${index})">
    Editar
    <i class="bi bi-pencil-square"></i>
  </label> 

  
  <label style="margin: 16px 0 0; background-color: #fa0053; width: 100%; height: 100%;" 
  
  onclick="delTarefa(${index})"
  >
    Apagar
    <i class="bi bi-trash"></i>
  </label>
</td>
  -->
<td data-bs-toggle="modal" data-bs-target="#modal_edt_tarefa"
   onclick="editarTarefa(${index})">
  <i class="bi bi-pencil-square"></i>
</td>
<td  onclick="delTarefaIndex(${index})" data-bs-toggle="modal" data-bs-target="#modal_apagar_tarefa"
  >
  <i class="bi bi-trash"></i>
</td>
    `;
  tbody_tarefas.appendChild(trs);
  tbody_tarefas.appendChild(tr);
  
});
}
verTarefas();

function verTarefasFiltradas() {
 const spanFiltro = document.querySelector(".span-filtro");
 if (!spanFiltro.classList.contains("show")) {
  spanFiltro.classList.add("show");
  const filtros = document.querySelector(".filtro");
 filtros.style="display: block";
 } else {
  spanFiltro.classList.remove("show");
  const filtros = document.querySelector(".filtro");
 filtros.style="display: none";
 }
}

function addTarefa() {
 const input_tarefa = document.querySelector("#input_tarefa").value.trim();
 const input_categoria = document.querySelector("#input_categoria").value.trim();
 let input_data_inicio = document.querySelector("#input_data_inicio");
 let input_data_fim = document.querySelector("#input_data_fim");

 if (input_tarefa === "") {
  // Atribuir valor vazio ao input tarefa
  document.querySelector("#input_tarefa").value = "";

  // Se não for válido, mostrar o tooltip e retornar

  //  const tooltip = new bootstrap.Tooltip(document.querySelector("#btn_valida_input_tarefa"));
  //   tooltip.show();
  //   // Fechar o tooltip após 5 segundos
  //   setTimeout(() => {
  //    tooltip.hide();
  //   }, 4000);
  return;
 }
 if (input_categoria === "") {
  datalistCategorias();
  return;
 }
 // Verifica se o campo de categoria não está vazio
 const catIndex = CategoriaTask.findIndex(cat => cat.toLowerCase() == input_categoria.toLowerCase());
 let categoriaVal = "";
 if (!catIndex) {
  categoriaVal = CategoriaTask[catIndex];
 } else {
  categoriaVal = input_categoria;
 }

 if (input_categoria !== "") {
  // Verifica se a categoria já existe no array (ignorando maiúsculas e minúsculas)

  if (!CategoriaTask.some(categoria => categoria.toLowerCase() === input_categoria.toLowerCase())) {
   // Adiciona a categoria ao array
   CategoriaTask.push(input_categoria);
   // Atualiza o localStorage com o novo array CategoriaTask
   localStorage.setItem("CategoriaTask", JSON.stringify(CategoriaTask));
  }
 }

 // Verificar se as datas foram preenchidas

 // Converter as datas para objetos Date
 const dataInicio = new Date(input_data_inicio.value);
 const dataFim = new Date(input_data_fim.value);

if (input_data_inicio.value === "" || input_data_fim.value === "") {
  console.log(input_data_fim.value);
  return;
}
 // Verificar se a diferença entre as datas é menor que 0
 if (difDatas(dataFim, dataInicio) < 0) {
  // Se for, limpar os valores dos campos de data
  input_data_fim.value = "";
  // Manter o valor da data fim e definir a data início como um dia antes da data fim
  const dataFinalMenosUmDia = new Date(dataFim);
  dataFinalMenosUmDia.setDate(dataFinalMenosUmDia.getDate() - 1);

  input_data_inicio.value = dataFinalMenosUmDia.toISOString().split("T")[0]; // Formatar a data para o formato yyyy-mm-dd

  // Exibir uma mensagem de alerta
  alert("A data de início deve ser anterior à data de fim.");
  return;
 }
 
 let status = "";
 if (difDatas(dataFim, dataInicio) == 0) {
  status = "Concluir no mesmo dia!";
 } else if (difDatas(dataFim, dataInicio) > 0 && difDatas(dataFim, dataInicio) < 2) {
  status = "1 dia para concluir!";
 } else if (difDatas(dataFim, dataInicio) > 1) {
  status = difDatas(dataFim, dataInicio) + " dias para concluir!";
 }

 

 let prazo = "";
 if (difDatas(dataFim, dataInicio) >= 0 && difDatas(dataFim, dataInicio) < 1) {
  prazo = difDatas(dataFim, dataInicio);
  
 } else if (difDatas(dataFim, dataInicio) > 0 && difDatas(dataFim, dataInicio) < 2) {
  prazo = difDatas(dataFim, dataInicio);
  
 } else if (difDatas(dataFim, dataInicio) > 1) {
  prazo = difDatas(dataFim, dataInicio);
  
 }

 // Adicionar a tarefa (com as datas válidas)
 // Aqui você pode adicionar o código para adicionar a tarefa ao seu sistema
 let fim = input_data_fim.value;
 let inicio = obterDataReg();
 const diffInMs = new Date(fim) - new Date(inicio);
 const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

 let tempo = "";
 
 if (diffInDays == -1) {
  tempo = `Atrasada ${Math.abs(diffInDays)} dia`;
 } else if (diffInDays < -1) {
  tempo = `Atrasada ${Math.abs(diffInDays)} dias`;
 } else if (diffInDays == 0) {
  tempo = `Último dia do prazo!`;
 } else if (diffInDays > 0 && diffInDays < 2) {
  tempo = `${Math.abs(diffInDays)} dia antes do prazo!`;
 } else if (diffInDays > 1) {
  tempo = `${Math.abs(diffInDays)} dias antes do prazo!`;
 }
let data = new Date();
const dataCriada = `${diaSemana[data.getDay()]}, ${data.getDate() < 10 ? "0" + (data.getDate()) : "" + (data.getDate())} de ${mesAno[data.getMonth()]} de ${data.getFullYear()} às ${data.getHours() < 10 ? "0" + data.getHours() : "" + data.getHours()}:${data.getMinutes() < 10 ? "0" + data.getMinutes() : "" + data.getMinutes()}:${data.getSeconds() < 10 ? "0" + data.getSeconds() : "" + data.getSeconds()}`;


 const tarefa = {
  nome: input_tarefa,
  categoria: categoriaVal,
  inicio: input_data_inicio.value,
  fim: input_data_fim.value,
  concluida: "Não concluída",
  estado: false,
  status: status,
  tempo: tempo,
  prazo: prazo,
  adicionada: dataCriada,
  adicionadaData: obterDataReg() ,
  adicionadaHora: new Date().toLocaleTimeString("pt-BR"),
 };
//console.log(tarefa);
 Tasks.push(tarefa);
 localStorage.setItem("Tasks", JSON.stringify(Tasks));
 const categorias = document.querySelector(".categorias");
categorias.innerHTML = "";
 datalistCategorias();
 verTarefas();

}

// function limparForm() {
// const input_tarefa = document.querySelector("#input_tarefa").value.trim();
// const input_categoria = document.querySelector("#input_categoria").value.trim();
// let input_data_inicio = document.querySelector("#input_data_inicio");
// let input_data_fim = document.querySelector("#input_data_fim");
//   input_tarefa.classList.remove("is-invalid");
// input_categoria.classList.remove("is-invalid");
// input_data_inicio.classList.remove("is-invalid");
// input_data_fim.classList.remove("is-invalid");
// }

function filtrarTarefasPorData(dataInicial, dataFinal) {
 return Tasks.filter(tarefa => {
  const dataInicioTarefa = new Date(tarefa.inicio);
  const dataFimTarefa = new Date(tarefa.fim);
  return dataInicioTarefa >= dataInicial && dataFimTarefa <= dataFinal;
 });
}

function filtra() {
 event.preventDefault();
 const filtro = document.querySelector(".tbody_tarefas_filtro");
 const dataInicialFiltro = new Date(document.querySelector("#dataInicialFiltro").value);
 const dataFinalFiltro = new Date(document.querySelector("#dataFinalFiltro").value);

 // Verifica se as datas foram inseridas corretamente
 if (isNaN(dataInicialFiltro.getTime()) || isNaN(dataFinalFiltro.getTime())) {
  console.log("Por favor, insira datas válidas.");
  return;
 }

 const est = document.querySelectorAll('input[name="flexRadioDefault"]');
 
 est.forEach((item, index) => {
  item.addEventListener("click", function (event) {
   const target = event.target;
   if (item.checked) {
    
    console.log(target.value);
    return target.value;
   }
  });
 });

 const radios = document.querySelectorAll('input[type="radio"]');

 radios.forEach(radio => {
  radio.addEventListener("change", function () {
   if (this.checked) {
    console.log("Radio selecionado:", this.value);
    // Faça algo com o input radio selecionado, como atualizar uma variável ou chamar uma função de filtragem
   }
  });
 });


 // Função para filtrar as tarefas com base nas datas selecionadas
 const tarefasFiltradas = filtrarTarefasPorData(dataInicialFiltro, dataFinalFiltro);

 filtro.innerHTML = `
  
  `;

 tarefasFiltradas.forEach((item, index) => {
  const tr = document.createElement("tr");
  const trs = document.createElement("tr");
  trs.style = "background-color: #fff; border: none;";
  trs.innerHTML = `
    <td style="background-color: #fff; border: none; border-left: 0.571429px solid  rgb(222,226,230);"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    
    <td style="background-color: #fff; border: none; border-right: 0.571429px solid rgb(222,226,230);"></td>
  
  `;
  tr.innerHTML = `
    <td>${item.nome}</td>
          <td>${item.inicio.split("-").reverse().join("/")}</td>
          <td>${item.fim.split("-").reverse().join("/")}</td>
          <td style="padding: 0; ${item.estado == false ? "background-color: red;" : "background-color: green;"}">
    <label for='check_tasks${index}' style="display: block; width: 100%; height: 100%; padding: 5px; margin: 0;">
        ${item.estado == false ? "Concluir" : "Concluída"}
        <input type="checkbox" name="" id='check_tasks${index}' style="display: none;" />
    </label>
</td>
<td>${item.status}</td>
<td>${item.tempo}</td>

<td>${
   item.categoria == CategoriaTask[index]
    ? CategoriaTask[index]
    : CategoriaTask[index] != undefined
    ? item.categoria
    : item.categoria == ""
    ? item.categoriaRemovida + " 'Removida'"
    : item.categoria
  }</td>

          
          
  
    `;
  filtro.appendChild(trs);
  filtro.appendChild(tr);
 });
 console.log(tarefasFiltradas);
}

function filtro() {
 event.preventDefault();
 const filtros = document.querySelector(".filtro");
 filtros.style="display: block";
 const filtro = document.querySelector(".tbody_tarefas_filtro");
 const dataInicialFiltro = new Date(document.querySelector("#dataInicialFiltro").value);
 const dataFinalFiltro = new Date(document.querySelector("#dataFinalFiltro").value);

 // Verifica se as datas foram inseridas corretamente
 if (isNaN(dataInicialFiltro.getTime()) || isNaN(dataFinalFiltro.getTime())) {
  console.log("Por favor, insira datas válidas.");
  return;
 }

 // Verifica o estado selecionado
 let estadoSelecionado = "";
 const radios = document.querySelectorAll('input[name="flexRadioDefault"]');
 radios.forEach(radio => {
  if (radio.checked) {
   estadoSelecionado = radio.value;
  }
 });

 // Função para filtrar as tarefas com base nas datas e no estado selecionados
 const tarefasFiltradas = filtrarTarefas(dataInicialFiltro, dataFinalFiltro, estadoSelecionado);

 filtro.innerHTML = "";

 tarefasFiltradas.forEach((item, index) => {
  const tr = document.createElement("tr");
  const trs = document.createElement("tr");
  trs.style = "background-color: #fff; border: none;";
  trs.innerHTML = `
            <td style="background-color: #fff; border: none; border-left: 0.571429px solid  rgb(222,226,230);"></td>
            <td style="background-color: #fff; border: none;"></td>
            <td style="background-color: #fff; border: none;"></td>
            <td style="background-color: #fff; border: none;"></td>
            <td style="background-color: #fff; border: none;"></td>
            <td style="background-color: #fff; border: none;"></td>
            
            <td style="background-color: #fff; border: none; border-right: 0.571429px solid rgb(222,226,230);"></td>
        `;
  tr.innerHTML = `
            <td>${item.nome}</td>
            <td>${item.inicio.split("-").reverse().join("/")}</td>
            <td>${item.fim.split("-").reverse().join("/")}</td>
            <td style="padding: 0; ${item.estado == false ? "background-color: red;" : "background-color: green;"}">
                <label for='check_tasks${index}' style="display: block; width: 100%; height: 100%; padding: 5px; margin: 0;">
                    ${item.estado == false ? "Concluir" : "Concluída"}
                    <input type="checkbox" name="" id='check_tasks${index}' style="display: none;" />
                </label>
            </td>
            <td>${item.status}</td>
            <td>${item.tempo}</td>
            <td>${
             item.categoria == CategoriaTask[index]
              ? CategoriaTask[index]
              : CategoriaTask[index] != undefined
              ? item.categoria
              : item.categoria == ""
              ? item.categoriaRemovida + " 'Removida'"
              : item.categoria
            }</td>
        `;
  filtro.appendChild(trs);
  filtro.appendChild(tr);
 });

}

// Função para filtrar tarefas com base nas datas e no estado selecionado
function filtrarTarefas(dataInicial, dataFinal, estado) {
 return Tasks.filter(tarefa => {
  const dataInicioTarefa = new Date(tarefa.inicio);
  const dataFimTarefa = new Date(tarefa.fim);

  // Verifica se a tarefa está dentro do intervalo de datas selecionado
  const dentroDoIntervalo = dataInicioTarefa >= dataInicial && dataFimTarefa <= dataFinal;

  // Verifica se o estado é "ALL" ou se corresponde ao estado da tarefa
  const estadoCorrespondente = estado === "todas" || tarefa.estado.toString() === estado;
  // Retorna true se a tarefa estiver dentro do intervalo de datas e corresponder ao estado
  return dentroDoIntervalo && estadoCorrespondente;
 });
}

function filtros() {
 event.preventDefault();
 const filtro = document.querySelector(".tbody_tarefas_filtro");
 const dataInicialFiltro = new Date(document.querySelector("#dataInicialFiltro").value);
 const dataFinalFiltro = new Date(document.querySelector("#dataFinalFiltro").value);
 const dataInicial = new Date("1024-03-26"); // Data inicial do filtro
 const dataFinal = new Date("3024-04-10"); // Data final do filtro
 const tarefasFiltrada = filtrarTarefasPorData(dataInicial, dataFinal);
 // Verifica se as datas foram inseridas corretamente
 if (isNaN(dataInicial.getTime()) || isNaN(dataFinal.getTime())) {
  console.log("Por favor, insira datas válidas.");
  return;
 }

 // Função para filtrar as tarefas com base nas datas selecionadas
 const tarefasFiltradas = filtrarTarefasPorData(dataInicial, dataFinal);

 filtro.innerHTML = `
 
 `;

 tarefasFiltrada.forEach((item, index) => {
  const tr = document.createElement("tr");
  const trs = document.createElement("tr");
  trs.style = "background-color: #fff; border: none;";
  trs.innerHTML = `
    <td style="background-color: #fff; border: none; border-left: 0.571429px solid  rgb(222,226,230);"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    
    <td style="background-color: #fff; border: none; border-right: 0.571429px solid rgb(222,226,230);"></td>
  
  `;
  tr.innerHTML = `
    <td>${item.nome}</td>
          <td>${item.inicio.split("-").reverse().join("/")}</td>
          <td>${item.fim.split("-").reverse().join("/")}</td>
          <td style="padding: 0; ${item.estado == false ? "background-color: red;" : "background-color: green;"}">
    <label for='check_tasks${index}' style="display: block; width: 100%; height: 100%; padding: 5px; margin: 0;">
        ${item.estado == false ? "Concluir" : "Concluída"}
        <input type="checkbox" name="" id='check_tasks${index}' style="display: none;" />
    </label>
</td>
<td>${item.status}</td>
<td>${item.tempo}</td>
<!--
<td>${item.status}</td>
<td>${
   item.categoria == CategoriaTask[index]
    ? CategoriaTask[index]
    : CategoriaTask[index] != undefined
    ? item.categoria + " 'Alterada para '" + " " + CategoriaTask[index]
    : item.categoria + " 'Removida'"
  }</td>

<td>${
   item.categoria == CategoriaTask[index]
    ? CategoriaTask[index]
    : CategoriaTask[index] != undefined
    ? CategoriaTask[index] + " 'Alterada para '" + " " + item.categoria
    : item.categoria == ""
    ? item.categoriaRemovida + " 'Removida'"
    : item.categoria
  }</td>
-->
<td>${
   item.categoria == CategoriaTask[index]
    ? CategoriaTask[index]
    : CategoriaTask[index] != undefined
    ? item.categoria
    : item.categoria == ""
    ? item.categoriaRemovida + " 'Removida'"
    : item.categoria
  }</td>

         
          
  
    `;
  filtro.appendChild(trs);
  filtro.appendChild(tr);
 });
 
}

function filtroTipo() {
 event.preventDefault();
 const filtro = document.querySelector(".tbody_tarefas_filtro");


 // Função para filtrar as tarefas com base nas datas selecionadas
 const tarefasFiltradas = filtrarTarefasPorData(dataInicialFiltro, dataFinalFiltro);

 filtro.innerHTML = `
 
 `;

 tarefasFiltradas.forEach((item, index) => {
  const tr = document.createElement("tr");
  const trs = document.createElement("tr");
  trs.style = "background-color: #fff; border: none;";
  trs.innerHTML = `
    <td style="background-color: #fff; border: none; border-left: 0.571429px solid  rgb(222,226,230);"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    <td style="background-color: #fff; border: none;"></td>
    
    <td style="background-color: #fff; border: none; border-right: 0.571429px solid rgb(222,226,230);"></td>
  
  `;
  tr.innerHTML = `
    <td>${item.nome}</td>
          <td>${item.inicio.split("-").reverse().join("/")}</td>
          <td>${item.fim.split("-").reverse().join("/")}</td>
          <td style="padding: 0; ${item.estado == false ? "background-color: red;" : "background-color: green;"}">
    <label for='check_tasks${index}' style="display: block; width: 100%; height: 100%; padding: 5px; margin: 0;">
        ${item.estado == false ? "Concluir" : "Concluída"}
        <input type="checkbox" name="" id='check_tasks${index}' style="display: none;" />
    </label>
</td>
<td>${item.status}</td>
<td>${item.tempo}</td>

<td>${
   item.categoria == CategoriaTask[index]
    ? CategoriaTask[index]
    : CategoriaTask[index] != undefined
    ? item.categoria
    : item.categoria == ""
    ? item.categoriaRemovida + " 'Removida'"
    : item.categoria
  }</td>

         
          
  
    `;
  filtro.appendChild(trs);
  filtro.appendChild(tr);
 });

}

function todas() {
 const filtro = document.querySelector(".filtro");
 filtro.innerHTML = `
  <form class="row g-3 needs-validation" novalidate id="form_filtro">
  
  
  
  <div class="col-md-4">
    <label for="dataInicialFiltro" class="form-label">
      Início
    </label>
    <input type="date" class="form-control" id="dataInicialFiltro" value="" required>
    <div class="valid-feedback">
      Correto!
    </div>
    <div class="invalid-feedback">
        Digite a data inicial!
      </div>
  </div>
 
  <div class="col-md-4">
    <label for="dataFinalFiltro" class="form-label">
      Fim
    </label>
    <input type="date" class="form-control" id="dataFinalFiltro" value="" required>
    <div class="valid-feedback">
      Correto!
    </div>
        <div class="invalid-feedback">
        Digite a data final!
      </div>
  </div>
 
 <div class="col-12">
   <span>
   
 
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
  <label class="form-check-label" for="flexRadioDefault1">
    Todas 
  </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
  <label class="form-check-label" for="flexRadioDefault2">
    Completa
  </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
  <label class="form-check-label" for="flexRadioDefault3">
    Incompleta 
  </label>
</div>
    </span>
 </div>
  <div class="col-12">
    <button class="btn btn-primary btns_Modal_Tarefas text-black" id="submite" type="submit"
    onclick="filtro()"
    >FILTRAR</button> 
    
    <button class="btn btn-primary btns_Modal_Tarefas text-black" onclick="filtros()" id="submites" type="submit"
    >TODAS</button> 
    
    
    
 
    
 <button type="button" class="btn btn-secondary btns_Modal_Tarefas text-black"  onclick="fecharTarefasFiltradas()">FECHAR</button>
 

  </div>
 
</form>

    <div class="table-responsive table-wrapper" id="tabelas-filtro"
    style=" overflow-y: auto; margin: 32px auto; height: 360px;"
    
    >
     
    <table class="table table-md table-striped table-bordered align-middle text-center"
    style="margin: 0;">
      <thead class="table-dark"
      style="position: sticky;
        top: 0; z-index: 1;">
        <tr>
         <th>Nome</th>
        <th>Início</th>
        <th>Fim</th>
        <th>Estado</th>
        <th>Prazo</th>
        <th>Tempo</th>
        <th>Categoria</th>
        
          
        </tr>
      </thead>
      <tbody class="tbody_tarefas_filtro">

        
      </tbody>
    </table>
      
    </div>
 `;
}

// Adiciona um evento para quando o modal é aberto
document.getElementById("modal_filtro_tarefa").addEventListener("show.bs.modal", function (event) {
 const radios = this.querySelectorAll('input[type="radio"]');

 radios.forEach(radio => {
  if (radio.checked) {
   // console.log("Radio selecionado inicialmente:", radio.value);
   // Faça algo com o input radio inicialmente selecionado
  }
 });
});

function fecharTarefasFiltradas() {
 const filtro = document.querySelector(".filtro");
 filtro.style="display: none"
 filtro.innerHTML = `
      <span class="span-filtro fade">
     <div class="container-md align-middle text-center text-white justify-content-around" style="margin: 2rem 0 0.5rem">
      <h1 class="text-white justify-content-around">LISTA DE TAREFAS FILTRADAS
     
      </h1>
      
     </div>
     <div class="" style="display: flex;
  justify-content: space-around;">
       
     
     
     </div>
<button type="button" class="btn btn-close bg-danger text-white" style="font-size: 20px; color: #fff;" onclick="fecharTarefasFiltradas()"> </button>
<div class="table-responsive table-wrapper" id="tabelas-filtro" style="overflow-y: auto; margin: 3px auto; overflow-x: auto; height: 480px; ">

  <table id="tabelas-filtro-table" class="table table-md table-striped table-bordered align-middle text-center caption-top" style="margin: 0 auto 24px;  ">
<!--    <caption class="caption-container" style="text-align:left; position: relative; top: 0; right: 0; z-index: 2;">
      <button type="button" class="btn btn-close text-white" onclick="verTarefasFiltradas()"> </button>
    </caption> -->
    <thead class="table-dark" style="position: sticky; top: 0; z-index: 1; ">
      <tr>
        <th>Nome</th>
        <th>Início</th>
        <th>Fim</th>
        <th>Estado</th>
        <th>Prazo</th>
        <th>Tempo</th>
        <th>Categoria</th>
      </tr>
    </thead>
    <tbody class="tbody_tarefas_filtro"></tbody>
  </table>
</div>


     
    </span>
 `;
 
 const categorias = document.querySelector(".categorias");
// console.log(categorias.children.length);
 if (categorias.children.length === 1) {
    while (categorias.firstChild) {
   categorias.removeChild(categorias.firstChild);
  }
 } 
}

const tables = document.getElementById("tabelas-filtro");
const table = document.getElementById("tabelas-filtro-table");
const caption = document.querySelector(".caption-container");
tables.addEventListener("scroll", () => {
 
 const scrollX = tables.scrollLeft;
 const isScrollable = tables.scrollWidth > tables.clientWidth;
 console.log(isScrollable);
 console.log(scrollX);
 if (isScrollable) {
  caption.style.right = `-${scrollX}px`;
 } else {
  caption.style.right = "0";
 }
});

const dataInicialFiltro = document.querySelector("#dataInicialFiltro");
const dataFinalFiltro = document.querySelector("#dataFinalFiltro");
dataInicialFiltro.value = obterDataReg();
dataFinalFiltro.value = obterDataReg();
// Eventos
table.addEventListener("scroll", () => {
 // table.style=`max-width: ${table.clientWidth}px`;
 const scrollX = table.scrollLeft;
 // const isScrollable = table.scrollWidth > table.clientWidth;
 const isScrollable = table.scrollWidth > table.clientWidth;
 console.log(isScrollable);
 console.log(scrollX);
 if (isScrollable) {
  caption.style.right = `-${scrollX}px`;
 } else {
  caption.style.right = "0";
 }
});

// var header = document.querySelector(".header");
// console.log(document.querySelector(".header").offsetHeight);
// const par = document.querySelector("#par");
// par.innerHTML = `
// ${document.body.offsetWidth} px.
// `;
// console.log(document.body.offsetWidth);
window.addEventListener("scroll", function () {
 const dropdown = document.querySelectorAll(".dropdown-menu a");
 var header = document.querySelector(".header");
 var scrollPosition = window.scrollY;
 if (scrollPosition > 0) {
  header.classList.add("scrolled");
  document.body.style.marginTop = header.offsetHeight + "px";
// console.log(header.offsetHeight);
  dropdown.forEach((item, index) => {
   item.style.color = "#000";
  });
  
 } else {
  header.classList.remove("scrolled");
  document.body.style.marginTop = 0;
 }
});

document.addEventListener("DOMContentLoaded", function () {
 const menu_mobile_ul_li_a = document.querySelector("#menu_mobile_ul li a");
 const btn_close_menu_mobile = document.querySelector("#btn_close_menu");
 menu_mobile_ul_li_a.addEventListener("click", function (event) {
  event.preventDefault(); // Impede o comportamento padrão do link

  // Rola suavemente até o topo da página
  window.scrollTo({
   top: 0,
   behavior: "smooth"
  });

  btn_close_menu.click();
 });
});

// Obtenha a data
function obterDataReg() {
 // Obter a data e hora atual do dispositivo
 const dataHoraAtual = new Date();

 // Formatar a data e hora para o formato correto
 const ano = dataHoraAtual.getFullYear();
 const mes = String(dataHoraAtual.getMonth() + 1).padStart(2, "0");
 const dia = String(dataHoraAtual.getDate()).padStart(2, "0");
 const horas = String(dataHoraAtual.getHours()).padStart(2, "0");
 const minutos = String(dataHoraAtual.getMinutes()).padStart(2, "0");
 const segundos = String(dataHoraAtual.getSeconds()).padStart(2, "0");
 const milisegundos = String(dataHoraAtual.getMilliseconds()).padStart(2, "0");
 const dataHoraFormatada = `// - :::`;
 const dataReg = `${ano}-${mes}-${dia}`;
 return dataReg;
}

(() => {
 // Exemplo de JavaScript inicial para desabilitar envios de formulários se houver campos inválidos
 "use strict";

 // Busca todos os formulários aos quais queremos aplicar estilos de validação personalizados do Bootstrap
 const forms = document.querySelectorAll(".needs-validation");
 const addTarefaClose = document.querySelector("#add-tarefa-close");
 // Função para adicionar evento de envio e validação aos formulários
 Array.from(forms).forEach(form => {
  form.addEventListener(
   "submit",
   event => {
    let dataInicio = document.querySelector("#input_data_inicio");
    let dataFim = document.querySelector("#input_data_fim");
    difDatas(dataFim.value, dataInicio.value);

    // Impedir o envio padrão do formulário
    event.preventDefault();

    // Verificar se o formulário é válido
    if (!form.checkValidity()) {
     // Obter todos os campos inválidos
     const invalidFields = form.querySelectorAll(":invalid");

     // Adicionar a classe 'is-invalid' aos campos inválidos
     invalidFields.forEach(field => {
      field.classList.add("is-invalid");
      field.focus(); // Dar foco ao primeiro campo inválido
     });
     datalistCategorias();
     return; // Impedir o envio do formulário
    } else if (form.checkValidity() && difDatas(dataFim.value, dataInicio.value) > -1) {
     // Remover todas as regras de validação
     form.querySelectorAll("input").forEach(input => {
      input.classList.remove("is-invalid");
      input.classList.remove("is-valid");
      form.reset();
      datalistCategorias();
      datas();
     });
     addTarefaClose.click();
    }

    form.classList.remove("was-validated"); // Remover a classe 'was-validated' para reiniciar a validação
   },
   false
  );
 });

 // Adicionar eventos de entrada para validar os campos em tempo real
 document.querySelector("#input_data_inicio").addEventListener("input", validarCampoDataInicio);
 document.querySelector("#input_data_fim").addEventListener("input", validarCampoDataFim);
 document.querySelector("#input_tarefa").addEventListener("input", validarCampoTarefa);
 document.querySelector("#input_categoria").addEventListener("input", validarCampoCategoria);

 // Função para validar o campo de data de início
 function validarCampoDataInicio() {
  const input_data_inicio = document.querySelector("#input_data_inicio");
  const input_data_fim = document.querySelector("#input_data_fim");
    
  if (input_data_inicio.value.trim() === "") {
   input_data_inicio.classList.add("is-invalid");
   input_data_inicio.classList.remove("is-valid");
  } 
  else if (new Date(input_data_fim.value) < new Date(input_data_inicio.value)) {
   input_data_inicio.classList.add("is-invalid");
   input_data_inicio.classList.remove("is-valid");
   input_data_fim.classList.add("is-invalid");
   input_data_fim.classList.remove("is-valid");
  }
  else if(new Date(input_data_fim.value) >= new Date(input_data_inicio.value)) {
   input_data_inicio.classList.remove("is-invalid");
   input_data_inicio.classList.add("is-valid");
   input_data_fim.classList.remove("is-invalid");
   input_data_fim.classList.add("is-valid");
  }
 }

 // Função para validar o campo de data de fim
 function validarCampoDataFim() {
  const input_data_inicio = document.querySelector("#input_data_inicio");
  const input_data_fim = document.querySelector("#input_data_fim");
  if (input_data_fim.value.trim() === "") {
   input_data_fim.classList.add("is-invalid");
   input_data_fim.classList.remove("is-valid");
  } else if (new Date(input_data_fim.value) < new Date(input_data_inicio.value)) {
   input_data_fim.classList.add("is-invalid");
   input_data_fim.classList.remove("is-valid");
   input_data_inicio.classList.add("is-invalid");
   input_data_inicio.classList.remove("is-valid");
  } else if(new Date(input_data_fim.value) >= new Date(input_data_inicio.value)) {
   input_data_inicio.classList.remove("is-invalid");
   input_data_inicio.classList.add("is-valid");
   input_data_fim.classList.remove("is-invalid");
   input_data_fim.classList.add("is-valid");
  }
 }

 // Função para validar o campo de tarefa
 // function validarCampoTarefa() {
 //   const input_tarefa = document.querySelector("#input_tarefa");
 //   if (input_tarefa.value.trim() === "") {
 //   input_tarefa.classList.remove("is-valid");
 //   input_tarefa.classList.remove("is-invalid");

 //   } else {
 //   input_tarefa.classList.remove("is-invalid");
 //   input_tarefa.classList.add("is-valid");

 //   }
 //   if (input_tarefa.value.startsWith(" ")) {
 //   input_tarefa.classList.add("is-invalid");

 //   }
 // }
 function validarCampoTarefa() {
  const input_tarefa = document.querySelector("#input_tarefa");
  // if (input_tarefa.value.trim() === "" || input_tarefa.value.startsWith(" ")) {
  // input_tarefa.classList.remove("is-valid");
  // input_tarefa.classList.add("is-invalid");
  // } else {
  // input_tarefa.classList.remove("is-invalid");
  // input_tarefa.classList.add("is-valid");
  // }
  if (input_tarefa.value.trim() === "") {
   input_tarefa.classList.remove("is-valid");
   input_tarefa.classList.remove("is-invalid");
  } else {
   input_tarefa.classList.remove("is-invalid");
   input_tarefa.classList.add("is-valid");
  }
  if (input_tarefa.value.startsWith(" ")) {
   input_tarefa.classList.add("is-invalid");
  }
 }

 // Função para validar o campo de categoria
 function validarCampoCategoria() {
  const input_categoria = document.querySelector("#input_categoria");
  if (input_categoria.value.trim() === "") {
   input_categoria.classList.remove("is-valid");
   input_categoria.classList.remove("is-invalid");
  } else {
   input_categoria.classList.remove("is-invalid");
   input_categoria.classList.add("is-valid");
  }
  if (input_categoria.value.startsWith(" ")) {
   input_categoria.classList.add("is-invalid");
  }
 }
})();

function validaFormulario() {
 // Busca todos os formulários aos quais queremos aplicar estilos de validação personalizados do Bootstrap
 const forms = document.querySelectorAll(".needs-validation");
 // Função para adicionar evento de envio e validação aos formulários
 Array.from(forms).forEach(form => {
  form.addEventListener(
   "submit",
   event => {
    // Impedir o envio padrão do formulário
    event.preventDefault();
//console.log(form.target);

    // Verificar se o formulário é válido
    if (!form.checkValidity()) {
     // Obter todos os campos inválidos
     const invalidFields = form.querySelectorAll(":invalid");

     // Adicionar a classe 'is-invalid' aos campos inválidos
     invalidFields.forEach(field => {
      field.classList.add("is-invalid");
      field.focus(); // Dar foco ao primeiro campo inválido
     });
     datalistCategorias();
     return; // Impedir o envio do formulário
    } else {
     // Remover todas as regras de validação
     form.querySelectorAll("input").forEach(input => {
      input.classList.remove("is-invalid");
      input.classList.remove("is-valid");
     });
//form.classList.remove("was-validated"); // Remover a classe 'was-validated' para reiniciar a validação
     // Submeter o formulário
     form.submit();
    }
   },
   false
  );
 });

 // Adicionar eventos de entrada para validar os campos em tempo real
 document.querySelector("#input_data_inicioo").addEventListener("input", validaCampoDataInicio);
 document.querySelector("#input_data_fimm").addEventListener("input", validaCampoDataFim);
 document.querySelector("#input_tarefass").addEventListener("input", validaCampoTarefa);
 document.querySelector("#input_categoriass").addEventListener("input", validaCampoCategoria);

 // Função para validar o campo de data de início
 function validaCampoDataInicio() {
  const input_data_inicio = document.querySelector("#input_data_inicioo");
  const input_data_fim = document.querySelector("#input_data_fimm");
  if (input_data_inicio.value.trim() === "") {
   input_data_inicio.classList.add("is-invalid");
   input_data_inicio.classList.remove("is-valid");
  } else if (new Date(input_data_fim.value) < new Date(input_data_inicio.value)) {
   input_data_inicio.classList.add("is-invalid");
   input_data_fim.classList.add("is-invalid");
   input_data_inicio.classList.remove("is-valid");
   input_data_fim.classList.remove("is-valid");
  } 
  else if(new Date(input_data_fim.value) >= new Date(input_data_inicio.value)) {
   input_data_inicio.classList.remove("is-invalid");
   input_data_inicio.classList.add("is-valid");
   input_data_fim.classList.remove("is-invalid");
   input_data_fim.classList.add("is-valid");
  }

 }

 // Função para validar o campo de data de fim
 function validaCampoDataFim() {
  const input_data_inicio = document.querySelector("#input_data_inicioo");
  const input_data_fim = document.querySelector("#input_data_fimm");
  if (input_data_fim.value.trim() === "") {
   input_data_fim.classList.add("is-invalid");
   input_data_fim.classList.remove("is-valid");
   
  } else if (new Date(input_data_fim.value) < new Date(input_data_inicio.value)) {
   input_data_fim.classList.add("is-invalid");
   input_data_inicio.classList.add("is-invalid");
   input_data_fim.classList.remove("is-valid");
   input_data_inicio.classList.remove("is-valid");
  } else if(new Date(input_data_fim.value) >= new Date(input_data_inicio.value)) {
   input_data_inicio.classList.remove("is-invalid");
   input_data_inicio.classList.add("is-valid");
   input_data_fim.classList.remove("is-invalid");
   input_data_fim.classList.add("is-valid");
  }
 }

 // Função para validar o campo de tarefa
 function validaCampoTarefa() {
  const input_tarefa = document.querySelector("#input_tarefass");
  // if (input_tarefa.value.trim() === "" || input_tarefa.value.startsWith(" ")) {
  // input_tarefa.classList.remove("is-valid");
  // input_tarefa.classList.add("is-invalid");
  // } else {
  // input_tarefa.classList.remove("is-invalid");
  // input_tarefa.classList.add("is-valid");
  // }
  if (input_tarefa.value.trim() === "") {
   input_tarefa.classList.remove("is-valid");
   input_tarefa.classList.add("is-invalid");
  } else {
   input_tarefa.classList.remove("is-invalid");
   input_tarefa.classList.add("is-valid");
  }
  if (input_tarefa.value.startsWith(" ")) {
   input_tarefa.classList.add("is-invalid");
  }
 }

 // Função para validar o campo de categoria
 function validaCampoCategoria() {
  const input_categoria = document.querySelector("#input_categoriass");
  if (input_categoria.value.trim() === "") {
   input_categoria.classList.remove("is-valid");
   input_categoria.classList.add("is-invalid");
  } else {
   input_categoria.classList.remove("is-invalid");
   input_categoria.classList.add("is-valid");
  }
  if (input_categoria.value.startsWith(" ")) {
   input_categoria.classList.add("is-invalid");
  }
 }
}

function validarFormulario() {
 // Busca todos os formulários aos quais queremos aplicar estilos de validação personalizados do Bootstrap
 const forms = document.querySelectorAll(".needs-validation");

 // Função para adicionar evento de envio e validação aos formulários
 Array.from(forms).forEach(form => {
  form.addEventListener(
   "submit",
   event => {
    let dataInicio = document.querySelector("#input_data_inicio");
    let dataFim = document.querySelector("#input_data_fim");
    difDatas(dataFim.value, dataInicio.value);

    // Impedir o envio padrão do formulário
    event.preventDefault();

    // Verificar se o formulário é válido
    if (!form.checkValidity()) {
     // Obter todos os campos inválidos
     const invalidFields = form.querySelectorAll(":invalid");

     // Adicionar a classe 'is-invalid' aos campos inválidos
     invalidFields.forEach(field => {
      field.classList.add("is-invalid");
      field.focus(); // Dar foco ao primeiro campo inválido
     });
     datalistCategorias();
     return; // Impedir o envio do formulário
    } else if (form.checkValidity() && difDatas(dataFim.value, dataInicio.value) > -1) {
     // Remover todas as regras de validação
     form.querySelectorAll("input").forEach(input => {
      input.classList.remove("is-invalid");
      input.classList.remove("is-valid");
      form.reset();
      datalistCategorias();
      datas();
     });
    }

    form.classList.remove("was-validated"); // Remover a classe 'was-validated' para reiniciar a validação
   },
   false
  );
 });

 // Adicionar eventos de entrada para validar os campos em tempo real
 document.querySelector("#input_data_inicio").addEventListener("input", validarCampoDataInicio);
 document.querySelector("#input_data_fim").addEventListener("input", validarCampoDataFim);
 document.querySelector("#input_tarefa").addEventListener("input", validarCampoTarefa);
 document.querySelector("#input_categoria").addEventListener("input", validarCampoCategoria);

 // Função para validar o campo de data de início
 function validarCampoDataInicio() {
  const input_data_inicio = document.querySelector("#input_data_inicio");
  const input_data_fim = document.querySelector("#input_data_fim");
  if (input_data_inicio.value.trim() === "") {
   input_data_inicio.classList.remove("is-invalid");
   input_data_inicio.classList.remove("is-valid");
  } else if (new Date(input_data_fim.value) < new Date(input_data_inicio.value)) {
   input_data_inicio.classList.add("is-invalid");
   input_data_inicio.classList.remove("is-valid");
  } else {
   input_data_inicio.classList.remove("is-invalid");
   input_data_inicio.classList.add("is-valid");
  }
 }

 // Função para validar o campo de data de fim
 function validarCampoDataFim() {
  const input_data_inicio = document.querySelector("#input_data_inicio");
  const input_data_fim = document.querySelector("#input_data_fim");
  if (input_data_fim.value.trim() === "") {
   input_data_fim.classList.remove("is-invalid");
   input_data_fim.classList.remove("is-valid");
  } else if (new Date(input_data_fim.value) < new Date(input_data_inicio.value)) {
   input_data_fim.classList.add("is-invalid");
   input_data_fim.classList.remove("is-valid");
  } else {
   input_data_fim.classList.remove("is-invalid");
   input_data_fim.classList.add("is-valid");
  }
 }

 // Função para validar o campo de tarefa
 function validarCampoTarefa() {
  const input_tarefa = document.querySelector("#input_tarefa");
  // if (input_tarefa.value.trim() === "" || input_tarefa.value.startsWith(" ")) {
  // input_tarefa.classList.remove("is-valid");
  // input_tarefa.classList.add("is-invalid");
  // } else {
  // input_tarefa.classList.remove("is-invalid");
  // input_tarefa.classList.add("is-valid");
  // }
  if (input_tarefa.value.trim() === "") {
   input_tarefa.classList.remove("is-valid");
   input_tarefa.classList.remove("is-invalid");
  } else {
   input_tarefa.classList.remove("is-invalid");
   input_tarefa.classList.add("is-valid");
  }
  if (input_tarefa.value.startsWith(" ")) {
   input_tarefa.classList.add("is-invalid");
  }
 }

 // Função para validar o campo de categoria
 function validarCampoCategoria() {
  const input_categoria = document.querySelector("#input_categoria");
  if (input_categoria.value.trim() === "") {
   input_categoria.classList.remove("is-valid");
   input_categoria.classList.remove("is-invalid");
  } else {
   input_categoria.classList.remove("is-invalid");
   input_categoria.classList.add("is-valid");
  }
  if (input_categoria.value.startsWith(" ")) {
   input_categoria.classList.add("is-invalid");
  }
 }
}

function validarFormularios(forms) {
 // Função para adicionar evento de envio e validação aos formulários
 forms.forEach(form => {
  form.addEventListener(
   "submit",
   event => {
    const input_data_inicio = form.querySelector("#input_data_inicio");
    const input_data_fim = form.querySelector("#input_data_fim");
    const input_data_inicioo = form.querySelector("#input_data_inicioo");
    const input_data_fimm = form.querySelector("#input_data_fimm");

    difDatas(input_data_fim.value, input_data_inicio.value);

    // Impedir o envio padrão do formulário
    event.preventDefault();

    // Verificar se o formulário é válido
    if (!form.checkValidity()) {
     // Obter todos os campos inválidos
     const invalidFields = form.querySelectorAll(":invalid");

     // Adicionar a classe 'is-invalid' aos campos inválidos
     invalidFields.forEach(field => {
      field.classList.add("is-invalid");
      field.focus(); // Dar foco ao primeiro campo inválido
     });
     datalistCategorias();
     return; // Impedir o envio do formulário
    } else if (form.checkValidity() && difDatas(input_data_fim.value, input_data_inicio.value) > -1) {
     // Remover todas as regras de validação
     form.querySelectorAll("input").forEach(input => {
      input.classList.remove("is-invalid");
      input.classList.remove("is-valid");
      form.reset();
      datalistCategorias();
      datas();
     });
    }

    form.classList.remove("was-validated"); // Remover a classe 'was-validated' para reiniciar a validação
   },
   false
  );
 });

 // Adicionar eventos de entrada para validar os campos em tempo real
 forms.forEach(form => {
  const input_data_inicio = form.querySelector("#input_data_inicio");
  const input_data_fim = form.querySelector("#input_data_fim");
  const input_data_inicioo = form.querySelector("#input_data_inicioo");
  const input_data_fimm = form.querySelector("#input_data_fimm");

  input_data_inicio.addEventListener("input", () => validarCampoDataInicio(input_data_inicio, input_data_fim));
  input_data_fim.addEventListener("input", () => validarCampoDataFim(input_data_inicio, input_data_fim));
  input_data_inicioo.addEventListener("input", () => validarCampoDataInicio(input_data_inicioo, input_data_fimm));
  input_data_fimm.addEventListener("input", () => validarCampoDataFim(input_data_inicioo, input_data_fimm));
 });
}

// Função para validar o campo de data de início
function validarCampoDataInicio(input_data_inicio, input_data_fim) {
 if (input_data_inicio.value.trim() === "") {
  input_data_inicio.classList.remove("is-invalid");
  input_data_inicio.classList.remove("is-valid");
 } else if (new Date(input_data_fim.value) < new Date(input_data_inicio.value)) {
  input_data_inicio.classList.add("is-invalid");
  input_data_inicio.classList.remove("is-valid");
 } else {
  input_data_inicio.classList.remove("is-invalid");
  input_data_inicio.classList.add("is-valid");
 }
}

// Função para validar o campo de data de fim
function validarCampoDataFim(input_data_inicio, input_data_fim) {
 if (input_data_fim.value.trim() === "") {
  input_data_fim.classList.remove("is-invalid");
  input_data_fim.classList.remove("is-valid");
 } else if (new Date(input_data_fim.value) < new Date(input_data_inicio.value)) {
  input_data_fim.classList.add("is-invalid");
  input_data_fim.classList.remove("is-valid");
 } else {
  input_data_fim.classList.remove("is-invalid");
  input_data_fim.classList.add("is-valid");
 }
}

// Função para validar o campo de tarefa
function validarCampoTarefa(input_tarefa) {
 if (input_tarefa.value.trim() === "") {
  input_tarefa.classList.remove("is-valid");
  input_tarefa.classList.remove("is-invalid");
 } else {
  input_tarefa.classList.remove("is-invalid");
  input_tarefa.classList.add("is-valid");
 }
 if (input_tarefa.value.startsWith(" ")) {
  input_tarefa.classList.add("is-invalid");
 }
}

// Função para validar o campo de categoria
function validarCampoCategoria(input_categoria) {
 if (input_categoria.value.trim() === "") {
  input_categoria.classList.remove("is-valid");
  input_categoria.classList.remove("is-invalid");
 } else {
  input_categoria.classList.remove("is-invalid");
  input_categoria.classList.add("is-valid");
 }
 if (input_categoria.value.startsWith(" ")) {
  input_categoria.classList.add("is-invalid");
 }
}

// Chamar a função para aplicar validação aos formulários
//validarFormulario();

let categorias = document.querySelector(".categorias");

const removerChave = document.querySelector("#removerChave");
document.getElementById("removerChave").addEventListener("click", function () {
 // event.preventDefault();
 localStorage.removeItem("Tasks");
 localStorage.removeItem("CategoriaTask");
 alert(`Chaves "Tasks" e "CategoriaTask" removidas do localStorage!`);
 location.reload();
 // verTarefas();
 // categoriasDataList();
});
document.getElementById("tbody_tarefas").addEventListener("click", fecharTarefasFiltradas);

function tops(event) {
 event.preventDefault(); // Impede o comportamento padrão do link

 // Rola suavemente até o topo da página
 window.scrollTo({
  top: 0,
  behavior: "smooth"
 });
}
