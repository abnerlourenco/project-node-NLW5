import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path"

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//criando uam rota de teste
app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
})

// criando protocolo http
const http = createServer(app); 
//criando protocolo websocket
const io = new Server(http);

io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id);
})

app.use(express.json());

/**
 * GET = Buscas 
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar 
 * PATCH = Alterar uma informação específica
 */

app.use(routes);


export{ http, io}