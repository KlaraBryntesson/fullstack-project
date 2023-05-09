"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import sqlite from "sqlite";
// import sqlite3 from "sqlite3";
// import ws from "ws";
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
// main().catch((err) => console.log(err));
mongoose_1.default.connect("mongodb://127.0.0.1:27017/database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect("mongodb://127.0.0.1:27017/database");
        const User = mongoose_1.default.model("User", new mongoose_1.default.Schema({
            nickName: String,
            password: String,
            registered: { type: Date, default: Date.now },
        }));
        const user = new User({
            nickName: "klarabryntesson",
            password: "secret",
        });
        yield user.save();
    });
}
const client = new mongodb_1.MongoClient("mongodb://localhost:27017/"), users = client.db("test").collection("users");
const webSocketServer = new ws.Server({ port: 8081 });
webSocketServer.on("connection", (webSocket) => {
    console.log("Client connected");
    webSocket.send("Hello World!");
});
let database;
(() => __awaiter(void 0, void 0, void 0, function* () {
    database = yield sqlite.open({
        driver: sqlite3.Database,
        filename: "database.sqlite",
    });
    yield database.run("PRAGMA foreign_keys = ON");
}))();
app.use(express_1.default.json());
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
// app.get("/", async (request, response) => {
//   response.send("Hej!");
// });
app.listen(8080, () => {
    console.log("Redo på http://localhost:8080/");
});
