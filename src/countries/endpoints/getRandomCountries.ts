import { country } from '../types';
import { Request, Response } from "express";
import { countries } from "../data";

export const getRadomCountries = (
    req: Request,
    res: Response
): void => {

    const id = Math.floor(Math.random() * 196)

    const result: country | undefined = countries.find(
        (country) => country.id === id)


    if (result) {
        res.send(result).status(200).end()
    } else {
        res.send([]).statusMessage = "Algo deu errado, tente novamente"
    }
}