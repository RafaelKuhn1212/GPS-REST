import express,{ Application } from "express";
import router from "../routes";


export default function config(app: Application){

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/POI', router)

}