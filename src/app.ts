import { createExpressServer } from "routing-controllers";
import express from 'express';

//Create aplication
console.log(__dirname + '/controllers/*.ts');
export const getApp = () => {
    const app  = createExpressServer({
    controllers: [__dirname + '/adapter/controller/**/*.ts'] // we specify controllers we want to use
    })
    app.use(express.json());
    return app;
}