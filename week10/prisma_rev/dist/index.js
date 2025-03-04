"use strict";
// import {PrismaClient} from "@prisma/client"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// const prisma =new PrismaClient();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//insert data in user table
function insertdata(username, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username,
                password,
                firstname,
                lastname
            }
        });
        console.log(res);
    });
}
function updateuser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstname, lastname }) {
        const res = yield prisma.user.update({
            where: { username },
            data: {
                firstname,
                lastname
            }
        });
        console.log(res);
    });
}
// updateuser("annu12",{
//     firstname:"motki",
//     lastname:"ree"
// })
//get a user details
function getuser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findFirst({
            where: {
                username: username
            }
        });
        console.log(user);
    });
}
// getuser("annu12");
//prisma  let you define   relationship to relate tables with each other 
// types of relationship:-
// 1.one to one 
// 2.one to many 
// 3.many to one 
// 4.many to many
//2.for the todo app there is a one to many relationship 
// 1.one to many 
//saurbah - 1.go to gym, 2.wake up at 5am  ,3.talk with annu 
function createTodo(userid, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield prisma.todo.create({
            data: {
                title,
                description,
                userid
            },
        });
        console.log(todo);
    });
}
// createTodo(1,"go to gym","go to gym and do 10 pushups");
function getTodos(userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield prisma.todo.findMany({
            where: {
                userid: userid,
            },
        });
        const user = yield prisma.user.findUnique({
            where: {
                id: userid
            }
        });
        console.log(todos);
        console.log(user);
    });
}
getTodos(1);
